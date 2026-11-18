import type { ApexClassDoc } from './types';

export const salesApex: ApexClassDoc[] = [
  {
    "name": "Ex_AccountHandlerServices",
    "description": "Runs duplicate-account detection during Account processing by delegating the actual matching logic to Ex_DuplicationHandlerServices.duplicationCheckAcccount() and, for every Account flagged as a likely duplicate, adds a page/record error naming the existing duplicate's name and Id so the user can resolve it before saving — skipped automatically while running tests."
  },
  {
    "name": "Ex_AccountService",
    "description": "A commented-out class (its entire body is wrapped in a block comment) that was designed to notify an external system of Account inserts and updates via @future(callout=true) methods, reading a base endpoint URL from a custom HOABL_CMS__c setting and pushing a wide set of Account/PersonAccount fields (contact details, tier, KAM, channel partner) to that endpoint whenever accounts changed."
  },
  {
    "name": "Ex_AccountTriggerHandler",
    "description": "Handles Account trigger logic, focused on PersonAccount records. On before-insert it builds a country-code lookup from Country_Codes__c custom settings, then for every PersonAccount formats a combined Mobile_with_Country_Code__c field (and a Marketing-Cloud-friendly variant without the '+') from the record's country code and mobile number, validating the resulting length against the matched country's configured min/max digit rules."
  },
  {
    "name": "Ex_AOP_Channel_PartnerTriggerHandler",
    "description": "Validates AOP_Channel_Partner__c records to prevent duplicate Channel-Partner-to-Brokerage-Plan pairings. It builds a key from each new record's AOP_Brokerage_Plan__c and Channel_Partner__c Ids, tracks keys already seen within the same transaction in a set, and adds a validation error to any record that repeats a plan/partner combination already present in the same save."
  },
  {
    "name": "Ex_AOP_CPPOManagementServices",
    "description": "An effectively retired class: its one method body only logs a debug message noting that AOP calculations were moved into Ex_CPPOManagementServices, left in place presumably so existing references don't break while the real logic now lives elsewhere."
  },
  {
    "name": "Ex_AOPBrokerageCreationDashboard",
    "description": "Backs a dashboard for creating AOP (Annual Operating Plan) Brokerage Slabs from an AOP Brokerage Plan. getAOPBrokerage() loads the plan's active flag, name and start/end dates, and getWrapper() seeds a list of AOPSlabWrapper rows (starting with a fixed 'Min Booking Amount' slab from 0 to 0 Cr) for the admin to adjust booking-amount brokerage tiers before saving the full slab structure."
  },
  {
    "name": "Ex_ApexSharingManagementServices",
    "description": "The org's central Apex-managed sharing utility, used by multiple trigger handlers (Applicant, Application) to share Leads, Opportunities and custom objects with specific users or teams outside standard role-hierarchy visibility. shareRecordWithTeamLeadandTeamHead() dynamically builds the correct share-object and parent-field names per SObject type (LeadShare/OpportunityShare/__Share), queries existing shares to avoid duplicate inserts, then shares each record with the mapped team leads and heads."
  },
  {
    "name": "Ex_ApplicantBookingFormController",
    "description": "A global, without-sharing controller exposing the Applicant Booking Form to guest users on the public-facing site. getApplicantType() reflects the Applicant_Type__c picklist's active values for the form's type selector, giving the public booking flow a way to read picklist metadata without needing broader object permissions than the guest user profile grants."
  },
  {
    "name": "Ex_ApplicantTriggerHandler",
    "description": "Handles Applicant__c trigger logic around sharing and booking sync. On insert it shares the parent Application/Opportunity with relevant users via Ex_ApexSharingManagementServices for every applicant tied to an Application. On update, if Update_Sharing__c flips true it re-shares the record, and separately, when the Primary Applicant's name, mobile or email changes, it stages the corresponding field changes to be pushed onto the related Booking__c."
  },
  {
    "name": "Ex_ApplicationAcknowdgeFormController",
    "description": "Backs the Application acknowledgement form by fetching a single Application__c's key fields — name/number, status, property type, dates, contact details and acknowledgment flags — and mapping them into an ApplicationWrapper DTO that exposes simple booleans (isSubmitted, isAccepted, isRejected, isFinalAccepted) the LWC can branch its UI on directly instead of parsing raw picklist values."
  },
  {
    "name": "EX_ApplicationAckowledgementController",
    "description": "A Visualforce controller for the printed Application acknowledgement page, exposing a large set of plain public properties (Application, RERA phases, Receipts, Applicants, company/launch logo URLs, applicant name, DOB, gender, PAN/Aadhaar numbers and upload status, address fields) that the page markup binds to directly to render a complete, personalized acknowledgement document for the applicant."
  },
  {
    "name": "Ex_ApplicationCancellationCaseController",
    "description": "Supports the Application-cancellation Case workflow. getCase() returns a Case's approver comments at each escalation level, its escalation level and assignee, and the related Application, while getFirstRefundDeskUserId() finds the longest-tenured active user on the 'Refund Desk' profile to use as a default assignee when a cancellation case needs to be routed to that queue."
  },
  {
    "name": "Ex_ApplicationCancelMessagingBatch",
    "description": "A scheduled Batchable job that finds every open Case flagged as an Application-cancellation refund case and gathers each one's full escalation contact chain — the application owner, the closing manager's team lead, the launch's closing head, business head, MSS lead/head and CSO, plus the project's refund helpdesk team — together with aging fields (hours open, response/escalation TAT) so the paired handler class can send the right overdue-escalation emails to the right people."
  },
  {
    "name": "Ex_ApplicationCancelMessagingHandler",
    "description": "Sends escalation emails for aging Application-cancellation cases found by Ex_ApplicationCancelMessagingBatch. It defines business-hours (9) vs calendar-hours (24) constants for SLA math, builds a clean manager display name from first/last name fields (falling back gracefully if either is blank), and groups cases by escalation day-number and manager name so one combined email per manager/day can be sent instead of one per case."
  },
  {
    "name": "Ex_ApplicationDashboardController",
    "description": "Backs the Application-cancellation dashboard on an Opportunity. getApplications() lists every not-yet-cancelled, sequenced, not-yet-booked Application on the Opportunity ordered by sequence, and cancelApplication() marks a specific Application cancelled with a reason/sub-reason, pulling in the launch's Business Head, MSS Head and CSO so the cancellation can be routed or notified to the right leadership."
  },
  {
    "name": "Ex_ApplicationFormController",
    "description": "Supplies reference data for the Application form. getLaunch() returns a Launch together with its Project's full location (village, street, city, district, taluka, pincode, state), the owning Company, SBI MCLR rate and RERA project timelines, and getReraPhases() returns the RERA phases registered under that launch's project so the form can offer the correct RERA number options."
  },
  {
    "name": "Ex_ApplicationHandlerServices",
    "description": "Houses Application__c business logic, with sortApplicationsSequenceWise() as a @future method that reloads a given set of Applications ordered by creation date, groups them by their parent Opportunity, and (in code beyond this excerpt) renumbers each Opportunity's Applications' Sequence__c so applications are always numbered in the order they were actually created, even after some are deleted or reordered."
  },
  {
    "name": "Ex_ApplicationSiteController",
    "description": "A public-site controller for displaying an Application record. getApplication() dynamically describes every field on Application__c via Schema.describeSObjects() and builds a full field-name list at runtime rather than hardcoding a SELECT clause, so the query automatically picks up new custom fields on the object without the Apex needing to be updated — at the cost of always returning every field rather than only what the page needs."
  },
  {
    "name": "Ex_ApplicationTriggerHandler",
    "description": "Handles Application__c trigger logic. On insert, for every Application linked to an Opportunity it shares the Opportunity with the right users via Ex_ApexSharingManagementServices and collects the Application's Id, then calls Ex_ApplicationHandlerServices.sortApplicationsSequenceWise() on the full batch so newly inserted Applications are immediately renumbered within their Opportunity."
  },
  {
    "name": "Ex_ApproveRejectEmailNotification",
    "description": "A queueable, callout-enabled job that emails applicants once their Application is approved or rejected and, on approval, generates and attaches the acknowledgement PDF to the record. It sends from a dedicated 'Updates HoABL' Org-Wide Email Address, builds both outbound Messaging.SingleEmailMessage records and EmailMessage activity-history rows, and stores the generated PDF as a ContentVersion on the approved application."
  },
  {
    "name": "Ex_AttendanceRegulator",
    "description": "Checks and reports Team Member availability for launch assignment. It defines an AttendanceWrapper DTO carrying a member's Id, name, launch, and both a general isAvailable flag and a launch-specific isLaunchAvailable flag, plus an AvailabilityResponse wrapper for success/failure messages — used by scheduling or roster UIs to only offer team members who are actually free for a given launch."
  },
  {
    "name": "Ex_AwekeningFormController",
    "description": "Backs the 'Awakening' CP form shown at a launch. getCPLaunches() resolves a specific CP_Launch__c record by Id, and getFormQuestions() returns every Form_Questions__c configured for that launch (question text, type, and picklist options where applicable) so the form can be rendered dynamically from configured questions rather than hardcoded fields."
  },
  {
    "name": "Ex_bookingCancellationController",
    "description": "Reverses a booking cancellation in progress: updateBookingStatus() resets a Booking__c back to 'Booking Confirmed' and nulls out every cancellation-related field (status, initiator, reason/sub-reason, liquidated and brokerage charges, interest amount, promoter-borne costs and taxes, refund amount), effectively undoing a cancellation request so the booking returns to its normal active state."
  },
  {
    "name": "Ex_BookingHandlerServices",
    "description": "A large service class holding core Booking__c business logic, including (in code beyond this excerpt) demand-raising based on payment milestone schedules. Its commented-out raiseBookingRelatedDemand() method shows the intended approach: dynamically build a SOQL query across Payment_Milestone__c's full charge breakdown (agreement value, development/consideration/statutory/other charges with GST splits) for bookings due on calculated demand-raise dates, tying milestones back to their Quotation and correspondence contact."
  },
  {
    "name": "Ex_BookingTriggerHandler",
    "description": "The handler behind the Booking__c trigger, covering a wide range of post-booking automation on insert: grouping bookings by Campaign for campaign-performance updates, collecting bookings tied to a CP Launch for channel-partner processing, and (per its header comments) previously also auto-created Registration Cases and ran round-robin Key Account/Collection Manager assignment, both since commented out and left disabled."
  },
  {
    "name": "Ex_BudgetApprovalControllerNew",
    "description": "Supplies Launch data for a budget-approval screen: getAllLaunchRecords() lists every Launch with its MSS owner, MSS Head and CEO fields for a selection list, and getLaunchRecord() returns those same fields for one specific Launch once selected, giving the approval UI the leadership chain relevant to that launch's budget."
  },
  {
    "name": "Ex_BudgetHeadHandlerServices",
    "description": "Prevents duplicate Budget_Head__c records per Launch. For the 'Starter' header it keys uniqueness on Launch + header alone; for any other header it also requires a matching sub-header, builds a map of existing non-conflicting records to compare against, and adds a record error naming the existing duplicate whenever a new or updated Budget Head collides on that key."
  },
  {
    "name": "Ex_BudgetHeadTriggerHandler",
    "description": "A thin before-insert trigger handler for Budget_Head__c that simply forwards every incoming record batch to Ex_BudgetHeadHandlerServices.duplicationCheck() to enforce the one-Starter-or-one-per-sub-header-per-Launch rule."
  },
  {
    "name": "Ex_BudgetTransferController",
    "description": "Supports transferring approved budget between Budget Heads on the same Launch. getLaunchIdFromCurrentBudgetHead() resolves the Launch and currently approved balance for a Budget Head the given user is assigned to, and getBudgetHeads() lists the other Budget Heads on that same Launch (flagging ones with an approved amount as effectively read-only) so the user can pick a valid destination for the transfer."
  },
  {
    "name": "Ex_CallDispositionController",
    "description": "Backs the call-disposition logging UI used after a sales call. getCategoryPicklist() reflects Task.Category__c's active values for the disposition category dropdown, and getActiveLaunches() returns every active Launch (enforcing field-level security) as label/value options so the agent can tag which launch the call related to."
  },
  {
    "name": "Ex_CaseHandlerServices",
    "description": "A future, callout-enabled method that back-fills a Case's Account, Booking and Application from related records once a case is created, tagging the Account if it was left null. It resolves a default routing user from Case_Management_Default_User__c (matching the admin username with a LIKE pattern so sandbox-suffixed usernames like 'salesforceadmin@force.com.uat' still resolve) and uses that as a fallback owner when no project-specific routing applies."
  },
  {
    "name": "Ex_CaseTriggerHandler",
    "description": "Handles Case trigger logic, including (per this excerpt's afterInsert) loading configured restricted email domains from Case_Domain_Restrictions__c to flag or filter cases whose SuppliedEmail comes from a blocked domain — the actual case-deletion logic for matched domains is currently commented out, leaving the restricted-domain list collected but not yet acted upon in this version."
  },
  {
    "name": "Ex_ChannelPartnerHandlerServices",
    "description": "Runs duplicate-Channel-Partner detection by delegating to Ex_DuplicationHandlerServices.duplicationCheckCP() and adding a record error naming the conflicting existing partner's name and Id for every flagged record (skipped during tests). A commented-out future method shows a planned-but-disabled feature to email a welcome message to new Channel Partners via a dedicated email template once their Point of Contact and Email are set."
  },
  {
    "name": "Ex_ChannelPartnerTriggerHandler",
    "description": "Handler for the Channel Partner trigger: on before-insert it runs every new record through the duplication check, and on before-update it re-runs the same check only for records whose Point_of_Contact__c actually changed, since that's the field the duplicate-matching logic keys off. An after-insert welcome-email method is present in comments but not active."
  },
  {
    "name": "Ex_ChargeDetailsTriggerHandler",
    "description": "On Charge_Detail__c insert, shares each new charge detail's parent Quotation with the appropriate users via Ex_ApexSharingManagementServices, then resolves and registers the related Opportunity Id for each shared record so Opportunity-level sharing rules can also pick up the new charge detail."
  },
  {
    "name": "Ex_ClickToCallController",
    "description": "Supplies picklist options for the click-to-call dialog on a Task: getCategoryPicklist() reflects Task.Category__c's active values and getFundingTypePicklist() reflects Task.Funding_Type__c's, letting the LWC populate both dropdowns from live schema metadata instead of a hardcoded list that could drift from the actual picklist configuration."
  },
  {
    "name": "Ex_CompanyBankAccountHandlerServices",
    "description": "A future, callout-enabled method that registers a new Company Bank Account with the payment gateway as a sub-merchant. It loads the 'Create Sub Merchant Id' endpoint and base URL from Sub_Merchant_API_Details__c custom settings, pulls the Company's Key/Salt credentials, and (beyond this excerpt) posts the bank account details to the gateway so payments collected under that company can be routed to the correct bank account."
  },
  {
    "name": "Ex_CompanyBankAccountTriggerHandler",
    "description": "Trigger handler for Company_Bank_Account__c: before-insert just logs the incoming batch, and after-insert collects every new record's Id and parent Company Id, then calls Ex_CompanyBankAccountHandlerServices.fetchCompanyBankAccounts() asynchronously to register the new bank account with the payment gateway's sub-merchant API."
  },
  {
    "name": "Ex_ConcurrentReferralController",
    "description": "Backs the 'Concurrent Referral' quick action on an Opportunity, which lets a sales rep refer a second, simultaneous customer. It creates a new Lead with the Referral record type and a 'Concurrent Referral' sub-source, converts it straight to an Opportunity, carries forward the original Opportunity's source fields, links the new Opportunity back to the original, and sets the creating user as both Sourcing Manager and Owner of the new record — reusing shared launch/country-code/mobile-validation logic from Ex_DigitalOpportunityCreation."
  },
  {
    "name": "Ex_ContactHandlerServices",
    "description": "Runs duplicate-Contact detection for Channel Partner contacts via Ex_DuplicationHandlerServices.duplicationCheckContact(), adding a record error naming the conflicting contact along with their Channel Partner's name and CP code so the duplicate can be identified in context, not just by contact name alone (skipped during tests)."
  },
  {
    "name": "Ex_ContactTriggerHandler",
    "description": "On before-insert, formats a Contact's phone and mobile numbers with their respective country codes into combined fields, then — only for Contacts using the CP_Contact record type — runs them through Ex_ContactHandlerServices' duplication check, since the duplicate-detection rule for Contacts is scoped specifically to Channel Partner contact records rather than all Contacts."
  },
  {
    "name": "Ex_CPLaunchHandlerServices",
    "description": "Shares new CP_Launch__c records with the right Channel-Partner-Sourcing-Team hierarchy. processCPLaunchSharing() finds each record owner's Team_Member__c entry (scoped to the Channel Partner Sourcing Team for that launch) to resolve their Team Lead and Team Head, then (beyond this excerpt) inserts CP_Launch__Share records so those managers automatically see CP Launches owned by their team members."
  },
  {
    "name": "Ex_CPLaunchTriggerHandler",
    "description": "Handler for the CP Launch trigger: before-insert and before-update (only for records whose Channel Partner or Launch changed) run duplicate-CP-Launch validation via Ex_CPLaunchHandlerServices, and handleCPLaunchInsertSharing() kicks off the Apex-sharing setup so new CP Launch records get shared with the appropriate sourcing team management chain."
  },
  {
    "name": "Ex_CreateEReceiptController",
    "description": "Supports manually creating an e-receipt with manual splits. getCompanyBankAccounts() returns a Company's bank accounts restricted to Current Account, RERA Account or Payment Gateway types (enforced with WITH USER_MODE), and getCompanyForOpportunity() resolves the correct legal entity/company from the Opportunity's Launch so the e-receipt is recorded against the right bank account and company."
  },
  {
    "name": "Ex_CustomActivitiesController",
    "description": "Backs the ex_customActivities LWC, which shows a Booking's related Tasks and Events as a unified activity timeline. It also defines a standard confidential-information email disclaimer (legal boilerplate plus a note that House of Abhinandan Lodha, founded 2020, is unrelated to 'Lodha'/'Lodha Group') that gets appended to emails sent from this activity component."
  },
  {
    "name": "ex_customTaskController",
    "description": "Backs a custom task-creation component (closely mirroring ex_convoxtaskdisportionController). getRecordTypeId() resolves the Task record type Id for 'Sales Call', and an ObjectInfoResponse wrapper reports whether a given object is a Lead so the component can adjust its field layout for Lead vs other object types."
  },
  {
    "name": "Ex_DigitalLeadHandlerServices",
    "description": "Processes Facebook-sourced Digital Leads into Salesforce Leads/Opportunities. fbLeadProcess() loads a Digital_Lead__c's full ad-attribution payload (campaign, adset, ad, UTM parameters, GCLID/FBCLID click ids, CTI flag) for a single lead at a time and converts it into the corresponding Lead/Account/Opportunity records, recently modified to no longer require the matched Campaign to be Active__c."
  },
  {
    "name": "Ex_DigitalLeadTriggerHandler",
    "description": "On Digital_Lead__c insert and update, collects every record that isn't yet Executed__c (or just flipped back to not-executed) and passes those Ids to Ex_DigitalLeadHandlerServices.fbLeadProcess(), so a Facebook-sourced lead is processed into a Lead/Opportunity exactly once it's ready, and reprocessed if something resets its executed flag."
  },
  {
    "name": "Ex_DigitalOpportunityCreation",
    "description": "Backs the Digital Opportunity creation component, deliberately running without sharing so any user with access to the Apex class can create these records regardless of object/record-level sharing restrictions. getLaunchNames() lists active Launches and getCountryCodes() reflects Lead.Country_Code__c's active picklist values, giving the creation form its launch and phone-country-code options."
  },
  {
    "name": "Ex_DirectOpportunityCreation",
    "description": "Backs direct (non-digital, non-presales) Opportunity creation. getLaunchNames() lists active Launches and getCountryCodes() reflects Lead.Country_Code__c's picklist values — functionally near-identical to Ex_DigitalOpportunityCreation and Ex_DirectOpportunityCreationPresales, suggesting the same opportunity-creation pattern was duplicated per intake channel rather than shared through one common utility."
  },
  {
    "name": "Ex_DiscountAppliedTriggerHandler",
    "description": "On Discount_Applied__c insert, shares each new discount's parent Quotation with the appropriate users via Ex_ApexSharingManagementServices, then resolves and registers the related Opportunity Id for each shared record so Opportunity-level sharing also picks up the newly applied discount."
  },
  {
    "name": "Ex_EasebuzzAPIService",
    "description": "Looks up a payment transaction's current status directly from Easebuzz by transaction Id. callAPI() is the Aura entry point, and fetchTransactionStatus() calls Easebuzz's '/transaction/v2.1/retrieve' endpoint (hitting its test dashboard URL in this version), updating the matching E_Receipt__c with the retrieved status and writing an Integration_Log__c entry for the callout."
  },
  {
    "name": "Ex_EasebuzzEasyCollectRequest",
    "description": "Generates an Easebuzz payment link for an Opportunity. createEasyCollectRequest() runs as a future, callout-enabled method, loading the EasyCollect payment-link endpoint from EasebuzzAPI__c custom settings and the correct key/salt credentials for the Opportunity's Launch for each sub-merchant Id supplied, logging every attempt to Integration_Log__c, and (per its 2025 update) now emails the resulting payment link in bulk rather than one at a time."
  },
  {
    "name": "Ex_EditQuotation",
    "description": "Backs quotation editing. getPriceListMapDetails() delegates to Ex_InventoryPriceManagementServices for the applicable price list, getAllPriceMapDetails() recomputes a quotation's full pricing (charges, car park price, discounts applied) into a raw numeric map, and getAllPriceInfoFormattedMap() converts those raw figures into currency-formatted display strings for the edit-quotation UI."
  },
  {
    "name": "Ex_EndMeetingModalController",
    "description": "Backs the 'End Meeting' modal. updateEndTime() stamps a Meeting's Actual_End_Time__c with the current time and, if the meeting's assigned Team Member belongs to the Closing Team, flips that team member's Availability__c back to true, freeing them up to be assigned a new meeting immediately after finishing the current one."
  },
  {
    "name": "Ex_eReceiptHandler",
    "description": "Shares the parent Opportunity with the relevant users whenever an E-Receipt is processed. processEReceipts() only acts on receipts that are either a successful Auto receipt or any Manual receipt (explicitly excluding e.g. failed/pending Auto receipts below an Application threshold of ₹45,000), calling Ex_ApexSharingManagementServices to extend Opportunity sharing to whoever needs visibility into that receipt."
  },
  {
    "name": "Ex_EssentialDetailsPendingReminder",
    "description": "A batch/schedulable job that reminds customers and closing managers when an Application's essential details (identity documents, KYC fields, essential-details form) are still incomplete. It loads an enormous field set per Application — every KYC and identity field, up to four prior reminder-sent flags/dates, and the full closing-manager escalation chain (manager, team lead, team head, MSS) — so it can track exactly which reminder number is due next and who to notify if the customer still hasn't responded."
  },
  {
    "name": "Ex_EventHandlerServices",
    "description": "Pushes video-call completion status back to Convox. convoxVcUpdateApi() is a future, callout-enabled method that loads Convox API credentials from custom settings, resolves each Event's parent Opportunity (restricted to ATL, Digital or Presales record types), and builds a 'VC_status_update' JSON payload keyed by the Opportunity's Lead__c Id, setting a CRM field to 'SfdcVCStatus,done' when the meeting was completed with the customer so Convox's dialer reflects the outcome."
  },
  {
    "name": "Ex_EventTriggerHandler",
    "description": "On Event insert, splits events into two groups for automated email notifications: those tied to an Opportunity with a Meeting__c set (collecting the related meeting and launch) and those tied to a Booking with a CSS_Meeting__c set, so the correct meeting-confirmation or CSS-meeting email template and recipients can be chosen depending on which kind of meeting the calendar event represents."
  },
  {
    "name": "Ex_ExtendValidityonOpportunity",
    "description": "Backs the Opportunity validity-extension feature. getOpportunityDetails() and getOpportunity() both return an Opportunity's close date, configured validity window, days already extended, approver, approval status and reassignment counter, giving the extension-request UI everything it needs to show how much runway is left and whether an extension is already pending approval."
  },
  {
    "name": "Ex_GenerateQuotation",
    "description": "Backs quotation generation on an Opportunity. getOpportunityDetails() delegates to Ex_InventoryPriceManagementServices for the opportunity's pricing context, and checkPropertyPresentInLaunchDetails() verifies a specific property is actually part of the given launch's inventory (via Launch_Property__c) before allowing a quotation to be generated against it."
  },
  {
    "name": "Ex_getAllAccountDetails",
    "description": "An inbound @RestResource endpoint (/getAllAccountDetails) exposing every Person Account in the org to an external partner system. It returns a large, 'hoabl_'-prefixed field set — name, contact details, demographics, channel partner, customer tier, KAM, address, WhatsApp consent, and completed/ongoing investment summary figures — as a bulk feed, likely consumed by a partner portal or external CRM integration (matching the 'Web_Integration_App' connected app)."
  },
  {
    "name": "Ex_getAllPropertTypeDetails",
    "description": "An inbound @RestResource endpoint (/getAllPropertyTypeDetails) that returns every Property_Type__c (unit type) in the org — configuration, area range, price range and parent project — to an external caller, following the same partner-facing REST pattern as Ex_getAllAccountDetails, used to expose live inventory configuration to an external system such as a public listings site."
  },
  {
    "name": "Ex_getAllRERAPhaseDetails",
    "description": "An inbound @RestResource endpoint (/getAllRERAPhases) returning every RERA_Phase__c record (RERA number, parent project, test-record flag) to an external caller, part of the same public-facing REST API surface giving an outside system read access to HoABL's regulatory project data."
  },
  {
    "name": "Ex_getPropertyType",
    "description": "An inbound @RestResource endpoint (/getPropertyTypeAPI) that looks up a single Property_Type__c by Id (passed as 'hoabl_inventorybucketid' in the POST body) and returns its configuration, area and price range, validating that an Id was supplied and that a matching record exists before responding — the single-record counterpart to the bulk Ex_getAllPropertTypeDetails endpoint."
  },
  {
    "name": "Ex_GoogleMapsController",
    "description": "A simple Visualforce controller constructor that loads the stored Google Maps API key from the Google_API_Details__c custom setting record named 'Google Maps API Key' into a public property, so a Visualforce page embedding a Google Map can read the key without hardcoding it in markup."
  },
  {
    "name": "Ex_GoogleOAuthIntegration",
    "description": "Handles Google OAuth login/identity verification, with its primary method (fetching the authenticated user's Google profile via the Google_Calendar_API Named Credential's '/oauth2/v1/userinfo' endpoint) currently commented out in this version, leaving the class as a placeholder or disabled variant of the OAuth flow implemented more actively in Ex_GoogleOAuthIntegrationWithOtp."
  },
  {
    "name": "Ex_GoogleOAuthIntegrationWithOtp",
    "description": "Verifies a user's identity via Google OAuth as part of an OTP-backed flow, and separately provides createCSSCalendarEventWithDetails() (called by Ex_CSSMeetingTriggerHandler) which creates a Google Calendar event for a CSS meeting via the Google_Calendar_API Named Credential's callout endpoint — the active integration point confirming Google Calendar sync is a real, in-use feature rather than just configured."
  },
  {
    "name": "Ex_IncentiveManagementServices",
    "description": "Calculates and creates sales incentives for VC (video call) activity. incentiveForVds() builds a web of lookups across each manager's Opportunities, their related Meeting-Done Events, Applications and Bookings, cross-referenced against each Opportunity's Launch's configured Spot Incentive slabs, tracking already-awarded incentive keys (by user + opportunity + incentive combination) so the same incentive is never paid out twice for the same milestone."
  },
  {
    "name": "Ex_INFormat",
    "description": "A number-formatting utility (reused from an earlier Exceller demo org) that converts a Decimal amount into the Indian numbering format (lakhs/crores grouping with commas, e.g. 12,34,567 rather than 1,234,567), handling negative values and preserving any decimal portion, used wherever currency amounts need to display in the Indian convention rather than the Western one."
  },
  {
    "name": "Ex_InventoryPriceManagementServices",
    "description": "A core pricing/inventory service. getCompanyInfo() resolves which legal Company a Property belongs to by checking the Company field at every level of its hierarchy in order — the Property itself, its Tower, Tower's Wing, Phase, RERA Phase and finally Project — falling through to whichever level has a Company populated, since not every property record is guaranteed to have it set directly."
  },
  {
    "name": "Ex_LaunchService",
    "description": "Syncs Launch records to an external CMS/website. insertLaunch() and updateLaunch() are future, callout-enabled methods that load a Launch's public-facing fields (name, salt/key credentials, company name, area and price ranges, organic campaign Id) along with the active HOABL_CMS__c base URL setting, then push each launch to the external CMS via handleApiCall() so the public website's project listings stay in sync with Salesforce."
  },
  {
    "name": "Ex_LaunchTriggerHandler",
    "description": "On Launch update, compares every CMS-relevant field (name, test-record flag, salt/key, company name, area/price range, organic campaign Id) between old and new values and, if any of them actually changed (and the context isn't a test run), calls Ex_LaunchService.updateLaunch() to push the change to the external CMS — afterInsert similarly triggers the initial CMS sync for brand-new launches."
  },
  {
    "name": "Ex_LeadConversion",
    "description": "Carries WhatsApp message history forward when a Lead converts to an Opportunity. convertLead() finds every Whatsapp_Message__c already linked to the Leads being converted, maps them by Lead Id, and (beyond this excerpt) re-links those messages to the newly created Opportunity so a customer's prior WhatsApp conversation history isn't lost once their Lead becomes an Opportunity."
  },
  {
    "name": "Ex_LeadHandlerServices",
    "description": "Runs duplicate-Lead detection and basic data-quality validation on Leads. duplicationCheck() blocks a Lead whose mobile number matches its own alternate mobile number outright, otherwise delegates to Ex_DuplicationHandlerServices.duplicationCheck() and adds a record error for any Lead matched against another existing Lead, with separate handling (beyond this excerpt) for Channel-Partner-sourced leads and an optional round-robin assignment step."
  },
  {
    "name": "Ex_leadSummaryController",
    "description": "Backs a lead-summary widget. getLeadDetails() returns a single Lead's CTI dialer presence, connection/serviced status, and call/not-connected-call counts, giving an at-a-glance view of a lead's calling engagement without needing to open the full record."
  },
  {
    "name": "Ex_LeadTriggerHandler",
    "description": "A large handler governing Lead creation rules, including shift-hour-aware routing for digital leads: it reads Ex_Digital_Lead_Shift_Config__c for the configured shift start/end hours (defaulting 8 AM–11 PM IST) and the current hour in Asia/Kolkata to determine whether a lead is arriving during non-shift hours, assigns a priority from Lead_Type_Priority__c records, and tracks a per-transaction skipFutureCTIUploadLeadIds set so leads released from shift-holding by a batch job don't get double-pushed to Convox outside the allowed @future context."
  },
  {
    "name": "Ex_LeadUploadExecutionBatch",
    "description": "A one-time batch that dynamically describes Lead_Upload__c to build its full field list at runtime, then (beyond this excerpt) processes a given set of Lead_Upload__c staging records into real Lead records, letting bulk lead-upload data be validated and converted without hardcoding every staging field in the batch's SOQL."
  },
  {
    "name": "Ex_LeadUploadManagementServices",
    "description": "Converts a single Lead_Upload__c staging record into a real Lead. executeLead() resolves the correct Lead record type by the upload's Type__c label, maps across name, contact, country-code and launch/channel-partner fields, flags the new lead for round-robin assignment, and defaults Lead Source/Sub-Source to blank rather than null when not supplied."
  },
  {
    "name": "Ex_LeadUploadTriggerHandler",
    "description": "On Lead_Upload__c insert, collects every record not yet Executed__c and kicks off Ex_LeadUploadExecutionBatch (batch size 1, so each staging row is processed as its own transaction) to convert them into real Leads; afterUpdate re-triggers the same batch for records whose Executed__c flag just flipped back to false."
  },
  {
    "name": "Ex_LeadValidityExpiryBatch",
    "description": "A stateful batch that finds Leads marked Is_Connected__c but still sitting in '02- Contacted' status past their configured Validity__c date, and expires them: removing them from the CTI dialer (Present_in_CTI_Dialer__c = false), moving their Status to '04- Lost' and setting Lead_Sub_Stage__c to 'Validity Expired', so stale contacted leads are automatically cleaned out of the active pipeline."
  },
  {
    "name": "Ex_managePaymentSchemeController",
    "description": "Backs the payment scheme management screen for a Property Type. fetchProjectCharges() returns the active Property_Type_Charge__c records for a unit type ordered by charge bucket, and fetchPaymentScheme() resolves a Payment Scheme's full context — its Property Type, Wing, Phase, Project, project type and whether GST applies on the token amount — needed before the scheme's milestones can be edited."
  },
  {
    "name": "Ex_MeetingDespositionforCP",
    "description": "Supports CP meeting disposition and the Awakening Form flow. getCPLaunch() returns a CP Launch's Channel Partner and whether its Awakening Form has already been filled, and getFormQuestions() returns that launch's Awakening-Form-type questions in sequence order, driving the disposition form shown to a CP rep after a launch meeting."
  },
  {
    "name": "Ex_MeetingEventController",
    "description": "Backs meeting disposition for VC (video call) meetings. getOpportunities() loads a Meeting's up to six member slots (Member_1__c through Member_6__c, each an Opportunity) and returns the corresponding Opportunities with organisation, designation, location and occupation fields, letting the VC disposition screen show every customer who joined a multi-party meeting."
  },
  {
    "name": "Ex_MeetingHandlerServices",
    "description": "Handles Meeting__c automation; its commented-out AssignDayPlanToMeeting() method shows the intended (now disabled) logic to auto-link a CP meeting to that CP Launch owner's Day Plan for the same date by matching the Day Plan's Sourcing_Member__c to the launch owner, so a rep's scheduled CP meetings would automatically appear on their planned route for the day."
  },
  {
    "name": "ex_MeetingOTPVerifyController",
    "description": "Backs OTP-based meeting verification for multi-party meetings. getOpportunity() loads a Meeting's up to six member Opportunity slots (Member_1__c–Member_6__c) into a single set so the OTP verification screen can confirm the identity of every attendee tied to that meeting before proceeding."
  },
  {
    "name": "Ex_MeetingTriggerHandler",
    "description": "Handles Meeting__c trigger logic, including a bypassTrigger static flag other code can set to skip this handler entirely. On before-insert, OBM (On-the-go/outbound?) record-type meetings are collected and auto-assigned to the right Team Member via Ex_MeetingHandlerServices.assignOBMMeetingToTeamMember(), and after-insert checks for a 'MeetingEvent' PushTopic to notify subscribed clients of the new meeting outside of test runs."
  },
  {
    "name": "Ex_NumberToWordsConverter",
    "description": "Converts a numeric currency amount into its English words representation (e.g. for cheques or legal documents). config() seeds a lookup list of number words from Zero through at least Nineteen, which the rest of the class (beyond this excerpt) combines with tens/hundreds/thousands/lakhs/crores logic to spell out arbitrarily large Indian-formatted currency amounts in words."
  },
  {
    "name": "Ex_OppCreationForVCCustomers",
    "description": "A global, without-sharing controller (for public-site LWC access) that creates Leads/Opportunities for VC customers after validating the referring CP's code. getChannelPartnerDetails() resolves a CP Launch's Channel Partner (code, mobile, name) and parent Launch, which the rest of the class (beyond this excerpt) uses to validate the CP before generating the Opportunity tied to that launch."
  },
  {
    "name": "Ex_OpportunityHandlerServices",
    "description": "Runs duplicate-Opportunity detection with differentiated error messages. duplicationCheck() delegates matching to Ex_DuplicationHandlerServices.duplicationCheckOpportunity() and tailors the error shown per conflict type: a clear 'Meeting Done' message if the existing duplicate already had its meeting completed, a 'System Generated' message if the duplicate was auto-created, and a generic duplicate message otherwise (suppressed during tests), so the sales rep understands why they can't create a second Opportunity for the same launch."
  },
  {
    "name": "Ex_OpportunityTriggerHandler",
    "description": "On Opportunity before-insert, resolves the correct RecordTypeId from a plain-text Record_Type_Name__c field passed in from external sources, and sets a different CloseDate when running inside a test context versus normal execution, among other grouped logic (round-robin and referral assignment lists) visible further in the class for routing new opportunities to the right sourcing manager."
  },
  {
    "name": "Ex_PaymentEReceiptController",
    "description": "A Visualforce controller for the printed payment e-receipt. It exposes a large set of public properties — receipt number, payment date/type/mode, amount (raw, formatted and spelled out in words), customer name/mobile/email, company name, address and GSTIN — defaulting Status to 'Approved' and reading the receipt Id from the page URL, for the page markup to render directly onto the printed receipt."
  },
  {
    "name": "Ex_PaymentLinkLogController",
    "description": "Returns the most recently generated, still-active Easebuzz payment link for an Opportunity. getLatestPaymentLinkLog() queries Integration_Log__c for the newest 'Payment Link' type log entry with Payment_Link_Active__c true and a non-null link for that opportunity, so the UI can show or resend the currently valid payment link instead of generating a duplicate one."
  },
  {
    "name": "Ex_PaymentMilestoneTriggerHandler",
    "description": "On Payment Milestone insert, shares each milestone's parent Quotation with the appropriate users via Ex_ApexSharingManagementServices and registers the related Opportunity for sharing purposes; on update, flags a batch run whenever a non-legacy milestone's Is_Due__c flips to true, which (beyond this excerpt) likely kicks off demand-raising for the now-due milestone."
  },
  {
    "name": "Ex_PrebookingCancellationController",
    "description": "Supports the pre-booking cancellation OTP flow, which verifies the customer via a Salesforce Marketing Cloud OTP journey. getEventDefinitionKey() looks up the 'Cancellation OTP' record in Marketing_Cloud_client_creds__c to get the Journey Builder event-definition key needed to trigger that journey, and getFilesForRecord() returns the ContentVersions attached to a given Application for the cancellation screen to display."
  },
  {
    "name": "Ex_PrintPaymentReceipt1Controller",
    "description": "A Visualforce controller for a printed payment receipt variant, exposing the receipt and its company, receipt number/date/type/mode, amount in raw/formatted/words form, customer name/mobile/email, and the full company legal letterhead (name, mobile, email, GST, CIN, registered address, city/state/country) for the page markup to render onto the printed receipt."
  },
  {
    "name": "Ex_PrintPaymentReceiptController",
    "description": "The original printed-receipt controller, exposing the same receipt, company and customer field set (name, mobile, email, formatted/worded amount, full company letterhead details including GST/CIN/address) as its later '1' and '2' variants, suggesting the receipt print layout was iterated on by adding new controller versions rather than modifying this one in place."
  },
  {
    "name": "Ex_PrintQuotationController",
    "description": "The primary Visualforce controller for printing a Quotation, deliberately marked without sharing so portal users can download their own quotation via CustomerPortal_Services (which does its own access check first). It assembles up to five separate charge-wrapper lists, milestone wrappers, multiple charge-detail groupings for different consideration categories, and applied discounts, giving the print template everything it needs to lay out the full quotation breakdown."
  },
  {
    "name": "Ex_PrintQuotationNewViewController",
    "description": "A newer quotation-print controller that adds deviation support on top of the standard print: alongside the price list, payment schedule and milestone wrappers (reused from Ex_InventoryPriceManagementServices and Ex_PrintQuotationController), it carries a deviation list and before/after deviation maps so the printed quotation can show milestones that were modified from the standard schedule."
  },
  {
    "name": "Ex_PrintQuotationResidentialController",
    "description": "A Residential-specific variant of the quotation print controller, using the same charge-wrapper/milestone-wrapper/charge-detail structure as Ex_PrintQuotationController but separating discounts into distinct 'benefits' and 'waiver' discount lists, reflecting a different discount categorization used for residential (versus plot) quotations."
  },
  {
    "name": "Ex_PrintReceiptController",
    "description": "A Visualforce controller for a receipt print page that computes its own display data in its constructor (fetchDetails(), calculateCosts(), calculateTotalInWords()) rather than relying only on simple field bindings: it groups costs per demand into DemandCostWrapper rows, spells out the total cost in words, and resolves the primary applicant's name plus a comma-separated list of co-applicants alongside full address fields for the printed receipt."
  },
  {
    "name": "Ex_ProcessHandlerServices",
    "description": "Validates that every Process__c (a marketing/outreach campaign-like record) has at least one Launch selected. duplicationForProcess() adds a record error naming the specific process type (e.g. 'Digital' or 'ATL') if Launch__c is blank on any record, and separately errors if the whole incoming batch collectively has no launches selected at all, ensuring a process is always scoped to real launches before being saved."
  },
  {
    "name": "Ex_ProcessTriggerHandler",
    "description": "On Process__c before-insert, splits incoming records into Digital-type and ATL-type processes and runs each group through Ex_ProcessHandlerServices.duplicationForProcess() with the appropriate type label, so the launch-required validation message correctly names which kind of process is missing its launch."
  },
  {
    "name": "Ex_ProjectHandlerServices",
    "description": "Houses Project-level automation, including a commented-out createBankAPFAndDSAForProjects() method that would have auto-generated a Bank_APFs__c and Bank_DSAs__c record for every combination of a new Project and every Bank in the org — since disabled, presumably because that many-to-many record generation proved unnecessary or too broad in practice; the active createProjectInCMS() method (referenced by the Project trigger) pushes new projects to the external CMS."
  },
  {
    "name": "Ex_ProjectService",
    "description": "Syncs Project records to the external CMS, mirroring Ex_LaunchService's pattern. insertProject() and updateProject() are future, callout-enabled methods that load a project's public-facing location fields (street, city, state, pincode, latitude/longitude, altitude) along with the active HOABL_CMS__c base URL, then push each project to the CMS so the public website's project pages stay in sync with Salesforce."
  },
  {
    "name": "Ex_ProjectTriggerHandler",
    "description": "On Project insert, pushes the new project to the external CMS via Ex_ProjectHandlerServices.createProjectInCMS() and also calls Ex_ProjectService.insertProject() — effectively syncing the new project through two separate integration paths — while an older createBankAPFAndDSAForProjects() call is commented out; on update, it detects changes to any CMS-relevant field (name, address fields, etc.) to decide whether a CMS update push is needed."
  },
  {
    "name": "Ex_PropertyFinalizingController",
    "description": "Backs the Property Finalizing dashboard. getProperies() returns the Approved or Valid Quotations tied to a given Application, including each quotation's property sale status, carpet area, property code, configuration and tower/wing name, so the customer or rep can review and finalize one specific unit from among the quotations generated for that application."
  },
  {
    "name": "Ex_PropertyHandlerServices",
    "description": "Generates a Property's Pricing List from its Property Type's configured charges. insertPricingList() finds every active Property_Type_Charge__c for the relevant property types where pricing is maintained 'At Property Level' (as opposed to maintained centrally at the type level), groups them by property type, and (beyond this excerpt) creates individual Pricing_List__c records for each new property so it has its own editable price breakdown from day one."
  },
  {
    "name": "Ex_PropertySelectionDashboard",
    "description": "Backs the Property Selection dashboard. getProjectRecords() lists every Project for selection, and getProjectDetails() returns a selected project's Project_Type__c and its ordered Phase records, letting the dashboard progressively narrow from project to phase before a specific property is chosen."
  },
  {
    "name": "Ex_PropertyShorlistingController",
    "description": "Backs the Property Shortlisting dashboard. getProperies() returns every Launch_Property__c under an Application's Opportunity's Launch with sale status, carpet area, code, configuration and tower/wing details, and getUserValid() checks whether the logged-in user is one of the launch's four leadership roles (Closing Head, Portfolio Head, Business Head or MSS Head) to gate access to the shortlisting dashboard to authorized leadership only."
  },
  {
    "name": "Ex_PropertyTriggerHandler",
    "description": "On Property insert, for every new property that has a Property Type set, generates that property's own Pricing List from the property type's charges via Ex_PropertyHandlerServices.insertPricingList(); on update it tracks further property-type and booking-related changes for additional handling beyond this excerpt."
  },
  {
    "name": "Ex_PropertyTypeChargesHandlerServices",
    "description": "Generates per-property Pricing Lists when a Property Type Charge is configured to be maintained 'At Property Level'. insertPricingList() collects the affected property types, finds every existing Property under each one, and (beyond this excerpt) creates a Pricing_List__c for each property so property-level charges cascade down to every unit of that type."
  },
  {
    "name": "Ex_PropertyTypeChargesTriggerHandler",
    "description": "On Property Type Charge insert, filters to only charges configured as 'Pricing List At Property Level' and runs them through Ex_PropertyTypeChargesHandlerServices.insertPricingList() to cascade the new charge down to every property of that type; on before-update it blocks changing the Pricing_Maintained_At or Charge_Type fields after creation, since switching pricing models on an existing charge would leave already-generated pricing lists inconsistent."
  },
  {
    "name": "Ex_PropertyTypeServices",
    "description": "Syncs Property Type (unit configuration) records to the external CMS, following the same future-callout pattern as the Launch/Project/Property CMS sync classes. insertPropertyType() loads each type's configuration, area and price range plus its parent project, and pushes it to the CMS via the active HOABL_CMS__c base URL so the public website's unit listings reflect current inventory."
  },
  {
    "name": "Ex_PropertyTypetriggerHandler",
    "description": "On Property Type insert, pushes every new record to the CMS via Ex_PropertyTypeServices.insertPropertyType() (skipped during tests); on update, compares every CMS-relevant field (name, configuration, area/price range, parent project, test-record flag) between old and new to decide whether a CMS update push is actually needed."
  },
  {
    "name": "Ex_QRLaunchController",
    "description": "A global, without-sharing Visualforce controller for the QR-code registration desk used at CP Meets and JBP sites. It reads recordId and launchName from the page URL parameters when scanned, and fetchLaunchName() separately resolves the launch's name by Id for cases (noted in the code) where the URL parameter failed to carry it through correctly on-site."
  },
  {
    "name": "Ex_QuotationApprovalAttachmentController",
    "description": "A global, without-sharing Visualforce controller generating the quotation attachment shown during the quotation approval process, carrying the same extensive charge-wrapper, milestone-wrapper and multi-category charge-detail/discount structure as Ex_PrintQuotationController so the approver sees an identical breakdown to what the customer would ultimately receive."
  },
  {
    "name": "Ex_QuotationHandlerService",
    "description": "Moves an Application into the 'Plots Proposed' stage whenever a new Quotation is created against it. updateApplicationStatusToPlotProposed() collects every Application referenced by the new Quotations, loads them, and sets their status, signaling that a specific plot/unit has now been formally proposed to the customer."
  },
  {
    "name": "Ex_QuotationTriggerHandler",
    "description": "On Quotation insert, collects properties on quotations that are 'Pending for Approval' (so their reservation block time can be updated), shares each quotation's parent Opportunity with the right users, pulls the Opportunity Team details for sharing purposes, and calls Ex_QuotationHandlerService to move the related Application into 'Plots Proposed' status."
  },
  {
    "name": "Ex_ReceiptApprovalDashboard",
    "description": "Backs the Receipt Approval Dashboard, rewritten (per its own changelog) to work directly off Receipt__c instead of the Registration Case it used to rely on. fetchReceiptsGroupedByLookup() groups pending receipts by their source (E-Receipt, Bank Transaction, or a plain manual receipt) and validates the requested sort field against an explicit allow-list (Date, Amount, Name) before applying ascending/descending order, preventing an arbitrary or unsafe sort field from being passed through to the query."
  },
  {
    "name": "Ex_ReceiptCreationController",
    "description": "Backs manual receipt creation from Bank Transactions. getProjects() lists every Project for selection, and getCompanys() (now scoped by Project Id, replacing an earlier unscoped version left commented out) returns only the Companies relevant to the selected project, narrowing the company picker as the user selects a project first."
  },
  {
    "name": "Ex_ReceiptHandlerServices",
    "description": "Tags each Receipt with the correct Company Bank Account for reconciliation. tagCompanyAccountOnReceipt() resolves each receipt's Booking's Company, then looks up that company's Company Bank Account records, giving the receipt handler (beyond this excerpt) the information needed to automatically associate a payment with the right legal entity's bank account rather than requiring manual selection."
  },
  {
    "name": "Ex_ReceiptTriggerHandler",
    "description": "On Receipt insert, builds several parallel maps grouping new receipts by their parent Application, Booking, and whether they represent on-account money, plus tracking which bookings need Apex sharing extended to cover the new receipts and which receipts came through a Bank Transaction — feeding each group into its own downstream processing (ledger updates, booking total recalculation, sharing) rather than a single monolithic routine."
  },
  {
    "name": "Ex_ReceiptViewDashboard",
    "description": "Backs the Receipt View dashboard on a Booking. getReceiptView() returns every receipt for the booking with its amount, date, payment mode, approval status, apportionment total and transaction Id, including a nested subquery of each receipt's Ledger entries (charge name, tax ledger, amount, and the demand/milestone each ledger line pays down) so the dashboard can show a full drill-down from receipt to individual charge allocation."
  },
  {
    "name": "Ex_ReferralAndEnquiryFormController",
    "description": "Backs the Referral and Enquiry form. getUserName() returns the logged-in user's name, email and mobile (for pre-filling the referrer's own details), and getAccountName() returns a referring Account's mobile, email, name, customer tier and existing referral count, so the form can show who is making the referral and validate their eligibility before submitting a new one."
  },
  {
    "name": "Ex_RefundHandlerServices",
    "description": "Assigns escalation approvers for refunds flagged under the 'Aggravated' customer category. assignApproversForAggravatedCustomer() resolves each affected Booking's Project and that project's CSS Team Leader (and separately the Launch's CEO), building the approval chain so an aggravated-customer refund is automatically routed to the right senior approvers rather than a standard refund approver."
  },
  {
    "name": "Ex_RefundTriggerHandler",
    "description": "On Refund before-insert, groups new refunds tied to a Booking with Customer_Category__c = 'Aggravated' by their Booking Id, intending to call Ex_RefundHandlerServices.assignApproversForAggravatedCustomer() for the group — that call is currently commented out, so the escalated-approver assignment for aggravated-customer refunds is presently disabled at the trigger level even though the underlying service method still exists."
  },
  {
    "name": "Ex_RestAccountService",
    "description": "An inbound @RestResource endpoint (/account/create) letting an external system create a Person Account in Salesforce. It validates that last name, mobile and country code are present, strips a leading '+' from the country code, and validates the mobile number's length against the matching Country_Codes__c configuration before creating the account — part of the same 'hoabl_'-prefixed partner-facing REST API surface as the getAllAccountDetails endpoints."
  },
  {
    "name": "Ex_RestAccountUpdateService",
    "description": "An inbound @RestResource endpoint (/account/update) letting an external system update an existing Person Account, identified by 'hoabl_Id' in the request body. It loads the account's full field set — identical to the one returned by Ex_getAllAccountDetails — before applying the incoming changes, so the same partner integration that reads account data can also push updates back."
  },
  {
    "name": "Ex_RestCreateTask",
    "description": "An inbound @RestResource endpoint (/createTask/) that creates a Task from an external caller (likely the CTI/dialer system), requiring Subject, OpportunityId and OwnerId in the request. It also flags the related Opportunity as having had a missed call and restricts missed-call task creation for opportunities already in certain stages, so the dialer can't spam missed-call tasks onto opportunities past the point where that matters."
  },
  {
    "name": "Ex_RESTCTILeadIntegration",
    "description": "An inbound @RestResource endpoint (/CreateCTILead/*) creating a Lead from a CTI system. createLead() validates that mobile and campaign code are both present, building a combined, grammatically-correct error message listing every missing field (handling singular 'is' vs plural 'are' correctly) before proceeding to create the lead."
  },
  {
    "name": "Ex_RestCTILeadUpdateService",
    "description": "An inbound @RestResource endpoint (/CTILeadUpdate) that updates an existing Lead from Convox. updateLeadFromConvox() requires an sfdcID identifying the Lead, then loads a very large field set — sub-source, occupation, UTM parameters, reason for purchase, proposed visit date, project type, funding type, DNC flag, conversation summary, status/sub-stage, CTI dialer presence — and selectively overwrites only the fields actually present in the incoming JSON payload."
  },
  {
    "name": "Ex_RESTCustomerIdentityAPI",
    "description": "An inbound, without-sharing @RestResource endpoint (/CustomerIdentity/*) that verifies a customer's identity by mobile number. checkMobileNumber() strips non-numeric characters from the submitted number and searches Applicant__c records where it matches either the primary or alternate mobile field, returning a 400 if no mobile number was supplied, used by an external system to confirm whether a given phone number belongs to a known HoABL customer."
  },
  {
    "name": "Ex_RestEReceiptAPI",
    "description": "An inbound, without-sharing @RestResource endpoint (/e-receipt) updating E-Receipt records from an external payment system. updateEReceipt() accepts both JSON and form-urlencoded content types (parsing each differently based on the Content-Type header) and rejects an empty request body with a 400, giving the payment integration flexibility in how it posts receipt updates."
  },
  {
    "name": "Ex_RestGetAccountDetails",
    "description": "An inbound @RestResource endpoint (/getAccountDetails) that looks up a Person Account either by its Account Id directly, or by mobile number plus phone country code if no Id is given, requiring at least one of those identification paths and returning the same large 'hoabl_'-style account field set as the bulk account endpoints for a single matched account."
  },
  {
    "name": "Ex_RestGetAgentAPI",
    "description": "An inbound @RestResource endpoint (/getAgentAPI/) used to route an inbound call to the right agent. matchAndRedirect() looks up the most recent Opportunity by mobile number and returns that opportunity's Closing Manager and Sourcing Manager usernames (along with the Opportunity Id and launch) so a telephony system can redirect the call to whichever rep already owns that customer relationship."
  },
  {
    "name": "Ex_RestGetAllLauchDetails",
    "description": "An inbound @RestResource endpoint (/getAllLaunchRecords) returning every Launch in the org — name, salt/key credentials, company, active flag, organic campaign Id and parent project — as a bulk feed for an external system, part of the same partner-facing REST layer as the account and property-type bulk endpoints."
  },
  {
    "name": "Ex_RestGetAllProjectDetails",
    "description": "An inbound @RestResource endpoint (/getAllProjectDetails/*) returning every Project's location details — latitude/longitude, altitude, full address, country — as a bulk feed for an external system such as a map-based listings integration."
  },
  {
    "name": "Ex_RestGetLaunchDetails",
    "description": "An inbound @RestResource endpoint (/getLaunchDetails) returning a single Launch's details (name, salt/key, company, active flag) by Id, requiring the Launch Id in the POST body and returning a clear error if it's missing or the launch doesn't exist — the single-record counterpart to the bulk launch endpoint."
  },
  {
    "name": "Ex_RestGetProjectDetails",
    "description": "An inbound @RestResource endpoint (/getProjectDetails/*) returning a single Project's location details by Id, validating the Project Id is supplied and the project exists before responding — the single-record counterpart to the bulk project-details endpoint."
  },
  {
    "name": "Ex_RestTaskDispositionAPI",
    "description": "An inbound @RestResource endpoint (/callStatus/*) receiving detailed call disposition data from a CTI system — user, call mode, who disconnected, call type, agent name, status, date/time, duration, queue name/duration, ring duration, who completed it, follow-up time and station — and (beyond this excerpt) writing that outcome onto the corresponding Task."
  },
  {
    "name": "Ex_RESTWebIntegration",
    "description": "An inbound @RestResource endpoint (/CreateLead/*) creating a Lead from the public website or mobile app. createLead() validates the Lead Identifier is one of exactly 'Facebook', 'Website' or 'APP', flags app-sourced leads separately, and checks for required fields before creating the lead — the main entry point for the 'Web Integration App' connected app's lead capture."
  },
  {
    "name": "Ex_SendAcknowledgementEmailController",
    "description": "Sends the Application acknowledgement email, but only when the Application is at one of five allowed stages (Application Done, BA 2 Paid, Partial Payment Done, Plots Proposed, Plot Finalized), throwing a clear error otherwise, and separately guards against sending the acceptance email twice for the same application."
  },
  {
    "name": "Ex_SendAcknowledgementLetter",
    "description": "A future, callout-enabled method that emails the acknowledgement letter when a Registration Case is created. sendAcknowledgmentEmail() loads the booking's correspondence contact, KYC submission status, and both the Key Account Manager's and Service Manager's contact details so the letter can reference the right point of contact for the customer going forward."
  },
  {
    "name": "Ex_SendApplicationAcknowledgementEmail",
    "description": "A queueable, callout-enabled job that emails the generated Application acknowledgement PDF from the 'Updates HoABL' Org-Wide Email Address, loading each Application along with its Launch and Project context, and logging the sent email (plus its PDF attachment) as both an EmailMessage activity record and an Attachment for audit purposes."
  },
  {
    "name": "Ex_SendQuotationToCustomer",
    "description": "Emails a generated Quotation to the customer. sendEmail() validates a Quotation Id is supplied, resolves the 'Updates HoABL' Org-Wide Email Address, and loads the quotation's Application contact details (primary email, first/last name) to personalize and send the quotation email."
  },
  {
    "name": "Ex_SHA512HashFunction",
    "description": "Generates SHA-512 hashes for Easebuzz payment API authentication. generateSHA512() hashes a pipe-joined key|transaction-id|salt string for the transaction-status API, and generateSHA512Hash() (added later) hashes key|email|phone|salt specifically to authenticate sub-merchant API requests — the cryptographic signing step required by Easebuzz's API contract."
  },
  {
    "name": "Ex_spendHandlerServices",
    "description": "Keeps a PO Request's total spent amount in sync with its individual Spend records. updatePORequest() aggregates Spent_Amount__c across all Spend__c records per PO_Request__c via a GROUP BY query and (beyond this excerpt) writes the rolled-up total back onto each PO Request, since Salesforce doesn't natively roll up a lookup relationship the way it does master-detail."
  },
  {
    "name": "ex_TaskCreationController",
    "description": "Backs a generic Task-creation dashboard. Its ServiceManagerWrapper DTO pairs a Service Manager's Id and display name for a picker, while a broader getRecords() method (shown commented out, intended to fetch loyal-customer Accounts or other record types with sortable fields) appears to be mid-refactor or disabled in this version."
  },
  {
    "name": "Ex_TaskHandlerServices",
    "description": "Rolls up Task-based call/meeting activity onto its parent record. CallHandlerServices() loads Tasks of specific record types (Presales Call, Sales Call, CSS Task, Loan, CSS Call) with their full disposition and stage context, then groups them by parent Lead, Opportunity, Booking or Loan Case into separate maps so each parent record's rollup fields (like last call status or disposition) can be updated based on its own most relevant task activity."
  },
  {
    "name": "Ex_TaskTriggerHandler",
    "description": "On Task insert, identifies tasks that carry disposition/stage data and belong to specific call-related record types (Presales Call, Sales Call, CSS Task, CSS Call) or are a Loan task, collecting their Ids so Ex_TaskHandlerServices.CallHandlerServices() can roll up the activity onto the right parent record (Lead, Opportunity, Booking or Loan Case)."
  },
  {
    "name": "Ex_TeamMemberHandlerServices",
    "description": "Manages Closing Team member availability eligibility for launch assignment. checkLaunchAvailabilityforClosingTeam() loads every other Closing Team member currently marked available for launch assignment (excluding the incoming records on an update, to avoid comparing a record against itself) so the caller can detect and prevent a conflicting state where a user ends up marked available on two different team assignments at once."
  },
  {
    "name": "Ex_TeamMemberTriggerHandler",
    "description": "Prevents duplicate Closing-vertical team assignments. beforeInsert() identifies new Team Members in the Closing vertical with both a User and Team set (though the actual availability-conflict check call is currently commented out), and beforeUpdate() detects relevant changes (User, Team, or Launch_Availability__c) to flag records that need the same conflict check re-run."
  },
  {
    "name": "Ex_TOTPGenerator",
    "description": "Generates a time-based one-time password (TOTP) for the public Application Site, implementing the standard TOTP algorithm (30-second time steps, HMAC-SHA256) from scratch rather than using an external library. generateTOTP() reads a shared secret key from TOTP_Settings__c custom settings, computes the current 30-second time counter, and HMACs it with the secret before truncating the result into a short numeric OTP, throwing a SecurityException if no secret key is configured."
  },
  {
    "name": "Ex_updateEmailonAccount",
    "description": "Lets a rep correct a customer's email directly from an Opportunity. getAccountEmail() returns the linked Account's primary and alternate email, and updateAccountEmail() updates whichever of the two fields was supplied (leaving the other untouched), throwing a clear error if the Opportunity has no linked Account."
  },
  {
    "name": "Ex_VCAssignmentDashboard",
    "description": "Backs the Video Call (VC) Assignment dashboard. getLaunch() finds every Launch tied to a 'VC Assignment Team' the logged-in user belongs to (via Team_Member__c), returning only the distinct launches relevant to that user so the assignment dashboard is scoped to the launches they're actually responsible for."
  },
  {
    "name": "Ex_VideoCallHandlerServices",
    "description": "Links inbound VideoCall platform records back to the internal Meeting they belong to. tagMeetingRecordOnVideoCall() extracts the meeting identifier embedded after a '#' in each VideoCall's Name, looks up the matching open Meeting records by that extracted name, and sets each VideoCall's RelatedRecordId accordingly — the reverse direction (tagVideoCallRecordOnMeeting) stamps the Meeting with a reference back to its VideoCall."
  },
  {
    "name": "Ex_VideoCallTriggerHandler",
    "description": "On VideoCall before- and after-insert, filters to records that actually have a Name set and runs them through Ex_VideoCallHandlerServices to tag the related Meeting record (before-insert) and tag the Meeting with a reference back to the VideoCall (after-insert), linking the two records in both directions."
  },
  {
    "name": "Ex_ViewOnAccountMoneyReceiptController",
    "description": "A Visualforce controller for viewing 'on account' money receipts (payments received without being apportioned to a specific demand yet), reading the receipt Id from the page URL and exposing the same receipt number/date/type/mode/amount (raw, formatted, in words) and customer contact fields as the other receipt-print controllers."
  },
  {
    "name": "Ex_ViewReceiptController",
    "description": "A Visualforce controller for viewing a receipt tied to a specific Demand. It resolves the primary applicant and a comma-separated co-applicant list plus full address fields, builds a LedgerWrapper list showing how the receipt's amount was allocated across ledger entries, and spells out the total cost in words for the printed/viewed receipt."
  },
  {
    "name": "Ex_WebhookHandlerServices",
    "description": "Processes inbound WhatsApp Business API webhooks. handleTemplateStatusUpdate() receives a message-template approval/rejection/disable event from Meta, matches it to the corresponding Whatsapp_Template__c by Template_ID__c, and updates its approval status, rejection reason, and (if the template was disabled) the disable date — keeping Salesforce's record of template approval state in sync with what Meta actually approved."
  },
  {
    "name": "Ex_WordDocumentPreviewController",
    "description": "Supports previewing generated documents (reused from an Exceller demo org). getAllotmentLetterCreated() and getCSSChecklistDone() are simple boolean lookups on a Booking that gate whether certain document-preview or checklist-dependent UI elements should be shown, used as quick pre-conditions before offering a document preview."
  },
  {
    "name": "ExCustomer360ProfileController",
    "description": "Fetches the Customer 360 Profile shown on an Opportunity. It assembles a Customer360ProfileData DTO from the linked Account's lifestyle and demographic fields — HNI segment, NRI customer flag, Demat account active, profession, car model/purchase date/value — organized into professional/location context, lifestyle assets and income-metrics sub-sections for a richer customer profile view than the standard record page."
  },
  {
    "name": "ForgotPasswordController",
    "description": "A classic Visualforce page controller exposing the Experience Cloud site's forgot-password functionality. forgotPassword() calls the platform's Site.forgotPassword() for the given username and redirects to a confirmation page on success, returning null (keeping the user on the same page) if the reset request failed."
  }
];
