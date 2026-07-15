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
- Resume now uses the supplied IT Camp portrait as a high-trust visual anchor.
- RU and EN resume PDFs are generated as two-page, HR-ready documents and return HTTP 200 from their public download URLs.
- The resume modal and standalone page both expose the matching language-specific PDF download.
- A restrained Three.js ambient scene is visible behind the interface at desktop and mobile sizes, reacts to page scroll, and becomes static when reduced motion is enabled.
- Coral is limited to primary actions, section markers, and a small set of commercially important words; blue remains the system/technology accent.
- Desktop checks at 1440 x 900 and mobile checks at 390 x 844 pass on home, resume, iGMS, Enterprise, Diagnostics, RAG, and Social routes.
- Every checked route has `scrollWidth === clientWidth`; no horizontal overflow was detected.
- Mobile H1 checks remain at four lines or fewer on every route.

Final result: passed
