#!/usr/bin/env node
/**
 * Builds src/data/sites/sites.ts: every public Site in the org and the assets behind it.
 *
 *   node scripts/classify-sites.mjs [path-to-force-app/main/default]
 *
 * Re-run after every metadata retrieve.
 *
 * A Salesforce Site's guest user gets a profile named "<Site name> Profile" with the Guest User License.
 * That profile lists the Visualforce pages and Apex classes the public can reach, so each guest profile is
 * treated as one site.
 *
 * Web forms and APIs: from each enabled Visualforce page the script follows the chain
 *   Visualforce page -> Aura app / component -> LWC -> Apex
 * and records, for every page, Aura bundle and LWC, the Apex controllers it calls itself.
 *
 * Portals (Experience Cloud) have no Visualforce page or Aura app that leads to their LWCs, so the lookup runs
 * backwards: every LWC that calls an Apex class enabled on the portal's guest profile belongs to the portal,
 * together with the LWCs nested inside it.
 *
 * The CustomSite / Network metadata (URL, status, home page) is NOT in the standard retrieve, so the output has
 * no URLs. Add CustomSite to the retrieve if you want them.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = process.argv[2] ?? process.env.HOABL_SFDX ?? 'C:/Users/Admin/Desktop/HOABL/hoabl-prod/force-app/main/default';
const OUT = path.join(ROOT, 'src/data/sites/sites.ts');

const rd = (p) => fs.readFileSync(path.join(SRC, p), 'utf8');
const has = (p) => fs.existsSync(path.join(SRC, p));
const dirs = (d) => fs.readdirSync(path.join(SRC, d), { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
const lower = (names) => new Map([...names].map((n) => [n.toLowerCase(), n]));

const classNames = fs.readdirSync(path.join(SRC, 'classes')).filter((f) => f.endsWith('.cls')).map((f) => f.slice(0, -4));
const classes = lower(classNames);
const lwcNames = dirs('lwc');
const lwcs = lower(lwcNames);
const auras = lower(dirs('aura'));

const classSource = (n) => rd(`classes/${n}.cls`);
const isTest = (n) => /@isTest/i.test(classSource(n));
const restPath = (n) => classSource(n).match(/@RestResource\s*\(\s*urlMapping\s*=\s*'([^']+)'/i)?.[1];

/** Pages that every site has by default. They say nothing about what the site does. */
const SYSTEM_PAGES = new Set([
  'BandwidthExceeded', 'Exception', 'FileNotFound', 'InMaintenance', 'SiteTemplate', 'Unauthorized', 'StdExceptionTemplate',
  'CommunitiesLogin', 'CommunitiesLanding', 'CommunitiesSelfReg', 'CommunitiesSelfRegConfirm', 'ForgotPassword',
  'ForgotPasswordConfirm', 'ChangePassword', 'MyProfilePage', 'SiteLogin', 'SiteRegister', 'SiteRegisterConfirm',
  'AnswersHome', 'IdeasHome',
]);

const blocks = (xml, tag) => [...xml.matchAll(new RegExp(`<${tag}>([^]*?)</${tag}>`, 'g'))].map((m) => m[1]);
const field = (block, tag) => block.match(new RegExp(`<${tag}>([^<]*)`))?.[1];
const enabled = (block) => block.includes('<enabled>true</enabled>');
const camel = (kebab) => kebab.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const sorted = (xs) => [...xs].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

/** Apex classes an LWC imports itself (not the ones its children import). */
const lwcOwnApexCache = new Map();
function lwcOwnApex(name) {
  if (!lwcOwnApexCache.has(name)) {
    const own = new Set();
    for (const f of fs.readdirSync(path.join(SRC, 'lwc', name)).filter((f) => f.endsWith('.js')))
      for (const m of rd(`lwc/${name}/${f}`).matchAll(/@salesforce\/apex\/(\w+)\./g)) {
        const c = classes.get(m[1].toLowerCase());
        if (c && !isTest(c)) own.add(c);
      }
    lwcOwnApexCache.set(name, own);
  }
  return lwcOwnApexCache.get(name);
}

const newAcc = () => ({ aura: new Map(), lwc: new Map(), vf: new Map() }); // name -> Set of controllers it calls itself

/**
 * Walks every component reachable from a starting point.
 *
 * References it follows:
 *   <c:Name>                                markup in an Aura bundle (Aura or LWC)
 *   <c-name>                                markup in an LWC template
 *   <aura:dependency resource="Name"/>      how an Aura app pulls in an LWC it never renders itself
 *   $Lightning.use / createComponent("c:Name")   Visualforce pages
 *   "c:Name" strings                        $A.createComponent in Aura JavaScript
 *   @salesforce/apex/Class.method           LWC imports
 *   controller="Class"                      Aura bundles and Visualforce pages
 */
function visit(name, acc) {
  const aura = auras.get(name.toLowerCase());
  const lwc = lwcs.get(name.toLowerCase());
  if (aura) walkAura(aura, acc);
  else if (lwc) walkLwc(lwc, acc);
}

function walkLwc(name, acc) {
  if (acc.lwc.has(name)) return;
  acc.lwc.set(name, new Set(lwcOwnApex(name)));
  for (const f of fs.readdirSync(path.join(SRC, 'lwc', name)).filter((f) => f.endsWith('.html')))
    for (const m of rd(`lwc/${name}/${f}`).matchAll(/<c-([a-z0-9-]+)/g)) {
      const child = lwcs.get(camel(m[1]).toLowerCase());
      if (child) walkLwc(child, acc);
    }
}

function walkAura(name, acc) {
  if (acc.aura.has(name)) return;
  const own = new Set();
  acc.aura.set(name, own);
  for (const f of fs.readdirSync(path.join(SRC, 'aura', name)).filter((f) => /\.(cmp|app|js|evt|intf)$/.test(f))) {
    const text = rd(`aura/${name}/${f}`);
    for (const m of text.matchAll(/(?<![A-Za-z])controller\s*=\s*"([^"]+)"/gi)) {
      const c = classes.get(m[1].trim().toLowerCase());
      if (c && !isTest(c)) own.add(c);
    }
    const refs = [
      ...text.matchAll(/<c:([A-Za-z0-9_]+)/g),
      ...text.matchAll(/<aura:dependency[^>]*resource\s*=\s*"(?:markup:\/\/)?(?:c:)?([A-Za-z0-9_]+)"/gi),
      ...text.matchAll(/["']c:([A-Za-z0-9_]+)["']/g),
    ];
    for (const m of refs) visit(m[1], acc);
  }
}

/** Visualforce page -> its own controller classes plus everything it loads through Aura or directly as an LWC. */
function walkPage(name, acc) {
  const text = rd(`pages/${name}.page`);
  const own = new Set();
  acc.vf.set(name, own);
  const tag = text.match(/<apex:page\b[^>]*>/is)?.[0] ?? '';
  for (const m of tag.matchAll(/(?<![A-Za-z])(?:controller|extensions)\s*=\s*"([^"]+)"/gi))
    for (const c of m[1].split(',')) {
      const k = classes.get(c.trim().toLowerCase());
      if (k && !isTest(k)) own.add(k);
    }
  const refs = [
    ...text.matchAll(/\$Lightning\.(?:use|createComponent)\(\s*["']c:([A-Za-z0-9_]+)["']/g),
    ...text.matchAll(/<c:([A-Za-z0-9_]+)/g),
  ];
  for (const m of refs) visit(m[1], acc);
}

const components = (map) => sorted(map.keys()).map((name) => ({ name, controllers: sorted(map.get(name)) }));
const sites = [];

for (const file of fs.readdirSync(path.join(SRC, 'profiles'))) {
  const xml = rd(`profiles/${file}`);
  if (field(xml, 'userLicense') !== 'Guest User License') continue;
  const profile = file.replace('.profile-meta.xml', '');
  if (profile === 'Guest License User') continue; // Salesforce's generic default, not a site

  const grantedApex = blocks(xml, 'classAccesses').filter(enabled).map((b) => field(b, 'apexClass')).filter((c) => classes.has(c.toLowerCase()) && !isTest(c));
  const pages = blocks(xml, 'pageAccesses').filter(enabled).map((b) => field(b, 'apexPage')).filter((p) => !SYSTEM_PAGES.has(p) && has(`pages/${p}.page`));
  const isPortal = pages.includes('CommunitiesTemplate');

  const acc = newAcc();
  for (const p of pages) walkPage(p, acc);

  // Portal LWCs are not reachable from a page, so find them by the Apex their guest user is allowed to call.
  if (isPortal) {
    const granted = new Set(grantedApex);
    for (const n of lwcNames) if ([...lwcOwnApex(n)].some((c) => granted.has(c))) walkLwc(n, acc);
  }

  const chainApex = new Set();
  for (const map of [acc.vf, acc.aura, acc.lwc]) for (const set of map.values()) set.forEach((c) => chainApex.add(c));
  const apex = new Set([...grantedApex, ...chainApex]);
  const rest = sorted(apex).map((c) => ({ cls: c, path: restPath(c) })).filter((r) => r.path);

  let kind = 'Web form';
  if (!acc.aura.size && !acc.lwc.size && rest.length) kind = 'REST API';
  else if (isPortal) kind = 'Portal';

  sites.push({
    name: profile.replace(/ Profile$/, ''),
    profile,
    kind,
    vfPages: components(acc.vf),
    aura: components(acc.aura),
    lwc: components(acc.lwc),
    apex: sorted(apex),
    // Called by the site's components, but not enabled on its guest profile.
    notGranted: sorted([...chainApex].filter((c) => !grantedApex.includes(c))),
    rest,
  });
}

sites.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(
  OUT,
  `// GENERATED by scripts/classify-sites.mjs from the retrieved Salesforce source. Do not edit by hand.
import type { SiteInfo } from './types';

export const sites: SiteInfo[] = ${JSON.stringify(sites, null, 2)};
`,
);

const counts = {};
for (const s of sites) counts[s.kind] = (counts[s.kind] ?? 0) + 1;
console.log(`Wrote ${path.relative(ROOT, OUT)}: ${sites.length} sites`);
console.table(counts);
