import { Globe } from 'lucide-react';
import type { App } from '../../types';

export const website: App = {
  id: 'website',
  slug: 'website',
  name: 'Website',
  shortDescription: 'Command your digital presence and capture enterprise leads.',
  description: 'Deploy a high-performance, SEO-optimized corporate website that serves as your primary engine for lead generation and digital customer engagement.',
  category: 'growth',
  icon: Globe,
  features: ['Enterprise CMS', 'Lead Capture Engine', 'SEO Optimization'],
  industries: ['retail', 'real-estate', 'education', 'fitness'],

  businessProblem: 'Relying on external agencies and disconnected legacy CMS platforms makes web updates painstakingly slow, expensive, and completely detaches your website from your core sales funnel.',
  businessOutcome: 'Empower marketing teams to independently launch performant web pages that automatically capture and route qualified prospects directly into the enterprise CRM.',
  metrics: [
    { value: '10x', label: 'Faster time-to-market for campaigns' },
    { value: '99.9%', label: 'Global CDN uptime guarantee' },
    { value: '100%', label: 'Automated CRM lead syncing' },
  ],
  challenges: [
    { title: 'Development Bottlenecks', description: 'Marketing teams lose agility when even minor text updates or new landing pages require submitting tickets to an overloaded IT department.' },
    { title: 'Disconnected Data', description: 'Standalone websites operate in a silo, requiring brittle, third-party integrations just to pass form submissions to the sales team.' },
    { title: 'Poor SEO Performance', description: 'Bloated legacy website builders suffer from slow load times and poor core web vitals, severely penalizing organic search rankings.' },
  ],
  workflow: [
    { title: 'Design', description: 'Rapidly construct stunning, brand-compliant pages using an intuitive, visual drag-and-drop component library.' },
    { title: 'Engage', description: 'Embed smart lead capture forms, live chat widgets, and dynamic content tailored to visitor demographics.' },
    { title: 'Optimize', description: 'Execute built-in technical SEO audits to perfect meta tags, canonical URLs, and schema markup prior to publication.' },
    { title: 'Deploy', description: 'Publish updates instantly across a globally distributed Content Delivery Network (CDN) for sub-second load times.' },
  ],
  capabilities: [
    { title: 'Visual Enterprise CMS', description: 'Enable non-technical teams to manage complex site architectures, dynamic blogs, and multi-language content effortlessly.' },
    { title: 'Native Lead Capture', description: 'Deploy intelligent web forms that instantly validate data and inject qualified leads directly into your sales pipeline.' },
    { title: 'Technical SEO Engine', description: 'Take absolute control over technical SEO with automated XML sitemaps, 301 redirect management, and automated image optimization.' },
    { title: 'Global Edge Hosting', description: 'Ensure maximum security and availability with fully managed hosting, automated SSL provisioning, and DDoS protection.' },
  ],
  outcomes: [
    'Total operational autonomy for marketing and content teams',
    'Elevated organic search rankings driven by optimized site performance',
    'Frictionless conversion of anonymous visitors into actionable CRM leads',
    'Complete elimination of external web hosting and maintenance overhead',
  ],
  faqs: [
    { question: 'Can we utilize our existing corporate domain name?', answer: 'Yes, you can easily map your existing custom domain, and the platform will automatically provision and renew enterprise-grade SSL certificates.' },
    { question: 'Is the generated website fully responsive for mobile devices?', answer: 'Absolutely. The rendering engine ensures that every page, component, and form is inherently responsive and optimized for mobile conversion.' },
    { question: 'Can we build a corporate blog or resource center?', answer: 'Yes, the CMS includes a powerful blogging engine supporting advanced categorization, author profiles, and scheduled content publishing.' },
  ],
  connectedModules: [
    { id: 'marketing', relationship: 'Campaign Destinations', businessValue: 'Serve as the high-conversion destination for outbound email and advertising campaigns.' },
    { id: 'crm', relationship: 'Lead Generation', businessValue: 'Automatically pipe all website form submissions directly into the CRM as enriched prospect records.' },
    { id: 'helpdesk', relationship: 'Customer Support', businessValue: 'Embed live chat and self-service knowledge base widgets directly into your public facing pages.' }
  ],
};
