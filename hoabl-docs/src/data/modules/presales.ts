import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const presales = {
  slug: 'presales',
  title: 'Presales',
  groups: {
    leads: { label: "Leads", color: '#2563eb' },
    customers: { label: "Customers & Opportunities", color: '#7c3aed' },
    budget: { label: "Budget & PO", color: '#ea580c' },
    teams: { label: "Teams", color: '#059669' },
    inventory: { label: "Projects", color: '#db2777' },
    integration: { label: "Integration", color: '#64748b' },
  },
  entities: [
    entity('Lead', 'leads'),
    entity('Lead_Upload__c', 'leads'),
    entity('CTI_Lead_List__c', 'leads'),
    entity('Call_Analysis__c', 'leads'),
    entity('Account', 'customers'),
    entity('Contact', 'customers'),
    entity('Opportunity', 'customers'),
    entity('PO_Request__c', 'budget'),
    entity('Spend__c', 'budget'),
    entity('Process__c', 'budget'),
    entity('Incentive__c', 'budget'),
    entity('Team__c', 'teams'),
    entity('Team_Member__c', 'teams'),
    entity('Launch__c', 'inventory'),
    entity('Project__c', 'inventory'),
    entity('Integration_Log__c', 'integration'),
  ],
} satisfies ModuleSchema;
