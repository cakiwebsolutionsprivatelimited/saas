import { Banknote } from 'lucide-react';
import type { App } from '../../types';

export const payroll: App = {
  id: 'payroll',
  slug: 'payroll',
  name: 'Payroll',
  shortDescription: 'Execute flawless salary processing and compliance.',
  description: 'Automate complex compensation structures, manage statutory deductions, and ensure timely payslip generation with absolute precision.',
  category: 'people',
  icon: Banknote,
  features: ['Salary Processing', 'Statutory Compliance', 'Digital Payslips'],
  industries: ['manufacturing', 'healthcare', 'education', 'service'],

  businessProblem: 'Manual payroll processing is highly susceptible to calculation errors, exposing the organization to severe compliance penalties and degrading employee trust.',
  businessOutcome: 'Run flawless, automated payroll cycles that guarantee statutory compliance, accurately calculate complex deductions, and disburse compensation on time, every time.',
  metrics: [
    { value: '99.9%', label: 'Salary processing accuracy' },
    { value: '100%', label: 'Statutory compliance rate' },
    { value: '0', label: 'Manual tax calculation errors' },
  ],
  challenges: [
    { title: 'Complex Compensation Structures', description: 'Calculating variable pay, shift allowances, and overtime across different tiers manually is a logistical nightmare.' },
    { title: 'Statutory Penalties', description: 'Failing to accurately calculate and remit changing local tax and social security deductions results in massive fines.' },
    { title: 'Disjointed Attendance Data', description: 'Exporting raw attendance data from time-clocks into separate payroll software causes delays and calculation discrepancies.' },
  ],
  workflow: [
    { title: 'Consolidate', description: 'Automatically import approved timesheets, leave without pay (LWP), and overtime data directly from the HRMS.' },
    { title: 'Process', description: 'Execute the payroll engine to calculate gross salary, apply statutory deductions, and determine precise net pay.' },
    { title: 'Validate', description: 'Generate comprehensive payroll variance reports to identify and resolve anomalies before finalizing the cycle.' },
    { title: 'Disburse', description: 'Initiate bulk bank transfers via direct integrations and instantly publish digital payslips to employee portals.' },
  ],
  capabilities: [
    { title: 'Dynamic Salary Components', description: 'Configure custom earning and deduction rules, including loan recoveries, reimbursements, and performance bonuses.' },
    { title: 'Automated Tax Engine', description: 'Stay compliant effortlessly with an auto-updating tax engine that applies the latest regional income tax brackets.' },
    { title: 'Statutory Reporting', description: 'Generate audit-ready compliance filings for tax authorities, provident funds, and social security programs.' },
    { title: 'Direct Bank Integration', description: 'Generate standardized bank transfer files or initiate direct salary disbursements securely from the platform.' },
  ],
  outcomes: [
    'Total elimination of manual salary calculation errors',
    'Guaranteed adherence to regional statutory compliance',
    'Frictionless month-end payroll execution',
    'Enhanced employee trust through transparent, on-time payments',
  ],
  faqs: [
    { question: 'Can the system handle multi-state or multi-country tax compliance?', answer: 'Yes, the tax engine applies highly localized rules based on the employee’s registered jurisdiction to ensure complete compliance.' },
    { question: 'How are mid-month salary revisions handled?', answer: 'The payroll engine automatically calculates prorated arrears or deductions for any compensation changes enacted during an active billing cycle.' },
    { question: 'Do employees have access to historical tax documents?', answer: 'Absolutely. Employees can download historical payslips and annual tax summary documents securely via their self-service portal.' },
  ],
  connectedModules: [
    { id: 'hrms', relationship: 'Workforce Data', businessValue: 'Ingest attendance, leave, and employee tier data directly to drive accurate salary calculations.' },
    { id: 'accounts', relationship: 'Financial Ledger', businessValue: 'Post complex payroll liabilities and salary disbursements automatically to the general ledger.' }
  ],
};
