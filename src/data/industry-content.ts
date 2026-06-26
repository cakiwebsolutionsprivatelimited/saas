import type { IndustryContent } from '../types';

export const industryExtensions: Record<string, IndustryContent> = {
  manufacturing: {
    tags: ['Production', 'Inventory', 'Procurement'],
    workflow: [
      { step: 'Enquiry', app: 'CRM' },
      { step: 'Quotation', app: 'Sales' },
      { step: 'Production Planning', app: 'Projects' },
      { step: 'Inventory Allocation', app: 'Inventory' },
      { step: 'Dispatch', app: 'Inventory' },
      { step: 'Invoice', app: 'Billing' },
      { step: 'Payment', app: 'Accounts' }
    ],
    outcomes: [
      { title: 'Better operational visibility', desc: 'Track raw materials and finished goods in real-time across all facilities.' },
      { title: 'Faster order processing', desc: 'Seamlessly convert quotations into production orders and dispatch schedules.' },
      { title: 'Reduced manual work', desc: 'Eliminate duplicate data entry between shop floor and back office.' }
    ],
    reasons: [
      'Multi-facility inventory tracking natively built-in.',
      'Real-time production bottleneck alerts.',
      'Automated conversion of sales orders to production tasks.',
      'Unified workforce attendance and payroll tracking.'
    ],
    faqs: [
      { q: 'Can I track raw materials separately from finished goods?', a: 'Yes, our inventory module supports complex categorizations, sub-assemblies, and multi-stage tracking.' },
      { q: 'Does it support multi-location warehouses?', a: 'Absolutely. You can track and transfer stock across unlimited warehouse locations and production floors.' },
      { q: 'Can we integrate our existing hardware?', a: 'Yes, we offer robust API endpoints to connect with IoT devices, barcode scanners, and industrial hardware.' }
    ]
  },
  distributor: {
    tags: ['Wholesale', 'Supply Chain', 'B2B Sales'],
    workflow: [
      { step: 'Lead Gen', app: 'Marketing' },
      { step: 'Sales Order', app: 'Sales' },
      { step: 'Stock Check', app: 'Inventory' },
      { step: 'Fulfillment', app: 'Inventory' },
      { step: 'Invoicing', app: 'Billing' },
      { step: 'Receivables', app: 'Accounts' }
    ],
    outcomes: [
      { title: 'Optimized stock levels', desc: 'Automated reordering prevents stockouts and reduces holding costs.' },
      { title: 'Accurate pricing', desc: 'Maintain complex, volume-based pricing tiers without manual calculations.' },
      { title: 'Improved vendor relations', desc: 'Streamlined purchase order management and timely payments.' }
    ],
    reasons: [
      'Built-in volume and tier-based pricing engines.',
      'Automated purchase order generation based on stock thresholds.',
      'Seamless B2B customer portal for self-serve ordering.',
      'Real-time dispatch and delivery tracking.'
    ],
    faqs: [
      { q: 'Can I set different prices for different distributors?', a: 'Yes, the sales module supports custom price lists, volume discounts, and customer-specific pricing tiers.' },
      { q: 'How does it handle returns (RMA)?', a: 'Returns are seamlessly integrated. The inventory updates automatically, and finance can issue credit notes with one click.' }
    ]
  },
  retail: {
    tags: ['Sales', 'Stock', 'Customer Experience'],
    workflow: [
      { step: 'Campaign', app: 'Marketing' },
      { step: 'Customer Visit', app: 'CRM' },
      { step: 'POS Checkout', app: 'Sales' },
      { step: 'Stock Update', app: 'Inventory' },
      { step: 'Loyalty Points', app: 'Marketing' },
      { step: 'Reconciliation', app: 'Accounts' }
    ],
    outcomes: [
      { title: 'Unified customer view', desc: 'Track online and offline purchases in a single customer profile.' },
      { title: 'Real-time stock updates', desc: 'Never oversell; inventory updates instantly across all channels.' },
      { title: 'Targeted promotions', desc: 'Use purchase history to run highly effective retention campaigns.' }
    ],
    reasons: [
      'Omnichannel inventory synchronization.',
      'Integrated loyalty and rewards programs.',
      'Comprehensive point-of-sale capabilities.',
      'Automated end-of-day financial reconciliation.'
    ],
    faqs: [
      { q: 'Does it integrate with my e-commerce website?', a: 'Yes, our platform includes e-commerce integrations to sync products, inventory, and orders in real-time.' },
      { q: 'Can I manage multiple retail outlets?', a: 'Yes, you can manage unlimited branches with centralized inventory and localized reporting.' }
    ]
  },
  healthcare: {
    tags: ['Appointments', 'Billing', 'Patient Management'],
    workflow: [
      { step: 'Appointment', app: 'Helpdesk' },
      { step: 'Check-in', app: 'CRM' },
      { step: 'Consultation', app: 'Projects' },
      { step: 'Prescription/Labs', app: 'Inventory' },
      { step: 'Billing', app: 'Billing' },
      { step: 'Follow-up', app: 'Marketing' }
    ],
    outcomes: [
      { title: 'Secure patient records', desc: 'Centralized, compliant storage of all patient interactions and histories.' },
      { title: 'Automated billing', desc: 'Reduce insurance claim errors and speed up out-of-pocket collections.' },
      { title: 'Improved patient care', desc: 'Doctors spend less time on paperwork and more time with patients.' }
    ],
    reasons: [
      'Strict access controls for sensitive patient data.',
      'Integrated appointment scheduling and reminders.',
      'Pharmacy and lab inventory management.',
      'Complex multi-payer billing capabilities.'
    ],
    faqs: [
      { q: 'Is the data secure and compliant?', a: 'Yes, the platform is built with enterprise-grade security, encryption, and role-based access controls.' },
      { q: 'Can we manage doctor schedules?', a: 'Absolutely. The platform includes advanced scheduling tools with conflict resolution and automated patient reminders.' }
    ]
  },
  education: {
    tags: ['Admissions', 'Schedules', 'Fee Collection'],
    workflow: [
      { step: 'Admission Enquiry', app: 'Marketing' },
      { step: 'Enrollment', app: 'CRM' },
      { step: 'Fee Collection', app: 'Billing' },
      { step: 'Class Scheduling', app: 'Projects' },
      { step: 'Staff Payroll', app: 'Payroll' },
      { step: 'Alumni Engagement', app: 'Marketing' }
    ],
    outcomes: [
      { title: 'Automated fee reminders', desc: 'Dramatically reduce late payments with automated communication.' },
      { title: 'Organized schedules', desc: 'Conflict-free timetables for students and faculty.' },
      { title: 'Better engagement', desc: 'Seamless communication between parents, teachers, and administration.' }
    ],
    reasons: [
      'Customizable student lifecycle management.',
      'Automated recurring fee generation and collection.',
      'Unified communication portal for all stakeholders.',
      'Integrated staff attendance and payroll.'
    ],
    faqs: [
      { q: 'Can parents access fee receipts online?', a: 'Yes, there is a dedicated portal where parents can view invoices, pay fees, and download receipts.' },
      { q: 'Does it handle different fee structures for different grades?', a: 'Yes, you can configure complex fee structures, scholarships, and discounts per student or grade level.' }
    ]
  },
  service: {
    tags: ['Dispatch', 'Field Operations', 'Invoicing'],
    workflow: [
      { step: 'Service Request', app: 'Helpdesk' },
      { step: 'Quotation', app: 'Sales' },
      { step: 'Agent Dispatch', app: 'Field Service' },
      { step: 'Execution', app: 'Projects' },
      { step: 'Sign-off', app: 'CRM' },
      { step: 'Invoicing', app: 'Billing' }
    ],
    outcomes: [
      { title: 'Optimized dispatch', desc: 'Assign the right technician based on skill, location, and availability.' },
      { title: 'Faster invoicing', desc: 'Generate invoices immediately upon job completion from the field.' },
      { title: 'Higher customer satisfaction', desc: 'Keep clients updated with real-time ETA and status tracking.' }
    ],
    reasons: [
      'Mobile-first tools for field technicians.',
      'Visual scheduling and dispatch boards.',
      'Automated SLA tracking and escalation.',
      'Instant conversion of job cards to invoices.'
    ],
    faqs: [
      { q: 'Can technicians update job status from their phones?', a: 'Yes, our field service mobile interface allows technicians to log hours, use parts, and get customer signatures on-site.' },
      { q: 'How do we handle recurring maintenance contracts?', a: 'The billing module automatically generates recurring invoices, while the projects module creates recurring maintenance tasks.' }
    ]
  },
  'real-estate': {
    tags: ['Lead Capture', 'Site Visits', 'Construction Tracking'],
    workflow: [
      { step: 'Campaign', app: 'Marketing' },
      { step: 'Lead Capture', app: 'Website' },
      { step: 'Site Visit', app: 'CRM' },
      { step: 'Booking', app: 'Sales' },
      { step: 'Construction Tracking', app: 'Projects' },
      { step: 'Handover', app: 'CRM' }
    ],
    outcomes: [
      { title: 'Zero lead leakage', desc: 'Automatically capture leads from all property portals and social media.' },
      { title: 'Centralized property listings', desc: 'Manage your entire portfolio availability in real-time.' },
      { title: 'Better conversions', desc: 'Automate follow-ups and nurture leads until they are ready to buy.' }
    ],
    reasons: [
      'Deep integrations with property portals.',
      'Visual sales pipeline tailored for real estate stages.',
      'Automated payment milestone reminders.',
      'Broker and channel partner management.'
    ],
    faqs: [
      { q: 'Can we track sales commissions for brokers?', a: 'Yes, the finance and CRM modules work together to calculate and track channel partner commissions.' },
      { q: 'Does it support payment plans tied to construction milestones?', a: 'Absolutely. You can link invoices to specific project completion percentages.' }
    ]
  },
  fitness: {
    tags: ['Memberships', 'Class Bookings', 'Renewals'],
    workflow: [
      { step: 'Trial Signup', app: 'Website' },
      { step: 'Facility Tour', app: 'CRM' },
      { step: 'Membership Sale', app: 'Billing' },
      { step: 'Class Booking', app: 'Projects' },
      { step: 'Engagement', app: 'Marketing' },
      { step: 'Renewal', app: 'Billing' }
    ],
    outcomes: [
      { title: 'Automated renewals', desc: 'Reduce churn with automated payment collection and renewal reminders.' },
      { title: 'Easy scheduling', desc: 'Allow members to book classes and personal trainers seamlessly.' },
      { title: 'Increased retention', desc: 'Identify at-risk members based on attendance drops and engage them.' }
    ],
    reasons: [
      'Frictionless recurring billing and failed payment retries.',
      'Member self-service portal for bookings.',
      'Integrated access control tracking (attendance).',
      'Targeted email campaigns for inactive members.'
    ],
    faqs: [
      { q: 'Can members upgrade their plans online?', a: 'Yes, members can manage their own subscriptions, upgrade tiers, and update payment methods securely.' },
      { q: 'Do you support multi-location gym chains?', a: 'Yes, members can have all-access passes, and you get centralized reporting across all branches.' }
    ]
  }
};
