# Design QA

## Scope

- Home page at 1440 x 900 and 390 x 844.
- Case pages: iGMS, Enterprise, Diagnostics, RAG, and Social.
- Resume page.
- Russian and English home-page case variants.

## Reference Issues

- Process icons and numbers visually collided.
- The Inside label and its long content had weak hierarchy.
- The English iGMS card used a generated mockup instead of the supplied case cover.
- Several headings exceeded four lines on narrow screens.
- Profile-card icons and step numbers shared one inline wrapper and visually collided.
- The long availability sentence competed with the hero kicker.

## Verification

- Process metadata now uses separate icon and number elements with a measured 12 px gap.
- Inside content is split into four readable tags and remains inside its container.
- The English iGMS card uses `igms-cover` and links to `/case/igms`.
- Automated heading checks report a maximum of four lines on every route at 390 x 844.
- All checked routes render without horizontal overflow.
- Production build completes successfully.
- Profile-card icons and numbers now use separate elements with a measured 12 px gap.
- The availability sentence has been removed from the hero hierarchy.

Final result: passed
