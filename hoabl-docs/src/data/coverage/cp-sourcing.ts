import type { CoverageDataset } from '@/lib/coverage';

export const cpSourcingCoverage: CoverageDataset = {
  source: 'HoABL-Prod, 06 Nov 2026',
  items: [
    {
      testClass: 'BulkDemandsReceiptsDashboardTest',
      coveredClasses: [
        { name: 'Ex_BookingTrigger', covered: 10, total: 10 },
      ],
    },
    {
      testClass: 'Ex_BrokerageApprovalDashboardTests',
      coveredClasses: [
        { name: 'Ex_BrokerageApprovalDashboardController', covered: 10, total: 14 },
      ],
    },
    {
      testClass: 'Ex_DSTDashboardControllerTest',
      coveredClasses: [
        { name: 'Ex_OpportunityTrigger', covered: 8, total: 8 },
      ],
    },
    {
      testClass: 'Ex_SpotBrokerageManagementServicesTest',
      coveredClasses: [
        { name: 'Ex_CPPOLineItemTrigger', covered: 6, total: 8 },
        { name: 'Ex_SpotBrokerageManagementServices', covered: 605, total: 867 },
      ],
    },
    {
      testClass: 'Test_BookingBatchUpdate',
      coveredClasses: [
        { name: 'Ex_CreateBooking', covered: 129, total: 155 },
      ],
    },
    {
      testClass: 'Test_JourneyBuilderIntegrationManager',
      coveredClasses: [
        { name: 'Ex_ContactTrigger', covered: 4, total: 4 },
      ],
    },
    {
      testClass: 'TestCpPortal_Controller',
      coveredClasses: [
        { name: 'cpPortal_Controller', covered: 41, total: 608 },
        { name: 'CpPortal_HomePage', covered: 18, total: 19 },
        { name: 'Ex_ChannelPartnerTrigger', covered: 6, total: 6 },
        { name: 'Ex_ChannelPartnerTriggerHandler', covered: 21, total: 25 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_KYCFormService',
      coveredClasses: [
        { name: 'CustomerPortal_KYCFormService', covered: 276, total: 560 },
      ],
    },
    {
      testClass: 'TestEx_AOP_Channel_PartnerTriggerHandler',
      coveredClasses: [
        { name: 'Ex_AOP_Channel_PartnerTriggerHandler', covered: 21, total: 21 },
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
        { name: 'Ex_JBPStartMeetingController', covered: 5, total: 5 },
        { name: 'Ex_RouteMap', covered: 4, total: 4 },
      ],
    },
    {
      testClass: 'TestEx_BatchUpdateOpportunities',
      coveredClasses: [
        { name: 'Ex_BatchUpdateOpportunities', covered: 24, total: 27 },
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
      testClass: 'TestEx_ConcurrentReferralController',
      coveredClasses: [
        { name: 'Ex_ConcurrentReferralController', covered: 15, total: 186 },
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
      testClass: 'TestEx_CPAPICalloutService',
      coveredClasses: [
        { name: 'Ex_CPAPICalloutService', covered: 53, total: 54 },
      ],
    },
    {
      testClass: 'TestEx_CPInvoiceHandler',
      coveredClasses: [
        { name: 'Ex_CpInvoiceApprovalDashboardController', covered: 52, total: 69 },
        { name: 'Ex_CpInvoiceHandlerServices', covered: 22, total: 35 },
        { name: 'Ex_CPInvoiceTriggerHandler', covered: 22, total: 25 },
        { name: 'Ex_CreateCpPaymentController', covered: 9, total: 42 },
      ],
    },
    {
      testClass: 'TestEx_CpLauchInvitationController',
      coveredClasses: [
        { name: 'Ex_CpLauchInvitationController', covered: 4, total: 25 },
      ],
    },
    {
      testClass: 'TestEx_CPLaunchSharing',
      coveredClasses: [
        { name: 'Ex_CPLaunchTriggerHandler', covered: 13, total: 15 },
      ],
    },
    {
      testClass: 'TestEx_CPLaunchTrigger',
      coveredClasses: [
        { name: 'Ex_CPLaunchTrigger', covered: 15, total: 17 },
      ],
    },
    {
      testClass: 'TestEx_CpPaymentTriggerHandler',
      coveredClasses: [
        { name: 'Ex_CpPaymentTriggerHandler', covered: 20, total: 46 },
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
      testClass: 'TestEx_CreateCPLaunchController',
      coveredClasses: [
        { name: 'Ex_CreateCPLaunchController', covered: 39, total: 45 },
        { name: 'Ex_KAMAssignmentDashboardController', covered: 52, total: 58 },
      ],
    },
    {
      testClass: 'TestEx_CssWelcomeCallChecklist',
      coveredClasses: [
        { name: 'EX_WelcomeCallChecklistController', covered: 383, total: 753 },
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
      testClass: 'TestEx_DirectOpportunityCreationPresales',
      coveredClasses: [
        { name: 'Ex_DirectOpportunityCreationPresales', covered: 7, total: 185 },
      ],
    },
    {
      testClass: 'TestEx_DuplicationHandlerServices',
      coveredClasses: [
        { name: 'Ex_ChannelPartnerHandlerServices', covered: 43, total: 56 },
        { name: 'Ex_ContactTriggerHandler', covered: 22, total: 23 },
        { name: 'Ex_DuplicationHandlerServices', covered: 261, total: 736 },
        { name: 'Ex_LeadConversion', covered: 44, total: 51 },
        { name: 'Ex_LeadHandlerServices', covered: 144, total: 314 },
        { name: 'Ex_LeadTriggerHandler', covered: 129, total: 161 },
      ],
    },
    {
      testClass: 'TestEx_EnablePortalLoginController',
      coveredClasses: [
        { name: 'Ex_EnablePortalLoginController', covered: 30, total: 38 },
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
      testClass: 'TestEx_FormQuestionsTriggerHandler',
      coveredClasses: [
        { name: 'Ex_FormQuestionsTrigger', covered: 5, total: 5 },
        { name: 'Ex_FormQuestionsTriggerHandler', covered: 14, total: 32 },
      ],
    },
    {
      testClass: 'TestEx_IncentiveManagementServices',
      coveredClasses: [
        { name: 'Ex_IncentiveManagementServices', covered: 410, total: 605 },
      ],
    },
    {
      testClass: 'TestEx_JBPFormController',
      coveredClasses: [
        { name: 'Ex_JBPFormController', covered: 4, total: 81 },
      ],
    },
    {
      testClass: 'TestEx_KycFormController',
      coveredClasses: [
        { name: 'Ex_KycFormController', covered: 296, total: 822 },
      ],
    },
    {
      testClass: 'TestEx_LaunchTrigger',
      coveredClasses: [
        { name: 'Ex_LaunchTrigger', covered: 5, total: 6 },
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
        { name: 'Ex_CampaignHandlerServices', covered: 93, total: 118 },
      ],
    },
    {
      testClass: 'TestEx_MeetingTriggerhandler',
      coveredClasses: [
        { name: 'Ex_EndMeetingModalController', covered: 24, total: 27 },
        { name: 'Ex_GoogleOAuthIntegration', covered: 144, total: 278 },
        { name: 'Ex_GoogleOAuthIntegrationWithOtp', covered: 143, total: 383 },
        { name: 'Ex_MeetingHandlerServices', covered: 60, total: 68 },
        { name: 'Ex_MeetingTrigger', covered: 8, total: 8 },
        { name: 'Ex_MeetingTriggerHandler', covered: 75, total: 110 },
        { name: 'Ex_TranscriptBatch', covered: 202, total: 377 },
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
      testClass: 'TestEx_PreferenceFormofResidential',
      coveredClasses: [
        { name: 'Ex_PreferenceFormofResidential', covered: 105, total: 109 },
      ],
    },
    {
      testClass: 'TestEx_PrintJBPFormController',
      coveredClasses: [
        { name: 'Ex_PrintJBPFormController', covered: 37, total: 166 },
      ],
    },
    {
      testClass: 'TestEx_ProjectTrigger',
      coveredClasses: [
        { name: 'Ex_ProjectTrigger', covered: 5, total: 6 },
      ],
    },
    {
      testClass: 'TestEx_QRLaunchController',
      coveredClasses: [
        { name: 'Ex_QRLaunchController', covered: 5, total: 65 },
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
      testClass: 'TestEx_RouteTrigger',
      coveredClasses: [
        { name: 'Ex_RouteHandlerServices', covered: 29, total: 32 },
        { name: 'Ex_RouteTrigger', covered: 3, total: 4 },
        { name: 'Ex_RouteTriggerHandler', covered: 16, total: 16 },
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
      testClass: 'TestEx_sendDOCReminderEmail',
      coveredClasses: [
        { name: 'Ex_sendDOCReminderEmailBatch', covered: 198, total: 233 },
      ],
    },
    {
      testClass: 'TestEx_SpotCreationControllers',
      coveredClasses: [
        { name: 'Ex_CreateBrokerageSlabController', covered: 81, total: 98 },
        { name: 'Ex_SpotBrokerageCreationController', covered: 87, total: 104 },
      ],
    },
    {
      testClass: 'TestEx_TaskHandlerServices',
      coveredClasses: [
        { name: 'Ex_TaskHandlerServices', covered: 6, total: 320 },
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
      ],
    },
  ],
};
