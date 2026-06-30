import { Wrench } from 'lucide-react';
import type { App } from '../../types';

export const fieldService: App = {
  id: 'field-service',
  slug: 'field-service',
  name: 'Field Service',
  shortDescription: 'Optimize technician scheduling and on-site execution.',
  description: 'Command your mobile workforce with intelligent dispatch routing, real-time technician tracking, and comprehensive on-site service execution tools.',
  category: 'operations',
  icon: Wrench,
  features: ['Intelligent Dispatch', 'Technician Tracking', 'Mobile Execution'],
  industries: ['service', 'manufacturing'],

  businessProblem: 'Manual scheduling and lack of field visibility lead to inefficient technician routing, prolonged customer wait times, and delayed invoicing due to paper-based job sheets.',
  businessOutcome: 'Maximize field workforce utilization and dramatically improve first-time fix rates by equipping dispatchers and technicians with real-time operational data.',
  metrics: [
    { value: '30%', label: 'Increase in daily job completion' },
    { value: '50%', label: 'Reduction in technician travel time' },
    { value: '100%', label: 'Elimination of paper job sheets' },
  ],
  challenges: [
    { title: 'Inefficient Dispatching', description: 'Dispatchers struggle to optimize routes manually, frequently assigning technicians to jobs without considering proximity or specific skill requirements.' },
    { title: 'Operational Blind Spots', description: 'Management lacks real-time visibility into fleet locations, making it impossible to effectively handle emergency service escalations.' },
    { title: 'Delayed Revenue Capture', description: 'Technicians rely on physical paperwork, leading to lost job details, delayed back-office data entry, and subsequently delayed invoicing.' },
  ],
  workflow: [
    { title: 'Schedule', description: 'Utilize algorithmic scheduling to automatically assign service tickets based on technician availability, location, and certification.' },
    { title: 'Dispatch', description: 'Instantly transmit comprehensive job details, service history, and optimized turn-by-turn routing to the technician’s mobile device.' },
    { title: 'Execute', description: 'Empower technicians to perform guided diagnostic workflows, capture photo evidence, and collect digital customer signatures on-site.' },
    { title: 'Resolve', description: 'Synchronize completed job data instantly with the back office to trigger automated billing, inventory consumption, and SLA reporting.' },
  ],
  capabilities: [
    { title: 'Dynamic Dispatch Board', description: 'Provide dispatchers with a map-integrated, visual command center to manage the entire mobile workforce dynamically.' },
    { title: 'Enterprise Mobility App', description: 'Equip field workers with a ruggedized iOS and Android application capable of fully offline data capture.' },
    { title: 'Live Fleet Tracking', description: 'Monitor exact GPS coordinates of your service fleet to optimize daily routing and validate on-site arrival times.' },
    { title: 'On-Site Commercials', description: 'Enable technicians to generate instant repair quotes, process digital payments, and close invoices directly from the field.' },
  ],
  outcomes: [
    'Maximized technician utilization and elevated revenue per shift',
    'Drastically reduced response times for critical emergency SLAs',
    'Total elimination of administrative paperwork and delayed billing',
    'Enhanced customer transparency with automated ETA tracking',
  ],
  faqs: [
    { question: 'Is the technician mobile application functional in low-connectivity areas?', answer: 'Yes, the enterprise mobility app features a robust offline-first architecture, automatically syncing data once a stable connection is restored.' },
    { question: 'Can customers track their assigned technician’s arrival?', answer: 'Yes, the system dispatches automated SMS updates containing a secure, live-tracking link to provide customers with an exact ETA.' },
    { question: 'How are spare parts consumed during a repair tracked?', answer: 'The mobile app integrates directly with the Inventory module, allowing technicians to deduct consumed van stock in real-time.' },
  ],
  connectedModules: [
    { id: 'helpdesk', relationship: 'Ticket Escalation', businessValue: 'Seamlessly convert complex customer support tickets into scheduled on-site field service jobs.' },
    { id: 'inventory', relationship: 'Van Stock Management', businessValue: 'Maintain real-time visibility and accurate valuation of spare parts held in technician vehicles.' },
    { id: 'billing', relationship: 'On-Site Invoicing', businessValue: 'Instantly generate accurate invoices based on logged technician hours and consumed materials.' }
  ],
};
