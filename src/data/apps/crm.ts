import { Users } from 'lucide-react';
import type { App } from '../../types';

export const crm: App = {
  id: 'crm',
  slug: 'crm',
  name: 'CRM',
  shortDescription: 'Gain complete visibility into your sales pipeline and customer lifecycle.',
  description: 'Transform relationships into revenue with a unified platform for tracking opportunities, managing pipelines, and accelerating the customer lifecycle from first touch to closed deal.',
  category: 'sales-crm',
  icon: Users,
  features: ['Lead Management', 'Opportunity Tracking', 'Sales Pipeline'],
  industries: ['manufacturing', 'retail', 'service', 'real-estate'],
  isPopular: true,

  businessProblem: 'Sales opportunities stall and revenue forecasting fails because customer interactions are fragmented across disconnected systems, resulting in blind spots across the pipeline.',
  businessOutcome: 'Centralize the customer lifecycle to accelerate pipeline velocity, empowering sales teams with the critical context needed to advance opportunities and forecast revenue accurately.',
  metrics: [
    { value: '3x', label: 'Faster lead-to-opportunity conversion' },
    { value: '95%', label: 'Pipeline forecast accuracy' },
    { value: '360°', label: 'Visibility into customer lifecycle' },
  ],
  challenges: [
    { title: 'Fragmented Context', description: 'Critical relationship history is lost across disparate tools, severely handicapping sales reps when engaging high-value accounts.' },
    { title: 'Pipeline Stagnation', description: 'Without automated follow-up cadences and opportunity tracking, deals inevitably stall in the pipeline.' },
    { title: 'Inaccurate Forecasting', description: 'Leadership lacks a reliable, unified view of sales stages, making it impossible to predict revenue and allocate resources effectively.' },
  ],
  workflow: [
    { title: 'Lead', description: 'Automatically capture and score incoming leads from marketing channels, ensuring immediate assignment to the correct territory.' },
    { title: 'Opportunity', description: 'Convert qualified leads into structured opportunities, tracking expected revenue, closing probability, and key stakeholders.' },
    { title: 'Pipeline', description: 'Advance opportunities through tailored pipeline stages, supported by automated activity tracking and follow-up prompts.' },
    { title: 'Customer', description: 'Successfully close the deal and transition the account seamlessly to fulfillment and customer success teams without data loss.' },
  ],
  capabilities: [
    { title: 'Unified Relationship Hub', description: 'Maintain a single source of truth for every account, consolidating emails, meetings, and historical transactions.' },
    { title: 'Visual Pipeline Management', description: 'Monitor opportunity progression across customizable deal stages to immediately identify bottlenecks and at-risk revenue.' },
    { title: 'Sales Activity Automation', description: 'Eliminate manual logging by automatically capturing communications and triggering the next best action for representatives.' },
    { title: 'Revenue Analytics', description: 'Leverage real-time dashboards to analyze conversion rates, pipeline velocity, and territory performance.' },
  ],
  outcomes: [
    'Accelerated pipeline velocity',
    'Increased opportunity win rates',
    'Highly accurate revenue forecasting',
    'Elimination of duplicate data entry',
  ],
  faqs: [
    { question: 'How does this CRM handle complex B2B sales cycles?', answer: 'It is architected for enterprise complexity, supporting multiple stakeholders, long sales cycles, and bespoke pipeline stages tailored to your operational model.' },
    { question: 'Will my sales team have to manually log their emails?', answer: 'No. The platform automatically syncs with enterprise email systems to log communications directly against the relevant account and opportunity.' },
    { question: 'Can we forecast revenue across different territories?', answer: 'Yes. Advanced reporting allows leadership to segment pipeline data by territory, product line, or individual representative to project accurate revenue.' },
  ],
  connectedModules: [
    { id: 'sales', relationship: 'Quotation Process', businessValue: 'Convert won opportunities instantly into formal quotations and customer orders.' },
    { id: 'marketing', relationship: 'Lead Generation', businessValue: 'Seamlessly pass qualified leads from marketing campaigns directly into the sales pipeline.' },
    { id: 'helpdesk', relationship: 'Customer Support', businessValue: 'Provide sales reps with full visibility into active support tickets before engaging accounts.' },
    { id: 'billing', relationship: 'Financial Operations', businessValue: 'Trigger accurate invoicing workflows the moment a deal is marked as closed-won.' }
  ],
};
