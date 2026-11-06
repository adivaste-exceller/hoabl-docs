import type { CoverageDataset } from '@/lib/coverage';

export const financeCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'BulkDemandsReceiptsDashboardTest',
      coveredClasses: [
        { name: 'Ex_CompanyBankAccountTriggerHandler', covered: 10, total: 10 },
      ],
    },
    {
      testClass: 'Ex_BrokerageApprovalDashboardTests',
      coveredClasses: [
        { name: 'Ex_BrokerageApprovalDashboardController', covered: 10, total: 14 },
      ],
    },
    {
      testClass: 'TestEx_ApexSharingManagementServices',
      coveredClasses: [
        { name: 'Ex_ApexSharingManagementServices', covered: 222, total: 314 },
      ],
    },
    {
      testClass: 'TestEx_AppCancellationDocVerifier',
      coveredClasses: [
        { name: 'Ex_AppCancellationDocVerifierController', covered: 97, total: 124 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationCancellationCase',
      coveredClasses: [
        { name: 'Ex_ApplicationCancellationCaseController', covered: 103, total: 161 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationCancelMessagingBatch',
      coveredClasses: [
        { name: 'Ex_ApplicationCancelMessagingBatch', covered: 11, total: 11 },
        { name: 'Ex_ApplicationCancelMessagingHandler', covered: 390, total: 675 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationTriggerHandler',
      coveredClasses: [
        { name: 'Ex_ApplicationTriggerHandler', covered: 144, total: 228 },
      ],
    },
    {
      testClass: 'TestEx_BankTransactionReceiptController',
      coveredClasses: [
        { name: 'Ex_BankTransactionReceiptController', covered: 25, total: 162 },
      ],
    },
    {
      testClass: 'TestEx_BookingHandlerServices',
      coveredClasses: [
        { name: 'Ex_BookingHandlerServices', covered: 448, total: 896 },
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
      testClass: 'TestEx_CompanyBankAccount',
      coveredClasses: [
        { name: 'Ex_CompanyBankAccountHandlerServices', covered: 43, total: 51 },
      ],
    },
    {
      testClass: 'TestEx_eReceiptHandler',
      coveredClasses: [
        { name: 'Ex_BankTransactionTriggerHandler', covered: 20, total: 20 },
        { name: 'Ex_eReceiptHandler', covered: 56, total: 190 },
      ],
    },
    {
      testClass: 'TestEx_FinanceDashboardController',
      coveredClasses: [
        { name: 'ex_FinanceApprovalDashboardController', covered: 38, total: 110 },
      ],
    },
    {
      testClass: 'TestEx_KycFormController',
      coveredClasses: [
        { name: 'Ex_ApplicantTriggerHandler', covered: 29, total: 31 },
      ],
    },
    {
      testClass: 'TestEx_MeetingHandlerServices',
      coveredClasses: [
        { name: 'Ex_ApplicationHandlerServices', covered: 143, total: 311 },
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
      testClass: 'TestEx_ReceiptApprovalDashboard',
      coveredClasses: [
        { name: 'Ex_ReceiptApprovalDashboard', covered: 101, total: 122 },
      ],
    },
    {
      testClass: 'TestEx_ReceiptHandlerServices',
      coveredClasses: [
        { name: 'Ex_ReceiptHandlerServices', covered: 487, total: 1263 },
        { name: 'Ex_ReceiptTriggerHandler', covered: 267, total: 319 },
      ],
    },
    {
      testClass: 'TestEx_ReceiptViewDashboard',
      coveredClasses: [
        { name: 'Ex_ReceiptViewDashboard', covered: 96, total: 221 },
      ],
    },
    {
      testClass: 'TestEx_RefundHelpdeskDashboard',
      coveredClasses: [
        { name: 'Ex_FinanceTeamRefundDashboardController', covered: 111, total: 146 },
        { name: 'Ex_RefundHelpdeskDashboardController', covered: 83, total: 132 },
      ],
    },
    {
      testClass: 'TestEx_RefundTriggerHandler',
      coveredClasses: [
        { name: 'Ex_RefundHandlerServices', covered: 124, total: 163 },
        { name: 'Ex_RefundTriggerHandler', covered: 19, total: 65 },
      ],
    },
    {
      testClass: 'TestEx_RestEReceiptAPI',
      coveredClasses: [
        { name: 'Ex_RestEReceiptAPI', covered: 105, total: 228 },
      ],
    },
  ],
};
