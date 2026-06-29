#!/usr/bin/env python3
"""Generate Home of Linen storefront imagery with OpenAI gpt-image-1.

Usage:
  export OPENAI_API_KEY="sk-..."
  python generate_images.py

The script expects swatches in assets/swatches and writes PNGs into
assets/lifestyle and assets/products.
"""

from __future__ import annotations

import os
import base64
from io import BytesIO
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SWATCHES = ROOT / "assets" / "swatches"
LIFESTYLE = ROOT / "assets" / "lifestyle"
PRODUCTS = ROOT / "assets" / "products"

STYLE = (
    "Use the same visual family as the approved Home of Linen fitted sheet set images: "
    "warm neutral luxury bedroom, ivory and cream palette, soft natural daylight from one side, "
    "minimal elegant styling, premium Egyptian cotton texture, tidy but tactile bedding, "
    "calm Zara Home and The White Company editorial aesthetic, realistic high-end product photography, "
    "same 3/4 bed perspective, same camera height, gentle shadows, no people, no text, no logo, no watermark. "
    "The product must be clearly identifiable and must not turn into a different bedding category. "
    "Output 1024×1280 (4:5), high quality."
)

FABRIC_HEROS = [
    (
        "fitted-percale.png",
        "percale-tc300.jpg",
        "Product focus: a fitted sheet set in this exact fabric, with the fitted sheet visibly hugging the mattress corners and two matching pillowcases at the headboard. Keep the approved fitted sheet composition and make the fitted corners readable.",
    ),
    (
        "fitted-sateen.png",
        "saten-micro-stripes-tc400.jpg",
        "Product focus: a fitted sheet set in this exact woven pattern, with the fitted sheet visibly hugging the mattress corners and two matching pillowcases at the headboard. Keep the approved fitted sheet composition and make the fitted corners readable.",
    ),
    (
        "duvet-percale.png",
        "percale-tc300.jpg",
        "Product focus: a duvet cover set in this exact fabric, including a softly filled duvet cover and two matching pillowcases. The duvet must be the hero, plush and softly rumpled, clearly a duvet cover set rather than a flat sheet.",
    ),
    (
        "duvet-sateen.png",
        "saten-1cm-stripes-tc400.jpg",
        "Product focus: a duvet cover set in this exact woven pattern, including a softly filled duvet cover and two matching pillowcases. The duvet must be the hero, plush and softly rumpled, clearly a duvet cover set rather than a flat sheet.",
    ),
    (
        "flat-percale.png",
        "percale-tc300.jpg",
        "Product focus: a flat sheet set in this exact fabric, with the top sheet folded back neatly over the bed and two matching pillowcases. The folded sheet edge must be clearly visible so customers understand it is a flat sheet set.",
    ),
    (
        "flat-sateen.png",
        "saten-chequered-tc400.jpg",
        "Product focus: a flat sheet set in this exact woven pattern, with the top sheet folded back neatly over the bed and two matching pillowcases. The folded sheet edge must be clearly visible so customers understand it is a flat sheet set.",
    ),
    (
        "pillowcases-percale.png",
        "percale-tc300.jpg",
        "Product focus: a pillowcase set in this exact fabric. Use a closer crop of two plump pillows as the hero, with the bed softly visible behind them. The pillowcases must be the clear subject.",
    ),
    (
        "pillowcases-sateen.png",
        "saten-small-squares-tc400.jpg",
        "Product focus: a pillowcase set in this exact woven pattern. Use a closer crop of two plump pillows as the hero, with the bed softly visible behind them. The pillowcases must be the clear subject.",
    ),
]

TEXT_IMAGES = [
    (
        "comforter.png",
        PRODUCTS,
        "Product focus: a fluffy white all-season comforter with a blended-cotton shell, softly draped on the same warm neutral bed. Make it airy, filled, and quilted enough to read as a comforter, not a duvet cover or flat sheet.",
    ),
    (
        "pillows.png",
        PRODUCTS,
        "Product focus: two premium white bed pillows with a soft blended-cotton shell, plumped and stacked on the same made bed. The pillows must be the hero and should communicate softness and support, not pillowcases.",
    ),
    (
        "mattress-topper.png",
        PRODUCTS,
        "Product focus: a thick white mattress topper with a quilted blended-cotton shell placed clearly on top of the mattress in the same room. Show its thickness and quilted surface, partially exposed before the bed is fully made.",
    ),
]

TOWEL_IMAGE = (
    "towels.png",
    PRODUCTS,
    "Product focus: folded stack of premium 600 gsm Egyptian cotton towels on a warm stone or marble bathroom shelf, plush terry texture, spa-like minimalist bathroom, soft daylight. Match the same Home of Linen calm neutral luxury mood.",
)


def load_env_file() -> None:
    env_path = ROOT / ".env"
    if not env_path.exists():
        return
    for raw_line in env_path.read_text(encoding="utf-8", errors="ignore").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = value


def write_b64_image(response, output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    data = response.data[0].b64_json
    raw = base64.b64decode(data)
    try:
        from PIL import Image

        img = Image.open(BytesIO(raw)).convert("RGB")
        target_w, target_h = 1024, 1280
        scale = max(target_w / img.width, target_h / img.height)
        resized = img.resize((round(img.width * scale), round(img.height * scale)))
        left = (resized.width - target_w) // 2
        top = (resized.height - target_h) // 2
        cropped = resized.crop((left, top, left + target_w, top + target_h))
        cropped.save(output, "PNG")
    except ImportError:
        output.write_bytes(raw)
        print("Pillow is not installed, so the image was saved without the 1024×1280 crop.")
    print(f"Wrote {output.relative_to(ROOT)}")


def main() -> None:
    load_env_file()
    missing = [name for _, name, _ in FABRIC_HEROS if not (SWATCHES / name).exists()]
    if missing:
        raise SystemExit("Missing swatch file(s): " + ", ".join(sorted(set(missing))))
    if not os.getenv("OPENAI_API_KEY"):
        raise SystemExit("OPENAI_API_KEY is not set. Add it, then run this script again.")

    try:
        from openai import OpenAI
    except ImportError as exc:
        raise SystemExit("Install the OpenAI Python SDK first: pip install openai") from exc

    client = OpenAI()
    LIFESTYLE.mkdir(parents=True, exist_ok=True)
    PRODUCTS.mkdir(parents=True, exist_ok=True)

    for filename, swatch, prompt in FABRIC_HEROS:
        output = LIFESTYLE / filename
        if output.exists():
            print(f"Skipping existing {output.relative_to(ROOT)}")
            continue
        with (SWATCHES / swatch).open("rb") as image:
            response = client.images.edit(
                model="gpt-image-1",
                image=image,
                prompt=f"{prompt} {STYLE}",
                size="1024x1536",
                quality="high",
            )
        write_b64_image(response, output)

    for filename, folder, prompt in TEXT_IMAGES:
        output = folder / filename
        if output.exists():
            print(f"Skipping existing {output.relative_to(ROOT)}")
            continue
        response = client.images.generate(
            model="gpt-image-1",
            prompt=f"{prompt} {STYLE}",
            size="1024x1536",
            quality="high",
        )
        write_b64_image(response, output)

    if os.getenv("GENERATE_TOWELS_WITHOUT_REAL_REFERENCES") == "1":
        filename, folder, prompt = TOWEL_IMAGE
        output = folder / filename
        if output.exists():
            print(f"Skipping existing {output.relative_to(ROOT)}")
        else:
            response = client.images.generate(
                model="gpt-image-1",
                prompt=f"{prompt} {STYLE}",
                size="1024x1536",
                quality="high",
            )
            write_b64_image(response, output)
    else:
        print("Skipping towels.png until real towel product/color references are supplied.")


if __name__ == "__main__":
    main()
