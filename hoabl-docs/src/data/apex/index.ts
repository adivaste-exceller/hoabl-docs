import { apexClassification } from './classification';
import type { ApexClassDoc, ApexClassInfo } from './types';
import { bookingCancellationsApex } from './booking-cancellations';
import { bookingOnboardingCollectionApex } from './booking-onboarding-collection';
import { caseManagementApex } from './case-management';
import { cpSourcingApex } from './cp-sourcing';
import { customerPortalCmsApex } from './customer-portal-cms';
import { financeApex } from './finance';
import { loanApex } from './loan';
import { loyaltyApex } from './loyalty';
import { marketingApex } from './marketing';
import { mssApex } from './mss';
import { possessionApex } from './possession';
import { presalesApex } from './presales';
import { registrationApex } from './registration';
import { salesApex } from './sales';

const modules: Record<string, ApexClassDoc[]> = {
  'booking-cancellations': bookingCancellationsApex,
  'booking-onboarding-collection': bookingOnboardingCollectionApex,
  'case-management': caseManagementApex,
  'cp-sourcing': cpSourcingApex,
  'customer-portal-cms': customerPortalCmsApex,
  'finance': financeApex,
  'loan': loanApex,
  'loyalty': loyaltyApex,
  'marketing': marketingApex,
  'mss': mssApex,
  'possession': possessionApex,
  'presales': presalesApex,
  'registration': registrationApex,
  'sales': salesApex,
};

export type ApexRow = ApexClassDoc & ApexClassInfo;

/** A module's documented Apex classes, each joined with its generated category. */
export function getApexClasses(slug: string): ApexRow[] {
  const docs = modules[slug];
  if (!docs) throw new Error(`No Apex class docs for "${slug}". Register it in src/data/apex/index.ts.`);
  return docs.map((doc) => {
    const info = apexClassification[doc.name];
    if (!info) throw new Error(`"${doc.name}" has no classification. Run: node scripts/classify-apex.mjs`);
    return { ...doc, ...info };
  });
}
