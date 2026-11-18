import { lwcComponents, vfPages } from './components';
import type { ComponentInfo } from './types';

/** LWCs listed on a module page, A to Z by name. */
export function getLwc(slug: string): ComponentInfo[] {
  return lwcComponents.filter((c) => c.modules.includes(slug)).sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
}

/** Visualforce pages listed on a module page, A to Z by name. */
export function getVfPages(slug: string): ComponentInfo[] {
  return vfPages.filter((c) => c.modules.includes(slug)).sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
}
