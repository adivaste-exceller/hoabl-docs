import type { CoverageDataset } from '@/lib/coverage';

export const salesCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'BulkDemandsReceiptsDashboardTest',
      coveredClasses: [
        { name: 'Ex_CompanyBankAccountTriggerHandler', covered: 10, total: 10 },
      ],
    },
    {
      testClass: 'Ex_WordDocumentPreviewControllerTest',
      coveredClasses: [
        { name: 'Ex_ChargeDetailsTriggerHandler', covered: 7, total: 7 },
        { name: 'Ex_INFormat', covered: 27, total: 29 },
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
      testClass: 'ForgotPasswordControllerTest',
      coveredClasses: [
        { name: 'ForgotPasswordController', covered: 8, total: 9 },
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
        { name: 'Ex_PaymentMilestoneTriggerHandler', covered: 8, total: 15 },
        { name: 'Ex_PrintQuotationNewViewController', covered: 483, total: 567 },
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
      testClass: 'TestCpPortal_Controller',
      coveredClasses: [
        { name: 'Ex_ChannelPartnerTriggerHandler', covered: 21, total: 25 },
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
      testClass: 'TestEx_AccountServices',
      coveredClasses: [
        { name: 'Ex_AccountService', covered: 59, total: 70 },
      ],
    },
    {
      testClass: 'TestEx_AOP_Channel_PartnerTriggerHandler',
      coveredClasses: [
        { name: 'Ex_AOP_Channel_PartnerTriggerHandler', covered: 21, total: 21 },
      ],
    },
    {
      testClass: 'TestEx_AOP_CPPOManagementServices',
      coveredClasses: [
        { name: 'Ex_AOP_CPPOManagementServices', covered: 1, total: 1 },
      ],
    },
    {
      testClass: 'TestEx_AOPBrokerageCreationDashboard',
      coveredClasses: [
        { name: 'Ex_AOPBrokerageCreationDashboard', covered: 30, total: 72 },
      ],
    },
    {
      testClass: 'TestEx_ApexSharingManagementServices',
      coveredClasses: [
        { name: 'Ex_ApexSharingManagementServices', covered: 222, total: 314 },
        { name: 'Ex_DiscountAppliedTriggerHandler', covered: 7, total: 7 },
      ],
    },
    {
      testClass: 'TestEx_ApplicantBookingFormController',
      coveredClasses: [
        { name: 'Ex_ApplicantBookingFormController', covered: 1, total: 90 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationAcknowdgeForm',
      coveredClasses: [
        { name: 'Ex_ApplicationAcknowdgeFormController', covered: 26, total: 54 },
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
        { name: 'Ex_ApplicationCancelMessagingBatch', covered: 11, total: 11 },
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
      testClass: 'TestEx_ApplicationSiteController',
      coveredClasses: [
        { name: 'Ex_ApplicationSiteController', covered: 58, total: 404 },
      ],
    },
    {
      testClass: 'TestEx_ApplicationTriggerHandler',
      coveredClasses: [
        { name: 'Ex_ApplicationTriggerHandler', covered: 144, total: 228 },
      ],
    },
    {
      testClass: 'TestEx_AttendanceRegulator',
      coveredClasses: [
        { name: 'Ex_AttendanceRegulator', covered: 64, total: 86 },
      ],
    },
    {
      testClass: 'TestEx_AwekeningFormController',
      coveredClasses: [
        { name: 'Ex_AwekeningFormController', covered: 12, total: 15 },
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
      testClass: 'TestEx_BudgetApprovalControllerNew',
      coveredClasses: [
        { name: 'Ex_BudgetApprovalControllerNew', covered: 64, total: 72 },
        { name: 'Ex_BudgetHeadTriggerHandler', covered: 3, total: 3 },
        { name: 'Ex_spendHandlerServices', covered: 26, total: 32 },
      ],
    },
    {
      testClass: 'TestEx_BudgetHeadHandlerServices',
      coveredClasses: [
        { name: 'Ex_BudgetHeadHandlerServices', covered: 18, total: 19 },
      ],
    },
    {
      testClass: 'TestEx_BudgetTransferController',
      coveredClasses: [
        { name: 'Ex_BudgetTransferController', covered: 30, total: 35 },
      ],
    },
    {
      testClass: 'TestEx_CallDispositionController',
      coveredClasses: [
        { name: 'Ex_CallDispositionController', covered: 24, total: 123 },
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
      testClass: 'TestEx_ClickToCallController',
      coveredClasses: [
        { name: 'Ex_ClickToCallController', covered: 42, total: 362 },
      ],
    },
    {
      testClass: 'TestEx_Clone_PaymentScheme',
      coveredClasses: [
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
      testClass: 'TestEx_ConcurrentReferralController',
      coveredClasses: [
        { name: 'Ex_ConcurrentReferralController', covered: 15, total: 186 },
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
      testClass: 'TestEx_CreateEReceiptController',
      coveredClasses: [
        { name: 'Ex_CreateEReceiptController', covered: 72, total: 73 },
      ],
    },
    {
      testClass: 'TestEx_CssWelcomeCallChecklist',
      coveredClasses: [
        { name: 'Ex_TaskTriggerHandler', covered: 35, total: 60 },
      ],
    },
    {
      testClass: 'TestEx_CTILeadListHandler',
      coveredClasses: [
        { name: 'Ex_ProcessTriggerHandler', covered: 12, total: 12 },
      ],
    },
    {
      testClass: 'TestEx_CustomActivitiesController',
      coveredClasses: [
        { name: 'Ex_CustomActivitiesController', covered: 147, total: 222 },
      ],
    },
    {
      testClass: 'TestEx_customTaskController',
      coveredClasses: [
        { name: 'ex_customTaskController', covered: 156, total: 178 },
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
      testClass: 'TestEx_DirectOpportunityCreation',
      coveredClasses: [
        { name: 'Ex_DirectOpportunityCreation', covered: 140, total: 175 },
      ],
    },
    {
      testClass: 'TestEx_DuplicationHandlerServices',
      coveredClasses: [
        { name: 'Ex_AccountTriggerHandler', covered: 100, total: 122 },
        { name: 'Ex_ChannelPartnerHandlerServices', covered: 43, total: 56 },
        { name: 'Ex_ContactHandlerServices', covered: 7, total: 8 },
        { name: 'Ex_ContactTriggerHandler', covered: 22, total: 23 },
        { name: 'Ex_LeadConversion', covered: 44, total: 51 },
        { name: 'Ex_LeadHandlerServices', covered: 144, total: 314 },
        { name: 'Ex_leadSummaryController', covered: 6, total: 9 },
        { name: 'Ex_LeadTriggerHandler', covered: 129, total: 161 },
        { name: 'Ex_LeadValidityExpiryBatch', covered: 15, total: 16 },
      ],
    },
    {
      testClass: 'TestEx_eReceiptHandler',
      coveredClasses: [
        { name: 'Ex_eReceiptHandler', covered: 56, total: 190 },
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
      testClass: 'TestEx_ExtendValidityonOpportunity',
      coveredClasses: [
        { name: 'Ex_ExtendValidityonOpportunity', covered: 60, total: 78 },
      ],
    },
    {
      testClass: 'TestEx_getAllAccountDetails',
      coveredClasses: [
        { name: 'Ex_getAllAccountDetails', covered: 57, total: 60 },
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
      testClass: 'TestEx_KycFormController',
      coveredClasses: [
        { name: 'Ex_ApplicantTriggerHandler', covered: 29, total: 31 },
      ],
    },
    {
      testClass: 'TestEx_LaunchService',
      coveredClasses: [
        { name: 'Ex_LaunchService', covered: 39, total: 61 },
      ],
    },
    {
      testClass: 'TestEx_managePaymentSchemeController',
      coveredClasses: [
        { name: 'Ex_managePaymentSchemeController', covered: 156, total: 177 },
      ],
    },
    {
      testClass: 'TestEx_MeetingDespositionforCP',
      coveredClasses: [
        { name: 'Ex_MeetingDespositionforCP', covered: 119, total: 137 },
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
        { name: 'Ex_EndMeetingModalController', covered: 24, total: 27 },
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
      testClass: 'TestEx_OppCreationForVCCustomers',
      coveredClasses: [
        { name: 'Ex_OppCreationForVCCustomers', covered: 189, total: 231 },
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
      testClass: 'TestEx_PaymentLinkLogController',
      coveredClasses: [
        { name: 'Ex_EasebuzzEasyCollectRequest', covered: 126, total: 154 },
        { name: 'Ex_PaymentLinkLogController', covered: 47, total: 131 },
      ],
    },
    {
      testClass: 'TestEx_PrebookingCancellationController',
      coveredClasses: [
        { name: 'Ex_PrebookingCancellationController', covered: 114, total: 545 },
      ],
    },
    {
      testClass: 'TestEx_PrintQuotationController',
      coveredClasses: [
        { name: 'Ex_GoogleMapsController', covered: 3, total: 3 },
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
      testClass: 'TestEx_ProjectTrigger',
      coveredClasses: [
        { name: 'Ex_ProjectHandlerServices', covered: 37, total: 38 },
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
        { name: 'Ex_InventoryPriceManagementServices', covered: 1201, total: 1603 },
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
        { name: 'Ex_SHA512HashFunction', covered: 10, total: 10 },
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
      testClass: 'TestEx_RefundTriggerHandler',
      coveredClasses: [
        { name: 'Ex_RefundHandlerServices', covered: 124, total: 163 },
        { name: 'Ex_RefundTriggerHandler', covered: 19, total: 65 },
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
      testClass: 'TestEx_RestEReceiptAPI',
      coveredClasses: [
        { name: 'Ex_RestEReceiptAPI', covered: 105, total: 228 },
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
      testClass: 'TestEx_RestWebIntegration',
      coveredClasses: [
        { name: 'Ex_RESTWebIntegration', covered: 42, total: 103 },
      ],
    },
    {
      testClass: 'TestEx_SendAcknowledgementEmail',
      coveredClasses: [
        { name: 'Ex_SendAcknowledgementEmailController', covered: 15, total: 18 },
        { name: 'Ex_SendApplicationAcknowledgementEmail', covered: 93, total: 101 },
      ],
    },
    {
      testClass: 'TestEx_SendAcknowledgementLetter',
      coveredClasses: [
        { name: 'Ex_SendAcknowledgementLetter', covered: 38, total: 44 },
      ],
    },
    {
      testClass: 'TestEx_SendQuotationToCustomer',
      coveredClasses: [
        { name: 'Ex_SendQuotationToCustomer', covered: 61, total: 73 },
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
      testClass: 'TestEx_TOTPGenerator',
      coveredClasses: [
        { name: 'Ex_TOTPGenerator', covered: 52, total: 55 },
      ],
    },
    {
      testClass: 'TestEx_updateEmailonAccount',
      coveredClasses: [
        { name: 'Ex_updateEmailonAccount', covered: 17, total: 20 },
      ],
    },
    {
      testClass: 'TestEx_VCAssignmentDashboard',
      coveredClasses: [
        { name: 'Ex_VCAssignmentDashboard', covered: 180, total: 237 },
      ],
    },
    {
      testClass: 'TestEx_VideoCallTriggerHandler',
      coveredClasses: [
        { name: 'Ex_VideoCallHandlerServices', covered: 33, total: 33 },
        { name: 'Ex_VideoCallTriggerHandler', covered: 14, total: 14 },
      ],
    },
    {
      testClass: 'TestEx_WebhookHandlerServices',
      coveredClasses: [
        { name: 'Ex_WebhookHandlerServices', covered: 13, total: 122 },
      ],
    },
  ],
};
