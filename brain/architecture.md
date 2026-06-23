# Website Architecture

## Route Structure
The routing is handled via `react-router-dom` in `src/routes/index.tsx`.
* `/` -> `Home`
* `/apps` -> `Apps`
* `/pricing` -> `Pricing`
* `/industries` -> `Industries`
* `/request-demo` -> `RequestDemo`
* `/login` -> `Login`

All these routes are wrapped under a single shared layout route.

## Layout Hierarchy
The core layout wrapper is `src/layouts/WebsiteLayout.tsx`.
```tsx
<Header />
<main>
  <Outlet />
</main>
<Footer />
```
This ensures the Header and Footer are consistent across all public pages, while the main content is injected via the `Outlet`.

## Website Route Groups
Currently, there is one primary route group (the public marketing pages). Internal business modules (CRM, HRMS, etc.) are NOT part of this routing structure and exist as separate systems.

## Shared Components
Located in `src/components/`:
* `layout/`: Contains structural elements like `Header.tsx` and `Footer.tsx`.
* `sections/`: Contains page-specific, reusable horizontal slices of content (e.g., `HeroSection`, `FAQSection`, `CTASection`). Grouped by page (e.g., `sections/home/`).
* `ui/`: Base generic UI components (buttons, inputs, cards), largely driven by Shadcn UI.
* `common/`: Reusable shared elements that are not full sections or basic UI elements.

## Design System Structure
Tokens are explicitly defined in `src/constants/design-system.ts`.
It includes:
* `colors`: primary (blue-600), secondary, background, text, muted, border.
* `spacing`: standard t-shirt sizes (xs to 3xl) and specific `section` spacing.
* `borderRadius`: standard rounded utilities.
* `containerSizes`: breakpoints for max-width constraints.
* `zIndex`: layered scale for sticky elements, modals, popovers.

## Constants Structure
Located in `src/constants/`:
* `design-system.ts`: Design tokens.
* `navigation.ts`: Defines `MAIN_NAV` and `FOOTER_NAV` configurations.
* `site.ts`: Global site metadata.

## Type Definitions
Located in `src/types/`:
Strict TypeScript interfaces are defined per domain:
* `app.ts`: Module/App definitions.
* `design-system.ts`: Prop types for UI.
* `navigation.ts`: NavItem structures.
* `pricing.ts`, `industry.ts`, `faq.ts`: Content structures.

## Page Architecture
Pages (in `src/pages/`) serve merely as composers. They do not contain complex layout logic or styling directly. Instead, they compose multiple Section components sequentially.
Example: `Home` assembles `HeroSection`, `AppCategoriesSection`, `FAQSection`, etc.

## Section Architecture
Sections (in `src/components/sections/`) are the building blocks of pages.
* They span full width.
* They internally manage their own constrained container widths.
* They handle their own responsive grid layouts and data mapping.
