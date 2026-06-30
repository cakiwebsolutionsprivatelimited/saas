import { Receipt } from 'lucide-react';
import type { App } from '../../types';

export const billing: App = {
  id: 'billing',
  slug: 'billing',
  name: 'Billing',
  shortDescription: 'Ensure financial accuracy and accelerate revenue collection.',
  description: 'Automate complex invoicing cycles, enforce rigorous collections workflows, and eliminate revenue leakage with an enterprise-grade billing architecture.',
  category: 'finance',
  icon: Receipt,
  features: ['Automated Invoicing', 'Collections Management', 'Recurring Revenue'],
  industries: ['healthcare', 'education', 'service', 'fitness'],
  isPopular: true,

  businessProblem: 'Manual invoicing and disjointed payment tracking leads to severe revenue leakage, high Days Sales Outstanding (DSO), and massive administrative overhead for finance teams.',
  businessOutcome: 'Accelerate enterprise cash flow by completely automating the billing lifecycle, from dynamic invoice generation to rigorous, automated payment reconciliation.',
  metrics: [
    { value: '45%', label: 'Reduction in Days Sales Outstanding' },
    { value: '100%', label: 'Invoicing accuracy rate' },
    { value: '0', label: 'Revenue leakage' },
  ],
  challenges: [
    { title: 'Delayed Revenue Collection', description: 'Generating invoices manually at the end of financial periods severely delays the payment cycle and starves working capital.' },
    { title: 'Revenue Leakage', description: 'Disconnected systems fail to accurately bill for all consumed services, leading to unbilled revenue that impacts the bottom line.' },
    { title: 'Complex Subscription Management', description: 'Managing recurring retainers, usage-based billing, and prorated mid-cycle changes manually introduces critical billing errors.' },
  ],
  workflow: [
    { title: 'Consolidate', description: 'Automatically aggregate billable events, timesheets, and sales orders from across the platform into a unified billing engine.' },
    { title: 'Invoice', description: 'Generate pixel-perfect, compliant tax invoices applying correct regional tax rules and volume discounts automatically.' },
    { title: 'Collect', description: 'Execute automated dunning cadences and accept payments instantly via secure, embedded digital payment gateways.' },
    { title: 'Reconcile', description: 'Automatically match incoming bank receipts to open invoices, instantly updating accounts receivable ledgers without manual intervention.' },
  ],
  capabilities: [
    { title: 'Dynamic Billing Engine', description: 'Configure complex billing models including fixed-price milestones, time-and-materials, and tiered usage subscriptions.' },
    { title: 'Automated Dunning', description: 'Enforce collections policies with automated, staggered communication workflows and automatic late-fee application.' },
    { title: 'Global Tax Compliance', description: 'Ensure all invoices meet regional regulatory requirements with automated tax calculations and compliant document templates.' },
    { title: 'Customer Financial Portal', description: 'Empower clients with a secure self-service portal to review statements, download invoices, and manage payment methods.' },
  ],
  outcomes: [
    'Dramatically reduced Days Sales Outstanding (DSO)',
    'Elimination of manual invoice generation',
    'Frictionless digital payment experience for corporate clients',
    'Guaranteed revenue recognition accuracy',
  ],
  faqs: [
    { question: 'Can the system handle usage-based or metered billing?', answer: 'Yes, the billing engine supports complex metered billing, automatically calculating charges based on consumption data imported from your operational systems.' },
    { question: 'How does it manage mid-cycle subscription upgrades?', answer: 'The platform automatically calculates proration for upgrades or downgrades occurring in the middle of a billing cycle, ensuring accurate next-invoice adjustments.' },
    { question: 'Is the payment infrastructure compliant for enterprise use?', answer: 'We integrate exclusively with PCI-compliant payment gateways, ensuring all transaction data is processed with enterprise-grade security and encryption.' },
  ],
  connectedModules: [
    { id: 'sales', relationship: 'Order to Cash', businessValue: 'Convert finalized sales orders directly into invoices without manual data entry.' },
    { id: 'accounts', relationship: 'Financial Ledger', businessValue: 'Post all billing and collection events instantly to the general ledger for real-time financial reporting.' },
    { id: 'projects', relationship: 'Milestone Billing', businessValue: 'Trigger automated invoices the moment project milestones are marked complete.' },
    { id: 'crm', relationship: 'Account Context', businessValue: 'Provide sales and support teams with full visibility into a customer\'s billing status and outstanding balance.' }
  ],
};
