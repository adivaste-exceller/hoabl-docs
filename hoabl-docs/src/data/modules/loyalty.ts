import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const loyalty = {
  slug: 'loyalty',
  title: 'Loyalty',
  groups: {
    core: { label: "Loyalty", color: '#db2777' },
  },
  entities: [
    entity('Account', 'core'),
    entity('Opportunity', 'core'),
    entity('Task', 'core'),
    entity('Launch__c', 'core'),
  ],
} satisfies ModuleSchema;
