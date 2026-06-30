import { Headset } from 'lucide-react';
import type { App } from '../../types';

export const helpdesk: App = {
  id: 'helpdesk',
  slug: 'helpdesk',
  name: 'Helpdesk',
  shortDescription: 'Elevate customer support efficiency and SLA compliance.',
  description: 'Deliver omnichannel enterprise support with automated ticket routing, rigorous SLA enforcement, and intelligent self-service deflection.',
  category: 'operations',
  icon: Headset,
  features: ['Omnichannel Ticketing', 'SLA Enforcement', 'Knowledge Base'],
  industries: ['service', 'retail', 'healthcare'],

  businessProblem: 'Fragmented support channels and manual ticket assignment lead to severe SLA breaches, agent burnout, and degraded customer satisfaction scores.',
  businessOutcome: 'Transform support operations into a competitive advantage by unifying all customer communications, automating ticket triage, and enforcing strict service level agreements.',
  metrics: [
    { value: '55%', label: 'Reduction in first-response time' },
    { value: '40%', label: 'Ticket deflection via self-service' },
    { value: '99%', label: 'Enterprise SLA compliance' },
  ],
  challenges: [
    { title: 'Channel Fragmentation', description: 'Agents constantly switch between emails, live chat, and social media dashboards, losing critical context and duplicating efforts.' },
    { title: 'SLA Breaches', description: 'Without automated prioritization and escalation protocols, high-severity issues frequently breach contractual SLA deadlines.' },
    { title: 'Agent Inefficiency', description: 'Support teams burn out repeatedly answering tier-1 queries manually instead of focusing on complex, high-value problem resolution.' },
  ],
  workflow: [
    { title: 'Consolidate', description: 'Automatically capture and unify support requests from email, web portals, chat, and telephony into a single agent workspace.' },
    { title: 'Triage', description: 'Deploy intelligent routing algorithms to assign tickets to the correct agent based on workload capacity, skillset, and issue severity.' },
    { title: 'Resolve', description: 'Empower agents to resolve complex issues rapidly using integrated knowledge articles, macro responses, and cross-departmental collaboration.' },
    { title: 'Analyze', description: 'Monitor real-time support dashboards to track agent performance, CSAT scores, and identify systemic product issues.' },
  ],
  capabilities: [
    { title: 'Unified Agent Workspace', description: 'Provide agents with a comprehensive 360-degree view of the customer, their purchase history, and all past interactions.' },
    { title: 'Advanced SLA Management', description: 'Configure granular SLA policies based on customer tiers, business hours, and issue categories with automated escalation alerts.' },
    { title: 'Self-Service Knowledge Base', description: 'Deploy SEO-optimized, multilingual help centers to empower customers to resolve common issues independently.' },
    { title: 'AI-Powered Deflection', description: 'Utilize intelligent chatbots and automatic article suggestions to intercept and deflect routine queries before they reach an agent.' },
  ],
  outcomes: [
    'Significantly elevated Customer Satisfaction (CSAT) and Net Promoter Scores (NPS)',
    'Maximized agent productivity and reduced employee churn',
    'Guaranteed compliance with enterprise support contracts',
    'Substantial reduction in overall support operational costs',
  ],
  faqs: [
    { question: 'Can we manage multiple SLA policies for different enterprise clients?', answer: 'Absolutely. The SLA engine allows you to define custom response and resolution targets tied specifically to individual customer contracts or organizational tiers.' },
    { question: 'Does the live chat widget support proactive engagement?', answer: 'Yes, the embedded chat widget can be configured to proactively trigger based on user behavior, time on page, or specific URL paths.' },
    { question: 'How does it handle ticket escalations?', answer: 'You can build custom escalation matrices that automatically notify management or reassign tickets if an SLA breach is imminent.' },
  ],
  connectedModules: [
    { id: 'crm', relationship: 'Customer Context', businessValue: 'Provide support agents with immediate access to a client’s complete CRM profile and relationship history.' },
    { id: 'sales', relationship: 'Upsell Opportunities', businessValue: 'Allow agents to identify and pass qualified upsell opportunities directly back to the sales team.' },
    { id: 'projects', relationship: 'Implementation Handoff', businessValue: 'Seamlessly transition completed onboarding projects directly into long-term helpdesk support.' }
  ],
};
