import { getApexClasses } from '@/data/apex';
import { ApexTable } from './apex-table';

export function ApexClasses({ module }: { module: string }) {
  return <ApexTable rows={getApexClasses(module)} />;
}
