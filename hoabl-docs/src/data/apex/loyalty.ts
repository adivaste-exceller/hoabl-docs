import type { ApexClassDoc } from './types';

export const loyaltyApex: ApexClassDoc[] = [
  {
    "name": "CustomerPortal_GuestUserServices",
    "description": "Exposes Aura methods callable by unauthenticated guest users on the public-facing Customer Portal site. createDigitalLead() looks up (or implicitly relies on) a 'Website Organic Campaign' tied to the given Launch and inserts a Digital_Lead__c record stamped with a full set of 'DirectWebsite' UTM/channel attribution values, giving marketing a consistent way to tag leads that originate from direct, non-campaign website traffic rather than a tracked ad source."
  },
  {
    "name": "Ex_CallDispositionController",
    "description": "Backs the call-disposition logging UI used after a sales call. getCategoryPicklist() reflects Task.Category__c's active values for the disposition category dropdown, and getActiveLaunches() returns every active Launch (enforcing field-level security) as label/value options so the agent can tag which launch the call related to."
  },
  {
    "name": "Ex_CreatePersonAccountController",
    "description": "Creates a new Person Account record directly from the UI. createAccount() sets the Person Account record type, name fields, country code, mobile number and loyalty-customer flag, inserts the record, and returns its new Id — a simple, self-contained account-creation action used wherever a quick new-customer entry point is needed."
  },
  {
    "name": "Ex_DigitalLeadHandlerServices",
    "description": "Processes Facebook-sourced Digital Leads into Salesforce Leads/Opportunities. fbLeadProcess() loads a Digital_Lead__c's full ad-attribution payload (campaign, adset, ad, UTM parameters, GCLID/FBCLID click ids, CTI flag) for a single lead at a time and converts it into the corresponding Lead/Account/Opportunity records, recently modified to no longer require the matched Campaign to be Active__c."
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
    "name": "Ex_OpportunityTriggerHandler",
    "description": "On Opportunity before-insert, resolves the correct RecordTypeId from a plain-text Record_Type_Name__c field passed in from external sources, and sets a different CloseDate when running inside a test context versus normal execution, among other grouped logic (round-robin and referral assignment lists) visible further in the class for routing new opportunities to the right sourcing manager."
  },
  {
    "name": "Ex_ReferralAndEnquiryFormController",
    "description": "Backs the Referral and Enquiry form. getUserName() returns the logged-in user's name, email and mobile (for pre-filling the referrer's own details), and getAccountName() returns a referring Account's mobile, email, name, customer tier and existing referral count, so the form can show who is making the referral and validate their eligibility before submitting a new one."
  },
  {
    "name": "ex_TaskCreationController",
    "description": "Backs a generic Task-creation dashboard. Its ServiceManagerWrapper DTO pairs a Service Manager's Id and display name for a picker, while a broader getRecords() method (shown commented out, intended to fetch loyal-customer Accounts or other record types with sortable fields) appears to be mid-refactor or disabled in this version."
  }
];
