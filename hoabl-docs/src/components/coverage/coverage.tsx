import { getCoverage } from '@/data/coverage';
import { CoverageTable } from './coverage-table';

export function Coverage({ module }: { module: string }) {
  return <CoverageTable dataset={getCoverage(module)} />;
}
