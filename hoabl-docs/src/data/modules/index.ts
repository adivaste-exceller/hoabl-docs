import type { ModuleSchema } from '@/lib/erd/types';
import { customerPortalCms } from './customer-portal-cms';
import { loan } from './loan';
import { presales } from './presales';
import { marketing } from './marketing';
import { finance } from './finance';
import { mss } from './mss';
import { sales } from './sales';
import { bookingOnboardingCollection } from './booking-onboarding-collection';

const modules: Record<string, ModuleSchema> = {
  [customerPortalCms.slug]: customerPortalCms,
  [loan.slug]: loan,
  [presales.slug]: presales,
  [marketing.slug]: marketing,
  [finance.slug]: finance,
  [mss.slug]: mss,
  [sales.slug]: sales,
  [bookingOnboardingCollection.slug]: bookingOnboardingCollection,
};

export function getModule(slug: string): ModuleSchema {
  const schema = modules[slug];
  if (!schema) throw new Error(`Unknown schema module "${slug}". Register it in src/data/modules/index.ts.`);
  return schema;
}
