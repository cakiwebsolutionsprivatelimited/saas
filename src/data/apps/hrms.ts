import { Briefcase } from 'lucide-react';
import type { App } from '../../types';

export const hrms: App = {
  id: 'hrms',
  slug: 'hrms',
  name: 'HRMS',
  shortDescription: 'Modernize your entire employee lifecycle.',
  description: 'Empower your workforce with a centralized platform for managing employee records, tracking attendance, and streamlining organizational compliance.',
  category: 'people',
  icon: Briefcase,
  features: ['Workforce Management', 'Leave & Attendance', 'Employee Lifecycle'],
  industries: ['manufacturing', 'healthcare', 'education', 'service'],

  businessProblem: 'Scattered employee records and paper-based HR processes lead to compliance risks, chronic payroll errors, and a frustrating experience for the modern workforce.',
  businessOutcome: 'Transform human resources from an administrative bottleneck into a strategic enabler by centralizing employee data, automating compliance, and deploying self-service portals.',
  metrics: [
    { value: '70%', label: 'Reduction in HR administrative overhead' },
    { value: '24/7', label: 'Employee self-service accessibility' },
    { value: '100%', label: 'Centralized organizational compliance' },
  ],
  challenges: [
    { title: 'Fragmented Employee Data', description: 'Critical personnel information is scattered across disparate spreadsheets and physical files, severely hampering reporting and compliance audits.' },
    { title: 'Attendance & Leave Chaos', description: 'Tracking PTO balances and daily attendance manually results in calculation errors, directly impacting payroll accuracy.' },
    { title: 'Poor Employee Experience', description: 'Without a central digital hub, employees face constant friction when trying to access policies, payslips, or request time off.' },
  ],
  workflow: [
    { title: 'Onboard', description: 'Deliver a seamless digital onboarding experience, automatically collecting compliance documents, IDs, and banking details before day one.' },
    { title: 'Manage', description: 'Maintain a secure, unified master directory of employee profiles, historical performance data, and organizational structures.' },
    { title: 'Track', description: 'Monitor daily workforce attendance via biometric hardware integration, mobile geofencing, or web-based clock-ins.' },
    { title: 'Engage', description: 'Empower staff with a comprehensive self-service portal to request leave, review organizational policies, and update personal data.' },
  ],
  capabilities: [
    { title: 'Enterprise Workforce Directory', description: 'Visualize reporting lines and manage departmental hierarchies with dynamic organizational charts and secure profiles.' },
    { title: 'Advanced Time & Attendance', description: 'Enforce complex shift patterns, track overtime, and calculate precise working hours across multiple global locations.' },
    { title: 'Dynamic Leave Management', description: 'Configure bespoke, multi-tiered leave policies with automated accrual logic and multi-level approval routing.' },
    { title: 'Continuous Performance Management', description: 'Align organizational goals with individual OKRs, conduct structured 360-degree appraisals, and track career progression.' },
  ],
  outcomes: [
    'Dramatically reduced administrative burden on HR teams',
    'Elevated employee satisfaction through frictionless self-service',
    'Guaranteed compliance with regional labor laws and data privacy',
    'Flawless, automated handover of attendance data to payroll',
  ],
  faqs: [
    { question: 'Does the system integrate directly with our biometric attendance devices?', answer: 'Yes, the attendance module offers out-of-the-box integration with major enterprise biometric hardware to capture punch data in real-time.' },
    { question: 'Can field employees use this on their mobile devices?', answer: 'Absolutely. The mobile application allows field staff to clock in with geofenced location validation and request leave on the go.' },
    { question: 'Is sensitive employee data adequately protected?', answer: 'We employ enterprise-grade encryption and highly granular, role-based access controls to ensure strict confidentiality of all personnel records.' },
  ],
  connectedModules: [
    { id: 'payroll', relationship: 'Compensation', businessValue: 'Automatically sync approved attendance and leave data to guarantee flawless payroll processing.' },
    { id: 'projects', relationship: 'Resource Allocation', businessValue: 'Provide project managers with real-time visibility into employee availability, skills, and approved leave.' },
    { id: 'helpdesk', relationship: 'Internal IT Support', businessValue: 'Automatically provision IT support tickets for equipment setup during the new hire onboarding workflow.' }
  ],
};
