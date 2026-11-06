import type { CoverageDataset } from '@/lib/coverage';

export const registrationCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'BulkDemandsReceiptsDashboardTest',
      coveredClasses: [
        { name: 'BulkDemandsReceiptsDashboardController', covered: 678, total: 1804 },
        { name: 'Ex_BookingTrigger', covered: 10, total: 10 },
      ],
    },
    {
      testClass: 'Ex_BookingEmailReplyHandlerTest',
      coveredClasses: [
        { name: 'Ex_BookingEmailReplyHandler', covered: 62, total: 84 },
      ],
    },
    {
      testClass: 'ex_DemandLegacyCustomerIntCtrlTest',
      coveredClasses: [
        { name: 'ex_DemandLegacyCustomerInteractionctrl', covered: 2, total: 2 },
      ],
    },
    {
      testClass: 'Ex_DigitalLeadShiftProcessingBatchTest',
      coveredClasses: [
        { name: 'Ex_DigitalLeadShiftProcessingBatch', covered: 159, total: 264 },
      ],
    },
    {
      testClass: 'Ex_ManualApportionBatchClass_Test',
      coveredClasses: [
        { name: 'Ex_ManualApportionBatchClass', covered: 9, total: 9 },
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
      testClass: 'Ex_QuotationDateInvalidationBatchTest',
      coveredClasses: [
        { name: 'Ex_QuotationDateInvalidationBatch', covered: 45, total: 58 },
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
      testClass: 'Ex_SpotBrokerageManagementServicesTest',
      coveredClasses: [
        { name: 'Ex_SpotBrokerageManagementServices', covered: 605, total: 867 },
      ],
    },
    {
      testClass: 'Ex_testPDCCollectionController',
      coveredClasses: [
        { name: 'Ex_PDCCollectionController', covered: 26, total: 28 },
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
      testClass: 'ExCustomer360ProfileControllerTest',
      coveredClasses: [
        { name: 'ExCustomer360ProfileController', covered: 74, total: 233 },
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
      testClass: 'Test_Ex_CreateChildCaseController',
      coveredClasses: [
        { name: 'Ex_CreateChildCaseController', covered: 91, total: 142 },
      ],
    },
    {
      testClass: 'Test_Ex_PrintQuotationNewViewController',
      coveredClasses: [
        { name: 'Ex_PrintQuotationNewViewController', covered: 483, total: 567 },
      ],
    },
    {
      testClass: 'TestCpPortal_Controller',
      coveredClasses: [
        { name: 'cpPortal_Controller', covered: 41, total: 608 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_AliasContentProvider',
      coveredClasses: [
        { name: 'CustomerPortal_AliasContentProvider', covered: 15, total: 32 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_CaseServices',
      coveredClasses: [
        { name: 'customerPortal_CaseServices', covered: 66, total: 196 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_CMS',
      coveredClasses: [
        { name: 'CustomerPortal_CMSLaunchController', covered: 154, total: 301 },
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
        { name: 'CustomerPortal_LaunchContentProvider', covered: 92, total: 102 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_InvestmentMetrics',
      coveredClasses: [
        { name: 'Ex_ReceiptTrigger', covered: 8, total: 8 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_KeyActionReport',
      coveredClasses: [
        { name: 'CustomerPortal_KeyActionReportService', covered: 103, total: 300 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_KYCFormService',
      coveredClasses: [
        { name: 'CustomerPortal_KYCFormService', covered: 276, total: 560 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_MilestoneServices',
      coveredClasses: [
        { name: 'CustomerPortal_MilestoneServices', covered: 90, total: 104 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_PSFDashboard',
      coveredClasses: [
        { name: 'CustomerPortal_PSFDashboardController', covered: 33, total: 65 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_Services',
      coveredClasses: [
        { name: 'CustomerPortal_Services', covered: 18, total: 107 },
      ],
    },
    {
      testClass: 'TestDocumentGenerationServices',
      coveredClasses: [
        { name: 'DocumentGenerationServices', covered: 21, total: 720 },
      ],
    },
    {
      testClass: 'TestEx_AddDiscountsDashboardController',
      coveredClasses: [
        { name: 'Ex_AddDiscountsDashboardController', covered: 68, total: 80 },
      ],
    },
    {
      testClass: 'TestEx_AggrravatedCustApprovalController',
      coveredClasses: [
        { name: 'Ex_AggrravatedCustApprovalController', covered: 34, total: 38 },
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
        { name: 'Ex_ApexSharingForBooking', covered: 68, total: 70 },
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
      testClass: 'TestEx_ApplicantUpdationFormController',
      coveredClasses: [
        { name: 'Ex_ApplicantUpdationFormController', covered: 7, total: 257 },
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
      testClass: 'TestEx_ApplicationCancelMessagingBatch',
      coveredClasses: [
        { name: 'Ex_ApplicationCancelMessagingHandler', covered: 390, total: 675 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationDashboardController',
      coveredClasses: [
        { name: 'Ex_ApplicationDashboardController', covered: 45, total: 54 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationFormController',
      coveredClasses: [
        { name: 'Ex_ApplicationFormController', covered: 80, total: 140 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationTriggerHandler',
      coveredClasses: [
        { name: 'Ex_ApplicationTriggerHandler', covered: 144, total: 228 },
      ],
    },
    {
      testClass: 'TestEx_ApproveApplicantChangesController',
      coveredClasses: [
        { name: 'Ex_ApproveApplicantChangesController', covered: 5, total: 290 },
      ],
    },
    {
      testClass: 'TestEx_BankTransactionReceiptController',
      coveredClasses: [
        { name: 'Ex_BankTransactionReceiptController', covered: 25, total: 162 },
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
      testClass: 'TestEx_BookingTriggerHandler',
      coveredClasses: [
        { name: 'Ex_BookingTriggerHandler', covered: 297, total: 712 },
      ],
    },
    {
      testClass: 'TestEx_BulkDocumentController',
      coveredClasses: [
        { name: 'Ex_BulkDocumentController', covered: 140, total: 420 },
      ],
    },
    {
      testClass: 'TestEx_CallDispositionController',
      coveredClasses: [
        { name: 'Ex_CallDispositionController', covered: 24, total: 123 },
      ],
    },
    {
      testClass: 'TestEx_CaseAgeBatch',
      coveredClasses: [
        { name: 'Ex_CaseAgeBatch', covered: 143, total: 185 },
      ],
    },
    {
      testClass: 'TestEx_CaseAndTaskManagement',
      coveredClasses: [
        { name: 'Ex_CaseAndTaskManagement', covered: 28, total: 115 },
      ],
    },
    {
      testClass: 'TestEx_CaseEscalationMonitorController',
      coveredClasses: [
        { name: 'Ex_caseEscalationMonitorController', covered: 7, total: 11 },
      ],
    },
    {
      testClass: 'TestEx_CaseTriggerHandler',
      coveredClasses: [
        { name: 'Ex_CaseHandlerServices', covered: 158, total: 318 },
        { name: 'Ex_CaseTriggerHandler', covered: 106, total: 127 },
        { name: 'Ex_ManualCaseCreationController', covered: 69, total: 93 },
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
      testClass: 'TestEx_ClickToCallController',
      coveredClasses: [
        { name: 'Ex_ClickToCallController', covered: 42, total: 362 },
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
      testClass: 'TestEx_CPActivityController',
      coveredClasses: [
        { name: 'Ex_CPActivityController', covered: 22, total: 67 },
        { name: 'Ex_CPLaunchHandlerServices', covered: 81, total: 215 },
      ],
    },
    {
      testClass: 'TestEx_CPInvoiceHandler',
      coveredClasses: [
        { name: 'Ex_CpInvoiceHandlerServices', covered: 22, total: 35 },
      ],
    },
    {
      testClass: 'TestEx_CpPaymentTriggerHandler',
      coveredClasses: [
        { name: 'Ex_CPPOHandlerServices', covered: 58, total: 116 },
      ],
    },
    {
      testClass: 'TestEx_CPPOManagementServices',
      coveredClasses: [
        { name: 'Ex_CPPOManagementServices', covered: 331, total: 1060 },
      ],
    },
    {
      testClass: 'TestEx_CPPOTriggerHandler',
      coveredClasses: [
        { name: 'Ex_CPPOTriggerHandler', covered: 18, total: 39 },
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
        { name: 'Ex_TaskTriggerHandler', covered: 35, total: 60 },
        { name: 'EX_WelcomeCallChecklistController', covered: 383, total: 753 },
      ],
    },
    {
      testClass: 'TestEx_CTIDashboard',
      coveredClasses: [
        { name: 'Ex_CTIDashboard', covered: 138, total: 232 },
      ],
    },
    {
      testClass: 'TestEx_CTILeadUploadServices',
      coveredClasses: [
        { name: 'Ex_CTILeadUploadServices', covered: 321, total: 720 },
      ],
    },
    {
      testClass: 'TestEx_CustomActivitiesController',
      coveredClasses: [
        { name: 'Ex_CustomActivitiesController', covered: 147, total: 222 },
      ],
    },
    {
      testClass: 'TestEx_CustomerServiceDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_CustomerServiceDashboardCtrl', covered: 42, total: 106 },
      ],
    },
    {
      testClass: 'TestEx_CustomerTierMetricsService',
      coveredClasses: [
        { name: 'Ex_CustomerTierMetricsService', covered: 50, total: 98 },
      ],
    },
    {
      testClass: 'TestEx_CustomerTierSegmentationService',
      coveredClasses: [
        { name: 'Ex_CustomerTierSegmenationService', covered: 79, total: 180 },
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
      testClass: 'TestEx_DirectDocAcknowledgement',
      coveredClasses: [
        { name: 'Ex_DirectDocAcknowledgementController', covered: 45, total: 51 },
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
      testClass: 'TestEx_DocumentHandoverController',
      coveredClasses: [
        { name: 'Ex_DocumentHandoverController', covered: 22, total: 55 },
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
      testClass: 'TestEx_EssentialDetailsPendingReminder',
      coveredClasses: [
        { name: 'Ex_EssentialDetailsPendingReminder', covered: 201, total: 224 },
      ],
    },
    {
      testClass: 'TestEx_EventHandlerServices',
      coveredClasses: [
        { name: 'Ex_EventHandlerServices', covered: 143, total: 189 },
        { name: 'Ex_EventTriggerHandler', covered: 49, total: 52 },
      ],
    },
    {
      testClass: 'TestEx_FinanceDashboardController',
      coveredClasses: [
        { name: 'ex_FinanceApprovalDashboardController', covered: 38, total: 110 },
      ],
    },
    {
      testClass: 'TestEx_FindAndReplaceMergeFields',
      coveredClasses: [
        { name: 'Ex_SendWelcomeEmailController', covered: 123, total: 430 },
      ],
    },
    {
      testClass: 'TestEx_getAllPropertTypeDetails',
      coveredClasses: [
        { name: 'Ex_getAllPropertTypeDetails', covered: 12, total: 49 },
      ],
    },
    {
      testClass: 'TestEx_getAllRERAPhaseDetails',
      coveredClasses: [
        { name: 'Ex_getAllRERAPhaseDetails', covered: 24, total: 33 },
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
      testClass: 'TestEx_InitiateBookingCancellation',
      coveredClasses: [
        { name: 'Ex_InitiateBookingCancellationController', covered: 43, total: 48 },
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
        { name: 'Ex_ApplicantTriggerHandler', covered: 29, total: 31 },
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
      testClass: 'TestEx_managePaymentSchemeController',
      coveredClasses: [
        { name: 'Ex_managePaymentSchemeController', covered: 156, total: 177 },
      ],
    },
    {
      testClass: 'TestEx_MeetingHandlerServices',
      coveredClasses: [
        { name: 'Ex_ApplicationHandlerServices', covered: 143, total: 311 },
        { name: 'Ex_CampaignHandlerServices', covered: 93, total: 118 },
      ],
    },
    {
      testClass: 'TestEx_MeetingTriggerhandler',
      coveredClasses: [
        { name: 'Ex_GoogleOAuthIntegrationWithOtp', covered: 143, total: 383 },
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
      testClass: 'TestEx_PropertyTypeServices',
      coveredClasses: [
        { name: 'Ex_PropertyTypeServices', covered: 26, total: 62 },
      ],
    },
    {
      testClass: 'TestEx_PTCDashboardController',
      coveredClasses: [
        { name: 'Ex_PropertyTypetriggerHandler', covered: 21, total: 30 },
        { name: 'ex_PTCDashboardController', covered: 6, total: 72 },
      ],
    },
    {
      testClass: 'TestEx_PtpDashboardController',
      coveredClasses: [
        { name: 'Ex_PtpDashboardController', covered: 51, total: 252 },
      ],
    },
    {
      testClass: 'TestEx_PTPEscalationBatchClass',
      coveredClasses: [
        { name: 'Ex_PTPEscalationBatchClass', covered: 7, total: 97 },
      ],
    },
    {
      testClass: 'TestEx_PTPReminderBatchClass',
      coveredClasses: [
        { name: 'Ex_PTPReminderBatchClass', covered: 72, total: 74 },
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
      testClass: 'TestEx_RESTCreateIVRLoanCaseAPI',
      coveredClasses: [
        { name: 'Ex_RESTCreateIVRLoanCaseAPI', covered: 23, total: 42 },
      ],
    },
    {
      testClass: 'TestEx_RestCustomerCreation',
      coveredClasses: [
        { name: 'Ex_RestCustomerCreation', covered: 24, total: 645 },
      ],
    },
    {
      testClass: 'TestEx_RESTCustomerIdentityAPI',
      coveredClasses: [
        { name: 'Ex_RESTCustomerIdentityAPI', covered: 14, total: 123 },
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
      testClass: 'TestEx_RestGetProjectDetails',
      coveredClasses: [
        { name: 'Ex_RestGetProjectDetails', covered: 15, total: 49 },
      ],
    },
    {
      testClass: 'TestEx_RESTIVRCaseCreationAPI',
      coveredClasses: [
        { name: 'Ex_RESTIVRCaseCreationAPI', covered: 19, total: 69 },
      ],
    },
    {
      testClass: 'TestEx_RestIVRCreateTask',
      coveredClasses: [
        { name: 'Ex_RestIVRCreateTask', covered: 35, total: 49 },
      ],
    },
    {
      testClass: 'TestEx_RESTSendDocumentAPI',
      coveredClasses: [
        { name: 'Ex_RESTSendDocumentAPI', covered: 20, total: 51 },
      ],
    },
    {
      testClass: 'TestEx_RestUnitConfig',
      coveredClasses: [
        { name: 'Ex_RESTUnitCreationUpdation', covered: 152, total: 268 },
      ],
    },
    {
      testClass: 'TestEx_SalesReportDashboardController',
      coveredClasses: [
        { name: 'Ex_SalesReportCPServices', covered: 614, total: 737 },
        { name: 'Ex_SalesReportDashboardController', covered: 119, total: 586 },
        { name: 'Ex_SalesReportDashboardControllerV2', covered: 198, total: 213 },
        { name: 'Ex_SalesReportEmployeeServices', covered: 565, total: 646 },
      ],
    },
    {
      testClass: 'TestEx_ScreenPagePopUpForAccount',
      coveredClasses: [
        { name: 'Ex_ScreenPagePopUpForAccount', covered: 6, total: 26 },
      ],
    },
    {
      testClass: 'TestEx_SDRChecklistController',
      coveredClasses: [
        { name: 'Ex_SDRChecklistController', covered: 95, total: 462 },
      ],
    },
    {
      testClass: 'TestEx_SendAcknowledgementEmail',
      coveredClasses: [
        { name: 'Ex_SendApplicationAcknowledgementEmail', covered: 93, total: 101 },
      ],
    },
    {
      testClass: 'TestEx_SendAcknowledgementLetter',
      coveredClasses: [
        { name: 'Ex_AcknowledgementLetterDetails', covered: 12, total: 13 },
        { name: 'Ex_SendAcknowledgementLetter', covered: 38, total: 44 },
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
      testClass: 'TestEx_SendPreIntimationLetterPM',
      coveredClasses: [
        { name: 'Ex_SendPreIntimationLetterControllerPM', covered: 121, total: 140 },
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
      testClass: 'TestEx_SendSOAController',
      coveredClasses: [
        { name: 'Ex_SendSOAController', covered: 70, total: 89 },
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
        { name: 'Ex_RegistrationSlotTrigger', covered: 4, total: 4 },
        { name: 'Ex_RegistrationSlotTriggerHandler', covered: 17, total: 19 },
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
      testClass: 'TestEx_TaskHandlerServices',
      coveredClasses: [
        { name: 'Ex_TaskHandlerServices', covered: 6, total: 320 },
      ],
    },
    {
      testClass: 'TestEx_UnitInventoryStatusDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_UnitInventoryStatusDashboardCtrl', covered: 29, total: 56 },
      ],
    },
    {
      testClass: 'TestEx_UpdateBookingOnCaseController',
      coveredClasses: [
        { name: 'Ex_UpdateBookingOnCaseController', covered: 17, total: 25 },
      ],
    },
    {
      testClass: 'TestEx_UpdateConstructionStages',
      coveredClasses: [
        { name: 'Ex_UpdateConstructionStages', covered: 25, total: 267 },
      ],
    },
    {
      testClass: 'TestEx_WelcomeCallStatusDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_WelcomeCallStatusDashboardCtrl', covered: 43, total: 155 },
      ],
    },
    {
      testClass: 'TestEx_WelcomeEmail',
      coveredClasses: [
        { name: 'Ex_WelcomeEmail', covered: 250, total: 305 },
      ],
    },
    {
      testClass: 'TestEx_WhatsappChatServices',
      coveredClasses: [
        { name: 'Ex_WhatsappChatServices', covered: 22, total: 206 },
      ],
    },
    {
      testClass: 'TestEx_WhatsappMsgTriggerHandler',
      coveredClasses: [
        { name: 'Ex_WhatsappMsgTriggerHandler', covered: 125, total: 146 },
      ],
    },
    {
      testClass: 'TestSearchPhoneApexClass',
      coveredClasses: [
        { name: 'searchPhoneApexClass', covered: 3, total: 63 },
      ],
    },
    {
      testClass: 'TestSendWhatsappMessage',
      coveredClasses: [
        { name: 'SendWhatsappMessage', covered: 52, total: 582 },
      ],
    },
  ],
};
