import { Wallet } from 'lucide-react';
import type { App } from '../../types';

export const accounts: App = {
  id: 'accounts',
  slug: 'accounts',
  name: 'Accounts',
  shortDescription: 'Enterprise financial management and compliance.',
  description: 'Maintain a pristine general ledger, automate complex month-end closes, and generate audit-ready financial statements in real-time.',
  category: 'finance',
  icon: Wallet,
  features: ['General Ledger', 'Accounts Payable', 'Financial Reporting'],
  industries: ['manufacturing', 'distributor', 'healthcare', 'education'],

  businessProblem: 'Siloed operational data forces finance teams into manual, error-prone reconciliation processes, delaying the month-end close and obscuring true corporate profitability.',
  businessOutcome: 'Achieve total financial control with an automated accounting engine that guarantees compliance, accelerates period closing, and delivers real-time strategic insights.',
  metrics: [
    { value: '50%', label: 'Faster month-end close cycle' },
    { value: '100%', label: 'Audit trail compliance' },
    { value: 'Real-time', label: 'Consolidated financial reporting' },
  ],
  challenges: [
    { title: 'Manual Reconciliation', description: 'Finance teams waste valuable time manually matching bank statements against operational data, introducing severe human error risk.' },
    { title: 'Delayed Period Closing', description: 'Consolidating financials across multiple departments and entities turns month-end closing into a stressful, multi-week ordeal.' },
    { title: 'Blind Decision Making', description: 'Executive leadership is forced to make strategic decisions based on outdated financial snapshots rather than real-time profitability metrics.' },
  ],
  workflow: [
    { title: 'Record', description: 'Automatically capture and categorize financial transactions originating from all connected operational modules in real-time.' },
    { title: 'Reconcile', description: 'Leverage automated bank feeds and AI-driven matching algorithms to reconcile accounts receivable and payable instantly.' },
    { title: 'Consolidate', description: 'Seamlessly consolidate financial data across multiple corporate entities, handling inter-company eliminations automatically.' },
    { title: 'Report', description: 'Generate compliant balance sheets, P&L statements, and cash flow reports at the click of a button.' },
  ],
  capabilities: [
    { title: 'Automated General Ledger', description: 'Ensure data integrity with a robust, double-entry ledger that updates instantly as operational events occur.' },
    { title: 'Multi-Entity Management', description: 'Manage complex corporate structures with distinct charts of accounts, consolidated reporting, and localized taxation.' },
    { title: 'Accounts Payable Automation', description: 'Streamline vendor payments with automated invoice capture, digital approval workflows, and scheduled disbursements.' },
    { title: 'Dynamic Financial Dashboards', description: 'Empower department heads with real-time budget vs. actuals tracking and interactive profitability analysis.' },
  ],
  outcomes: [
    'Frictionless and rapid month-end financial closing',
    'Unprecedented visibility into cash flow and departmental profitability',
    'Elimination of manual journal entries and duplicate data',
    'Guaranteed regulatory compliance and permanent audit readiness',
  ],
  faqs: [
    { question: 'Does the system support global multi-currency operations?', answer: 'Yes, it natively handles multi-currency transactions with automated, real-time exchange rate adjustments and unrealized gain/loss calculations.' },
    { question: 'Can we configure custom approval hierarchies for expenses?', answer: 'Absolutely. You can design complex, multi-tiered approval workflows based on expenditure limits, departments, or specific GL codes.' },
    { question: 'How does it handle localized tax compliance?', answer: 'The accounting engine applies localized tax rules (VAT, GST, Sales Tax) dynamically based on transaction jurisdiction and generates compliant tax filing reports.' },
  ],
  connectedModules: [
    { id: 'billing', relationship: 'Accounts Receivable', businessValue: 'Automatically post issued invoices and received payments to the correct AR ledgers.' },
    { id: 'payroll', relationship: 'Salary Disbursements', businessValue: 'Record complex payroll runs, including tax liabilities and deductions, directly into the ledger.' },
    { id: 'inventory', relationship: 'Asset Valuation', businessValue: 'Reflect precise COGS and inventory asset valuations in real-time based on warehouse movements.' },
    { id: 'sales', relationship: 'Revenue Forecasting', businessValue: 'Combine historical financial data with the active sales pipeline for accurate cash flow projection.' }
  ],
};
