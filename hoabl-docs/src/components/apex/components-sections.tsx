import { getLwc, getVfPages } from '@/data/components';
import { ComponentTable } from './component-table';

export function LwcComponents({ module }: { module: string }) {
  return <ComponentTable rows={getLwc(module)} kind="lwc" />;
}

export function VfPages({ module }: { module: string }) {
  return <ComponentTable rows={getVfPages(module)} kind="vf" />;
}
