import type { CoverageDataset } from '@/lib/coverage';

export const loyaltyCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'TestEx_CallDispositionController',
      coveredClasses: [
        { name: 'Ex_CallDispositionController', covered: 24, total: 123 },
      ],
    },
    {
      testClass: 'TestEx_createNewAccount',
      coveredClasses: [
        { name: 'Ex_CreatePersonAccountController', covered: 10, total: 10 },
      ],
    },
    {
      testClass: 'TestEx_DigitalLeadHandlerServices',
      coveredClasses: [
        { name: 'Ex_DigitalLeadHandlerServices', covered: 179, total: 493 },
      ],
    },
    {
      testClass: 'TestEx_IVRDashboard',
      coveredClasses: [
        { name: 'Ex_IVRDashboard', covered: 6, total: 724 },
      ],
    },
    {
      testClass: 'TestEx_OpportunityHandlerServices',
      coveredClasses: [
        { name: 'Ex_OpportunityTriggerHandler', covered: 132, total: 149 },
      ],
    },
    {
      testClass: 'TestEx_Quotation',
      coveredClasses: [
        { name: 'Ex_InventoryPriceManagementServices', covered: 1201, total: 1603 },
      ],
    },
    {
      testClass: 'TestEx_ReferralAndEnquiryFormController',
      coveredClasses: [
        { name: 'Ex_ReferralAndEnquiryFormController', covered: 24, total: 173 },
      ],
    },
    {
      testClass: 'Testex_TaskCreationController',
      coveredClasses: [
        { name: 'ex_TaskCreationController', covered: 87, total: 114 },
      ],
    },
  ],
};
