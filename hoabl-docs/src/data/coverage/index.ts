import type { CoverageDataset } from '@/lib/coverage';
import { customerPortalCmsCoverage } from './customer-portal-cms';

const datasets: Record<string, CoverageDataset> = {
  'customer-portal-cms': customerPortalCmsCoverage,
};

export function getCoverage(slug: string): CoverageDataset {
  const dataset = datasets[slug];
  if (!dataset) throw new Error(`No coverage data for "${slug}". Register it in src/data/coverage/index.ts.`);
  return dataset;
}
