import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const registration = {
  slug: 'registration',
  title: 'Registration',
  groups: {
    core: { label: "Registration", color: '#0891b2' },
  },
  entities: [
    entity('Registration_Case__c', 'core'),
    entity('Booking__c', 'core'),
    entity('Scheduled_Registration_Slot__c', 'core'),
    entity('Charge_Detail__c', 'core'),
    entity('Registration_Office__c', 'core'),
    entity('Registration_Slot__c', 'core'),
    entity('Receipt__c', 'core'),
    entity('Project__c', 'core'),
  ],
} satisfies ModuleSchema;
