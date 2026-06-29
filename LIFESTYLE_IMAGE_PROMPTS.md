# Home of Linen lifestyle image prompt system

Use this as the single visual anchor for all generated images:

> Use the same visual family as the approved Home of Linen fitted sheet set images: warm neutral luxury bedroom, ivory and cream palette, soft natural daylight from one side, minimal elegant styling, premium Egyptian cotton texture, tidy but tactile bedding, calm Zara Home and The White Company editorial aesthetic, realistic high-end product photography, same 3/4 bed perspective, same camera height, gentle shadows, no people, no text, no logo, no watermark. The product must be clearly identifiable and must not turn into a different bedding category.

## Category-specific inserts

- Fitted Sheet Set: fitted sheet visibly hugging the mattress corners, two matching pillowcases, fitted corners readable.
- Duvet Cover Set: softly filled duvet cover as hero, plush and slightly rumpled, two matching pillowcases, clearly not a flat sheet.
- Flat Sheet Set: top sheet folded back neatly over the bed, folded edge clearly visible, two matching pillowcases.
- Pillowcase Set: closer crop of two plump pillows as hero, bed softly visible behind, pillowcases are the clear subject.
- Comforter: fluffy white filled comforter, airy and quilted enough to read as a comforter.
- Pillows: two premium white bed pillows, plumped and stacked, showing softness/support, not pillowcases.
- Mattress Topper: thick white quilted topper on top of mattress, partially exposed, thickness clearly visible.
- Towels: defer final generation until real towel product/color references are supplied.

## Operational note

The dashboard currently has placeholder images. Run `generate_images.py` with `OPENAI_API_KEY` set to generate and replace them. Towels are skipped by default until real references are available.
