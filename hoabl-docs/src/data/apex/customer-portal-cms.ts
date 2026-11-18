import type { ApexClassDoc } from './types';

export const customerPortalCmsApex: ApexClassDoc[] = [
  {
    "name": "CustomerPortal_CMSController",
    "description": "Shared helper used by every CMS tab. Fetches the master Portal Configuration record, loads launch options for dropdowns, and creates or deletes File records for uploaded assets. Tab-specific logic lives in the dedicated controllers below."
  },
  {
    "name": "CustomerPortal_CMSLoginController",
    "description": "Backs the **Login Carousel** tab. Creates, updates, deletes and fetches the login carousel images linked to the portal configuration."
  },
  {
    "name": "CustomerPortal_CMSLaunchController",
    "description": "Backs the **Investment & RERA** tab. Manages the general launch info, investment carousel images and RERA details for each project and launch."
  },
  {
    "name": "CustomerPortal_CMSLatestUpdatesCtrl",
    "description": "Backs the **Latest Updates** tab. Manages newsletters and videos together with their targeting rows. A content item is shown to a customer only when a targeting row matches the customer's Launch and Phase exactly."
  },
  {
    "name": "CustomerPortal_CMSOfferingsController",
    "description": "Backs the **Latest Offerings** tab. Handles create, update, delete and fetch for the home page offerings, including validation rules and the customer tier picklist options."
  },
  {
    "name": "CustomerPortal_CMSServicesController",
    "description": "Backs the **Services** tab. Manages each service along with its FAQs and process steps, including the card and content text and images shown in the portal."
  },
  {
    "name": "CustomerPortal_SiteContentProvider",
    "description": "Single entry point the portal site calls for CMS content. It delegates to the login, home, launch, service, video, newsletter and alias providers, and its methods are cacheable."
  },
  {
    "name": "CustomerPortal_LoginContentProvider",
    "description": "Returns the login page carousel images (up to 20) with image URL, alt text and serial number, in serial order. Only records that have an image are returned."
  },
  {
    "name": "CustomerPortal_HomeContentProvider",
    "description": "Returns the latest offerings (up to 50) and the service FAQs shown on the portal home page, in serial order. Image URLs come from the linked File records."
  },
  {
    "name": "CustomerPortal_LaunchContentProvider",
    "description": "Returns launch-specific content: the launch alias, the carousel images for the Investment Detail page, and the launch image used as the background on the Investment listing page."
  },
  {
    "name": "CustomerPortal_ServiceContentProvider",
    "description": "Returns the portal services with their card and content text, images, FAQs and process steps, all ordered by serial number."
  },
  {
    "name": "CustomerPortal_NewsLetterContentProvider",
    "description": "Returns the newsletters targeted to a given launch and phase, with publish date and preview and download URLs. Visibility is resolved through the newsletter targeting rows."
  },
  {
    "name": "CustomerPortal_VideoContentProvider",
    "description": "Returns the videos (up to 50) targeted to a given launch and phase, with embed URL, thumbnail, channel details and publish date. Visibility is resolved through the video targeting rows."
  },
  {
    "name": "CustomerPortal_AliasContentProvider",
    "description": "Supplies the display aliases for projects and launches, used in the portal in place of the Salesforce names, with a fallback value when no alias is set."
  },
  {
    "name": "CustomerPortal_FilePublicUrlHandler",
    "description": "Called by the `CustomerPortal_FilePublicUrlTrigger` trigger when a file is attached to a File record. It picks the latest file version, creates a public distribution link, and stores the file name, size, download URL and preview URL on the File record."
  }
];
