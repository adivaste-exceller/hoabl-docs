import type { CoverageDataset } from '@/lib/coverage';

export const bookingOnboardingCollectionCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'BulkDemandsReceiptsDashboardTest',
      coveredClasses: [
        { name: 'BulkDemandsReceiptsDashboardController', covered: 678, total: 1804 },
        { name: 'Ex_CompanyBankAccountTriggerHandler', covered: 10, total: 10 },
      ],
    },
    {
      testClass: 'ex_DemandLegacyCustomerIntCtrlTest',
      coveredClasses: [
        { name: 'ex_DemandLegacyCustomerInteractionctrl', covered: 2, total: 2 },
      ],
    },
    {
      testClass: 'Ex_WordDocumentPreviewControllerTest',
      coveredClasses: [
        { name: 'Ex_DocumentTemplateTrigerHandler', covered: 50, total: 59 },
        { name: 'Ex_INFormat', covered: 27, total: 29 },
        { name: 'Ex_WordDocumentPreviewController', covered: 649, total: 1723 },
      ],
    },
    {
      testClass: 'Test_Ex_CreateChildCaseController',
      coveredClasses: [
        { name: 'Ex_CreateChildCaseController', covered: 91, total: 142 },
      ],
    },
    {
      testClass: 'Test_Ex_Roster_Management',
      coveredClasses: [
        { name: 'Ex_TeamMemberTriggerHandler', covered: 19, total: 22 },
      ],
    },
    {
      testClass: 'TestCpPortal_Controller',
      coveredClasses: [
        { name: 'Ex_EmailMessageTriggerHandler', covered: 12, total: 12 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_CMS',
      coveredClasses: [
        { name: 'Ex_LaunchTriggerHandler', covered: 31, total: 34 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_UserService',
      coveredClasses: [
        { name: 'Ex_AccountHandlerServices', covered: 7, total: 8 },
      ],
    },
    {
      testClass: 'TestDocumentGenerationServices',
      coveredClasses: [
        { name: 'DocumentGenerationServices', covered: 21, total: 720 },
      ],
    },
    {
      testClass: 'TestEx_AccountServices',
      coveredClasses: [
        { name: 'Ex_AccountService', covered: 59, total: 70 },
      ],
    },
    {
      testClass: 'TestEx_AggrravatedCustApprovalController',
      coveredClasses: [
        { name: 'Ex_AggrravatedCustApprovalController', covered: 34, total: 38 },
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
      testClass: 'TestEx_ApplicantBookingFormController',
      coveredClasses: [
        { name: 'Ex_ApplicantBookingFormController', covered: 1, total: 90 },
      ],
    },
    {
      testClass: 'TestEx_ApplicantUpdationFormController',
      coveredClasses: [
        { name: 'Ex_ApplicantUpdationFormController', covered: 7, total: 257 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationFormController',
      coveredClasses: [
        { name: 'Ex_ApplicationFormController', covered: 80, total: 140 },
      ],
    },
    {
      testClass: 'TestEx_ApproveApplicantChangesController',
      coveredClasses: [
        { name: 'Ex_ApproveApplicantChangesController', covered: 5, total: 290 },
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
      testClass: 'TestEx_CollectionSummaryDashboardCtrl',
      coveredClasses: [
        { name: 'Ex_CollectionSummaryDashboardCtrl', covered: 35, total: 278 },
      ],
    },
    {
      testClass: 'TestEx_CompanyBankAccount',
      coveredClasses: [
        { name: 'Ex_CompanyBankAccountHandlerServices', covered: 43, total: 51 },
      ],
    },
    {
      testClass: 'TestEx_ContentDocumentLinkTriggerHandler',
      coveredClasses: [
        { name: 'Ex_ContentDocumentLinkTriggerHandler', covered: 11, total: 66 },
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
      testClass: 'TestEx_CreateAccountController',
      coveredClasses: [
        { name: 'Ex_CreateAccountController', covered: 57, total: 72 },
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
      testClass: 'TestEx_customTaskController',
      coveredClasses: [
        { name: 'ex_customTaskController', covered: 156, total: 178 },
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
      testClass: 'TestEx_DuplicationHandlerServices',
      coveredClasses: [
        { name: 'Ex_AccountTriggerHandler', covered: 100, total: 122 },
        { name: 'Ex_ContactHandlerServices', covered: 7, total: 8 },
        { name: 'Ex_ContactTriggerHandler', covered: 22, total: 23 },
        { name: 'Ex_DuplicationHandlerServices', covered: 261, total: 736 },
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
        { name: 'Ex_CSSMeetingTriggerHandler', covered: 3, total: 4 },
        { name: 'Ex_EventHandlerServices', covered: 143, total: 189 },
        { name: 'Ex_EventTriggerHandler', covered: 49, total: 52 },
      ],
    },
    {
      testClass: 'TestEx_FindAndReplaceMergeFields',
      coveredClasses: [
        { name: 'Ex_SendWelcomeEmailController', covered: 123, total: 430 },
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
      testClass: 'TestEx_InterestRateHandlerServices',
      coveredClasses: [
        { name: 'Ex_InterestRateHandlerServices', covered: 20, total: 23 },
        { name: 'Ex_InterestRateTriggerHandler', covered: 19, total: 19 },
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
      testClass: 'TestEx_LaunchService',
      coveredClasses: [
        { name: 'Ex_LaunchService', covered: 39, total: 61 },
      ],
    },
    {
      testClass: 'TestEx_MeetingHandlerServices',
      coveredClasses: [
        { name: 'Ex_ApplicationHandlerServices', covered: 143, total: 311 },
      ],
    },
    {
      testClass: 'TestEx_MeetingTriggerhandler',
      coveredClasses: [
        { name: 'Ex_GoogleOAuthIntegration', covered: 144, total: 278 },
        { name: 'Ex_GoogleOAuthIntegrationWithOtp', covered: 143, total: 383 },
        { name: 'Ex_MeetingHandlerServices', covered: 60, total: 68 },
        { name: 'Ex_MeetingTriggerHandler', covered: 75, total: 110 },
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
      testClass: 'TestEx_PreIntimationBatchClass',
      coveredClasses: [
        { name: 'Ex_PreIntimationBatchClass', covered: 144, total: 170 },
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
        { name: 'Ex_GoogleMapsController', covered: 3, total: 3 },
        { name: 'Ex_PrintQuotationResidentialController', covered: 342, total: 376 },
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
      testClass: 'TestEx_PropertyTypeCharge',
      coveredClasses: [
        { name: 'Ex_PropertyTypeChargesHandlerServices', covered: 55, total: 71 },
      ],
    },
    {
      testClass: 'TestEx_PropertyTypeServices',
      coveredClasses: [
        { name: 'Ex_PropertyTypeServices', covered: 26, total: 62 },
      ],
    },
    {
      testClass: 'TestEx_Quotation',
      coveredClasses: [
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
      testClass: 'TestEx_ReferralAndEnquiryFormController',
      coveredClasses: [
        { name: 'Ex_ReferralAndEnquiryFormController', covered: 24, total: 173 },
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
      testClass: 'TestEx_RegistrationReminder1BatchClass',
      coveredClasses: [
        { name: 'Ex_SendIntimationEmailHandler', covered: 254, total: 306 },
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
      testClass: 'TestEx_SendAcknowledgementLetter',
      coveredClasses: [
        { name: 'Ex_AcknowledgementLetterDetails', covered: 12, total: 13 },
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
  ],
};
