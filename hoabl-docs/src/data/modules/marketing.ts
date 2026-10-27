import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const marketing = {
  slug: 'marketing',
  title: 'Marketing',
  groups: {
    campaigns: { label: "Campaigns", color: '#2563eb' },
    sales: { label: "Leads & Opportunities", color: '#7c3aed' },
    budget: { label: "Budget", color: '#ea580c' },
    teams: { label: "Teams", color: '#059669' },
    inventory: { label: "Projects", color: '#db2777' },
  },
  entities: [
    entity('Campaign', 'campaigns'),
    entity('Campaign_Performance__c', 'campaigns'),
    entity('Digital_Lead__c', 'campaigns'),
    entity('Whatsapp_Message__c', 'campaigns'),
    entity('Lead', 'sales'),
    entity('Opportunity', 'sales'),
    entity('Account', 'sales'),
    entity('Contact', 'sales'),
    entity('Budget_Head__c', 'budget'),
    entity('Spend__c', 'budget'),
    entity('Incentive__c', 'budget'),
    entity('Team__c', 'teams'),
    entity('Team_Member__c', 'teams'),
    entity('Launch__c', 'inventory'),
    entity('Project__c', 'inventory'),
  ],
} satisfies ModuleSchema;
