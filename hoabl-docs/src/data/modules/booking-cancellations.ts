import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const bookingCancellations = {
  slug: 'booking-cancellations',
  title: 'Booking Cancellations',
  groups: {
    core: { label: "Booking Cancellations", color: '#ea580c' },
  },
  entities: [
    entity('Booking__c', 'core'),
    entity('Refund__c', 'core'),
    entity('Registration_Case__c', 'core'),
  ],
} satisfies ModuleSchema;
