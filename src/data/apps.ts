import type { App } from '../types';

import { crm } from './apps/crm';
import { sales } from './apps/sales';
import { billing } from './apps/billing';
import { inventory } from './apps/inventory';
import { accounts } from './apps/accounts';
import { hrms } from './apps/hrms';
import { payroll } from './apps/payroll';
import { projects } from './apps/projects';
import { helpdesk } from './apps/helpdesk';
import { fieldService } from './apps/field-service';
import { marketing } from './apps/marketing';
import { website } from './apps/website';

export const apps: App[] = [
  crm,
  sales,
  billing,
  inventory,
  accounts,
  hrms,
  payroll,
  projects,
  helpdesk,
  fieldService,
  marketing,
  website,
];
