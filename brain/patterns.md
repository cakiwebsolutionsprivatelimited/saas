# Implementation Patterns

## Layout Pattern
* **Purpose**: Provide consistent page wrapping (Header/Footer).
* **Implementation Rules**: All public routes must be children of `WebsiteLayout`. Layouts manage their own sticky behaviors and z-indexes.
* **Example Files**: `src/layouts/WebsiteLayout.tsx`
* **Usage Guidelines**: Do not bypass `WebsiteLayout` for any marketing page except isolated flows (like a minimal Login page if requested).

## Page Pattern
* **Purpose**: Act as a pure composer of Sections.
* **Implementation Rules**: No inline styles. No direct DOM manipulation. Minimal state. Simply return a Fragment wrapping `<Section />` components.
* **Example Files**: `src/pages/Home/index.tsx`
* **Usage Guidelines**: Keep pages clean. If a page grows too large, extract the code into a specific section component.

## Section Pattern
* **Purpose**: Encapsulate horizontal page slices.
* **Implementation Rules**: 
  - Must use `<section>` HTML tag.
  - Apply standard vertical padding using design tokens.
  - Contain an inner `<div className="container mx-auto">` or similar constraint.
* **Example Files**: `src/components/sections/home/HeroSection.tsx`
* **Usage Guidelines**: Name sections descriptively (e.g., `WhyChooseUsSection`).

## Hero Pattern
* **Purpose**: Topmost section of a page to immediately grab attention.
* **Implementation Rules**: High contrast typography, clear H1, maximum of 2 CTAs (primary and secondary). Generous padding.
* **Example Files**: `src/components/sections/home/HeroSection.tsx`

## Card Pattern
* **Purpose**: Display features, apps, or pricing tiers.
* **Implementation Rules**: Use subtle borders (`border-border`), white backgrounds, and slight shadow on hover. No heavy drop shadows or glows.
* **Usage Guidelines**: Maintain consistent padding inside cards (`p-6` or `p-8`).

## CTA Pattern
* **Purpose**: Drive user action.
* **Implementation Rules**: 
  - Primary CTA: Solid background (Indigo/Primary).
  - Secondary CTA: Outline or ghost variant.
  - Always link to `/request-demo` or `/login`.
* **Example Files**: `src/components/sections/home/CTASection.tsx`

## Navigation Pattern
* **Purpose**: Global routing via Header.
* **Implementation Rules**: Driven by `MAIN_NAV` constant. Must be responsive with a mobile hamburger menu.
* **Example Files**: `src/constants/navigation.ts`, `src/components/layout/Header.tsx`

## Footer Pattern
* **Purpose**: Secondary navigation and legal links.
* **Implementation Rules**: Multi-column layout driven by `FOOTER_NAV` constant. Dark or muted background.
* **Example Files**: `src/components/layout/Footer.tsx`

## Constants Pattern
* **Purpose**: Single source of truth for static data.
* **Implementation Rules**: Arrays of objects heavily typed via `src/types/`. No hardcoded lists directly in component JSX.
* **Example Files**: `src/constants/navigation.ts`

## TypeScript Pattern
* **Purpose**: Type safety and autocompletion.
* **Implementation Rules**: Define interfaces in `src/types/`. Avoid `any`. Use generic types where applicable.
* **Example Files**: `src/types/app.ts`

## Responsive Design Pattern
* **Purpose**: Functionality across all devices.
* **Implementation Rules**: Mobile-first approach using Tailwind. Default classes apply to mobile, use `md:`, `lg:` prefixes for larger screens.
