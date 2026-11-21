import { sites } from '@/data/sites/sites';
import { SitesDirectory } from './sites-directory';

export function Sites() {
  return <SitesDirectory sites={sites} />;
}
