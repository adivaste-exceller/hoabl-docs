import type { ModuleSchema } from '@/lib/erd/types';
import { hoablObjects } from '../objects/hoabl-objects';

const entity = (name: string, group: string) => ({ ...hoablObjects[name], group });

export const loan = {
  slug: 'loan',
  title: 'Loan',
  groups: {
    loan: { label: "Loan", color: '#2563eb' },
    checklist: { label: "Checklists & Documents", color: '#7c3aed' },
    banks: { label: "Banks & DSAs", color: '#059669' },
    finance: { label: "Receipts & Companies", color: '#ea580c' },
    core: { label: "HoABL Core", color: '#64748b' },
  },
  entities: [
    entity('Loan_Cases__c', 'loan'),
    entity('Loan_Eligibility_Calculator__c', 'loan'),
    entity('Case', 'loan'),
    entity('Checklist__c', 'checklist'),
    entity('Master_Booking_Checklist__c', 'checklist'),
    entity('Documents__c', 'checklist'),
    entity('Document_Template__c', 'checklist'),
    entity('Escalation_Matrix__c', 'checklist'),
    entity('Bank__c', 'banks'),
    entity('Bank_APFs__c', 'banks'),
    entity('Bank_DSAs__c', 'banks'),
    entity('DSA_Commission__c', 'banks'),
    entity('Bank_Transaction__c', 'banks'),
    entity('Receipt__c', 'finance'),
    entity('Collection__c', 'finance'),
    entity('Company__c', 'finance'),
    entity('Company_Bank_Account__c', 'finance'),
    entity('Application__c', 'core'),
    entity('Booking__c', 'core'),
    entity('Launch__c', 'core'),
    entity('Project__c', 'core'),
    entity('Opportunity', 'core'),
    entity('Team__c', 'core'),
    entity('Team_Member__c', 'core'),
  ],
} satisfies ModuleSchema;
