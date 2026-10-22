import type { CoverageDataset } from '@/lib/coverage';

const cms = 'TestCustomerPortal_CMS';
const providers = 'TestCustomerPortal_ContentProvider';

export const customerPortalCmsCoverage: CoverageDataset = {
  source: 'HoABL-UAT, 22 Oct 2026',
  items: [
    {
      testClass: cms,
      coveredClasses: [
        { name: 'CustomerPortal_CMSController', covered: 78, total: 90 },
        { name: 'CustomerPortal_CMSLoginController', covered: 61, total: 64 },
        { name: 'CustomerPortal_CMSLaunchController', covered: 228, total: 301 },
        { name: 'CustomerPortal_CMSOfferingsController', covered: 110, total: 131 },
        { name: 'CustomerPortal_CMSServicesController', covered: 245, total: 307 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_CMSLatestUpdates',
      coveredClasses: [{ name: 'CustomerPortal_CMSLatestUpdatesCtrl', covered: 274, total: 305 }],
    },
    {
      testClass: providers,
      coveredClasses: [
        { name: 'CustomerPortal_SiteContentProvider', covered: 14, total: 16 },
        { name: 'CustomerPortal_LoginContentProvider', covered: 17, total: 17 },
        { name: 'CustomerPortal_HomeContentProvider', covered: 32, total: 37 },
        { name: 'CustomerPortal_LaunchContentProvider', covered: 93, total: 102 },
        { name: 'CustomerPortal_ServiceContentProvider', covered: 51, total: 53 },
        { name: 'CustomerPortal_NewsLetterContentProvider', covered: 30, total: 32 },
        { name: 'CustomerPortal_VideoContentProvider', covered: 38, total: 40 },
      ],
    },
    {
      testClass: 'TestCustomerPortal_AliasContentProvider',
      coveredClasses: [{ name: 'CustomerPortal_AliasContentProvider', covered: 26, total: 32 }],
    },
    {
      testClass: 'TestCustomerPortal_FilePublicUrlHandler',
      coveredClasses: [{ name: 'CustomerPortal_FilePublicUrlHandler', covered: 125, total: 131 }],
    },
  ],
};
