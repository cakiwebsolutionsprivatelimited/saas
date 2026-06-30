import { LayoutList } from 'lucide-react';
import type { App } from '../../types';

export const projects: App = {
  id: 'projects',
  slug: 'projects',
  name: 'Projects',
  shortDescription: 'Optimize project delivery and resource utilization.',
  description: 'Orchestrate complex project lifecycles, balance resource utilization, and track portfolio profitability in real-time.',
  category: 'operations',
  icon: LayoutList,
  features: ['Project Planning', 'Resource Utilization', 'Milestone Tracking'],
  industries: ['service', 'real-estate', 'education'],

  businessProblem: 'Without centralized project portfolio management, organizations suffer from budget overruns, missed delivery milestones, and chronic employee burnout due to poor resource planning.',
  businessOutcome: 'Deliver enterprise projects predictably and profitably by unifying project planning, real-time resource allocation, and strict budget monitoring into a single platform.',
  metrics: [
    { value: '40%', label: 'Increase in on-time project delivery' },
    { value: '95%', label: 'Optimal resource utilization' },
    { value: '100%', label: 'Visibility into project profitability' },
  ],
  challenges: [
    { title: 'Missed Milestones', description: 'When project dependencies are buried in email threads, critical path milestones slip, delaying the entire delivery schedule.' },
    { title: 'Resource Imbalance', description: 'Project managers assign work without enterprise-wide visibility, leading to severe bottlenecks and over-utilized staff.' },
    { title: 'Silent Budget Overruns', description: 'Tracking billable hours and expenses manually means organizations only realize a project is unprofitable after it concludes.' },
  ],
  workflow: [
    { title: 'Scope', description: 'Define the project charter, set high-level budgets, and break deliverables down into trackable milestones and tasks.' },
    { title: 'Allocate', description: 'Assign tasks intelligently based on real-time organizational capacity, skill matrices, and current utilization rates.' },
    { title: 'Execute', description: 'Collaborate seamlessly on deliverables while capturing precise billable and non-billable time via integrated timesheets.' },
    { title: 'Deliver', description: 'Monitor live Gantt charts and track burn rates to ensure the project stays strictly within budget and timeline.' },
  ],
  capabilities: [
    { title: 'Advanced Portfolio Management', description: 'Visualize and manage multiple complex projects simultaneously using interactive Gantt charts and Kanban boards.' },
    { title: 'Dynamic Resource Utilization', description: 'Balance workloads across the entire organization with visual capacity planning and conflict resolution tools.' },
    { title: 'Timesheet & Expense Tracking', description: 'Enable team members to log precise working hours and project-related expenses for accurate client billing.' },
    { title: 'Real-Time Profitability Engine', description: 'Track actual spend against baseline budgets instantaneously to protect profit margins at every project phase.' },
  ],
  outcomes: [
    'Predictable, on-time, and on-budget project delivery',
    'Maximized workforce utilization without risking burnout',
    'Instant identification of at-risk project margins',
    'Seamless cross-functional collaboration across distributed teams',
  ],
  faqs: [
    { question: 'Can we collaborate with external stakeholders or clients?', answer: 'Yes, you can securely invite clients as external guests to view specific project milestones, approve deliverables, and communicate.' },
    { question: 'Does it support agile software development methodologies?', answer: 'Absolutely. Technical teams can leverage sprint planning, backlog management, and Kanban boards natively within the module.' },
    { question: 'How are project expenses billed back to the client?', answer: 'Approved timesheets and logged expenses sync automatically with the Billing module, allowing you to generate accurate invoices instantly.' },
  ],
  connectedModules: [
    { id: 'billing', relationship: 'Project Invoicing', businessValue: 'Convert approved project milestones and timesheets directly into client invoices.' },
    { id: 'hrms', relationship: 'Resource Availability', businessValue: 'Factor in approved employee leave and holiday calendars when planning project timelines.' },
    { id: 'crm', relationship: 'Client Context', businessValue: 'Provide project teams with full visibility into the original sales contract and client expectations.' }
  ],
};
