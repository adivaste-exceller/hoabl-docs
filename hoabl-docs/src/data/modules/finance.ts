import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const finance = {
  slug: 'finance',
  title: 'Finance',
  groups: {
    receipts: { label: "Receipts & Collections", color: '#2563eb' },
    demands: { label: "Demands & Ledger", color: '#7c3aed' },
    banks: { label: "Banks & Companies", color: '#059669' },
    core: { label: "HoABL Core", color: '#ea580c' },
  },
  entities: [
    entity('Receipt__c', 'receipts'),
    entity('E_Receipt__c', 'receipts'),
    entity('Collection__c', 'receipts'),
    entity('Refund__c', 'receipts'),
    entity('Bank_Transaction__c', 'receipts'),
    entity('Demand__c', 'demands'),
    entity('Ledger__c', 'demands'),
    entity('Interest_Rate__c', 'demands'),
    entity('PO_Request__c', 'demands'),
    entity('Bank__c', 'banks'),
    entity('Bank_APFs__c', 'banks'),
    entity('Bank_DSAs__c', 'banks'),
    entity('Company__c', 'banks'),
    entity('Company_Bank_Account__c', 'banks'),
    entity('Application__c', 'core'),
    entity('Booking__c', 'core'),
    entity('Quotation__c', 'core'),
    entity('Registration_Case__c', 'core'),
    entity('Documents__c', 'core'),
    entity('Case', 'core'),
    entity('Channel_Partner__c', 'core'),
    entity('Launch__c', 'core'),
    entity('Project__c', 'core'),
    entity('Postal_Code__c', 'core'),
  ],
} satisfies ModuleSchema;
