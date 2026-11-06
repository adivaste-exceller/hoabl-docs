import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const caseManagement = {
  slug: 'case-management',
  title: 'Case Management',
  groups: {
    core: { label: "Case Management", color: '#7c3aed' },
  },
  entities: [
    entity('Case', 'core'),
    entity('Application__c', 'core'),
    entity('Booking__c', 'core'),
    entity('Account', 'core'),
    entity('Project__c', 'core'),
    entity('Task', 'core'),
  ],
} satisfies ModuleSchema;
