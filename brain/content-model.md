# Website Content Model

## Navigation
* **Purpose**: Main header links.
* **Fields**: `name` (string), `path` (string).
* **Relationships**: N/A.
* **Usage**: `src/constants/navigation.ts` -> `Header.tsx`.

## Footer Navigation
* **Purpose**: Grouped footer links.
* **Fields**: `title` (string), `items` (Array of Navigation objects).
* **Relationships**: Groups contain multiple Navigation links.

## Applications
* **Purpose**: Represent a SaaS module.
* **Fields**: `id`, `name`, `description`, `icon`, `categoryId`, `features` (Array of strings).
* **Relationships**: Belongs to an Application Category.

## Application Categories
* **Purpose**: Group applications logically.
* **Fields**: `id`, `name`, `description`.
* **Relationships**: Contains multiple Applications.

## Industry Solutions
* **Purpose**: Highlight tailored use-cases.
* **Fields**: `id`, `name`, `description`, `icon`, `benefits`.
* **Relationships**: May link to recommended Applications.

## Pricing Plans
* **Purpose**: Subscription tiers.
* **Fields**: `id`, `name`, `price`, `billingCycle`, `description`, `features`, `isPopular`.
* **Relationships**: N/A.

## FAQs
* **Purpose**: Answer common questions.
* **Fields**: `question`, `answer`, `category`.
* **Relationships**: Displayed on Home or Pricing pages.

## CTA Blocks
* **Purpose**: Reusable action banners.
* **Fields**: `headline`, `subheadline`, `primaryButtonText`, `primaryButtonLink`, `secondaryButtonText`.
* **Relationships**: Links to Demo or Login routes.

## Hero Sections
* **Purpose**: Top banners for pages.
* **Fields**: `headline`, `subheadline`, `backgroundImage` (optional), `ctas`.
* **Relationships**: Used in pages.

## Page Structures
* **Purpose**: Blueprint for rendering full pages.
* **Fields**: `title`, `metaDescription`, `sections` (Array).
* **Relationships**: Composes Sections.

## Future CMS Readiness Considerations
All static constants in `src/constants/` are structured as JSON-like arrays. This ensures that if the project migrates to a Headless CMS (like Sanity, Contentful, or Strapi), the frontend components require zero structural changes. The data fetching layer will simply replace the static imports.
