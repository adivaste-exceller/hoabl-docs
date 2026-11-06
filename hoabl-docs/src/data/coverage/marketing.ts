import type { CoverageDataset } from '@/lib/coverage';

export const marketingCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'ApplyBankingSchemeControllerTest',
      coveredClasses: [
        { name: 'Ex_CampaignTriggerHandler', covered: 12, total: 12 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_UserService',
      coveredClasses: [
        { name: 'Ex_AccountHandlerServices', covered: 7, total: 8 },
      ],
    },
    {
      testClass: 'TestEx_AccountServices',
      coveredClasses: [
        { name: 'Ex_AccountService', covered: 59, total: 70 },
      ],
    },
    {
      testClass: 'TestEx_CampaignBatchClass',
      coveredClasses: [
        { name: 'Ex_CampaignBatchClass', covered: 10, total: 18 },
      ],
    },
    {
      testClass: 'TestEx_CampaignMetricsController',
      coveredClasses: [
        { name: 'CampaignMetricsController', covered: 27, total: 27 },
      ],
    },
    {
      testClass: 'TestEx_DigitalLeadHandlerServices',
      coveredClasses: [
        { name: 'Ex_DigitalLeadHandlerServices', covered: 179, total: 493 },
      ],
    },
    {
      testClass: 'TestEx_DuplicationHandlerServices',
      coveredClasses: [
        { name: 'Ex_AccountTriggerHandler', covered: 100, total: 122 },
        { name: 'Ex_leadSummaryController', covered: 6, total: 9 },
      ],
    },
    {
      testClass: 'TestEx_LaunchService',
      coveredClasses: [
        { name: 'Ex_LaunchService', covered: 39, total: 61 },
      ],
    },
    {
      testClass: 'TestEx_MeetingHandlerServices',
      coveredClasses: [
        { name: 'Ex_CampaignHandlerServices', covered: 93, total: 118 },
      ],
    },
    {
      testClass: 'TestEx_OpportunityHandlerServices',
      coveredClasses: [
        { name: 'Ex_OpportunityHandlerServices', covered: 67, total: 210 },
        { name: 'Ex_OpportunityTriggerHandler', covered: 132, total: 149 },
      ],
    },
    {
      testClass: 'TestEx_RESTCTILeadIntegration',
      coveredClasses: [
        { name: 'Ex_DigitalLeadTriggerHandler', covered: 13, total: 15 },
      ],
    },
  ],
};
