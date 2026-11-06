import type { CoverageDataset } from '@/lib/coverage';

export const mssCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'ApplyBankingSchemeControllerTest',
      coveredClasses: [
        { name: 'Ex_CampaignTriggerHandler', covered: 12, total: 12 },
      ],
    },
    {
      testClass: 'Ex_DigitalLeadShiftProcessingBatchTest',
      coveredClasses: [
        { name: 'Ex_DigitalLeadShiftProcessingBatch', covered: 159, total: 264 },
      ],
    },
    {
      testClass: 'Ex_QuotationDateInvalidationBatchTest',
      coveredClasses: [
        { name: 'Ex_QuotationDateInvalidationBatch', covered: 45, total: 58 },
      ],
    },
    {
      testClass: 'Ex_WordDocumentPreviewControllerTest',
      coveredClasses: [
        { name: 'Ex_ChargeDetailsTriggerHandler', covered: 7, total: 7 },
        { name: 'Ex_ChargeDetailTrigger', covered: 2, total: 2 },
        { name: 'Ex_DocumentTemplateTrigerHandler', covered: 50, total: 59 },
        { name: 'Ex_RERAPhaseTriggerHandler', covered: 13, total: 28 },
      ],
    },
    {
      testClass: 'Test_BookingBatchUpdate',
      coveredClasses: [
        { name: 'Ex_QuotationTriggerHandler', covered: 11, total: 13 },
      ],
    },
    {
      testClass: 'Test_Ex_PrintQuotationNewViewController',
      coveredClasses: [
        { name: 'Ex_PrintQuotationNewViewController', covered: 483, total: 567 },
      ],
    },
    {
      testClass: 'Test_Ex_Roster_Management',
      coveredClasses: [
        { name: 'Ex_TeamMemberTriggerHandler', covered: 19, total: 22 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_CMS',
      coveredClasses: [
        { name: 'CustomerPortal_CMSLaunchController', covered: 154, total: 301 },
        { name: 'Ex_LaunchTriggerHandler', covered: 31, total: 34 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_ContentProvider',
      coveredClasses: [
        { name: 'CustomerPortal_LaunchContentProvider', covered: 92, total: 102 },
      ],
    },
    {
      testClass: 'TestEx_AddDiscountsDashboardController',
      coveredClasses: [
        { name: 'Ex_AddDiscountsDashboardController', covered: 68, total: 80 },
      ],
    },
    {
      testClass: 'TestEx_BankAPFsTriggerhanlderservices',
      coveredClasses: [
        { name: 'Ex_BankAPFsHandlerService', covered: 19, total: 20 },
        { name: 'Ex_BankAPFsTriggerHandler', covered: 15, total: 15 },
      ],
    },
    {
      testClass: 'TestEx_BankTransactionReceiptController',
      coveredClasses: [
        { name: 'Ex_BankTransactionReceiptController', covered: 25, total: 162 },
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
      testClass: 'TestEx_Clone_PaymentScheme',
      coveredClasses: [
        { name: 'Ex_Clone_PaymentScheme', covered: 223, total: 236 },
        { name: 'Ex_PropertyTriggerHandler', covered: 40, total: 50 },
      ],
    },
    {
      testClass: 'TestEx_CompanyBankAccount',
      coveredClasses: [
        { name: 'Ex_CompanyBankAccountHandlerServices', covered: 43, total: 51 },
      ],
    },
    {
      testClass: 'TestEx_CPActivityController',
      coveredClasses: [
        { name: 'Ex_CPLaunchHandlerServices', covered: 81, total: 215 },
      ],
    },
    {
      testClass: 'TestEx_CPLaunchSharing',
      coveredClasses: [
        { name: 'Ex_CPLaunchTriggerHandler', covered: 13, total: 15 },
      ],
    },
    {
      testClass: 'TestEx_CreateCPLaunchController',
      coveredClasses: [
        { name: 'Ex_CreateCPLaunchController', covered: 39, total: 45 },
      ],
    },
    {
      testClass: 'TestEx_CTILeadListHandler',
      coveredClasses: [
        { name: 'Ex_ProcessTriggerHandler', covered: 12, total: 12 },
      ],
    },
    {
      testClass: 'TestEx_DigitalLeadHandlerServices',
      coveredClasses: [
        { name: 'Ex_DigitalLeadHandlerServices', covered: 179, total: 493 },
      ],
    },
    {
      testClass: 'TestEx_DocumentTemplateTrigger',
      coveredClasses: [
        { name: 'Ex_DocumentTemplateTrigger', covered: 6, total: 6 },
      ],
    },
    {
      testClass: 'TestEx_EditPropertyTypeinProperty',
      coveredClasses: [
        { name: 'Ex_EditPropertyTypeinPropertyController', covered: 4, total: 4 },
      ],
    },
    {
      testClass: 'TestEx_FormQuestionsTriggerHandler',
      coveredClasses: [
        { name: 'Ex_FormQuestionsTrigger', covered: 5, total: 5 },
        { name: 'Ex_FormQuestionsTriggerHandler', covered: 14, total: 32 },
      ],
    },
    {
      testClass: 'TestEx_getAllRERAPhaseDetails',
      coveredClasses: [
        { name: 'Ex_getAllRERAPhaseDetails', covered: 24, total: 33 },
        { name: 'Ex_RERAPhaseTrigger', covered: 5, total: 6 },
      ],
    },
    {
      testClass: 'TestEx_getPropertyType',
      coveredClasses: [
        { name: 'Ex_getPropertyType', covered: 15, total: 50 },
      ],
    },
    {
      testClass: 'TestEx_IncentiveManagementServices',
      coveredClasses: [
        { name: 'Ex_IncentiveManagementServices', covered: 410, total: 605 },
      ],
    },
    {
      testClass: 'TestEx_LaunchService',
      coveredClasses: [
        { name: 'Ex_LaunchService', covered: 39, total: 61 },
      ],
    },
    {
      testClass: 'TestEx_LaunchTrigger',
      coveredClasses: [
        { name: 'Ex_LaunchTrigger', covered: 5, total: 6 },
      ],
    },
    {
      testClass: 'TestEx_LoanCaseTriggerHandlerServices',
      coveredClasses: [
        { name: 'Ex_BankDSAHandlerServices', covered: 23, total: 24 },
        { name: 'Ex_BankDSATriggerHandler', covered: 17, total: 19 },
      ],
    },
    {
      testClass: 'TestEx_managePaymentSchemeController',
      coveredClasses: [
        { name: 'Ex_managePaymentSchemeController', covered: 156, total: 177 },
      ],
    },
    {
      testClass: 'TestEx_MeetingHandlerServices',
      coveredClasses: [
        { name: 'Ex_CampaignHandlerServices', covered: 93, total: 118 },
      ],
    },
    {
      testClass: 'TestEx_PrintQuotationController',
      coveredClasses: [
        { name: 'Ex_PrintQuotationController', covered: 136, total: 367 },
        { name: 'Ex_PrintQuotationResidentialController', covered: 342, total: 376 },
        { name: 'Ex_QuotationApprovalAttachmentController', covered: 346, total: 380 },
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
      testClass: 'TestEx_ProjectTranscriptController',
      coveredClasses: [
        { name: 'Ex_ProjectTranscriptController', covered: 6, total: 28 },
      ],
    },
    {
      testClass: 'TestEx_ProjectTrigger',
      coveredClasses: [
        { name: 'Ex_ProjectHandlerServices', covered: 37, total: 38 },
        { name: 'Ex_ProjectTrigger', covered: 5, total: 6 },
        { name: 'Ex_ProjectTriggerHandler', covered: 27, total: 34 },
      ],
    },
    {
      testClass: 'TestEx_PropertyFinalizingController',
      coveredClasses: [
        { name: 'Ex_PropertyFinalizingController', covered: 54, total: 56 },
        { name: 'Ex_QuotationHandlerService', covered: 18, total: 22 },
      ],
    },
    {
      testClass: 'TestEx_PropertyHandlerServices',
      coveredClasses: [
        { name: 'Ex_PropertyHandlerServices', covered: 22, total: 62 },
      ],
    },
    {
      testClass: 'TestEx_PropertySelectionDashboard',
      coveredClasses: [
        { name: 'Ex_PropertySelectionDashboard', covered: 84, total: 108 },
      ],
    },
    {
      testClass: 'TestEx_PropertyShorlistingController',
      coveredClasses: [
        { name: 'Ex_PropertyShorlistingController', covered: 41, total: 52 },
      ],
    },
    {
      testClass: 'TestEx_PropertyTypeCharge',
      coveredClasses: [
        { name: 'Ex_PropertyTypeChargesHandlerServices', covered: 55, total: 71 },
        { name: 'Ex_PropertyTypeChargesTriggerHandler', covered: 47, total: 75 },
      ],
    },
    {
      testClass: 'TestEx_PropertyTypeServices',
      coveredClasses: [
        { name: 'Ex_PropertyTypeServices', covered: 26, total: 62 },
      ],
    },
    {
      testClass: 'TestEx_PTCDashboardController',
      coveredClasses: [
        { name: 'Ex_PropertyTypetriggerHandler', covered: 21, total: 30 },
      ],
    },
    {
      testClass: 'TestEx_QRLaunchController',
      coveredClasses: [
        { name: 'Ex_QRLaunchController', covered: 5, total: 65 },
      ],
    },
    {
      testClass: 'TestEx_Quotation',
      coveredClasses: [
        { name: 'Ex_EditQuotation', covered: 919, total: 1341 },
        { name: 'Ex_GenerateQuotation', covered: 276, total: 338 },
      ],
    },
    {
      testClass: 'TestEx_RefundHelpdeskDashboard',
      coveredClasses: [
        { name: 'Ex_FinanceTeamRefundDashboardController', covered: 111, total: 146 },
      ],
    },
    {
      testClass: 'TestEx_RERAPhaseDetailsAPI',
      coveredClasses: [
        { name: 'Ex_RERAPhaseDetailsAPI', covered: 12, total: 40 },
      ],
    },
    {
      testClass: 'TestEx_RERAServices',
      coveredClasses: [
        { name: 'Ex_RERAPhaseServices', covered: 33, total: 57 },
      ],
    },
    {
      testClass: 'TestEx_RESTCTILeadIntegration',
      coveredClasses: [
        { name: 'Ex_DigitalLeadTriggerHandler', covered: 13, total: 15 },
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
      testClass: 'TestEx_TeamMemberHandlerServices',
      coveredClasses: [
        { name: 'Ex_TeamMemberHandlerServices', covered: 12, total: 16 },
      ],
    },
  ],
};
