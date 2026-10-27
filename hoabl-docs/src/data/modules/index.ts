import type { ModuleSchema } from '@/lib/erd/types';
import { booking } from './booking';
import { customerPortalCms } from './customer-portal-cms';
import { loan } from './loan';
import { presales } from './presales';
import { marketing } from './marketing';

const modules: Record<string, ModuleSchema> = {
  [booking.slug]: booking,
  [customerPortalCms.slug]: customerPortalCms,
  [loan.slug]: loan,
  [presales.slug]: presales,
  [marketing.slug]: marketing,
};

export function getModule(slug: string): ModuleSchema {
  const schema = modules[slug];
  if (!schema) throw new Error(`Unknown schema module "${slug}". Register it in src/data/modules/index.ts.`);
  return schema;
}
