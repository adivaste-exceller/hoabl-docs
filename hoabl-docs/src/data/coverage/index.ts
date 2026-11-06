import type { CoverageDataset } from '@/lib/coverage';
import { customerPortalCmsCoverage } from './customer-portal-cms';
import { bookingCancellationsCoverage } from './booking-cancellations';
import { bookingOnboardingCollectionCoverage } from './booking-onboarding-collection';
import { caseManagementCoverage } from './case-management';
import { cpSourcingCoverage } from './cp-sourcing';
import { financeCoverage } from './finance';
import { loanCoverage } from './loan';
import { loyaltyCoverage } from './loyalty';
import { marketingCoverage } from './marketing';
import { mssCoverage } from './mss';
import { possessionCoverage } from './possession';
import { presalesCoverage } from './presales';
import { registrationCoverage } from './registration';
import { salesCoverage } from './sales';

const datasets: Record<string, CoverageDataset> = {
  'customer-portal-cms': customerPortalCmsCoverage,
  'booking-cancellations': bookingCancellationsCoverage,
  'booking-onboarding-collection': bookingOnboardingCollectionCoverage,
  'case-management': caseManagementCoverage,
  'cp-sourcing': cpSourcingCoverage,
  'finance': financeCoverage,
  'loan': loanCoverage,
  'loyalty': loyaltyCoverage,
  'marketing': marketingCoverage,
  'mss': mssCoverage,
  'possession': possessionCoverage,
  'presales': presalesCoverage,
  'registration': registrationCoverage,
  'sales': salesCoverage,
};

export function getCoverage(slug: string): CoverageDataset {
  const dataset = datasets[slug];
  if (!dataset) throw new Error(`No coverage data for "${slug}". Register it in src/data/coverage/index.ts.`);
  return dataset;
}
