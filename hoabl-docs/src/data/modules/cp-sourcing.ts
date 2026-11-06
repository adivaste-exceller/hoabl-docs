import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const cpSourcing = {
  slug: 'cp-sourcing',
  title: 'CP Sourcing',
  groups: {
    core: { label: "CP Sourcing", color: '#2563eb' },
  },
  entities: [
    entity('Channel_Partner__c', 'core'),
    entity('Contact', 'core'),
    entity('CP_Launch__c', 'core'),
    entity('Opportunity', 'core'),
    entity('CP_PO__c', 'core'),
    entity('Booking__c', 'core'),
    entity('CP_PO_Line_Item__c', 'core'),
    entity('Meeting__c', 'core'),
    entity('CP_Activity__c', 'core'),
    entity('Route__c', 'core'),
    entity('Day_Plan__c', 'core'),
    entity('Form_Questions__c', 'core'),
    entity('Form_Answer__c', 'core'),
    entity('Project__c', 'core'),
    entity('Launch__c', 'core'),
    entity('Brokerage_Slab__c', 'core'),
    entity('Spot_Brokerage__c', 'core'),
    entity('AOP_Brokerage_Plan__c', 'core'),
  ],
} satisfies ModuleSchema;
