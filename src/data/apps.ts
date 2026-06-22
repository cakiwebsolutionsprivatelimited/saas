import type { App } from '../types/app';

export const apps: App[] = [
  {
    id: 'crm',
    name: 'CRM',
    description: 'Manage leads, customers, and sales pipelines efficiently.',
    badge: 'Popular',
    category: 'Sales',
  },
  {
    id: 'sales',
    name: 'Sales',
    description: 'Streamline your sales process from quotation to order.',
    badge: 'Essential',
    category: 'Sales',
  },
  {
    id: 'billing',
    name: 'Billing',
    description: 'Automate invoicing and recurring billing effortlessly.',
    category: 'Finance',
  },
  {
    id: 'inventory',
    name: 'Inventory',
    description: 'Track stock levels, manage warehouses, and optimize supply chain.',
    badge: 'Core',
    category: 'Inventory',
  },
  {
    id: 'accounts',
    name: 'Accounts',
    description: 'Comprehensive financial accounting and reporting software.',
    category: 'Finance',
  },
  {
    id: 'hrms',
    name: 'HRMS',
    description: 'Complete human resource management system for your workforce.',
    category: 'HRMS',
  },
  {
    id: 'payroll',
    name: 'Payroll',
    description: 'Automated payroll processing with tax compliance.',
    category: 'HRMS',
  },
  {
    id: 'projects',
    name: 'Projects',
    description: 'Plan, track, and collaborate on projects effectively.',
    category: 'Services',
  },
  {
    id: 'helpdesk',
    name: 'Helpdesk',
    description: 'Provide excellent customer support with a robust ticketing system.',
    category: 'Services',
  },
  {
    id: 'field-service',
    name: 'Field Service',
    description: 'Manage field operations, scheduling, and dispatching.',
    category: 'Services',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Automate marketing campaigns and analyze performance.',
    category: 'Marketing',
  },
  {
    id: 'website',
    name: 'Website',
    description: 'Build and manage your professional online presence easily.',
    category: 'Website',
  },
];
