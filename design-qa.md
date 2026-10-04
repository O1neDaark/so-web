# Design QA — «Серёга — есть идея!»

final result: passed

Date: 2026-09-17. Scope: local rebrand implementation and preserved routes. Public deployment is outside this result.

## Visual truth and evidence

- Source direction: `D:/Codex/My web/sergey_rebrand_codex_pack/references/03_reference_final_hybrid_direction.png` (1024 × 1536).
- Same-width implementation: `D:/Codex/My web/work/rebrand-2026/final-reference-width.png` (1024 × 1536 CSS px, DPR 1).
- Combined comparison: `D:/Codex/My web/work/rebrand-2026/design-comparison.jpg` (2048 × 1576, two unscaled columns plus labels).
- Full implementation: `D:/Codex/My web/work/rebrand-2026/final-full-desktop.png`.
- Desktop first screen: `D:/Codex/My web/work/rebrand-2026/final-desktop.png` (1440 × 1000).
- Mobile: `D:/Codex/My web/work/rebrand-2026/final-mobile.png` (390 × 844), plus `final-full-mobile.png`.
- Product case: `D:/Codex/My web/work/rebrand-2026/final-lingoslide.png`.
- State: Russian, light, initial home. Full-page capture follows product accordion interaction. Comparison uses the initial source direction, not a pixel-perfect contract; the user explicitly authorized improving the supplied idea.

## Findings and fixes

1. P2, first iteration: portrait cropped the top of the head on desktop. Reduced the image size and repositioned it. The full head and upper body are visible in final-desktop.png.
2. P2, first iteration: oversized negative tracking obscured the space in «чем идеи». Adjusted tracking and word spacing. Both final desktop and mobile show the intended two words.
3. P2: hidden resume modal injected a second h1 into home. It now mounts only when open; rendered home has one h1.
4. P2: skip navigation did not focus the main landmark. Added focusable main targets across new and legacy pages and checked keyboard activation.
5. P2: inherited animated counters remained at zero when reduced motion was enabled. They now render the actual final value immediately; verified on resume and archive.
6. Build warnings from duplicate main ids were corrected. Final production build has no warnings.

## Required visual surfaces

- Typography: Manrope with local Latin and Cyrillic font files, Caveat for a small number of personal annotations. Large heading hierarchy, readable multiline layout, no clipped heading text in final views.
- Layout: warm editorial page, personal hero, early own-product evidence, unequal visual emphasis between featured product and notebook. Consistent dividers and spacing. Mobile reflows into a single column, process retains two compact columns.
- Colors: warm paper, near-black text, coral accent, restrained colored status chips. Statuses include written labels in addition to color.
- Assets: actual supplied portrait and personal photo, original store promotional screens and app icon, existing case assets. No invented app UI. Original anonymization overlays remain visible.
- Copy: Product Builder position, specific collaboration formats, real published LingoSlide as proof. New home and LingoSlide case have full RU/EN copy. Historical screenshots remain in their source language.
- Interaction states: keyboard focus, mobile menu + Escape, expanded project detail, hover for fine pointers, active state, reduced motion, direct navigation and back.

## Intentional differences from source

The brief calls the reference a visual north star and authorizes improvement. The final page uses Sergey's actual face; the sample image's different person was not reproduced. LingoSlide uses its verified blue store identity rather than the reference's fictional cat. The final page is longer: project context, independent product story, author, collaboration formats and Idea Lab are expanded. The unsupported video CTA and unverified metrics in the reference were omitted. These are content-grounded choices, not fidelity defects.

## Verification

- Production build: passed (`vite build`).
- Runtime errors: none in browser checks.
- RU overflow: 360, 390, 430, 768, 1024, 1280, 1440 px passed.
- EN overflow: 360, 390, 768, 1024, 1440 px passed.
- Language updates html[lang], visible content and metadata; selection persists across reloads.
- Mobile navigation opens, closes with Escape and closes after section selection.
- Project disclosure, LingoSlide client navigation, browser back and correct RuStore URL passed.
- All four collaboration links include contextual Telegram drafts. No message was sent.
- Legacy case routes, resume, archive and existing resume PDF accessible.
- Reduced motion tested, including actual legacy numeric values.
- Evidence: `work/rebrand-2026/checks-v1.json`, `final-checks.json`, `reduced-motion-check.txt`.

## Practical limits

The claim of 15 completed locales awaits confirmation and is not presented as verified public copy. Existing historical PDFs and embedded case images were retained and may contain prior role descriptions and metrics. A live domain and deployment were not requested, so domain-specific canonical URLs and absolute Open Graph URLs are left for hosting configuration. Original supplied corporate covers are intentionally anonymized and lower-detail than public product visuals.

No unresolved P0/P1/P2 implementation findings. Optional P3: a future commissioned portrait series can replace the real source photograph without changing the layout.

## Continuation QA — 2026-09-18

Result: passed. Site locale scope is explicitly RU and EN only.

### Changes and resolved findings

1. P2: legacy case typography and spacing did not match the homepage. Reworked four cases with the same type scale, dividers and responsive spacing; added a role/challenge/artifact overview and a grounded conclusion.
2. P2: the archive return link pointed to a removed #archive section. It now reaches /#cases; navigation and scroll position checked.
3. P2: the archive lightbox did not manage keyboard focus. Opening focuses Close, Tab remains in the dialog, Escape dismisses it and focus returns to the triggering image.
4. P2: inherited mobile archive tab width exceeded the viewport by 4 px after the new page gutters. Tabs now use the content width and retain their internal horizontal scroll.
5. P3: legacy blue gradient counters conflicted with the new palette. Replaced the gradient and glow with the near-black brand color.
6. Added localized missing-page content, a home link and client-side noindex metadata. Actual HTTP 404 status remains a hosting concern for this client-routed static site.

### Evidence

- Before, desktop 1440 × 1000: work/rebrand-2026/continue-before-enterprise.png and continue-before-archive.png.
- After, same viewport: continued-final-enterprise.png and continued-final-archive-1440.png.
- Mobile, 390 × 844: continued-final-archive-390.png; 360 × 844: continued-final-archive-360.png.
- Case mobile, 390 × 1000: continue-enterprise-mobile.png (also rag, igms and diagnostics).
- Outcome section: continued-final-conclusion.png.
- Home regression snapshot: continued-final-home.png.
- All paths above are under D:/Codex/My web/work/rebrand-2026.

### Verification

- Vite production build passed, 53 modules, no build warnings.
- Four cases in RU and EN: overviews/conclusions, one h1, no page overflow at 1440/768/390 px.
- All eight archive routes: one h1 and no page overflow at 390 px.
- Next project, archive return, gallery keyboard behavior, unknown routes and robots restoration passed.
- Production at localhost:4181: home, Enterprise, RAG, LingoSlide, archive and 404 checked; RU/EN persistence and counters' computed color checked. Archive also checked at 360 px.
- No JavaScript errors in either check run.
- Machine-readable results: continuation-checks.json and production-continuation-checks.json.

Visual inspection confirms consistent hierarchy, readable mobile text, correctly contained archive tabs and the retained real project imagery. No unresolved P0/P1/P2 findings in this continuation scope.

## LingoSlide case update — 2026-10-04

Result: passed.

- Rebuilt `/case/lingoslide` around explicit product ownership: concept, learning model, interaction design, UI system, localization, data safety and release quality.
- Added a direct product website link and retained the RuStore link. The homepage product feature and expanded story both lead to the case.
- Added supplied LingoSlide stickers and two curated presentation visuals showing the redesign and working process. Decorative stickers use optimized WebP files.
- Corrected dark-section heading contrast during visual QA.
- Fixed an intermediate-width overflow in the learning path at 768 px.
- Verified RU and EN content, one h1, all images, homepage navigation and external product links.
- No horizontal page overflow at 1440, 1024, 768, 390 or 360 px.
- Production build passed with 54 modules and no build warnings.

Evidence: `D:/Codex/My web/work/rebrand-2026/lingoslide-case-desktop.png`, `lingoslide-case-mobile.png`, `lingoslide-case-hero.png` and `lingoslide-portfolio-checks.json`.

## Feedback round — 2026-10-04

Result: passed.

- Removed the reading progress bar component and all of its remaining styles. It is absent on home, case, archive and resume routes.
- Rebuilt the four homepage case covers as controlled editorial compositions with stable image crops, cover titles and safe text areas.
- Rebuilt the homepage LingoSlide feature from three supplied transparent device images; the mobile composition keeps product imagery clear of copy.
- Replaced the LingoSlide case hero with the supplied premium multi-device artwork and a light product-led composition.
- Added a prominent roles block that explicitly identifies Sergey as product owner and product designer, and Codex as developer responsible for Flutter implementation and technical delivery.
- Replaced the old screenshot strip with three supplied product composites. Desktop uses a balanced three-column gallery; mobile uses a contained horizontal gallery without page overflow.

Verification:

- Production build passed with 54 modules and no warnings.
- Playwright checked home, LingoSlide, Enterprise and resume at 1440 × 1000 and 390 × 844.
- All checked routes have zero horizontal overflow, zero broken images, zero console errors and zero reading-progress elements.
- Evidence: `D:/Codex/My web/work/rebrand-2026/feedback-desktop-now.png`, `feedback-desktop-covers.png`, `feedback-desktop-lingo-hero.png`, `feedback-desktop-lingo-roles.png`, mobile counterparts and `feedback-round-checks.json`.

## Transparent mockups, covers and CV — 2026-10-04

Result: passed.

- Replaced the small LingoSlide collages with five supplied transparent phone mockups. The homepage feature, product story, case hero and case gallery use large individual devices with restrained backgrounds and captions outside the imagery.
- Moved all four main case headings into a separate text band above their covers so cover text stays readable. Generated two illustrative, text-free editorial artworks for Enterprise and RAG. Kept the real iGMS laptop and AI Diagnostics photography.
- Added a bilingual CV section to the homepage and navigation, with direct downloads of the supplied RU and EN PDFs. The `/resume` page uses the same files. Copied PDFs match the source hashes.
- Kept all produced assets and QA evidence under `D:/Codex/My web`.

Verification:

- Production build passed with 54 modules and no warnings.
- Playwright checked `/`, `/case/lingoslide` and `/resume` at 1440, 768, 390 and 360 px viewport widths. All twelve checks have zero horizontal overflow, zero broken images and zero console errors.
- RU and EN PDF links returned HTTP 200 with `application/pdf`; the EN homepage section has two download links.
- Visual evidence: `D:/Codex/My web/work/rebrand-2026/v2-desktop-covers.png`, `v2-mobile-covers.png`, `v2-desktop-lingo-hero.png`, `v2-mobile-lingo-hero.png`, `v2-desktop-cv.png`, `v2-mobile-cv.png` and the other `v2-*` screenshots. Machine-readable results: `feedback-v2-checks.json`.

## Enterprise and RAG NDA screens — 2026-10-04

Result: passed.

- Replaced the old Enterprise and RAG case screenshots with the two user-supplied interface captures. The images can be opened at original size.
- Added visible RU/EN captions identifying the screens as anonymized under NDA for Big Tech / Telecom. Updated the case introductions and NDA limitations so the copy matches the displayed material.
- Rebuilt the RAG flow in the portfolio's light visual language with readable body text and responsive card layout.
- Production build passed. Playwright checked both cases at 1440 and 390 px: no horizontal overflow, broken images or console errors. Both English captions render correctly.
- Evidence: `D:/Codex/My web/work/rebrand-2026/nda-desktop-rag-flow.png`, `nda-mobile-rag-flow.png`, `nda-desktop-enterprise-image.png`, `nda-mobile-rag-image.png`, and `nda-cases-checks.json`.
