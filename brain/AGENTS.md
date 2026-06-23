# AI Agent Operating Instructions

## Required Rules
Before every task, you MUST read:
1. `brain/master-memory.md`
2. `brain/architecture.md`
3. `brain/patterns.md`
4. `brain/workflow.md`

After every task, you MUST:
1. Execute the Memory Maintenance Workflow outlined in `brain/workflow.md`.
2. Update the relevant Project Brain files to match actual codebase state.

## Constraints
* **Scope**: Work ONLY on the public marketing website.
* **Out of Scope**: Do NOT build CRM, Billing, Inventory, HRMS, Super Admin, or Tenant Portal modules.
* **Dependencies**: Do NOT install new npm packages without explicit user approval.
* **Reusability**: Reuse existing components (in `src/components/`) and constants (in `src/constants/`) wherever possible.
* **Type Safety**: Maintain strict TypeScript typing. Do not use `any`.
* **Responsiveness**: Maintain mobile-first responsive behavior using Tailwind CSS.
* **Design Consistency**: Follow the established design system tokens in `src/constants/design-system.ts`.
* **Tone**: Maintain a professional, enterprise SaaS presentation.

## Design Principles
* **Palette**: Warm neutral palette with a restrained Indigo accent.
* **Prohibitions**: NO glow effects, NO neon effects, NO decorative or excessive gradients.
* **Emphasis**: Create visual hierarchy and emphasis solely through typography weight/size, generous spacing, and structured layouts.
