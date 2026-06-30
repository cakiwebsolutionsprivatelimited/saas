import { Target } from 'lucide-react';
import type { App } from '../../types';

export const sales: App = {
  id: 'sales',
  slug: 'sales',
  name: 'Sales',
  shortDescription: 'Accelerate your quotation-to-order conversion cycle.',
  description: 'Standardize pricing, automate discount approvals, and rapidly convert complex proposals into confirmed customer orders with a unified sales execution platform.',
  category: 'sales-crm',
  icon: Target,
  features: ['Configure Price Quote (CPQ)', 'Order Management', 'Discount Approvals'],
  industries: ['distributor', 'manufacturing', 'retail'],
  isPopular: false,

  businessProblem: 'Generating accurate enterprise quotations is heavily manual, leading to pricing errors, rogue discounting, and stalled deals that frustrate buyers and erode margins.',
  businessOutcome: 'Execute flawless quotation-to-order workflows that protect profit margins, enforce pricing governance, and dramatically reduce the time it takes to deliver proposals to buyers.',
  metrics: [
    { value: '75%', label: 'Reduction in quote generation time' },
    { value: '100%', label: 'Pricing and discount compliance' },
    { value: '0', label: 'Errors in quotation-to-order handover' },
  ],
  challenges: [
    { title: 'Rogue Discounting', description: 'Without automated approval matrices, sales representatives frequently offer unapproved discounts that directly impact bottom-line profitability.' },
    { title: 'Error-Prone Manual Quotes', description: 'Relying on spreadsheets and legacy word processors for quotation building results in calculation errors and outdated product offerings.' },
    { title: 'Friction in Handover', description: 'Manually converting a signed proposal into a sales order and subsequent invoice creates massive administrative overhead and delays fulfillment.' },
  ],
  workflow: [
    { title: 'Configure', description: 'Select products, services, and complex bundles from a centralized, real-time enterprise item catalog.' },
    { title: 'Price & Quote', description: 'Apply automated pricing rules, volume discounts, and tax structures to generate a pristine, branded proposal instantly.' },
    { title: 'Approve', description: 'Automatically route quotes exceeding standard discount thresholds to management hierarchies for rapid digital sign-off.' },
    { title: 'Convert', description: 'Transform legally binding digital acceptances directly into actionable sales orders for immediate fulfillment.' },
  ],
  capabilities: [
    { title: 'Dynamic CPQ Engine', description: 'Configure complex product structures, manage multiple price books, and handle global currency conversions effortlessly.' },
    { title: 'Automated Approval Matrix', description: 'Enforce commercial governance by routing exceptions to the right stakeholders based on margin impact.' },
    { title: 'Digital Acceptance', description: 'Empower buyers to review, comment, and legally sign proposals via secure digital portals.' },
    { title: 'Order Orchestration', description: 'Seamlessly transition won quotes into the fulfillment pipeline without re-keying a single line item.' },
  ],
  outcomes: [
    'Enforced commercial governance and pricing accuracy',
    'Frictionless buying experience for B2B customers',
    'Maximized profit margins through discount control',
    'Eliminated bottlenecks in the order management cycle',
  ],
  faqs: [
    { question: 'Does the system support multiple price lists for different customer tiers?', answer: 'Yes. You can manage complex pricing architectures, assigning specific price books and discount rules to specific customer segments or regions.' },
    { question: 'How does the module handle stock availability during quotation?', answer: 'The sales execution engine queries live warehouse inventory levels to ensure representatives only quote available stock, preventing backorder issues.' },
    { question: 'Can we configure multi-level approval workflows?', answer: 'Absolutely. You can design conditional approval routing based on criteria such as discount percentage, total contract value, or product line.' },
  ],
  connectedModules: [
    { id: 'crm', relationship: 'Opportunity Execution', businessValue: 'Draw critical account context directly from the CRM to inform proposal strategies.' },
    { id: 'inventory', relationship: 'Stock Validation', businessValue: 'Validate product availability in real-time before committing to delivery timelines.' },
    { id: 'billing', relationship: 'Revenue Realization', businessValue: 'Automatically generate accurate invoices directly from the confirmed sales order.' }
  ],
};
