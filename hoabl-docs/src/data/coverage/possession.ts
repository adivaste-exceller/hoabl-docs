import type { CoverageDataset } from '@/lib/coverage';

export const possessionCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'BulkDemandsReceiptsDashboardTest',
      coveredClasses: [
        { name: 'BulkDemandsReceiptsDashboardController', covered: 678, total: 1804 },
      ],
    },
    {
      testClass: 'ex_DemandLegacyCustomerIntCtrlTest',
      coveredClasses: [
        { name: 'ex_DemandLegacyCustomerInteractionctrl', covered: 2, total: 2 },
      ],
    },
    {
      testClass: 'Ex_ManualApportionBatchClass_Test',
      coveredClasses: [
        { name: 'Ex_DemandTrigger', covered: 9, total: 9 },
      ],
    },
    {
      testClass: 'Ex_PrintDemandDetailsControllerTest',
      coveredClasses: [
        { name: 'Ex_PrintDemandDetailsController', covered: 130, total: 132 },
      ],
    },
    {
      testClass: 'Ex_PrintPaymentReceipt2ControllerTest',
      coveredClasses: [
        { name: 'Ex_PrintPaymentReceipt2Controller', covered: 197, total: 206 },
      ],
    },
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
        { name: 'Ex_ChargeDetailsTriggerHandler', covered: 7, total: 7 },
        { name: 'Ex_ChargeDetailTrigger', covered: 2, total: 2 },
        { name: 'Ex_DocumentTemplateTrigerHandler', covered: 50, total: 59 },
        { name: 'Ex_RERAPhaseTriggerHandler', covered: 13, total: 28 },
        { name: 'Ex_SendIntimationEmailTrigger', covered: 20, total: 20 },
        { name: 'Ex_WordDocumentPreviewController', covered: 649, total: 1723 },
      ],
    },
    {
      testClass: 'Test_BookingBatchUpdate',
      coveredClasses: [
        { name: 'BookingBatchUpdate', covered: 8, total: 8 },
        { name: 'Ex_CreateBooking', covered: 129, total: 155 },
      ],
    },
    {
      testClass: 'Test_Ex_PrintQuotationNewViewController',
      coveredClasses: [
        { name: 'Ex_PrintQuotationNewViewController', covered: 483, total: 567 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_CMSLatestUpdates',
      coveredClasses: [
        { name: 'CustomerPortal_CMSLatestUpdatesCtrl', covered: 140, total: 305 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_ContentProvider',
      coveredClasses: [
        { name: 'CustomerPortal_NewsLetterContentProvider', covered: 30, total: 32 },
        { name: 'CustomerPortal_VideoContentProvider', covered: 38, total: 40 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_InvestmentMetrics',
      coveredClasses: [
        { name: 'Ex_ReceiptTrigger', covered: 8, total: 8 },
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
      testClass: 'TestEx_AmountOverDueBatchClass',
      coveredClasses: [
        { name: 'Ex_AmountOverDueBatchClass', covered: 165, total: 203 },
      ],
    },
    {
      testClass: 'TestEx_ApexSharingManagementServices',
      coveredClasses: [
        { name: 'Ex_ApexSharingManagementServices', covered: 222, total: 314 },
      ],
    },
    {
      testClass: 'TestEX_ApplicationAckowledgement',
      coveredClasses: [
        { name: 'EX_ApplicationAckowledgementController', covered: 163, total: 167 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationCancellationCase',
      coveredClasses: [
        { name: 'Ex_ApplicationCancellationCaseController', covered: 103, total: 161 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationFormController',
      coveredClasses: [
        { name: 'Ex_ApplicationFormController', covered: 80, total: 140 },
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
      testClass: 'TestEx_BookingHandlerServices',
      coveredClasses: [
        { name: 'Ex_BookingHandlerServices', covered: 448, total: 896 },
      ],
    },
    {
      testClass: 'TestEx_BulkDocumentController',
      coveredClasses: [
        { name: 'Ex_BulkDocumentController', covered: 140, total: 420 },
      ],
    },
    {
      testClass: 'TestEx_CemWiseReportDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_CemWiseReportDashboardCtrl', covered: 266, total: 279 },
      ],
    },
    {
      testClass: 'TestEx_ChecklistController',
      coveredClasses: [
        { name: 'Ex_ChecklistController', covered: 14, total: 16 },
      ],
    },
    {
      testClass: 'TestEx_Clone_PaymentScheme',
      coveredClasses: [
        { name: 'Ex_Clone_PaymentScheme', covered: 223, total: 236 },
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
      testClass: 'TestEx_CreateEReceiptController',
      coveredClasses: [
        { name: 'Ex_CreateEReceiptController', covered: 72, total: 73 },
      ],
    },
    {
      testClass: 'TestEx_CreateReceiptOnBooking',
      coveredClasses: [
        { name: 'Ex_CreateReceiptOnBooking', covered: 25, total: 39 },
      ],
    },
    {
      testClass: 'TestEx_CssWelcomeCallChecklist',
      coveredClasses: [
        { name: 'EX_WelcomeCallChecklistController', covered: 383, total: 753 },
      ],
    },
    {
      testClass: 'TestEx_CustomerServiceDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_CustomerServiceDashboardCtrl', covered: 42, total: 106 },
      ],
    },
    {
      testClass: 'TestEx_DemandAction',
      coveredClasses: [
        { name: 'Ex_DemandAction', covered: 8, total: 11 },
      ],
    },
    {
      testClass: 'TestEx_DemandHandlerServices',
      coveredClasses: [
        { name: 'Ex_DemandHandlerServices', covered: 5, total: 233 },
        { name: 'Ex_DemandListViewController', covered: 132, total: 164 },
      ],
    },
    {
      testClass: 'TestEx_DemandLetterVfController',
      coveredClasses: [
        { name: 'Ex_DemandLetterVfController', covered: 211, total: 239 },
      ],
    },
    {
      testClass: 'TestEx_DemandManagementServices',
      coveredClasses: [
        { name: 'Ex_DemandManagementServices', covered: 2, total: 57 },
      ],
    },
    {
      testClass: 'TestEx_DemandRaiseBatch',
      coveredClasses: [
        { name: 'Ex_DemandRaiseBatch', covered: 41, total: 54 },
      ],
    },
    {
      testClass: 'TestEx_DeviationApproval',
      coveredClasses: [
        { name: 'Ex_DeviationApprovalAttachmentController', covered: 483, total: 567 },
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
      testClass: 'TestEx_eReceiptHandler',
      coveredClasses: [
        { name: 'Ex_eReceiptHandler', covered: 56, total: 190 },
        { name: 'Ex_eReceiptHandlerServices', covered: 74, total: 77 },
      ],
    },
    {
      testClass: 'TestEx_FinanceDashboardController',
      coveredClasses: [
        { name: 'ex_FinanceApprovalDashboardController', covered: 38, total: 110 },
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
      testClass: 'TestEx_InterestCalculationBatch',
      coveredClasses: [
        { name: 'Ex_InterestCalculateManagementServices', covered: 68, total: 74 },
        { name: 'Ex_InterestCalculationBatch', covered: 15, total: 18 },
      ],
    },
    {
      testClass: 'TestEx_InterestCalculatorController',
      coveredClasses: [
        { name: 'Ex_InterestCalculatorController', covered: 28, total: 200 },
      ],
    },
    {
      testClass: 'TestEx_InterestLetter1Controller',
      coveredClasses: [
        { name: 'Ex_InterestLetter1Controller', covered: 53, total: 232 },
        { name: 'Ex_InterestLetter1Controller_Possession', covered: 79, total: 80 },
      ],
    },
    {
      testClass: 'TestEx_InterestNotice1Controller',
      coveredClasses: [
        { name: 'Ex_InterestNotice1Controller', covered: 174, total: 208 },
      ],
    },
    {
      testClass: 'TestEx_InterestNotice2Controller',
      coveredClasses: [
        { name: 'Ex_InterestNotice2Controller', covered: 173, total: 202 },
      ],
    },
    {
      testClass: 'TestEx_IVRDashboard',
      coveredClasses: [
        { name: 'Ex_IVRDashboard', covered: 6, total: 724 },
      ],
    },
    {
      testClass: 'TestEx_KycFormController',
      coveredClasses: [
        { name: 'Ex_KycFormController', covered: 296, total: 822 },
      ],
    },
    {
      testClass: 'TestEx_LandGainCalculatorController',
      coveredClasses: [
        { name: 'Ex_LandGainCalculatorController', covered: 163, total: 184 },
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
        { name: 'Ex_ApplicationHandlerServices', covered: 143, total: 311 },
      ],
    },
    {
      testClass: 'TestEx_PaymentLinkLogController',
      coveredClasses: [
        { name: 'Ex_PaymentLinkLogController', covered: 47, total: 131 },
      ],
    },
    {
      testClass: 'Testex_PossessionDashboardController',
      coveredClasses: [
        { name: 'ex_PossessionDashboardController', covered: 10, total: 141 },
      ],
    },
    {
      testClass: 'TestEx_PossessionDemandController',
      coveredClasses: [
        { name: 'Ex_PossesionDemandController', covered: 142, total: 172 },
      ],
    },
    {
      testClass: 'TestEx_PrebookingCancellationController',
      coveredClasses: [
        { name: 'Ex_PrebookingCancellationController', covered: 114, total: 545 },
      ],
    },
    {
      testClass: 'TestEx_PreIntimationBatchClass',
      coveredClasses: [
        { name: 'Ex_PreIntimationBatchClass', covered: 144, total: 170 },
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
      testClass: 'TestEx_PrintQuotationController',
      coveredClasses: [
        { name: 'Ex_PrintQuotationController', covered: 136, total: 367 },
        { name: 'Ex_PrintQuotationResidentialController', covered: 342, total: 376 },
        { name: 'Ex_QuotationApprovalAttachmentController', covered: 346, total: 380 },
      ],
    },
    {
      testClass: 'TestEx_PropertySelectionDashboard',
      coveredClasses: [
        { name: 'Ex_PropertySelectionDashboard', covered: 84, total: 108 },
      ],
    },
    {
      testClass: 'TestEx_PTCDashboardController',
      coveredClasses: [
        { name: 'ex_PTCDashboardController', covered: 6, total: 72 },
      ],
    },
    {
      testClass: 'TestEx_Quotation',
      coveredClasses: [
        { name: 'Ex_EditQuotation', covered: 919, total: 1341 },
        { name: 'Ex_GenerateQuotation', covered: 276, total: 338 },
        { name: 'Ex_InventoryPriceManagementServices', covered: 1201, total: 1603 },
      ],
    },
    {
      testClass: 'TestEx_RaiseDemandForBooking',
      coveredClasses: [
        { name: 'Ex_RaiseDemandForBooking', covered: 26, total: 34 },
      ],
    },
    {
      testClass: 'TestEx_ReceiptApprovalDashboard',
      coveredClasses: [
        { name: 'Ex_ReceiptApprovalDashboard', covered: 101, total: 122 },
      ],
    },
    {
      testClass: 'TestEx_ReceiptCreationController',
      coveredClasses: [
        { name: 'Ex_ReceiptCreationController', covered: 128, total: 153 },
      ],
    },
    {
      testClass: 'TestEx_ReceiptHandlerServices',
      coveredClasses: [
        { name: 'Ex_DemandTriggerHandler', covered: 51, total: 76 },
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
      testClass: 'TestEx_ReminderInterestBatchClass',
      coveredClasses: [
        { name: 'Ex_ReminderInterestBatchClass', covered: 233, total: 821 },
      ],
    },
    {
      testClass: 'TestEx_ReminderNotificationBatchClass',
      coveredClasses: [
        { name: 'Ex_ReminderNotificationBatchClass', covered: 99, total: 99 },
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
      testClass: 'TestEx_RESTCustomerIdentityAPI',
      coveredClasses: [
        { name: 'Ex_RESTCustomerIdentityAPI', covered: 14, total: 123 },
      ],
    },
    {
      testClass: 'TestEx_RestUnitConfig',
      coveredClasses: [
        { name: 'Ex_RESTUnitCreationUpdation', covered: 152, total: 268 },
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
      testClass: 'TestEx_SendInterestEmail',
      coveredClasses: [
        { name: 'Ex_SendInterestEmail', covered: 143, total: 902 },
      ],
    },
    {
      testClass: 'TestEx_SendInterestNotice',
      coveredClasses: [
        { name: 'Ex_SendInterestNoticeEmail', covered: 248, total: 385 },
      ],
    },
    {
      testClass: 'TestEx_SendPreIntimationController',
      coveredClasses: [
        { name: 'Ex_SendPreIntimationLetterController', covered: 130, total: 149 },
      ],
    },
    {
      testClass: 'TestEx_SendReceiptToCustomer',
      coveredClasses: [
        { name: 'Ex_SendReceiptToCustomer', covered: 80, total: 131 },
      ],
    },
    {
      testClass: 'TestEx_SendRegistrationEmail',
      coveredClasses: [
        { name: 'Ex_SendRegistrationEmailController', covered: 251, total: 511 },
      ],
    },
    {
      testClass: 'TestEx_SiteVisitSlotBookingDashboard',
      coveredClasses: [
        { name: 'Ex_SiteVisitSlotBookingDashboard', covered: 26, total: 45 },
      ],
    },
    {
      testClass: 'TestEx_SlotBookingController',
      coveredClasses: [
        { name: 'Ex_ScheduledSlotHandlerServices', covered: 227, total: 339 },
        { name: 'Ex_ScheduledSlotTriggerHandler', covered: 38, total: 40 },
        { name: 'Ex_ScheduleSlotTrigger', covered: 7, total: 7 },
        { name: 'Ex_SlotBookingController', covered: 5, total: 66 },
      ],
    },
    {
      testClass: 'TestEx_StatementOfAccountController',
      coveredClasses: [
        { name: 'Ex_StatementOfAccountController', covered: 504, total: 617 },
      ],
    },
    {
      testClass: 'Testex_TaskCreationController',
      coveredClasses: [
        { name: 'ex_TaskCreationController', covered: 87, total: 114 },
      ],
    },
    {
      testClass: 'TestEx_UpdateConstructionStages',
      coveredClasses: [
        { name: 'Ex_UpdateConstructionStages', covered: 25, total: 267 },
      ],
    },
    {
      testClass: 'TestEx_WelcomeEmail',
      coveredClasses: [
        { name: 'Ex_WelcomeEmail', covered: 250, total: 305 },
      ],
    },
  ],
};
