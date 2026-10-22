export interface CoveredClass {
  name: string;
  /** Covered and total lines. When omitted, `coverage` is used and no line counts are shown. */
  covered?: number;
  total?: number;
  coverage?: number;
}

export interface TestCoverageItem {
  testClass: string;
  coveredClasses: CoveredClass[];
}

export interface CoverageDataset {
  /** Where and when the numbers were measured, for example "HoABL-UAT, 22 Oct 2026". */
  source: string;
  items: TestCoverageItem[];
}

export type CoverageLevel = 'good' | 'fair' | 'low';

/** Salesforce needs 75% per class to deploy, so below that is a real risk. */
export const FAIR_THRESHOLD = 75;
export const GOOD_THRESHOLD = 90;

export function percent(cls: CoveredClass): number {
  if (cls.total) return Math.round(((cls.covered ?? 0) / cls.total) * 100);
  return cls.coverage ?? 0;
}

export function level(pct: number): CoverageLevel {
  if (pct >= GOOD_THRESHOLD) return 'good';
  if (pct >= FAIR_THRESHOLD) return 'fair';
  return 'low';
}
