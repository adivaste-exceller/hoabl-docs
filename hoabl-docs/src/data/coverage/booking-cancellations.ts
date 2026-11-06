import type { CoverageDataset } from '@/lib/coverage';

export const bookingCancellationsCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'Ex_RegCaseApprovalControllerTest',
      coveredClasses: [
        { name: 'Ex_RegCaseApprovalController', covered: 27, total: 50 },
        { name: 'Ex_RegistrationCaseTrigger', covered: 8, total: 8 },
      ],
    },
    {
      testClass: 'Ex_WordDocumentPreviewControllerTest',
      coveredClasses: [
        { name: 'Ex_SendIntimationEmailTrigger', covered: 20, total: 20 },
        { name: 'Ex_WordDocumentPreviewController', covered: 649, total: 1723 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_MilestoneServices',
      coveredClasses: [
        { name: 'CustomerPortal_MilestoneServices', covered: 90, total: 104 },
      ],
    },
    {
      testClass: 'TestDocumentGenerationServices',
      coveredClasses: [
        { name: 'DocumentGenerationServices', covered: 21, total: 720 },
      ],
    },
    {
      testClass: 'TestEx_AggrravatedCustApprovalController',
      coveredClasses: [
        { name: 'Ex_AggrravatedCustApprovalController', covered: 34, total: 38 },
        { name: 'Ex_RefundTrigger', covered: 6, total: 6 },
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
        { name: 'Ex_ApplicationCancelMessagingHandler', covered: 390, total: 675 },
      ],
    },
    {
      testClass: 'TestEx_BookingCancellationController',
      coveredClasses: [
        { name: 'Ex_bookingCancellationController', covered: 269, total: 315 },
      ],
    },
    {
      testClass: 'TestEx_BookingHandlerServices',
      coveredClasses: [
        { name: 'Ex_BookingHandlerServices', covered: 448, total: 896 },
      ],
    },
    {
      testClass: 'TestEx_CemWiseReportDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_CemWiseReportDashboardCtrl', covered: 266, total: 279 },
      ],
    },
    {
      testClass: 'TestEx_CollectionSummaryDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_CollectionSummaryDashboardCtrl', covered: 35, total: 278 },
      ],
    },
    {
      testClass: 'TestEx_ContentDocumentLinkTriggerHandler',
      coveredClasses: [
        { name: 'Ex_ContentDocumentLinkTriggerHandler', covered: 11, total: 66 },
      ],
    },
    {
      testClass: 'TestEx_CustomerServiceDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_CustomerServiceDashboardCtrl', covered: 42, total: 106 },
      ],
    },
    {
      testClass: 'TestEx_DocumentDispatchController',
      coveredClasses: [
        { name: 'Ex_DocumentDispatchController', covered: 25, total: 39 },
      ],
    },
    {
      testClass: 'TestEx_DocumentHandoverController',
      coveredClasses: [
        { name: 'Ex_DocumentHandoverController', covered: 22, total: 55 },
      ],
    },
    {
      testClass: 'TestEx_InitiateBookingCancellation',
      coveredClasses: [
        { name: 'Ex_InitiateBookingCancellationController', covered: 43, total: 48 },
      ],
    },
    {
      testClass: 'TestEx_IVRDashboard',
      coveredClasses: [
        { name: 'Ex_IVRDashboard', covered: 6, total: 724 },
      ],
    },
    {
      testClass: 'TestEx_MeetingHandlerServices',
      coveredClasses: [
        { name: 'Ex_ApplicationHandlerServices', covered: 143, total: 311 },
      ],
    },
    {
      testClass: 'TestEx_PrebookingCancellationController',
      coveredClasses: [
        { name: 'Ex_PrebookingCancellationController', covered: 114, total: 545 },
      ],
    },
    {
      testClass: 'TestEx_PrePossessionCalculator',
      coveredClasses: [
        { name: 'Ex_PrePossessionCalculator', covered: 92, total: 132 },
      ],
    },
    {
      testClass: 'TestEx_PreTerminationController',
      coveredClasses: [
        { name: 'Ex_PreTerminationController', covered: 205, total: 219 },
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
      testClass: 'TestEx_RegCaseStatusDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_RegCaseStatusDashboardCtrl', covered: 60, total: 183 },
      ],
    },
    {
      testClass: 'TestEx_RegistrationBatchClass',
      coveredClasses: [
        { name: 'Ex_RegistrationBatchClass', covered: 107, total: 114 },
      ],
    },
    {
      testClass: 'TestEx_RegistrationCaseController',
      coveredClasses: [
        { name: 'Ex_RegistrationCaseController', covered: 87, total: 112 },
      ],
    },
    {
      testClass: 'TestEx_RegistrationCaseHandlerServices',
      coveredClasses: [
        { name: 'Ex_RegistrationApprovalConfirmationPopup', covered: 28, total: 30 },
        { name: 'Ex_RegistrationCaseHandler', covered: 63, total: 74 },
        { name: 'Ex_RegistrationCaseHandlerServices', covered: 59, total: 252 },
      ],
    },
    {
      testClass: 'TestEx_RegistrationReminder1BatchClass',
      coveredClasses: [
        { name: 'Ex_RegistrationReminder1BatchClass', covered: 12, total: 207 },
        { name: 'Ex_SendIntimationEmailHandler', covered: 254, total: 306 },
      ],
    },
    {
      testClass: 'TestEx_RegistrationReminder2BatchClass',
      coveredClasses: [
        { name: 'Ex_RegistrationReminder2BatchClass', covered: 100, total: 112 },
      ],
    },
    {
      testClass: 'TestEx_RegistrationReminder3BatchClass',
      coveredClasses: [
        { name: 'Ex_RegistrationReminder3BatchClass', covered: 130, total: 152 },
      ],
    },
    {
      testClass: 'TestEx_RESTCustomerIdentityAPI',
      coveredClasses: [
        { name: 'Ex_RESTCustomerIdentityAPI', covered: 14, total: 123 },
      ],
    },
    {
      testClass: 'TestEx_SDRChecklistController',
      coveredClasses: [
        { name: 'Ex_SDRChecklistController', covered: 95, total: 462 },
      ],
    },
    {
      testClass: 'TestEx_sendDOCReminderEmail',
      coveredClasses: [
        { name: 'Ex_sendDOCReminderEmailBatch', covered: 198, total: 233 },
      ],
    },
    {
      testClass: 'TestEx_SendRegistrationEmail',
      coveredClasses: [
        { name: 'Ex_SendRegistrationEmailController', covered: 251, total: 511 },
      ],
    },
    {
      testClass: 'TestEx_SlotBookingController',
      coveredClasses: [
        { name: 'Ex_ScheduledSlotHandlerServices', covered: 227, total: 339 },
        { name: 'Ex_ScheduledSlotTriggerHandler', covered: 38, total: 40 },
        { name: 'Ex_SlotBookingController', covered: 5, total: 66 },
      ],
    },
  ],
};
