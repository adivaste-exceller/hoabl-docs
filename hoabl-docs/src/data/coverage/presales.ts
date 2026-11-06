import type { CoverageDataset } from '@/lib/coverage';

export const presalesCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'Ex_DigitalLeadShiftProcessingBatchTest',
      coveredClasses: [
        { name: 'Ex_CTILeadListTriggerHandler', covered: 2, total: 2 },
      ],
    },
    {
      testClass: 'Ex_WordDocumentPreviewControllerTest',
      coveredClasses: [
        { name: 'Ex_INFormat', covered: 27, total: 29 },
      ],
    },
    {
      testClass: 'Test_Ex_RestGetAgentAPI',
      coveredClasses: [
        { name: 'Ex_RestGetAgentAPI', covered: 16, total: 28 },
      ],
    },
    {
      testClass: 'Test_Ex_Roster_Management',
      coveredClasses: [
        { name: 'Ex_TeamMemberTriggerHandler', covered: 19, total: 22 },
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
      testClass: 'TestEx_AwekeningFormController',
      coveredClasses: [
        { name: 'Ex_LeadSourceDashboard', covered: 7, total: 7 },
      ],
    },
    {
      testClass: 'TestEx_CallDispositionController',
      coveredClasses: [
        { name: 'Ex_CallDispositionController', covered: 24, total: 123 },
      ],
    },
    {
      testClass: 'TestEx_ClickToCallController',
      coveredClasses: [
        { name: 'Ex_ClickToCallController', covered: 42, total: 362 },
      ],
    },
    {
      testClass: 'TestEx_convoxtaskdisportionController',
      coveredClasses: [
        { name: 'ex_convoxtaskdisportionController', covered: 36, total: 106 },
      ],
    },
    {
      testClass: 'TestEx_CssWelcomeCallChecklist',
      coveredClasses: [
        { name: 'Ex_TaskTriggerHandler', covered: 35, total: 60 },
      ],
    },
    {
      testClass: 'TestEx_CTIDashboard',
      coveredClasses: [
        { name: 'Ex_CTIDashboard', covered: 138, total: 232 },
        { name: 'Ex_CTIDashboardReuploadController', covered: 53, total: 68 },
      ],
    },
    {
      testClass: 'TestEx_CTILeadDeleteServices',
      coveredClasses: [
        { name: 'Ex_CTILeadDeleteServices', covered: 55, total: 61 },
      ],
    },
    {
      testClass: 'TestEx_CTILeadListHandler',
      coveredClasses: [
        { name: 'Ex_CTILeadListHandlerServices', covered: 18, total: 19 },
        { name: 'Ex_ProcessTriggerHandler', covered: 12, total: 12 },
      ],
    },
    {
      testClass: 'TestEx_CTILeadUploadServices',
      coveredClasses: [
        { name: 'Ex_CTILeadUploadServices', covered: 321, total: 720 },
      ],
    },
    {
      testClass: 'TestEx_DigitalLeadHandlerServices',
      coveredClasses: [
        { name: 'Ex_DigitalLeadHandlerServices', covered: 179, total: 493 },
      ],
    },
    {
      testClass: 'TestEx_DirectOpportunityCreationPresales',
      coveredClasses: [
        { name: 'Ex_DirectOpportunityCreationPresales', covered: 7, total: 185 },
      ],
    },
    {
      testClass: 'TestEx_DocumentDispatchController',
      coveredClasses: [
        { name: 'Ex_DocumentDispatchController', covered: 25, total: 39 },
      ],
    },
    {
      testClass: 'TestEx_DocumentHandler',
      coveredClasses: [
        { name: 'Ex_DocumentHandler', covered: 15, total: 230 },
      ],
    },
    {
      testClass: 'TestEx_DuplicationHandlerServices',
      coveredClasses: [
        { name: 'Ex_AccountTriggerHandler', covered: 100, total: 122 },
        { name: 'Ex_ContactTriggerHandler', covered: 22, total: 23 },
        { name: 'Ex_LeadConversion', covered: 44, total: 51 },
        { name: 'Ex_LeadHandlerServices', covered: 144, total: 314 },
        { name: 'Ex_leadSummaryController', covered: 6, total: 9 },
        { name: 'Ex_LeadTriggerHandler', covered: 129, total: 161 },
        { name: 'Ex_LeadValidityExpiryBatch', covered: 15, total: 16 },
      ],
    },
    {
      testClass: 'TestEx_getAllAccountDetails',
      coveredClasses: [
        { name: 'Ex_getAllAccountDetails', covered: 57, total: 60 },
      ],
    },
    {
      testClass: 'TestEx_LaunchService',
      coveredClasses: [
        { name: 'Ex_LaunchService', covered: 39, total: 61 },
      ],
    },
    {
      testClass: 'TestEx_NumberToWordsConverter',
      coveredClasses: [
        { name: 'Ex_NumberToWordsConverter', covered: 156, total: 243 },
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
      testClass: 'TestEx_POApprovalController',
      coveredClasses: [
        { name: 'Ex_POApprovalController', covered: 34, total: 34 },
        { name: 'Ex_PORequestTriggerHandler', covered: 6, total: 6 },
      ],
    },
    {
      testClass: 'TestEx_PORequestSpendBatch',
      coveredClasses: [
        { name: 'Ex_PORequestSpendBatch', covered: 20, total: 23 },
      ],
    },
    {
      testClass: 'TestEx_ProcessHandlerServices',
      coveredClasses: [
        { name: 'Ex_ProcessHandlerServices', covered: 19, total: 31 },
      ],
    },
    {
      testClass: 'TestEx_ProjectService',
      coveredClasses: [
        { name: 'Ex_ProjectService', covered: 39, total: 61 },
      ],
    },
    {
      testClass: 'TestEx_ProjectTrigger',
      coveredClasses: [
        { name: 'Ex_ProjectHandlerServices', covered: 37, total: 38 },
      ],
    },
    {
      testClass: 'TestEx_RequestPOController',
      coveredClasses: [
        { name: 'Ex_RequestPOController', covered: 55, total: 57 },
      ],
    },
    {
      testClass: 'TestEx_RestAccountService',
      coveredClasses: [
        { name: 'Ex_RestAccountService', covered: 13, total: 62 },
      ],
    },
    {
      testClass: 'TestEx_RestAccountUpdateService',
      coveredClasses: [
        { name: 'Ex_RestAccountUpdateService', covered: 62, total: 110 },
      ],
    },
    {
      testClass: 'TestEx_RestCallbakConvox',
      coveredClasses: [
        { name: 'Ex_RestCallbakConvox', covered: 34, total: 57 },
      ],
    },
    {
      testClass: 'TestEx_RestCreateTask',
      coveredClasses: [
        { name: 'Ex_RestCreateTask', covered: 31, total: 50 },
      ],
    },
    {
      testClass: 'TestEx_RESTCTILeadIntegration',
      coveredClasses: [
        { name: 'Ex_DigitalLeadTriggerHandler', covered: 13, total: 15 },
        { name: 'Ex_RESTCTILeadIntegration', covered: 13, total: 75 },
      ],
    },
    {
      testClass: 'TestEx_RestCTILeadUpdateService',
      coveredClasses: [
        { name: 'Ex_RestCTILeadUpdateService', covered: 20, total: 115 },
      ],
    },
    {
      testClass: 'TestEx_RESTCustomerIdentityAPI',
      coveredClasses: [
        { name: 'Ex_RESTCustomerIdentityAPI', covered: 14, total: 123 },
      ],
    },
    {
      testClass: 'TestEx_RestGetAccountDetails',
      coveredClasses: [
        { name: 'Ex_RestGetAccountDetails', covered: 117, total: 135 },
      ],
    },
    {
      testClass: 'TestEx_RestGetAllLauchDetails',
      coveredClasses: [
        { name: 'Ex_RestGetAllLauchDetails', covered: 37, total: 46 },
      ],
    },
    {
      testClass: 'TestEx_RestGetAllProjectDetails',
      coveredClasses: [
        { name: 'Ex_RestGetAllProjectDetails', covered: 11, total: 48 },
      ],
    },
    {
      testClass: 'TestEx_RestGetLaunchDetails',
      coveredClasses: [
        { name: 'Ex_RestGetLaunchDetails', covered: 12, total: 46 },
      ],
    },
    {
      testClass: 'TestEx_RestGetProjectDetails',
      coveredClasses: [
        { name: 'Ex_RestGetProjectDetails', covered: 15, total: 49 },
      ],
    },
    {
      testClass: 'TestEx_RestTaskDispositionAPI',
      coveredClasses: [
        { name: 'Ex_RestTaskDispositionAPI', covered: 102, total: 120 },
      ],
    },
    {
      testClass: 'Testex_TaskCreationController',
      coveredClasses: [
        { name: 'ex_TaskCreationController', covered: 87, total: 114 },
      ],
    },
    {
      testClass: 'TestEx_TaskHandlerServices',
      coveredClasses: [
        { name: 'Ex_TaskHandlerServices', covered: 6, total: 320 },
      ],
    },
    {
      testClass: 'TestEx_TeamMemberHandlerServices',
      coveredClasses: [
        { name: 'Ex_TeamMemberHandlerServices', covered: 12, total: 16 },
      ],
    },
    {
      testClass: 'TestEx_updateEmailonAccount',
      coveredClasses: [
        { name: 'Ex_updateEmailonAccount', covered: 17, total: 20 },
      ],
    },
    {
      testClass: 'TestMultiSelectComboboxController',
      coveredClasses: [
        { name: 'MultiSelectComboboxController', covered: 81, total: 104 },
      ],
    },
    {
      testClass: 'TestSearchPhoneApexClass',
      coveredClasses: [
        { name: 'searchPhoneApexClass', covered: 3, total: 63 },
      ],
    },
  ],
};
