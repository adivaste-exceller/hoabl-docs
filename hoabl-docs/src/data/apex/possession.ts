import type { ApexClassDoc } from './types';

export const possessionApex: ApexClassDoc[] = [
  {
    "name": "BookingBatchUpdate",
    "description": "A batch job that iterates every Booking__c record one at a time and recalculates its total percentage paid by delegating to Ex_ReceiptHandlerServices.updateOnAccountMoneyBooking with the booking's (currently empty) receipt list. It runs with batch size 1, so each execute() call processes a single booking, and simply logs completion in finish() with no further notification or error handling."
  },
  {
    "name": "BulkDemandsReceiptsDashboardController",
    "description": "Backs a dashboard LWC for bulk-downloading Demand and Receipt documents and emailing them in bulk. It exposes a cacheable fetchProjects() method for populating a project picker, a DemandWrapper inner class that carries a Demand__c plus pre-formatted currency strings for the UI, and a shared buildAuraHandledException helper that explicitly calls setMessage() so error text actually reaches the LWC instead of a generic 'script-thrown exception' message."
  },
  {
    "name": "CustomerPortal_CMSLatestUpdatesCtrl",
    "description": "Manages the 'Latest Updates' CMS tab, covering Newsletter and Video content plus the audience-targeting rows that decide which customers see which content. Content itself is decoupled from any Launch/Phase; instead, separate targeting rows pair a Launch and Phase (with Project derived from them) to a content item, and a customer only sees content whose targeting exactly matches their own Launch and Phase. It exposes DTOs for targeting input, project/launch/phase tree nodes, and reach (customer/investment count) estimates."
  },
  {
    "name": "CustomerPortal_DocumentServices",
    "description": "Returns the customer-visible legal documents (Agreement For Sale, Allotment Letter, Deed of Conveyance, Possession Letter, Reservation Letter) tied to the logged-in portal contact's bookings. getDocuments() queries Documents__c records scoped to the contact's own bookings/applications/launches, resolves each one's public file-download link via CustomerPortal_FilePublicUrlHandler and its project display name via CustomerPortal_Services, and is explicitly flagged in its own source as needing refactoring due to null-pointer risk."
  },
  {
    "name": "CustomerPortal_InvestmentDetailsProvider",
    "description": "Provides investment- and support-related details for the logged-in portal contact across their Applications. getContactSupport() determines which internal contact (name and phone number) should be shown as the customer's point of contact by finding the highest-stage Application the contact has reached, using a static map of launch-to-image URLs (sourced from CustomerPortal_SiteContentProvider) to also back image lookups used elsewhere on the investment details screen."
  },
  {
    "name": "CustomerPortal_MilestoneServices",
    "description": "Computes the ownership-journey milestones shown to a logged-in customer across all their Applications. getMilestones() pulls each Application together with booking-level checklist flags (DOC registration, possession readiness, AFS registration, balance-due and no-due checklists, KYC submission) and maps them through static milestone-name and milestone-label mappings built once in a static initializer, returning a per-Application ordered list of milestone DTOs for the portal's journey timeline component."
  },
  {
    "name": "CustomerPortal_NewsLetterContentProvider",
    "description": "Returns newsletters targeted to a specific Launch+Phase pair for the Customer Portal. Because newsletter content is decoupled from any particular launch or phase, visibility is resolved by first querying CUST_PORT_Newsletter_Targeting__c rows that match both the launch and phase exactly, collecting the matching newsletter Ids, and only then fetching and returning those NewsLetter records (with name, publish date, preview and download URLs) for display."
  },
  {
    "name": "CustomerPortal_TransactionServices",
    "description": "Returns the logged-in customer's approved payment transactions for the portal's transaction history view. getTransactions() queries Receipt__c records tied to Applications owned by the contact's person account, filtered to Approval_Status__c = 'Approved', including amount, payment mode and transaction Id, then enriches each with its project's display name before returning a list of CustomerTransaction DTOs."
  },
  {
    "name": "CustomerPortal_VideoContentProvider",
    "description": "Returns up to 50 videos targeted to a given Launch+Phase pair for the Customer Portal, following the same decoupled-content pattern as the newsletter provider: it first finds matching CUST_PORT_Video_Targeting__c rows for the exact launch and phase, then fetches those video records (embed URL, thumbnail, channel name/logo, publish date) for the portal's video gallery."
  },
  {
    "name": "CustomerPortal_WealthLedgerController",
    "description": "Generates the customer-facing Wealth Ledger PDF statement for an Account or Booking as of a given date. It computes current value as the latest PSF rate times the property's saleable area, amount paid from the bookings' Total_Amount_Paid__c, and an annualized XIRR return based on ledger credits (not receipts, since receipts can be apportioned across charge types) applied against Principal Cost and TDS consideration charges, only showing the return once the invested money is on average a year old."
  },
  {
    "name": "DocumentGenerationServices",
    "description": "A broad document-generation utility, originally built for an Exceller demo org, that dynamically describes Applicant__c's full field set and queries every field for the primary (or all) applicants on a given Booking using Database.query() with a string-built SOQL statement — used as a data source for generating letters, receipts and other customer-facing documents without hardcoding each field name."
  },
  {
    "name": "Ex_AmountOverDueBatchClass",
    "description": "A combined Batchable/Schedulable class that scans for payment milestones or demands overdue by a configured window (built around a 'today minus 5 days' / 'three days ago' cutoff) and sends reminder emails to the relevant service manager and booking contact, with Database.AllowsCallouts enabled so the batch can also make external callouts as part of the overdue-notification process."
  },
  {
    "name": "Ex_ApexSharingManagementServices",
    "description": "The org's central Apex-managed sharing utility, used by multiple trigger handlers (Applicant, Application) to share Leads, Opportunities and custom objects with specific users or teams outside standard role-hierarchy visibility. shareRecordWithTeamLeadandTeamHead() dynamically builds the correct share-object and parent-field names per SObject type (LeadShare/OpportunityShare/__Share), queries existing shares to avoid duplicate inserts, then shares each record with the mapped team leads and heads."
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
    "name": "Ex_ApplicationFormController",
    "description": "Supplies reference data for the Application form. getLaunch() returns a Launch together with its Project's full location (village, street, city, district, taluka, pincode, state), the owning Company, SBI MCLR rate and RERA project timelines, and getReraPhases() returns the RERA phases registered under that launch's project so the form can offer the correct RERA number options."
  },
  {
    "name": "Ex_ApplicationHandlerServices",
    "description": "Houses Application__c business logic, with sortApplicationsSequenceWise() as a @future method that reloads a given set of Applications ordered by creation date, groups them by their parent Opportunity, and (in code beyond this excerpt) renumbers each Opportunity's Applications' Sequence__c so applications are always numbered in the order they were actually created, even after some are deleted or reordered."
  },
  {
    "name": "Ex_BankAPFsHandlerService",
    "description": "Validates Bank APFs (Approved Project Financing records) to block duplicate APF numbers within the same RERA Phase. It groups incoming records by APF Number + RERA Phase key, queries existing records sharing those APF numbers, and adds a record error naming the conflicting APF number wherever a new or updated record collides with a different existing record in the same phase."
  },
  {
    "name": "Ex_BankAPFsTriggerHandler",
    "description": "Trigger handler for Bank_APFs__c that filters to only records with both an APF Number and RERA Phase set, then delegates to Ex_BankAPFsHandlerService.validateDuplicateAPF() on insert, and on update re-runs the same check only for records whose APF Number actually changed to a new non-blank value."
  },
  {
    "name": "Ex_BankTransactionReceiptController",
    "description": "Supports the bank-transaction receipt screen for a Project. getCompanys() returns the distinct set of Companies used by Bookings on the given Project (so the receipt form only offers relevant legal entities), and getPicklistValues() generically reflects any object/field's active picklist values given their API names, letting the LWC populate dropdowns without per-field Apex methods."
  },
  {
    "name": "Ex_BookingHandlerServices",
    "description": "A large service class holding core Booking__c business logic, including (in code beyond this excerpt) demand-raising based on payment milestone schedules. Its commented-out raiseBookingRelatedDemand() method shows the intended approach: dynamically build a SOQL query across Payment_Milestone__c's full charge breakdown (agreement value, development/consideration/statutory/other charges with GST splits) for bookings due on calculated demand-raise dates, tying milestones back to their Quotation and correspondence contact."
  },
  {
    "name": "Ex_BulkDocumentController",
    "description": "Backs a bulk-document-generation dashboard covering pre-possession intimation letters and statements of account. getPhaseList() dynamically queries RERA_Phase__c (or an equivalent phase object) scoped to a Project, and getProjectList() dynamically describes Project__c to build a full field list at runtime; document generation is gated by constants requiring the booking to be in Booking Confirmed, Booking Completed or Booking Retention In-Process for a Statement of Account to be produced."
  },
  {
    "name": "Ex_CemWiseReportDashboardCtrl",
    "description": "Powers the CEM-wise Report and KPI tiles on the Customer Service Dashboard. Every query is scoped by GROUP BY on (CEM, Project) pairs or bounded Task/date windows to stay performant regardless of record volume, using carefully confirmed field choices documented inline — e.g. summing Booking__c.Net_Booking_Amount__c rather than Total_Agreement_Value__c (unused), classifying SLA breaches by a non-null Escalation_Level__c, and excluding the ~77% of Cases with no Booking__c since they can't be attributed to a CEM."
  },
  {
    "name": "Ex_ChargeDetailsTriggerHandler",
    "description": "On Charge_Detail__c insert, shares each new charge detail's parent Quotation with the appropriate users via Ex_ApexSharingManagementServices, then resolves and registers the related Opportunity Id for each shared record so Opportunity-level sharing rules can also pick up the new charge detail."
  },
  {
    "name": "Ex_ChargeDetailTrigger",
    "description": "The Charge_Detail__c trigger (after insert only) that simply forwards new records to Ex_ChargeDetailsTriggerHandler.afterInsert() for apex-sharing setup."
  },
  {
    "name": "Ex_ChecklistController",
    "description": "Backs a Booking checklist/demands component. getDemands() only returns a booking's Demand__c records (totals paid, demanded and remaining) if the running user is that booking's Accounts Manager, otherwise it returns an empty list with a hasAccess flag set false; updateNoDueChecklist() marks the booking's No Due Checklist as complete once an accounts manager confirms there's nothing outstanding."
  },
  {
    "name": "Ex_Clone_PaymentScheme",
    "description": "Supports cloning a Payment Scheme from one unit type (Property_Type__c) to another within the same or a different Phase/Project. getUnitType() resolves a unit type's parent Phase and Project, and getPaymentSchemes() lists every Payment_Scheme__c already defined for that unit type, giving the admin a source scheme to copy milestones and charges from before applying them to the target unit type."
  },
  {
    "name": "Ex_CloneConstructionController",
    "description": "Manages copying construction-stage milestones across property types. getConstructionStages() returns a Property Type's Construction_Stage__c records (tower, sequence, expected completion date, milestone status, phase) ordered by sequence number, and createConstructionCharges() applies a given set of construction-charge records to one or more target property types in bulk, so a newly added unit type doesn't need its full construction schedule rebuilt by hand."
  },
  {
    "name": "Ex_CollectionSummaryDashboardCtrl",
    "description": "Powers the Collection Summary panel of the Customer Service Dashboard with a two-tier drill-down: tier one (getCollectionSummaryByProject) groups by Project only, so it's always bounded by project count; tier two (getCollectionSummaryByBooking) groups by Booking but only within one selected project and paginates with a LIMIT + Id cursor, so expanding a project never loads more than one page regardless of how many bookings it has. Figures are deliberately sourced from Demand__c.Total_Amount_Demanded__c/Total_Amount_Remaining__c and Receipt__c.Approval_Status__c = 'Approved' rather than Agreement/Consideration Value fields, which the class's own comments note are mirrored duplicates in this org and would double-count if summed."
  },
  {
    "name": "Ex_ContentDocumentLinkTriggerHandler",
    "description": "On file-attachment insert, renames the newly linked file's latest ContentVersion with a suffix identifying its purpose based on what it's attached to: '- Signed AFS' for files linked to a Scheduled_Registration_Slot__c, '- Challan' for files linked to a Registration_Case__c, and (for Channel Partner or Knowledge Hub Manual attachments) separately tracks the link for further processing not shown in this excerpt."
  },
  {
    "name": "Ex_CreateBooking",
    "description": "Creates one or more Booking__c records from an approved Application. createBookings() takes the Application Id and generates the booking(s) tied to it; an earlier getModeOfFunding() picklist-reflection method has since been commented out, suggesting mode-of-funding selection was removed from or relocated out of the booking-creation flow."
  },
  {
    "name": "Ex_CreateEReceiptController",
    "description": "Supports manually creating an e-receipt with manual splits. getCompanyBankAccounts() returns a Company's bank accounts restricted to Current Account, RERA Account or Payment Gateway types (enforced with WITH USER_MODE), and getCompanyForOpportunity() resolves the correct legal entity/company from the Opportunity's Launch so the e-receipt is recorded against the right bank account and company."
  },
  {
    "name": "Ex_CreateReceiptOnBooking",
    "description": "Supports manually creating a receipt against a Booking. getCompanies() lists all Companies for selection, getCompanyBankAccounts() returns a selected Company's Current/RERA bank accounts, and getCompanyForBooking() defaults to the Booking's own Company (falling back to its Launch's Company) so the receipt form pre-fills the most likely legal entity and bank account automatically."
  },
  {
    "name": "Ex_CustomerServiceDashboardCtrl",
    "description": "Supplies the filter-bar dropdown options (CEM, Project, Booking Stage) shared across every panel of the Customer Service Dashboard shell, which resolves an 'All X' selection into the full explicit option list before calling each panel so every panel's query always receives a concrete IN-list. It defines which profiles count as CEM-tier (Service/Registration Managers and TLs, CSS leadership and MIS variants, including 'Vertical -' prefixed role variants that an earlier version silently excluded) versus which profiles see every panel unfiltered (System Administrator, Tech MIS)."
  },
  {
    "name": "Ex_DemandAction",
    "description": "A simple action handler for updating a single Demand__c's status and remarks from a quick-action UI. demandrecord() sets the chosen status and remarks text on the demand and saves it, and additionally deletes the record outright if the selected option is literally 'Delete', returning a boolean success flag the LWC can use to show a confirmation or error."
  },
  {
    "name": "Ex_DemandHandlerServices",
    "description": "A core Demand__c service class; its visible (but currently commented-out) updateLatestWaiverHistoryStatus() method shows intended logic to find each Demand's most recently created Interest_Waiver_History__c record and update only that latest history row's Approval_Status__c, leaving earlier waiver-history entries for the same demand untouched — the live, uncommented methods elsewhere in the class (createDebitLedger, callForAutoApportion, referenced by the Demand trigger handler) handle ledger creation and receipt apportionment when demands are inserted."
  },
  {
    "name": "ex_DemandLegacyCustomerInteractionctrl",
    "description": "Backs the 'Legacy Customer Interaction' card shown on the Booking record detail page. DemandLegacyCustomerdata() returns a Booking's Legacy_Customer_Interaction__c field together with its Application's name, surfacing historical interaction notes carried over from a legacy system directly on the modern Booking layout."
  },
  {
    "name": "Ex_DemandLetterVfController",
    "description": "A Visualforce controller for a printed demand letter, exposing a large set of plain public properties — principal amount, CGST/SGST, previous dues, remaining consideration tax, interest, total due, due date, payee, and the applicant's name/co-applicants/address/contact details plus plot/phase identifiers — that the page markup binds to directly, with both raw and pre-formatted (currency-string) versions of each monetary field for display."
  },
  {
    "name": "Ex_DemandListViewController",
    "description": "Backs a custom Demand list-view component on a Booking. Its DemandRow wrapper carries a formatted, display-ready version of each demand — serial number, direct record URL, milestone name, due/invoice dates, amount/tax demanded/paid/remaining (as both raw and pre-formatted strings) and a CSS row class — so the LWC can render a fully styled demand table without recomputing formatting client-side."
  },
  {
    "name": "Ex_DemandManagementServices",
    "description": "Creates a Demand__c for a given Payment Milestone, but first checks whether one already exists for that milestone and exits early if so, preventing the same milestone from ever generating two demands even if the raise logic is triggered more than once for it."
  },
  {
    "name": "Ex_DemandRaiseBatch",
    "description": "A scheduled batch that raises payment-milestone demands on their due dates. It precomputes the relevant set of demand-raise dates in its constructor, then queries Payment_Milestone__c with its full charge breakdown (agreement, development, consideration, other and statutory charges with GST splits) joined to the Quotation's Booking correspondence contact, generating the actual Demand__c records for milestones that have come due."
  },
  {
    "name": "Ex_DemandTrigger",
    "description": "The Demand__c trigger (after insert, before/after update, after delete/undelete, before insert) that currently only wires up afterInsert and beforeUpdate to Ex_DemandTriggerHandler; a more elaborate after-trigger block recalculating Booking totals on payment changes is commented out, noted by a prior developer as producing incorrect calculations."
  },
  {
    "name": "Ex_DemandTriggerHandler",
    "description": "Handles Demand__c trigger logic: on insert, creates a debit ledger entry for every new demand via Ex_DemandHandlerServices.createDebitLedger(), and additionally, for demands flagged as a sales milestone with a Booking set, triggers automatic receipt apportionment against that booking via callForAutoApportion() — a Task-creation step that used to run alongside ledger creation has since been commented out."
  },
  {
    "name": "Ex_DeviationApprovalAttachmentController",
    "description": "A global Visualforce controller for a milestone/pricing 'deviation' approval attachment page on a Quotation. It exposes an extensive set of public properties — the price list, payment schedule and milestone wrappers (reused from Ex_InventoryPriceManagementServices and Ex_PrintQuotationController), before/after deviation comparison rows, and multiple numbered Charge_Detail__c lists — so the page can render a side-by-side comparison of a quotation's original vs deviated payment terms for an approver."
  },
  {
    "name": "Ex_DocumentDispatchController",
    "description": "Backs the Document Dispatch Information LWC on a Registration Case, which tracks the full lifecycle of a physically signed document: signing date, dispatch date/mode, courier company and tracking number, delivery date, return handling (whether returned, to whom, and why) and final handover (to whom and when). getRegistrationCase() loads all of this as a RegistrationCaseWrapper, replacing an earlier version that returned the raw Registration_Case__c record directly."
  },
  {
    "name": "Ex_DocumentHandoverController",
    "description": "Backs the Document Handover action on a Registration Case. submitDocumentHandover() records the full handover event — document status, handover date, courier tracking number, address confirmation, whether customer acknowledgement is available, handover type, and up to two uploaded files (the handover document and the customer acknowledgement) — updating the Registration Case's status and handed-over flag accordingly."
  },
  {
    "name": "Ex_DocumentTemplateTrigerHandler",
    "description": "On Document_Template__c before-insert, resolves each template's Project (specifically its Registration Team Lead) and that project's Service Team / Loan Manager Team members, so downstream logic (beyond this excerpt) can route or notify the correct team when a new document template is added for a project."
  },
  {
    "name": "Ex_DocumentTemplateTrigger",
    "description": "The Document_Template__c trigger (before insert, after insert, after update) routing to Ex_DocumentTemplateTrigerHandler's beforeInsert, afterInsert and afterUpdate methods for team-resolution and related automation."
  },
  {
    "name": "Ex_EditPropertyTypeinPropertyController",
    "description": "A small lookup helper that returns every Property_Type__c (unit type) belonging to a given Phase, used by the 'Edit Property Type in Property' component to populate its unit-type selector."
  },
  {
    "name": "Ex_EditQuotation",
    "description": "Backs quotation editing. getPriceListMapDetails() delegates to Ex_InventoryPriceManagementServices for the applicable price list, getAllPriceMapDetails() recomputes a quotation's full pricing (charges, car park price, discounts applied) into a raw numeric map, and getAllPriceInfoFormattedMap() converts those raw figures into currency-formatted display strings for the edit-quotation UI."
  },
  {
    "name": "Ex_eReceiptHandler",
    "description": "Shares the parent Opportunity with the relevant users whenever an E-Receipt is processed. processEReceipts() only acts on receipts that are either a successful Auto receipt or any Manual receipt (explicitly excluding e.g. failed/pending Auto receipts below an Application threshold of ₹45,000), calling Ex_ApexSharingManagementServices to extend Opportunity sharing to whoever needs visibility into that receipt."
  },
  {
    "name": "Ex_eReceiptHandlerServices",
    "description": "Detects duplicate payment records across E_Receipt__c and Bank_Transaction__c. eReceiptAndBankTransactionDuplicationCheck() dynamically determines which date field to compare (Transaction_Date__c for bank transactions, addedon__c for e-receipts) based on the object type of the records passed in, then (beyond this excerpt) cross-checks transaction Id, date, amount, company and bank account to flag the same payment having been recorded twice under different objects."
  },
  {
    "name": "ex_FinanceApprovalDashboardController",
    "description": "Manages the Finance team's booking-approval dashboard. getBookings() returns different Booking sets depending on the requested approval type: 'Balance Due Request' pulls bookings with Accounts_Manager_Approval_Status__c = 'Requested for Approval' that haven't completed their Balance Due or No Due checklist, and 'No Due Checklist' pulls a similarly scoped but differently filtered list for that specific checklist's approval queue."
  },
  {
    "name": "Ex_GenerateQuotation",
    "description": "Backs quotation generation on an Opportunity. getOpportunityDetails() delegates to Ex_InventoryPriceManagementServices for the opportunity's pricing context, and checkPropertyPresentInLaunchDetails() verifies a specific property is actually part of the given launch's inventory (via Launch_Property__c) before allowing a quotation to be generated against it."
  },
  {
    "name": "Ex_getAllRERAPhaseDetails",
    "description": "An inbound @RestResource endpoint (/getAllRERAPhases) returning every RERA_Phase__c record (RERA number, parent project, test-record flag) to an external caller, part of the same public-facing REST API surface giving an outside system read access to HoABL's regulatory project data."
  },
  {
    "name": "Ex_InterestCalculateManagementServices",
    "description": "Calculates daily interest on overdue demands. interestCalculate() finds each booking's pending demands, looks up the Interest Rate__c record whose date range covers the calculation date, and computes the applicable daily rate as (configured interest rate + the project's SBI MCLR) divided by 100 and by 365, applying GST on top, defaulting a missing SBI MCLR to zero rather than failing the calculation."
  },
  {
    "name": "Ex_InterestCalculationBatch",
    "description": "A scheduled batch that finds every non-sales-milestone Demand with a remaining amount or tax still outstanding whose interest hasn't been calculated up to the current date (either never calculated, or last calculated before today), and for each one collects its parent Booking so Ex_InterestCalculateManagementServices can run the day's interest calculation against it."
  },
  {
    "name": "Ex_InterestCalculatorController",
    "description": "Computes outstanding interest for a Demand as of a given date. getDailyInterestRate() finds the booking's pending demands, resolves the Interest_Rate__c applicable to each demand's due date, adds the project's Daily_SBI_MCLR__c on top, applies the configured GST-on-interest percentage, and sums the resulting outstanding interest and tax across all pending demands for that booking."
  },
  {
    "name": "Ex_InterestLetter1Controller",
    "description": "Builds the data behind the first interest reminder letter sent for overdue payment milestones. Its Milestone inner class carries each overdue milestone's name, due date, principal amount, days delayed, interest amount, GST on interest and total due (all pre-formatted as display strings in dd-mm-yyyy and currency format) for the printed/emailed letter template to render."
  },
  {
    "name": "Ex_InterestLetter1Controller_Possession",
    "description": "A Possession-specific variant of the first interest letter controller, sharing the identical Milestone wrapper (name, due date, principal, days delayed, interest, GST, total due) plus a 'reg' flag and running totals, used to generate the interest letter for overdue milestones that occur during the possession stage specifically rather than the general sales/collection stage."
  },
  {
    "name": "Ex_InterestNotice1Controller",
    "description": "Builds the data for the first formal interest notice (a sterner follow-up than the interest letter) for overdue payment milestones, using the same Milestone wrapper structure (name, due date, amount, days delayed, interest, GST, total due) as the interest letter controllers to populate the notice template."
  },
  {
    "name": "Ex_InterestNotice2Controller",
    "description": "Builds the data for the second, further-escalated interest notice sent when the first notice goes unaddressed, using the same Milestone wrapper pattern as the other interest letter/notice controllers to populate its printed or emailed template with the still-overdue milestones."
  },
  {
    "name": "Ex_InterestWaiverController",
    "description": "Backs the Interest Waiver dashboard (ex_InterestWaiverDashboard LWC). fetchDailyInterestRecords() returns a Demand's outstanding Daily_Interest__c records that aren't already Paid, Waived or Pending For Approval and still have an outstanding interest or tax amount, and getApprovers() submits a waiver request for selected records with the requested days/amount, benefit type, approval level and now-mandatory remarks for routing to the right approver."
  },
  {
    "name": "Ex_InventoryPriceManagementServices",
    "description": "A core pricing/inventory service. getCompanyInfo() resolves which legal Company a Property belongs to by checking the Company field at every level of its hierarchy in order — the Property itself, its Tower, Tower's Wing, Phase, RERA Phase and finally Project — falling through to whichever level has a Company populated, since not every property record is guaranteed to have it set directly."
  },
  {
    "name": "Ex_IVRDashboard",
    "description": "Backs an IVR-related dashboard. getRegistrationCaseTypeForBooking() returns the registration types of every Registration Case tied to a Booking (or a placeholder message if no booking is given), and getBookingsByAccount() returns the Bookings under a given Account, letting an IVR agent or automated call flow look up a customer's registration status and bookings by account."
  },
  {
    "name": "Ex_KycFormController",
    "description": "Backs the public-facing KYC form, declared global without sharing for guest-site access. getApplicationLaunchIdsFromBooking() resolves a Booking's parent Application and Launch Ids into a simple map so the KYC form knows which application and launch context it's collecting identity details for."
  },
  {
    "name": "Ex_LandGainCalculatorController",
    "description": "Backs the Land Gain Calculator, used alongside the Receipt Apportionment dashboard. getReceiptDetails() returns a new, unsaved Receipt__c pre-populated with sensible defaults (Pending approval status, Draft receipt status, today's date, zero amount) scoped to a Booking, and getBookingDetails() loads the booking's details needed to run the land-gain calculation before the receipt is actually saved."
  },
  {
    "name": "Ex_managePaymentSchemeController",
    "description": "Backs the payment scheme management screen for a Property Type. fetchProjectCharges() returns the active Property_Type_Charge__c records for a unit type ordered by charge bucket, and fetchPaymentScheme() resolves a Payment Scheme's full context — its Property Type, Wing, Phase, Project, project type and whether GST applies on the token amount — needed before the scheme's milestones can be edited."
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
    "name": "Ex_PossesionDemandController",
    "description": "A Visualforce controller for the possession demand letter, exposing the demand, its parent booking, every related Demand_Charge__c, and a large set of company/legal entity details (name, mobile, email, GST number, CIN number, registered address, city/state/country/pincode, any former company name) plus plot number, due date and multiple pre-formatted currency totals, so the printed demand letter can show both the financial breakdown and full legal company letterhead details."
  },
  {
    "name": "ex_PossessionDashboardController",
    "description": "Backs the Possession Finance dashboard, closely mirroring ex_FinanceApprovalDashboardController. getBookings() for a 'Balance Due Request' returns bookings on the given properties with no (or rejected) Accounts Manager approval status, an incomplete Balance Due and No Due checklist, enriched with Service Manager, booking stage, RERA phase and possession-readiness fields specific to the possession-stage view."
  },
  {
    "name": "Ex_PrebookingCancellationController",
    "description": "Supports the pre-booking cancellation OTP flow, which verifies the customer via a Salesforce Marketing Cloud OTP journey. getEventDefinitionKey() looks up the 'Cancellation OTP' record in Marketing_Cloud_client_creds__c to get the Journey Builder event-definition key needed to trigger that journey, and getFilesForRecord() returns the ContentVersions attached to a given Application for the cancellation screen to display."
  },
  {
    "name": "Ex_PreIntimationBatchClass",
    "description": "A scheduled, callout-enabled batch that sends pre-intimation emails ahead of a payment milestone coming due. It scans Payment_Milestone__c records with a wide date/possession/tax context (including whether the booking's Launch has pre-intimation emails paused, and whether the milestone has already had its pre-intimation sent) across a roughly 45-day-ago-to-15-days-ahead window to decide which bookings should receive an advance notice before their next demand is officially raised."
  },
  {
    "name": "Ex_PrePossessionCalculator",
    "description": "Computes the data shown on a pre-possession summary for a Booking. calculate() resolves the project/RERA phase/unit names, plot size, and whether the unit's most recent Registration Case is Closed (mapped to a simple 'Registered'/'Unregistered' status), plus the primary and co-applicant names from the booking's Applicants, assembling it all into a single string-keyed map for the pre-possession display or letter template."
  },
  {
    "name": "Ex_PreTerminationController",
    "description": "A Visualforce controller for the pre-termination letter, reusing the same Milestone-list and running-totals pattern as the interest letter controllers, plus property/location fields (village, district, taluka, plot number, project) and applicant contact details, so the page can render a full pre-termination notice showing both the overdue milestone breakdown and the property/customer context."
  },
  {
    "name": "Ex_PrintDemandDetailsController",
    "description": "A Visualforce controller for printing demand details on Vertical-project bookings. It exposes a DemandWrapper list plus separate principal and GST bank account wrappers, invoice date/number, customer and reference names, milestone/unit/wing/tower identifiers, project location, due date and the principal/TDS/CGST totals needed to render a complete, itemized demand invoice specific to the Vertical business line."
  },
  {
    "name": "Ex_PrintPaymentReceipt1Controller",
    "description": "A Visualforce controller for a printed payment receipt variant, exposing the receipt and its company, receipt number/date/type/mode, amount in raw/formatted/words form, customer name/mobile/email, and the full company legal letterhead (name, mobile, email, GST, CIN, registered address, city/state/country) for the page markup to render onto the printed receipt."
  },
  {
    "name": "Ex_PrintPaymentReceipt2Controller",
    "description": "A newer printed-receipt controller adding a Transaction Id and Application Name alongside the same receipt/company/customer field set as Ex_PrintPaymentReceipt1Controller, used for a payment receipt layout that also needs to show which gateway transaction and application the payment was tied to."
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
    "name": "Ex_PropertySelectionDashboard",
    "description": "Backs the Property Selection dashboard. getProjectRecords() lists every Project for selection, and getProjectDetails() returns a selected project's Project_Type__c and its ordered Phase records, letting the dashboard progressively narrow from project to phase before a specific property is chosen."
  },
  {
    "name": "ex_PTCDashboardController",
    "description": "Backs the Property Type Charges dashboard. getPropertyTypes() takes a Property Type Id, walks up to its Phase and then Project, and returns every other Property Type under phases belonging to that same project, letting an admin copy or compare charges across all unit types within one project."
  },
  {
    "name": "Ex_QuotationApprovalAttachmentController",
    "description": "A global, without-sharing Visualforce controller generating the quotation attachment shown during the quotation approval process, carrying the same extensive charge-wrapper, milestone-wrapper and multi-category charge-detail/discount structure as Ex_PrintQuotationController so the approver sees an identical breakdown to what the customer would ultimately receive."
  },
  {
    "name": "Ex_RaiseDemandForBooking",
    "description": "A future, callout-enabled method that raises all due demands for a specific set of Bookings. raiseBookingRelatedDemand() computes the relevant demand-raise dates and queries Payment Milestones with their full charge breakdown (agreement, development, consideration and other charges with GST splits) for those bookings, functioning as an on-demand, booking-scoped counterpart to the org-wide Ex_DemandRaiseBatch."
  },
  {
    "name": "Ex_ReceiptApportionController",
    "description": "Backs the Receipt Apportionment dashboard. getReceiptDetails() dynamically describes Receipt__c to build its full field list at runtime via Database.query() rather than a hardcoded SELECT, so the apportionment screen always has access to every receipt field (even newly added ones) when breaking a single receipt down across multiple demands/charges."
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
    "name": "Ex_ReceiptTrigger",
    "description": "The Receipt__c trigger (before/after insert and update) routing to Ex_ReceiptTriggerHandler's beforeInsert, afterInsert, beforeUpdate and afterUpdate methods for the full lifecycle of receipt-related automation."
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
    "name": "Ex_RegCaseApprovalController",
    "description": "Submits a Registration Case for finance/TL approval. submitApproval() validates the record Id, loads the case's current Finance and TL approval status along with whether it's being processed without a challan, then conditionally updates the challan type, mode and account fields supplied before routing the case into the approval process."
  },
  {
    "name": "Ex_RegCaseStatusDashboardCtrl",
    "description": "Powers the Registration Case Status panel of the Customer Service Dashboard with the same two-tier pattern as the Collection Summary panel: getRegistrationCaseStatus() aggregates case and slot counts GROUP BY Project only (bounded by project count), while getRegistrationCaseByBooking() paginates a booking-level drill-down for one project at a time. The date filter only scopes which Registration Cases count toward the totals — booking pagination itself is ungated by date, with bookings that have no cases in the selected range sorted to the bottom showing zeroes."
  },
  {
    "name": "Ex_RegistrationApprovalConfirmationPopup",
    "description": "Submits a Registration Case for approval. sendRegistrationForApproval() loads the case's current approval status and Service Manager, fires a 'Notification_to_Registration_owner' custom notification to that manager naming the case as awaiting their review, and (beyond this excerpt) updates the case's approval status to 'Requested for Approval'."
  },
  {
    "name": "Ex_RegistrationBatchClass",
    "description": "A callout-enabled batch sending follow-up communication 15 days after a registration intimation letter was sent, for cases where the SDR (stamp duty & registration) fee hasn't been paid yet. It classifies the booking's project type into plot/unit/villa terminology and sends from the 'My Land' Org-Wide Email Address with the booking's charge-detail/amount breakdown (up to 5 charge lines) for the customer to review."
  },
  {
    "name": "Ex_RegistrationCaseController",
    "description": "Backs a Registration Case detail component. Its BookingDetailsWrapper bundles the booking name, customer name/email/contact, booking stage and whether AFS (Agreement for Sale) is deferred into a single DTO so the registration screen can show the relevant booking context for the case being processed."
  },
  {
    "name": "Ex_RegistrationCaseHandler",
    "description": "On Registration Case before-insert, collects the parent Bookings and resolves each one's Quotation, SDR payer, Service Manager, the project's Registration Team Lead and Accounts Manager, building the context needed (processed further beyond this excerpt) to correctly populate ownership, approver and charge fields on the new registration case."
  },
  {
    "name": "Ex_RegistrationCaseHandlerServices",
    "description": "Processes the per-registration-case charge breakdown. processChargeDetails() fetches each relevant Quotation's Statutory and Other Charges that are specifically payable 'at the time of Registration', groups them by Quotation, and cross-references applied discounts so the registration case's charge fields reflect exactly what the customer owes at registration, net of any discounts."
  },
  {
    "name": "Ex_RegistrationCaseTrigger",
    "description": "The Registration_Case__c trigger (before/after insert and update) routing to Ex_RegistrationCaseHandler's four lifecycle methods, with an after-update branch added specifically to fix demands not being raised when a case became 'Is Due for Registration Linked'."
  },
  {
    "name": "Ex_RegistrationReminder1BatchClass",
    "description": "A callout-enabled batch sending the first registration payment reminder, 7 days after the intimation letter, to non-legacy bookings that haven't paid SDR yet, pulling in the Key Account Manager and Service Manager's contact details plus up to 5 charge-detail lines so the reminder shows exactly what's still owed and to whom it should be addressed."
  },
  {
    "name": "Ex_RegistrationReminder2BatchClass",
    "description": "A callout-enabled batch sending the second registration reminder, 15 days after the first reminder was sent (and only once, matched by exact date), to still-unpaid non-legacy registration cases, carrying the same KAM/Service Manager and project context as the first reminder for the follow-up communication."
  },
  {
    "name": "Ex_RegistrationReminder3BatchClass",
    "description": "A callout-enabled batch sending the third and final registration reminder 15 days after the second, choosing the sender address based on project type — the standard 'My Land' address, or 'Vertical No reply' for Vertical projects — and including the case's attached Documents for reference in the final follow-up before escalation."
  },
  {
    "name": "Ex_ReminderInterestBatchClass",
    "description": "A callout-enabled batch sending interest letters and notices on a graduated schedule of overdue windows (roughly 10, 20, 30, 45, 60, 90 and 120 days late, per its own adjusted comments), loading each booking's company, service manager, and which interest letters/notices have already been sent so it only sends the next escalation step the booking hasn't received yet."
  },
  {
    "name": "Ex_ReminderNotificationBatchClass",
    "description": "A consolidated, scheduled batch that replaces several of the separate interest-reminder batches with one class covering the full escalation ladder by named day-offsets: 3 days for amount overdue, 5/15/30 days for interest letters, 45/60 days for interest notices 1/2, 90 days for pre-termination, and 120 days for termination — giving the org a single, clearly-commented source of truth for every collections-escalation timing threshold."
  },
  {
    "name": "Ex_RERAPhaseDetailsAPI",
    "description": "An inbound @RestResource endpoint (/getRERAPhaseDetails) that looks up a single RERA_Phase__c by Id (passed as 'reraphaseid' in the POST body), validating the Id is present and the phase exists before returning its RERA number, parent project and test-record flag to the external caller — the single-record counterpart to the bulk Ex_getAllRERAPhaseDetails endpoint."
  },
  {
    "name": "Ex_RERAPhaseServices",
    "description": "Syncs RERA Phase records to the external CMS, following the same future-callout pattern as the other CMS-sync service classes. insertRERAPhase() loads each phase's RERA number and parent project along with the active HOABL_CMS__c base URL, then pushes it to the CMS so RERA registration details stay visible on the public website."
  },
  {
    "name": "Ex_RERAPhaseTrigger",
    "description": "The RERA_Phase__c trigger (after insert, update, delete) routing to Ex_RERAPhaseTriggerHandler's afterInsert, afterUpdate and afterDelete methods to keep the external CMS synced with RERA phase changes."
  },
  {
    "name": "Ex_RERAPhaseTriggerHandler",
    "description": "On RERA Phase insert, pushes the new record to the CMS via Ex_RERAPhaseServices.insertRERAPhase() (skipped during tests); on update, compares every CMS-relevant field (name, RERA number, parent project, test-record flag) between old and new to determine whether a CMS update push is needed."
  },
  {
    "name": "Ex_RESTCustomerIdentityAPI",
    "description": "An inbound, without-sharing @RestResource endpoint (/CustomerIdentity/*) that verifies a customer's identity by mobile number. checkMobileNumber() strips non-numeric characters from the submitted number and searches Applicant__c records where it matches either the primary or alternate mobile field, returning a 400 if no mobile number was supplied, used by an external system to confirm whether a given phone number belongs to a known HoABL customer."
  },
  {
    "name": "Ex_RESTUnitCreationUpdation",
    "description": "An inbound @RestResource endpoint (/SAP/Unit/*) creating or updating Property (unit) records directly from SAP. createUnit() accepts a list of incoming unit requests, resolves each one's Project and RERA Phase, and uses the same SAP_Code__c custom metadata lookup pattern as Ex_RestCustomerCreation to translate SAP's codes into the correct Salesforce field values — the confirmed inbound half of the SAP ERP integration."
  },
  {
    "name": "Ex_ScheduledSlotHandlerServices",
    "description": "Keeps a Registration Case's slot-scheduled flag accurate. updateRegistrationCase() builds Registration Case updates from a list of Scheduled Registration Slots, clearing Slot_Scheduled__c back to false specifically when a slot's approval status is 'Rejected', so a rejected slot doesn't leave the case incorrectly showing a slot as still scheduled."
  },
  {
    "name": "Ex_ScheduledSlotTriggerHandler",
    "description": "Handles Scheduled Registration Slot automation. afterInsert() references a 'ScheduledSlotEvent' PushTopic for real-time UI updates, and afterUpdate() (together with processApprovalStatus(), added later) detects relevant field changes and submits the slot into an approval process via Approval.ProcessSubmitRequest when appropriate."
  },
  {
    "name": "Ex_ScheduleSlotTrigger",
    "description": "The Scheduled_Registration_Slot__c trigger (after insert, before/after update) routing to Ex_ScheduledSlotTriggerHandler's afterInsert, beforeUpdate, afterUpdate and processApprovalStatus methods."
  },
  {
    "name": "Ex_SDRChecklistController",
    "description": "Backs the SDR (stamp duty & registration) Checklist component. returnMasterChecklistRecords() returns the master document checklist configured for the Registration Case's Project and Registration Type, ordered by sequence, and getCustomerDetails() returns the customer context needed alongside the checklist for the registration team to verify documents against."
  },
  {
    "name": "Ex_sendDOCReminderEmailBatch",
    "description": "A scheduled, callout-enabled batch sending Direct DOC (Deed of Conveyance) reminder emails every Monday. Per its own changelog it was updated to query from Registration Case rather than Booking directly, and its commented-out query shows it originally selected nearly every field on Booking__c — reflecting how broad and long-lived this particular reminder's data needs grew before being narrowed."
  },
  {
    "name": "Ex_SendInterestEmail",
    "description": "Sends the first-stage interest email for an overdue booking. getBooking() loads the booking's correspondence contact, outstanding amount and interest, project interest rate/SBI MCLR, and the full history of up to ten interest letters with their individual sent flags and dates, so the email only includes the next letter in sequence that hasn't already gone out."
  },
  {
    "name": "Ex_SendInterestNoticeEmail",
    "description": "Sends the interest notice email once three interest letters have already gone out without payment. getBooking() loads the same correspondence, outstanding-amount and ten-letter-history context as Ex_SendInterestEmail, letting the notice email reference exactly which letters were already sent before escalating to a formal notice."
  },
  {
    "name": "Ex_SendIntimationEmailHandler",
    "description": "Sends the intimation email when a Registration Case is created. Its TableRow helper and formatCurrency() method build a dynamic, INR-formatted charge breakdown table (what's owed, the amount, and which account it should be paid into) for the email body, including the KYC form link as of a later update."
  },
  {
    "name": "Ex_SendIntimationEmailTrigger",
    "description": "The Registration_Case__c trigger (after insert) that collects every newly inserted case's Id and re-queries it with its full charge, approval, courier and document-handling field set before handing off to Ex_SendIntimationEmailHandler to compose and send the intimation email."
  },
  {
    "name": "Ex_SendPreIntimationLetterController",
    "description": "A controller for sending the pre-intimation letter on a specific Booking, with its primary getPaymentMilestone() method (finding Payment Milestones due in 45 days that haven't been raised yet, excluding legacy bookings) currently commented out in this version, leaving the controller as a disabled or in-progress variant of the pre-intimation batch logic."
  },
  {
    "name": "Ex_SendReceiptToCustomer",
    "description": "Emails a payment Receipt to the customer. sendEmail() validates a Receipt Id is supplied, resolves the sender as either the standard 'Updates HoABL' address or the 'Vertical No reply' address for vertical projects (added later per its own comment), and loads the receipt's related Application/Booking context, flagging whether it's a token receipt."
  },
  {
    "name": "Ex_SendRegistrationEmailController",
    "description": "Sends the registration completion email, reusing the same dynamic TableRow/formatCurrency pattern as Ex_SendIntimationEmailHandler to present a clear, INR-formatted breakdown of registration-related charges and the accounts they were paid into."
  },
  {
    "name": "Ex_SiteVisitSlotBookingDashboard",
    "description": "Backs the Site Visit Slot booking dashboard. getSiteVisitSlot() resolves a Booking's Project and returns every Site_Visit_Slot__c configured for that project (day, start time, end date), returning null if the booking has no project or no slots exist, so the dashboard only offers slot options relevant to the customer's specific project."
  },
  {
    "name": "Ex_SlotBookingController",
    "description": "Backs the Registration slot booking dashboard. getRegistrationOffice() resolves a Booking's Project and collects up to three configured Registration Offices (Registration_Office_1/2/3__c) into a list, giving the customer a choice of registration office options tied to their specific project."
  },
  {
    "name": "Ex_StatementOfAccountController",
    "description": "A Visualforce controller for the full Statement of Account document. It assembles the Booking, a list of LedgerStatement entries, DemandInterest rows and a flattened OtherChargeRow table, alongside property/plot/project identifiers, GSTIN and a comprehensive set of running totals (amount demanded/paid/remaining, interest, taxes, payable) split between the main consideration charges and a separate 'OC' (other charges) bucket, giving the customer a single document covering their entire payment history and current standing."
  },
  {
    "name": "ex_TaskCreationController",
    "description": "Backs a generic Task-creation dashboard. Its ServiceManagerWrapper DTO pairs a Service Manager's Id and display name for a picker, while a broader getRecords() method (shown commented out, intended to fetch loyal-customer Accounts or other record types with sortable fields) appears to be mid-refactor or disabled in this version."
  },
  {
    "name": "Ex_UpdateConstructionStages",
    "description": "Backs the Construction Stages update dashboard. getProjects() lists every Project with its type and vertical-project flag, and getPhases() returns a selected project's Phases, progressively narrowing the picker before the admin edits construction milestone stages for a specific phase."
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
    "name": "EX_WelcomeCallChecklistController",
    "description": "Backs the Welcome Call Checklist for CSS and Sales teams. getCurrentUser() checks whether the logged-in user is specifically the Booking's Service Manager (a similar, currently-commented check exists for Closing Manager), gating who is allowed to complete the welcome-call checklist items for that booking, which are modeled via a ChecklistItem (action, item, id) structure."
  },
  {
    "name": "Ex_WelcomeEmail",
    "description": "A Visualforce controller for the welcome email component, assembling a Booking's Quotation, payment milestones (as wrapper rows), charge details, and waiver discounts alongside grand totals (value, tax, TDS, percentage) and the primary applicant's name, project, plot number, booking date and plot value for the email template to render a complete welcome summary."
  },
  {
    "name": "Ex_WordDocumentPreviewController",
    "description": "Supports previewing generated documents (reused from an Exceller demo org). getAllotmentLetterCreated() and getCSSChecklistDone() are simple boolean lookups on a Booking that gate whether certain document-preview or checklist-dependent UI elements should be shown, used as quick pre-conditions before offering a document preview."
  }
];
