import type { CoverageDataset } from '@/lib/coverage';

export const caseManagementCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'BankLetterDeletionGuardTest',
      coveredClasses: [
        { name: 'BankLetterDeletionGuard', covered: 153, total: 186 },
      ],
    },
    {
      testClass: 'BookingTaskControllerTest',
      coveredClasses: [
        { name: 'BookingTaskController', covered: 21, total: 25 },
      ],
    },
    {
      testClass: 'BulkDemandsReceiptsDashboardTest',
      coveredClasses: [
        { name: 'BulkDemandsReceiptsDashboardController', covered: 678, total: 1804 },
      ],
    },
    {
      testClass: 'CommunitiesSelfRegControllerTest',
      coveredClasses: [
        { name: 'CommunitiesSelfRegController', covered: 32, total: 42 },
      ],
    },
    {
      testClass: 'Ex_DSTDashboardControllerTest',
      coveredClasses: [
        { name: 'Ex_DSTDashboardController', covered: 119, total: 126 },
      ],
    },
    {
      testClass: 'Ex_PrintDemandDetailsControllerTest',
      coveredClasses: [
        { name: 'Ex_PrintDemandDetailsController', covered: 130, total: 132 },
      ],
    },
    {
      testClass: 'Ex_RegCaseApprovalControllerTest',
      coveredClasses: [
        { name: 'Ex_RegCaseApprovalController', covered: 27, total: 50 },
      ],
    },
    {
      testClass: 'Ex_SpotBrokerageManagementServicesTest',
      coveredClasses: [
        { name: 'Ex_SpotBrokerageManagementServices', covered: 605, total: 867 },
      ],
    },
    {
      testClass: 'Ex_WordDocumentPreviewControllerTest',
      coveredClasses: [
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
      testClass: 'ho_Test_DataCloudAccountEnrichmentBatch',
      coveredClasses: [
        { name: 'ho_DataCloudAccountBatchNew', covered: 257, total: 310 },
      ],
    },
    {
      testClass: 'SiteRegisterControllerTest',
      coveredClasses: [
        { name: 'SiteRegisterController', covered: 22, total: 27 },
      ],
    },
    {
      testClass: 'Test_Ex_CreateChildCaseController',
      coveredClasses: [
        { name: 'Ex_CaseTrigger', covered: 6, total: 6 },
        { name: 'Ex_CreateChildCaseController', covered: 91, total: 142 },
      ],
    },
    {
      testClass: 'Test_ho_RestGetCallLogs',
      coveredClasses: [
        { name: 'ho_RestGetCallLogs', covered: 56, total: 76 },
      ],
    },
    {
      testClass: 'TestAddressProofUtil',
      coveredClasses: [
        { name: 'AddressProofUtil', covered: 30, total: 101 },
      ],
    },
    {
      testClass: 'TestCpPortal_Controller',
      coveredClasses: [
        { name: 'cpPortal_Controller', covered: 41, total: 608 },
        { name: 'Ex_EmailMessageTriggerHandler', covered: 12, total: 12 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_CaseServices',
      coveredClasses: [
        { name: 'customerPortal_CaseServices', covered: 66, total: 196 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_CMSLatestUpdates',
      coveredClasses: [
        { name: 'CustomerPortal_CMSLatestUpdatesCtrl', covered: 140, total: 305 },
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
      testClass: 'TestEx_ApproveApplicantChangesController',
      coveredClasses: [
        { name: 'Ex_ApproveApplicantChangesController', covered: 5, total: 290 },
      ],
    },
    {
      testClass: 'TestEx_AwekeningFormController',
      coveredClasses: [
        { name: 'Ex_LeadSourceDashboard', covered: 7, total: 7 },
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
        { name: 'Ex_TaskTrigger', covered: 4, total: 4 },
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
        { name: 'Ex_DeleteCaseQueueable', covered: 14, total: 20 },
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
      testClass: 'TestEx_ClickToCallController',
      coveredClasses: [
        { name: 'Ex_ClickToCallController', covered: 42, total: 362 },
      ],
    },
    {
      testClass: 'TestEx_ConcurrentReferralController',
      coveredClasses: [
        { name: 'Ex_ConcurrentReferralController', covered: 15, total: 186 },
      ],
    },
    {
      testClass: 'TestEx_ConvinCallRestService',
      coveredClasses: [
        { name: 'Ex_ConvinCallRestService', covered: 78, total: 103 },
      ],
    },
    {
      testClass: 'TestEx_convoxtaskdisportionController',
      coveredClasses: [
        { name: 'ex_convoxtaskdisportionController', covered: 36, total: 106 },
      ],
    },
    {
      testClass: 'TestEx_CPPOManagementServices',
      coveredClasses: [
        { name: 'Ex_CPPOManagementServices', covered: 331, total: 1060 },
      ],
    },
    {
      testClass: 'TestEx_CreateCPLaunchController',
      coveredClasses: [
        { name: 'Ex_CreateCPLaunchController', covered: 39, total: 45 },
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
        { name: 'Ex_CTIDashboardReuploadController', covered: 53, total: 68 },
      ],
    },
    {
      testClass: 'TestEx_CustomActivitiesController',
      coveredClasses: [
        { name: 'Ex_CustomActivitiesController', covered: 147, total: 222 },
      ],
    },
    {
      testClass: 'TestEx_CustomerTierApprovalController',
      coveredClasses: [
        { name: 'Ex_CustomerTierApprovalController', covered: 30, total: 86 },
      ],
    },
    {
      testClass: 'TestEx_CustomerTierSegmentationService',
      coveredClasses: [
        { name: 'Ex_CustomerTierSegmenationService', covered: 79, total: 180 },
      ],
    },
    {
      testClass: 'TestEx_customTaskController',
      coveredClasses: [
        { name: 'ex_customTaskController', covered: 156, total: 178 },
      ],
    },
    {
      testClass: 'TestEx_DemandHandlerServices',
      coveredClasses: [
        { name: 'Ex_DemandHandlerServices', covered: 5, total: 233 },
      ],
    },
    {
      testClass: 'TestEx_DigitalLeadHandlerServices',
      coveredClasses: [
        { name: 'Ex_DigitalLeadHandlerServices', covered: 179, total: 493 },
      ],
    },
    {
      testClass: 'TestEx_DigitalOpportunityCreation',
      coveredClasses: [
        { name: 'Ex_DigitalOpportunityCreation', covered: 30, total: 192 },
      ],
    },
    {
      testClass: 'TestEx_DirectDocAcknowledgement',
      coveredClasses: [
        { name: 'Ex_DirectDocAcknowledgementController', covered: 45, total: 51 },
      ],
    },
    {
      testClass: 'TestEx_DirectOpportunityCreation',
      coveredClasses: [
        { name: 'Ex_DirectOpportunityCreation', covered: 140, total: 175 },
      ],
    },
    {
      testClass: 'TestEx_DirectOpportunityCreationPresales',
      coveredClasses: [
        { name: 'Ex_DirectOpportunityCreationPresales', covered: 7, total: 185 },
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
      testClass: 'TestEx_EmailMessageHandlerServices',
      coveredClasses: [
        { name: 'Ex_EmailMessageHandlerServices', covered: 12, total: 13 },
      ],
    },
    {
      testClass: 'TestEx_EventHandlerServices',
      coveredClasses: [
        { name: 'Ex_EventHandlerServices', covered: 143, total: 189 },
      ],
    },
    {
      testClass: 'TestEx_FindAndReplaceMergeFields',
      coveredClasses: [
        { name: 'Ex_SendWelcomeEmailController', covered: 123, total: 430 },
      ],
    },
    {
      testClass: 'TestEx_GetSObjectType',
      coveredClasses: [
        { name: 'Ex_GetSObjectType', covered: 8, total: 8 },
      ],
    },
    {
      testClass: 'TestEx_IVRDashboard',
      coveredClasses: [
        { name: 'Ex_IVRDashboard', covered: 6, total: 724 },
      ],
    },
    {
      testClass: 'TestEx_LeadDispositionController',
      coveredClasses: [
        { name: 'Ex_LeadDispositionController', covered: 5, total: 81 },
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
      testClass: 'TestEx_MeetingHandlerServices',
      coveredClasses: [
        { name: 'Ex_CampaignHandlerServices', covered: 93, total: 118 },
      ],
    },
    {
      testClass: 'TestEx_MetaAPIHandler',
      coveredClasses: [
        { name: 'Ex_MetaAPIHandler', covered: 77, total: 208 },
      ],
    },
    {
      testClass: 'TestEx_OppCreationForVCCustomers',
      coveredClasses: [
        { name: 'Ex_OppCreationForVCCustomers', covered: 189, total: 231 },
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
      testClass: 'TestEx_ReferralAndEnquiryFormController',
      coveredClasses: [
        { name: 'Ex_ReferralAndEnquiryFormController', covered: 24, total: 173 },
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
      ],
    },
    {
      testClass: 'TestEx_RegCaseStatusDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_RegCaseStatusDashboardCtrl', covered: 60, total: 183 },
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
      testClass: 'TestEx_RestCallbakConvox',
      coveredClasses: [
        { name: 'Ex_RestCallbakConvox', covered: 34, total: 57 },
      ],
    },
    {
      testClass: 'TestEx_RESTCreateIVRLoanCaseAPI',
      coveredClasses: [
        { name: 'Ex_RESTCreateIVRLoanCaseAPI', covered: 23, total: 42 },
      ],
    },
    {
      testClass: 'TestEx_RestCreateTask',
      coveredClasses: [
        { name: 'Ex_RestCreateTask', covered: 31, total: 50 },
      ],
    },
    {
      testClass: 'TestEx_RestCTIDialerPresales',
      coveredClasses: [
        { name: 'Ex_RestCTIDialerPresales', covered: 220, total: 262 },
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
      testClass: 'TestEx_RestTaskDispositionAPI',
      coveredClasses: [
        { name: 'Ex_RestTaskDispositionAPI', covered: 102, total: 120 },
      ],
    },
    {
      testClass: 'TestEx_RestTaskDispostionUpdateAPI',
      coveredClasses: [
        { name: 'Ex_RestTaskDispostionUpdateAPI', covered: 63, total: 115 },
      ],
    },
    {
      testClass: 'TestEx_SalesReportDashboardController',
      coveredClasses: [
        { name: 'Ex_SalesReportDashboardController', covered: 119, total: 586 },
      ],
    },
    {
      testClass: 'TestEx_ScreenPagePopUp',
      coveredClasses: [
        { name: 'Ex_ScreenPagePopUp', covered: 12, total: 33 },
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
      testClass: 'TestEx_SendRegistrationEmail',
      coveredClasses: [
        { name: 'Ex_SendRegistrationEmailController', covered: 251, total: 511 },
      ],
    },
    {
      testClass: 'TestEx_SlotBookingController',
      coveredClasses: [
        { name: 'Ex_ScheduledSlotHandlerServices', covered: 227, total: 339 },
        { name: 'Ex_SlotBookingController', covered: 5, total: 66 },
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
      testClass: 'TestEx_UpdateBookingOnCaseController',
      coveredClasses: [
        { name: 'Ex_UpdateBookingOnCaseController', covered: 17, total: 25 },
      ],
    },
    {
      testClass: 'TestEx_WelcomeCallStatusDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_WelcomeCallStatusDashboardCtrl', covered: 43, total: 155 },
      ],
    },
    {
      testClass: 'Testho_CustomerProfileController',
      coveredClasses: [
        { name: 'ho_CustomerProfileController', covered: 5, total: 48 },
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
