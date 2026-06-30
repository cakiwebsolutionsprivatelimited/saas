import { Megaphone } from 'lucide-react';
import type { App } from '../../types';

export const marketing: App = {
  id: 'marketing',
  slug: 'marketing',
  name: 'Marketing',
  shortDescription: 'Accelerate lead generation and prove campaign ROI.',
  description: 'Execute multi-channel marketing campaigns, capture high-quality leads, and track exact revenue attribution from first touch to closed won.',
  category: 'growth',
  icon: Megaphone,
  features: ['Campaign Automation', 'Revenue Attribution', 'Lead Scoring'],
  industries: ['retail', 'real-estate', 'education', 'fitness'],

  businessProblem: 'Marketing budgets are wasted because teams rely on disconnected tools that generate vanity metrics rather than trackable, qualified leads that convert to revenue.',
  businessOutcome: 'Transform marketing from a cost center into a predictable revenue engine by unifying campaign execution, lead generation, and precise sales attribution.',
  metrics: [
    { value: '3x', label: 'Increase in qualified lead volume' },
    { value: '100%', label: 'Campaign-to-revenue attribution' },
    { value: '45%', label: 'Higher email engagement rates' },
  ],
  challenges: [
    { title: 'Disconnected Data Silos', description: 'Using separate platforms for email, social, and web analytics creates fragmented data, making it impossible to map the complete customer journey.' },
    { title: 'Low Lead Quality', description: 'Sending generic "batch and blast" communications generates low-quality leads that waste the sales team’s time and lower conversion rates.' },
    { title: 'Inability to Prove ROI', description: 'Without direct integration into the sales pipeline, marketing leadership cannot prove which campaigns actually generate closed-won revenue.' },
  ],
  workflow: [
    { title: 'Segment', description: 'Leverage live CRM data to build highly targeted, dynamic audience segments based on precise behavioral and demographic criteria.' },
    { title: 'Execute', description: 'Design and deploy automated, multi-channel campaigns spanning email, SMS, and targeted social media advertisements.' },
    { title: 'Nurture', description: 'Implement intelligent drip sequences that automatically nurture prospects and calculate lead scores based on engagement.' },
    { title: 'Attribute', description: 'Track every interaction from the initial click to the final invoice, delivering undeniable proof of campaign ROI.' },
  ],
  capabilities: [
    { title: 'Visual Automation Canvas', description: 'Map out complex, multi-step customer journeys using an intuitive drag-and-drop workflow builder with conditional logic.' },
    { title: 'Dynamic Lead Scoring', description: 'Automatically grade prospects based on engagement velocity, ensuring only sales-ready leads are passed to account executives.' },
    { title: 'Enterprise Email Marketing', description: 'Deploy high-deliverability broadcast and transactional emails featuring dynamic content personalization and A/B testing.' },
    { title: 'Full-Funnel Analytics', description: 'Monitor live dashboards that track impressions, click-through rates, pipeline generation, and ultimate revenue realization.' },
  ],
  outcomes: [
    'Consistent delivery of highly qualified leads to the sales pipeline',
    'Hyper-personalized customer journeys executed at enterprise scale',
    'Undeniable, transparent proof of marketing return on investment (ROI)',
    'Elimination of redundant marketing software subscriptions',
  ],
  faqs: [
    { question: 'How closely does this integrate with the Sales CRM?', answer: 'The marketing module shares a unified database with the CRM. Sales representatives can see exactly which emails a lead opened in real-time.' },
    { question: 'Can we build custom landing pages for specific campaigns?', answer: 'Yes, the system includes a robust landing page builder designed to capture leads directly into your designated marketing funnels.' },
    { question: 'Does it support behavioral tracking on our external website?', answer: 'Absolutely. By installing our tracking pixel, you can trigger specific automation workflows based on the exact pages a prospect visits.' },
  ],
  connectedModules: [
    { id: 'crm', relationship: 'Lead Handover', businessValue: 'Automatically route marketing-qualified leads (MQLs) directly to the appropriate sales representative.' },
    { id: 'website', relationship: 'Traffic Conversion', businessValue: 'Transform anonymous website visitors into identifiable leads using embedded capture forms.' },
    { id: 'sales', relationship: 'Revenue Attribution', businessValue: 'Trace closed-won sales orders back to their originating marketing campaigns to calculate exact ROI.' }
  ],
};
