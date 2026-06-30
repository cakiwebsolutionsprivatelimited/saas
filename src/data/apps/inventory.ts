import { Package } from 'lucide-react';
import type { App } from '../../types';

export const inventory: App = {
  id: 'inventory',
  slug: 'inventory',
  name: 'Inventory',
  shortDescription: 'Maintain perfect stock accuracy and warehouse efficiency.',
  description: 'Optimize complex warehouse operations with real-time stock visibility, automated replenishment, and multi-location fulfillment routing.',
  category: 'operations',
  icon: Package,
  features: ['Warehouse Management', 'Automated Replenishment', 'Batch & Expiry'],
  industries: ['manufacturing', 'distributor', 'retail', 'healthcare'],
  isPopular: true,

  businessProblem: 'Opaque stock levels and manual procurement processes lead to devastating stockouts, capital locked in dead stock, and chronic fulfillment delays.',
  businessOutcome: 'Achieve total control over warehouse operations by automating stock tracking, optimizing procurement cycles, and guaranteeing fulfillment accuracy.',
  metrics: [
    { value: '99.9%', label: 'Warehouse stock accuracy' },
    { value: '60%', label: 'Reduction in carrying costs' },
    { value: 'Real-time', label: 'Multi-location visibility' },
  ],
  challenges: [
    { title: 'Blind Replenishment', description: 'Procurement managers guess at reorder quantities due to disconnected data, leading to severe overstocking or sudden shortages.' },
    { title: 'Warehouse Shrinkage', description: 'Without real-time barcode scanning and bin-level tracking, valuable stock frequently goes missing across large facilities.' },
    { title: 'Fulfillment Bottlenecks', description: 'Inefficient picking routes and manual pack-and-ship processes delay customer orders and drastically increase labor costs.' },
  ],
  workflow: [
    { title: 'Receive', description: 'Scan inbound shipments against vendor purchase orders to instantly update warehouse stock levels and allocate to bins.' },
    { title: 'Store & Track', description: 'Monitor exact stock positions across complex warehouse hierarchies, tracking lot numbers, serials, and expiry dates.' },
    { title: 'Fulfill', description: 'Generate optimized wave picking lists, ensuring rapid and accurate pack-and-ship execution for outbound sales orders.' },
    { title: 'Replenish', description: 'Automatically trigger procurement workflows when inventory drops below algorithmically determined safety stock levels.' },
  ],
  capabilities: [
    { title: 'Multi-Echelon Warehousing', description: 'Manage inventory across a global network of distribution centers, retail stores, and virtual transit locations.' },
    { title: 'Barcode & RFID Operations', description: 'Execute rapid stock counts, transfers, and picking using enterprise-grade mobile scanning hardware.' },
    { title: 'Traceability & Compliance', description: 'Maintain strict regulatory compliance with end-to-end tracking of perishable goods, serial numbers, and batch lots.' },
    { title: 'Automated Procurement', description: 'Set dynamic reorder points that automatically generate purchase orders based on consumption velocity.' },
  ],
  outcomes: [
    'Total elimination of unexpected stockouts',
    'Optimized working capital through leaner inventory holding',
    'Dramatically increased warehouse picking efficiency',
    'Flawless traceability for recalls and compliance audits',
  ],
  faqs: [
    { question: 'Does the system support complex barcode formats?', answer: 'Yes, the warehouse application natively parses complex 2D barcodes (like GS1) to capture batch, serial, and expiry data in a single scan.' },
    { question: 'Can we manage stock in transit between our facilities?', answer: 'Absolutely. The platform tracks inter-warehouse transfers explicitly, maintaining full visibility of goods while they are in transit.' },
    { question: 'How does it handle dropshipping?', answer: 'You can configure specific fulfillment workflows to bypass your physical warehouse and route sales orders directly to your suppliers for dropshipping.' },
  ],
  connectedModules: [
    { id: 'sales', relationship: 'Order Fulfillment', businessValue: 'Instantly reserve stock for confirmed sales orders to guarantee delivery promises.' },
    { id: 'accounts', relationship: 'Asset Valuation', businessValue: 'Sync real-time stock movements to the general ledger for accurate cost of goods sold (COGS) reporting.' },
    { id: 'field-service', relationship: 'Van Stock', businessValue: 'Track parts and equipment loaded onto technician vehicles as mobile warehouse locations.' }
  ],
};
