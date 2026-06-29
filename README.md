# Home of Linen Shoppable Dashboard

Static storefront dashboard for Home of Linen bedding, towels, pillows, toppers and comforters.

## Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Generate final AI images

The site works before image generation and shows calm placeholders if the final PNGs are not present.

To generate the final product images:

```bash
python3 -m pip install openai pillow
export OPENAI_API_KEY="your_key_here"
python3 generate_images.py
```

The generator reads:

- `assets/swatches/percale-tc300.jpg`
- `assets/swatches/saten-1cm-stripes-tc400.jpg`
- `assets/swatches/saten-micro-stripes-tc400.jpg`
- `assets/swatches/saten-chequered-tc400.jpg`
- `assets/swatches/saten-small-squares-tc400.jpg`
- `assets/swatches/saten-squares-tc400.jpg`

And writes:

- fabric lifestyle images to `assets/lifestyle/`
- towels, pillows, comforter and topper images to `assets/products/`

The image API call uses the closest supported vertical generation size and then crops the result to the requested 1024×1280 4:5 frame.

Towels are intentionally skipped by default until real towel colour/product references are supplied. If you want to create a temporary neutral towel lifestyle image anyway:

```bash
GENERATE_TOWELS_WITHOUT_REAL_REFERENCES=1 python3 generate_images.py
```

## Notes

- Prices are in EGP and marked valid from 7 July 2026.
- Basket state is saved in `localStorage`.
- Checkout is intentionally a stub until the real order flow is confirmed.
- Logo is used as supplied and stored in `assets/brand/home-of-linen-logo.png`.
