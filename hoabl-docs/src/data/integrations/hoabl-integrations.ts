/**
 * Generated from the HoABL production org: Module_Component_Matrix.xlsx ("Integrations" sheet)
 * cross-checked against live org metadata (Remote Site Settings, Named Credentials, Connected Apps,
 * Auth Providers, Call Centers, Email Services) retrieved read-only via `sf` CLI, and against Apex
 * class names appearing across every module's component matrix in this repo.
 */
export interface IntegrationFlow {
  /** Short label for the arrow, e.g. "REST callout". */
  label: string;
  /** What triggers it / what it does. */
  detail: string;
}

export type IntegrationCategory =
  | 'payments'
  | 'telephony'
  | 'messaging'
  | 'maps'
  | 'calendar'
  | 'marketing'
  | 'erp'
  | 'ai'
  | 'documents'
  | 'devops'
  | 'legacy';

export const CATEGORY_META: Record<IntegrationCategory, { label: string; color: string }> = {
  payments: { label: 'Payments', color: '#2563eb' },
  telephony: { label: 'Telephony / CTI', color: '#7c3aed' },
  messaging: { label: 'Messaging (SMS / WhatsApp / Email)', color: '#059669' },
  maps: { label: 'Maps & Location', color: '#0891b2' },
  calendar: { label: 'Calendar & Identity', color: '#0ea5e9' },
  marketing: { label: 'Marketing & Ad Platforms', color: '#db2777' },
  erp: { label: 'ERP', color: '#ea580c' },
  ai: { label: 'AI / LLM', color: '#9333ea' },
  documents: { label: 'Document Generation', color: '#65a30d' },
  devops: { label: 'DevOps & Internal Tooling', color: '#64748b' },
  legacy: { label: 'Legacy / Unclear', color: '#dc2626' },
};

export interface Integration {
  slug: string;
  name: string;
  kind: string;
  category: IntegrationCategory;
  /** lucide-react icon name. */
  icon: string;
  summary: string;
  /** Real endpoint domain(s) resolved from the org's Remote Site Settings / Named Credentials. */
  endpoints: string[];
  outbound?: IntegrationFlow;
  inbound?: IntegrationFlow;
  objects: string[];
  config: string[];
  classes: string[];
  /**
   * 'confirmed' = a live Remote Site/Named Credential AND a matching Apex class were both found.
   * 'config-only' = live config found, but no Apex class clearly tied to it (may run via Flow,
   *   a managed package, or be newly added) — called out in the UI so nobody over-trusts it.
   */
  confidence: 'confirmed' | 'config-only';
  note?: string;
}

export const hoablIntegrations: Integration[] = [
  // ---- Payments ----
  {
    slug: 'easebuzz',
    name: 'Easebuzz',
    kind: 'Payment gateway',
    category: 'payments',
    icon: 'CreditCard',
    summary: 'Collects booking and application payments and reconciles status back onto Opportunity/Application.',
    endpoints: ['easebuzz.in (Remote Site: Easebuzz, Easebuzz_Payment_Initiate_Link)'],
    outbound: { label: 'REST callout', detail: 'Create a payment link / easy-collect request for an Opportunity or Application' },
    inbound: { label: 'Webhook callback', detail: 'Payment status pushed back via a CSP-trusted redirect (EazebuzzPaymentURL) and logged to Integration_Log__c' },
    objects: ['Opportunity', 'Application__c', 'Integration_Log__c'],
    config: ['Custom Setting: EasebuzzAPI__c (Hierarchy)', 'Custom Setting: Sub_Merchant_API_Details__c', 'CSP Trusted Site: EazebuzzPaymentURL, EaseBuzzCheckoutAWS'],
    classes: ['Ex_EasebuzzAPIService', 'Ex_EasebuzzEasyCollectRequest', 'Ex_PaymentLinkLogController', 'Ex_ApplicationSiteController'],
    confidence: 'confirmed',
  },

  // ---- Telephony ----
  {
    slug: 'convox',
    name: 'Convox',
    kind: 'CTI / Dialer / IVR',
    category: 'telephony',
    icon: 'PhoneCall',
    summary: 'Click-to-call telephony and IVR for Leads/Opportunities; call dispositions and CDR data sync back onto Task/Event.',
    endpoints: ['Convox, Convox_API_URL, Convox_Live remote sites', 'Call Center: ConvoxCallCenter'],
    outbound: { label: 'REST API', detail: 'Click-to-call initiated from Lead/Opportunity/Account; agent identified by User.Convox_Agent_Id__c' },
    inbound: { label: 'Callback + Data Cloud stream', detail: 'Call disposition and CDR reports land on Task/Event via ConvoxCallBack and the Convox_Combined_CDR_Report stream' },
    objects: ['Lead', 'Task', 'Event', 'Opportunity', 'User'],
    config: ['Custom Settings: Convox_API_Details__c (Hierarchy), Convox_Api_Details_2__c (List), Convox_CRM_Fields__c (List), Click_To_Call_Endpoint__c (List)', 'Sites: ConvoxSalesAPI, ConvoxCallBack', 'Call Coaching Media Provider: Convox'],
    classes: ['Ex_EventHandlerServices', 'Ex_EventTriggerHandler', 'Ex_TaskHandlerServices', 'Ex_ClickToCallController', 'ex_convoxtaskdisportionController', 'Ex_RestCallbakConvox', 'Ex_RestCTILeadUpdateService', 'Ex_CTILeadUploadServices', 'Ex_CTIDashboard', 'Ex_RESTCreateIVRLoanCaseAPI', 'Ex_RESTIVRCaseCreationAPI', 'Ex_RestIVRCreateTask', 'ho_RestGetCallLogs', 'ho_DataCloudAccountBatchNew'],
    confidence: 'confirmed',
  },
  {
    slug: 'nurix',
    name: 'Nurix / Neurix',
    kind: 'Voice-bot dialer',
    category: 'telephony',
    icon: 'Bot',
    summary: 'Pushes Lead and campaign (Process__c) data to an AI voice-bot dialer; results reviewed on the Neurix dashboard.',
    endpoints: ['Remote Site: Nurix_API'],
    outbound: { label: 'REST API', detail: 'Lead and Process__c (Nurix_Campaign_ID__c) pushed for outbound voice-bot campaigns' },
    inbound: { label: 'Shared dashboard', detail: 'Results reviewed via the Neurix_Dashboard tab; lead-upload/lookup classes are shared with Convox' },
    objects: ['Lead', 'Process__c'],
    config: ['Custom Setting: Nurix_API_Details__c (List)', 'Tab: Neurix_Dashboard'],
    classes: ['Ex_CTIDashboard', 'Ex_CTILeadUploadServices'],
    confidence: 'confirmed',
  },
  {
    slug: 'arrowhead',
    name: 'Arrowhead',
    kind: 'AI voice agent',
    category: 'telephony',
    icon: 'Mic',
    summary: 'A Remote Site Setting for an AI agent platform (api.agent.in.arrowhead.team) exists in the org.',
    endpoints: ['api.agent.in.arrowhead.team'],
    objects: [],
    config: ['Remote Site: ArrowheadAPISite'],
    classes: [],
    confidence: 'config-only',
    note: 'Found live in the org (Remote Site Setting, active) but no Apex class in the component matrix could be tied to it by name — it may be called from a Flow, an External Service, or be a newly wired-up integration not yet reflected in the matrix.',
  },

  // ---- Messaging ----
  {
    slug: 'marketing-cloud',
    name: 'Salesforce Marketing Cloud',
    kind: 'Email / SMS / WhatsApp journeys',
    category: 'messaging',
    icon: 'Mails',
    summary: 'Marketing Cloud Connect (et4ae5 package) drives journeys/emails/SMS; 30+ Remote Site Settings cover its REST, SOAP and auth endpoints across multiple Business Units.',
    endpoints: ['et4ae5__ET_MC_REST_*, et4ae5__ET_IMH_REST_*, et4ae5__Fuel_API, et4ae5__OAuth_Login and 25+ per-tenant endpoints'],
    outbound: { label: 'Field sync', detail: 'Flows format fields (e.g. mobile/stage) for SFMC and the platform connector syncs them into Marketing Cloud' },
    inbound: { label: 'Journey triggers', detail: 'Marketing Cloud journeys read synced Salesforce data to send email/SMS/WhatsApp' },
    objects: ['Lead', 'Contact', 'Opportunity', 'Application__c', 'Channel_Partner__c'],
    config: ['30+ Remote Site Settings (et4ae5__* namespace) for REST/SOAP/Auth per Business Unit', 'Connected App: Marketing_Cloud_Personalization'],
    classes: [],
    confidence: 'config-only',
    note: 'Wired up through the standard Marketing Cloud Connect managed package and declarative field sync (flow names like Update_ChannelPartner_Mobile_SFMC_Format), not custom Apex — so no class names apply here.',
  },
  {
    slug: 'whatsapp',
    name: 'WhatsApp Business API',
    kind: 'Messaging (Meta)',
    category: 'messaging',
    icon: 'MessageCircle',
    summary: 'Sends WhatsApp template messages and receives inbound chat/media via the Meta Graph API.',
    endpoints: ['graph.facebook.com (Meta Graph API)', 'lookaside.fbsbx.com (Remote Site: Whatsapp_Media, for media attachments)'],
    outbound: { label: 'Graph API callout', detail: 'Send WhatsApp template messages from Case/Booking/Account via SendWhatsappMessage' },
    inbound: { label: 'Inbound webhook', detail: 'Inbound chat messages and media handled by Ex_WhatsappMsgTriggerHandler / Ex_WhatsappChatServices' },
    objects: ['Case', 'Account', 'Booking__c'],
    config: ['Remote Site: Whatsapp_Media', 'Tab/LWC: Whatsapp_Template_Dashboard'],
    classes: ['Ex_MetaAPIHandler', 'Ex_WhatsappChatServices', 'Ex_WhatsappMsgTriggerHandler', 'SendWhatsappMessage'],
    confidence: 'confirmed',
  },
  {
    slug: 'msg91',
    name: 'MSG91',
    kind: 'SMS / OTP gateway',
    category: 'messaging',
    icon: 'MessageSquare',
    summary: 'SMS/OTP delivery provider, live in the org as a Remote Site Setting.',
    endpoints: ['api.msg91.com'],
    objects: [],
    config: ['Remote Site: MSG91'],
    classes: [],
    confidence: 'config-only',
    note: 'Live Remote Site Setting, active — no Apex class in the matrix clearly named for it. OTP sending may instead run through Ex_TOTPGenerator/Ex_GoogleOAuthIntegrationWithOtp or a Flow HTTP callout.',
  },
  {
    slug: 'fab-media',
    name: 'Fab Media',
    kind: 'SMS / WhatsApp gateway',
    category: 'messaging',
    icon: 'MessageSquare',
    summary: 'A second SMS/WhatsApp vendor (sms.fabmediatech.com) configured as a live Remote Site Setting.',
    endpoints: ['sms.fabmediatech.com'],
    objects: [],
    config: ['Remote Site: Fab_Media'],
    classes: [],
    confidence: 'config-only',
    note: 'Live in the org, purpose inferred from the domain name only — no Apex class tied to it was found by name.',
  },
  {
    slug: 'email-services',
    name: 'Inbound Email Services',
    kind: 'Email-to-record',
    category: 'messaging',
    icon: 'Mail',
    summary: 'Three Apex Email Services turn inbound emails into Salesforce records/replies.',
    endpoints: ['Salesforce Email Service addresses (EmailToCase, EmailToSalesforce, TicketReplyService)'],
    inbound: { label: 'Inbound email', detail: 'Emails sent to the service address are parsed by its Apex handler' },
    objects: ['Case', 'Ticket__c'],
    config: ['Email Services: EmailToCase, EmailToSalesforce, TicketReplyService'],
    classes: ['Ex_EmailMessageHandlerServices', 'Ex_EmailMessageTriggerHandler', 'Ex_BookingEmailReplyHandler'],
    confidence: 'confirmed',
  },

  // ---- Maps ----
  {
    slug: 'google-maps',
    name: 'Google Maps',
    kind: 'Geocoding / location',
    category: 'maps',
    icon: 'MapPin',
    summary: 'Resolves addresses and coordinates for projects/launches and field visits.',
    endpoints: ['maps.googleapis.com (Remote Site: Location)'],
    outbound: { label: 'REST callout', detail: 'Geocoding / places lookups from Ex_GoogleMapsController' },
    objects: ['Project__c', 'Launch__c'],
    config: ['Remote Site: Location'],
    classes: ['Ex_GoogleMapsController'],
    confidence: 'confirmed',
  },

  // ---- Calendar / Identity ----
  {
    slug: 'google-calendar',
    name: 'Google Calendar',
    kind: 'Calendar sync',
    category: 'calendar',
    icon: 'CalendarDays',
    summary: 'OAuth-based Named Credential for reading/writing Google Calendar events (meeting scheduling).',
    endpoints: ['googleapis.com/auth/calendar (Named Credential + Auth Provider: Google_Calendar_API)'],
    outbound: { label: 'OAuth callout', detail: 'Create/update calendar events for scheduled meetings' },
    objects: ['Meeting__c', 'Event'],
    config: ['Named Credential: Google_Calendar_API', 'Auth Provider: Google_Calendar_API'],
    classes: [],
    confidence: 'config-only',
    note: 'Named Credential and OAuth scope are live and calendar-specific, but no Apex class in the matrix was matched to it by name.',
  },
  {
    slug: 'google-oauth-identity',
    name: 'Google Identity',
    kind: 'OAuth login',
    category: 'calendar',
    icon: 'KeyRound',
    summary: 'Google OAuth used to verify Channel Partner / Contact identity (community login, OTP flows).',
    endpoints: ['accounts.google.com (OAuth)'],
    outbound: { label: 'OAuth callout', detail: 'Verify a CP or Contact’s identity during portal login / registration' },
    objects: ['Contact', 'Channel_Partner__c'],
    config: [],
    classes: ['Ex_GoogleOAuthIntegration', 'Ex_GoogleOAuthIntegrationWithOtp'],
    confidence: 'confirmed',
  },

  // ---- Marketing & Ads ----
  {
    slug: 'google-ads',
    name: 'Google Ads',
    kind: 'Ad platform (Data Cloud)',
    category: 'marketing',
    icon: 'Megaphone',
    summary: 'Multiple Google Ads / MCC accounts connected as Named Credentials for attribution and audience sync, mostly via Data Cloud.',
    endpoints: ['googleads.googleapis.com (8 Named Credentials: GAds, GoogleAds_*, GoogleAds_Ayodhya_MCC)'],
    objects: ['Campaign', 'Digital_Lead__c'],
    config: ['8 Named Credentials for distinct Google Ads/MCC account IDs'],
    classes: [],
    confidence: 'config-only',
    note: 'Configured as native Data Cloud / CRM Analytics connectors (declarative), not called from custom Apex.',
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads',
    kind: 'Ad platform (Data Cloud)',
    category: 'marketing',
    icon: 'Megaphone',
    summary: 'Multiple Meta (Facebook/Instagram) ad accounts connected for attribution, plus the Meta Graph API package.',
    endpoints: ['graph.facebook.com (8 Named Credentials: MetaAds_*, Meta_New, Meta_Source, metacapi__MetaGraphAPI)'],
    objects: ['Campaign', 'Digital_Lead__c'],
    config: ['8 Named Credentials for distinct Meta ad account IDs', 'Two Data Cloud credentials to graph.facebook.com are oddly named "b" and "SFTP_Source" — worth renaming for clarity'],
    classes: ['Ex_MetaAPIHandler'],
    confidence: 'confirmed',
  },
  {
    slug: 'ga4',
    name: 'Google Analytics 4',
    kind: 'Web analytics (Data Cloud)',
    category: 'marketing',
    icon: 'ChartNoAxesCombined',
    summary: 'GA4 property data ingested into Data Cloud for attribution and Tableau reporting.',
    endpoints: ['analyticsdata.googleapis.com (Named Credentials: GA4_403047013, GA4_Data_Cloud_Credential, GA4_Tableau)', 'CSP: Google_Analytics_*'],
    objects: [],
    config: ['3 Named Credentials', 'CSP Trusted Sites: Google_Analytics_Analytics, Google_Analytics_Google, Google_Analytics_Tag_Manager'],
    classes: [],
    confidence: 'config-only',
    note: 'Native Data Cloud / Tableau connector, not custom Apex.',
  },
  {
    slug: 'ad-connectors',
    name: 'LinkedIn / Bing / TikTok / X Ads',
    kind: 'CRM Analytics Web Data Connectors',
    category: 'marketing',
    icon: 'Share2',
    summary: 'Four more ad platforms are wired up as CRM Analytics Web Data Connector Auth Providers for attribution reporting.',
    endpoints: ['LinkedIn Ads, Bing Ads, TikTok Ads, X (Twitter) Ads'],
    objects: [],
    config: ['Auth Providers: LinkedInEmiLinkedInAds, MicrosoftEmiBingAds, SalesforceEmiTikTokAds, TwitterEmiXAds'],
    classes: [],
    confidence: 'config-only',
    note: 'Analytics-only connectors (no transactional Salesforce objects involved) — listed for completeness since the org has them configured.',
  },

  // ---- ERP ----
  {
    slug: 'sap',
    name: 'SAP (via SAP CPI)',
    kind: 'ERP middleware',
    category: 'erp',
    icon: 'Building',
    summary: 'A real SAP Cloud Platform Integration (CPI) tenant is configured as a live Remote Site Setting — the org’s ERP integration path.',
    endpoints: ['hoabl-prd-cpi-*.it-cpi033-rt.cfapps.eu10-005.hana.ondemand.com'],
    objects: [],
    config: ['Remote Site: SAP_Intergration'],
    classes: [],
    confidence: 'config-only',
    note: 'Confirmed live and SAP-specific by its CPI tenant URL, but no Apex class in the matrix was matched to it by name — likely called from a class not covered by the keyword scan, or via a Flow HTTP callout.',
  },

  // ---- AI / LLM ----
  {
    slug: 'groq',
    name: 'Groq',
    kind: 'LLM inference (test)',
    category: 'ai',
    icon: 'Sparkles',
    summary: 'A Remote Site Setting for Groq’s LLM API exists, named "Groq_Test" — looks like an in-progress AI feature.',
    endpoints: ['api.groq.com'],
    objects: [],
    config: ['Remote Site: Groq_Test'],
    classes: [],
    confidence: 'config-only',
    note: 'The "_Test" suffix suggests this is still experimental; no production Apex class was matched to it.',
  },
  {
    slug: 'revspot',
    name: 'RevSpot',
    kind: 'AI sales/brokerage tool',
    category: 'ai',
    icon: 'Sparkles',
    summary: 'Third-party AI tool (api.revspot.ai) surfaced on the Account record via the revSpotAccountDetails component.',
    endpoints: ['api.revspot.ai'],
    objects: ['Account'],
    config: ['Remote Site: RevSpot'],
    classes: [],
    confidence: 'config-only',
    note: 'The revSpotAccountDetails LWC on Account confirms it’s wired up in the UI; the Apex controller behind it wasn’t identified by name in the matrix.',
  },

  // ---- Documents ----
  {
    slug: 'word-to-pdf',
    name: 'Word-to-PDF service',
    kind: 'Document conversion',
    category: 'documents',
    icon: 'FileText',
    summary: 'A custom document-conversion service (hosted at HoABL’s own domain, named "AwsWordToPdf" — likely AWS-backed) used for generating letters/receipts as PDFs.',
    endpoints: ['sfdc.hoabl.in'],
    objects: [],
    config: ['Remote Site: AwsWordToPdf'],
    classes: ['DocumentGenerationServices', 'Ex_WordDocumentPreviewController'],
    confidence: 'confirmed',
  },

  // ---- DevOps ----
  {
    slug: 'devops-center',
    name: 'GitHub / Bitbucket (DevOps Center)',
    kind: 'Source control CI/CD',
    category: 'devops',
    icon: 'GitBranch',
    summary: 'Salesforce DevOps Center syncs metadata changes with GitHub and Bitbucket repositories.',
    endpoints: ['github.com, bitbucket.org'],
    objects: [],
    config: ['Auth Providers: DEVOPS_CENTER_GITHUB, DEVOPS_CENTER_BITBUCKET, DEVOPS_CENTER_PROD, DEVOPS_CENTER_TEST', 'Named Credentials: sf_devops__DevOps_Center_Bitbucket, sf_devops__DevOps_Center_GitHub'],
    classes: [],
    confidence: 'config-only',
    note: 'Standard DevOps Center plumbing, not business-process Apex.',
  },
  {
    slug: 'dev-tooling',
    name: 'Confluence, EasyInsights, DBeaver, Salesforce CLI',
    kind: 'Internal tooling',
    category: 'devops',
    icon: 'Wrench',
    summary: 'Supporting developer/analytics tooling connected to the org.',
    endpoints: ['Confluence (3LO), EasyInsights BI, Data Cloud via DBeaver, Salesforce CLI'],
    objects: [],
    config: ['Auth Provider: Confluence3LOConfluence3LO', 'Connected Apps: EasyInsights, Data_Cloud_DBeaver_Connection, Salesforce_CLI, CPQIntegrationUserApp, Web_Integration_App'],
    classes: [],
    confidence: 'config-only',
  },

  // ---- Legacy ----
  {
    slug: 'old-cp-site',
    name: 'Legacy Partner API',
    kind: 'Deprecated backend',
    category: 'legacy',
    icon: 'Archive',
    summary: 'An old Channel Partner backend, still configured as a live Remote Site Setting.',
    endpoints: ['api-partners.hoabl.in:4000'],
    objects: [],
    config: ['Remote Site: OLD_CP_Site'],
    classes: [],
    confidence: 'config-only',
    note: 'Named "OLD_CP_Site" in the org itself — flagged here as a cleanup candidate, not a currently documented flow.',
  },
  {
    slug: 'cross-instance-sf',
    name: 'Cross-instance Salesforce reference',
    kind: 'Unclear',
    category: 'legacy',
    icon: 'CircleQuestionMark',
    summary: 'A Remote Site Setting pointing at another Salesforce pod (ind150.salesforce.com), not this org.',
    endpoints: ['ind150.salesforce.com'],
    objects: [],
    config: ['Remote Site: SFRestAPI'],
    classes: [],
    confidence: 'config-only',
    note: 'Purpose not identifiable from available metadata alone — could be a legacy sandbox/migration reference or a second org integration. Worth asking the Salesforce admin.',
  },
];
