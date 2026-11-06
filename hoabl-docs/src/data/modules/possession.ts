import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const possession = {
  slug: 'possession',
  title: 'Possession',
  groups: {
    core: { label: "Possession", color: '#059669' },
  },
  entities: [
    entity('Booking__c', 'core'),
    entity('Demand__c', 'core'),
    entity('Ledger__c', 'core'),
    entity('Registration_Case__c', 'core'),
    entity('Document_Template__c', 'core'),
    entity('Project__c', 'core'),
    entity('Phase__c', 'core'),
    entity('RERA_Phase__c', 'core'),
    entity('Property__c', 'core'),
    entity('Charge_Detail__c', 'core'),
    entity('Receipt__c', 'core'),
    entity('Scheduled_Site_Visit_Slot__c', 'core'),
    entity('Scheduled_Registration_Slot__c', 'core'),
  ],
} satisfies ModuleSchema;
