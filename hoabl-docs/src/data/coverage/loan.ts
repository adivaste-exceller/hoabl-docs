import type { CoverageDataset } from '@/lib/coverage';

export const loanCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'Ex_WordDocumentPreviewControllerTest',
      coveredClasses: [
        { name: 'Ex_INFormat', covered: 27, total: 29 },
        { name: 'Ex_WordDocumentPreviewController', covered: 649, total: 1723 },
      ],
    },
    {
      testClass: 'TestDocumentGenerationServices',
      coveredClasses: [
        { name: 'DocumentGenerationServices', covered: 21, total: 720 },
      ],
    },
    {
      testClass: 'TestEx_ApexSharingManagementServices',
      coveredClasses: [
        { name: 'Ex_ApexSharingForBooking', covered: 68, total: 70 },
        { name: 'Ex_ApexSharingManagementServices', covered: 222, total: 314 },
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
      testClass: 'TestEx_BookingHandlerServices',
      coveredClasses: [
        { name: 'Ex_BookingHandlerServices', covered: 448, total: 896 },
      ],
    },
    {
      testClass: 'TestEx_BookingTriggerHandler',
      coveredClasses: [
        { name: 'Ex_BookingTriggerHandler', covered: 297, total: 712 },
      ],
    },
    {
      testClass: 'TestEx_CaseAgeBatch',
      coveredClasses: [
        { name: 'Ex_CaseAgeBatch', covered: 143, total: 185 },
      ],
    },
    {
      testClass: 'TestEx_CaseTriggerHandler',
      coveredClasses: [
        { name: 'Ex_CaseHandlerServices', covered: 158, total: 318 },
        { name: 'Ex_CaseTriggerHandler', covered: 106, total: 127 },
      ],
    },
    {
      testClass: 'TestEx_ChecklistController',
      coveredClasses: [
        { name: 'Ex_ChecklistController', covered: 14, total: 16 },
      ],
    },
    {
      testClass: 'TestEx_CssWelcomeCallChecklist',
      coveredClasses: [
        { name: 'Ex_TaskTriggerHandler', covered: 35, total: 60 },
      ],
    },
    {
      testClass: 'TestEx_DocumentHandler',
      coveredClasses: [
        { name: 'Ex_DocumentHandler', covered: 15, total: 230 },
      ],
    },
    {
      testClass: 'TestEx_LaunchService',
      coveredClasses: [
        { name: 'Ex_LaunchService', covered: 39, total: 61 },
      ],
    },
    {
      testClass: 'TestEx_LoanCaseReminderBatch',
      coveredClasses: [
        { name: 'Ex_LoanCaseReminderBatch', covered: 61, total: 68 },
      ],
    },
    {
      testClass: 'TestEx_LoanCaseTriggerHandlerServices',
      coveredClasses: [
        { name: 'Ex_BankDSAHandlerServices', covered: 23, total: 24 },
        { name: 'Ex_BankDSATriggerHandler', covered: 17, total: 19 },
        { name: 'Ex_LoanCaseHandlerServices', covered: 176, total: 222 },
        { name: 'Ex_LoanCaseTriggerHandler', covered: 53, total: 63 },
      ],
    },
    {
      testClass: 'TestEx_LoanDocumentChecklist',
      coveredClasses: [
        { name: 'Ex_LoanDocumentChecklist', covered: 18, total: 80 },
      ],
    },
    {
      testClass: 'TestEx_NumberToWordsConverter',
      coveredClasses: [
        { name: 'Ex_NumberToWordsConverter', covered: 156, total: 243 },
      ],
    },
    {
      testClass: 'TestEx_OPDocAttachment',
      coveredClasses: [
        { name: 'Ex_OPDocAttachment', covered: 65, total: 85 },
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
        { name: 'Ex_ProjectTriggerHandler', covered: 27, total: 34 },
      ],
    },
    {
      testClass: 'TestEx_ReceiptViewDashboard',
      coveredClasses: [
        { name: 'Ex_ReceiptViewDashboard', covered: 96, total: 221 },
      ],
    },
    {
      testClass: 'TestEx_RestCreateTask',
      coveredClasses: [
        { name: 'Ex_RestCreateTask', covered: 31, total: 50 },
      ],
    },
    {
      testClass: 'TestEx_RestTaskDispositionAPI',
      coveredClasses: [
        { name: 'Ex_RestTaskDispositionAPI', covered: 102, total: 120 },
      ],
    },
    {
      testClass: 'TestEx_TaskHandlerServices',
      coveredClasses: [
        { name: 'Ex_TaskHandlerServices', covered: 6, total: 320 },
      ],
    },
  ],
};
