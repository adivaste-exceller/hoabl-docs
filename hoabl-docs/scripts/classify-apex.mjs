#!/usr/bin/env node
/**
 * Classifies every Apex class and trigger in a retrieved SFDX project and writes
 * src/data/apex/classification.ts (consumed by the <ApexClasses /> component).
 *
 *   node scripts/classify-apex.mjs <path-to-force-app/main/default>
 *   node scripts/classify-apex.mjs            # uses $HOABL_SFDX or the default below
 *
 * Re-run after every metadata retrieve. Descriptions are NOT generated here: they live in
 * src/data/apex/<module>.ts. A class without a description in any module page is simply not shown.
 *
 * Classification uses the real call graph first and names second:
 *   Apex Trigger          a .trigger file
 *   Apex Trigger Handler  called from a trigger, name contains "Handler"
 *   Apex Handler Service  named *HandlerService(s), or called from a trigger handler (unless it is clearly
 *                         an integration or a controller)
 *   Batch / Scheduled     Database.Batchable / Schedulable / Queueable
 *   Integration / Callout @RestResource, inbound email handler, HTTP callouts
 *   Controller            @AuraEnabled / @InvocableMethod / VF controller / *Controller
 *   Utility / Helper      *ManagementServices, Guard/Util/Helper/..., and anything unmatched
 * Test classes (@isTest) are skipped.
 *
 * It also records which LWC, Aura, Visualforce and Flow components use each class ("usedBy"):
 *   LWC     import ... from '@salesforce/apex/Class.method'
 *   Aura    <aura:component controller="Class">
 *   VF      <apex:page controller="Class" extensions="A,B">
 *   Flow    <actionName>Class</actionName> (invocable Apex)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = process.argv[2] ?? process.env.HOABL_SFDX ?? 'C:/Users/Admin/Desktop/HOABL/hoabl-prod/force-app/main/default';
const OUT = path.join(ROOT, 'src/data/apex/classification.ts');

const strip = (s) => s.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/[^\n]*/g, ' ');
const load = (dir, ext) =>
  Object.fromEntries(
    fs
      .readdirSync(path.join(SRC, dir))
      .filter((f) => f.endsWith(ext))
      .map((f) => [f.slice(0, -ext.length), strip(fs.readFileSync(path.join(SRC, dir, f), 'utf8'))]),
  );

const classes = load('classes', '.cls');
const triggers = load('triggers', '.trigger');
const names = new Set(Object.keys(classes));

const callsOf = (code, self) => {
  const out = new Set();
  for (const m of code.matchAll(/\b([A-Za-z_]\w*)\s*\.\s*\w+\s*\(/g)) if (names.has(m[1]) && m[1] !== self) out.add(m[1]);
  for (const m of code.matchAll(/\bnew\s+([A-Za-z_]\w*)\s*\(/g)) if (names.has(m[1]) && m[1] !== self) out.add(m[1]);
  return out;
};

const isTest = (code) => /@isTest/i.test(code);
const UTILITY_NAME = /ManagementServices?$|Guard$|Utils?$|Utility$|Helper$|Constants?$|Wrapper$|DTOs?$/;

const triggerInfo = {};
const calledByTrigger = new Map();
for (const [name, code] of Object.entries(triggers)) {
  const m = code.match(/trigger\s+\w+\s+on\s+(\w+)/i);
  triggerInfo[name] = { object: m?.[1], calls: callsOf(code, name) };
  for (const k of triggerInfo[name].calls) (calledByTrigger.get(k) ?? calledByTrigger.set(k, []).get(k)).push(name);
}

const handlerNames = new Set([...calledByTrigger.keys()].filter((n) => /Handler/.test(n) && !UTILITY_NAME.test(n) && !isTest(classes[n])));
const calledByHandler = new Map();
for (const h of handlerNames)
  for (const k of callsOf(classes[h], h)) {
    if (handlerNames.has(k) || isTest(classes[k])) continue;
    (calledByHandler.get(k) ?? calledByHandler.set(k, []).get(k)).push(h);
  }

function classify(name, code) {
  if (UTILITY_NAME.test(name)) return 'Utility / Helper';
  if (handlerNames.has(name)) return 'Apex Trigger Handler';
  if (/Database\.Batchable|\bSchedulable\b|\bQueueable\b/.test(code)) return 'Batch / Scheduled';
  if (/Handler(s)?Services?$/.test(name)) return 'Apex Handler Service';
  // Strong signals beat the call graph: a REST/callout class or a *Controller that a handler happens to call is not a handler service.
  if (/@RestResource|Messaging\.InboundEmailHandler|\bHttpRequest\b|\bnew\s+Http\b|callout\s*=\s*true/i.test(code)) return 'Integration / Callout';
  if (/Controller/.test(name)) return 'Controller';
  if (calledByHandler.has(name)) return 'Apex Handler Service';
  if (/@AuraEnabled|@InvocableMethod|StandardController|PageReference/i.test(code)) return 'Controller';
  return 'Utility / Helper';
}

// ---- who uses each class
const usedBy = {}; // class -> { lwc: Set, aura: Set, vf: Set, flow: Set }
const addUse = (cls, kind, who) => {
  if (!names.has(cls)) return;
  ((usedBy[cls] ??= {})[kind] ??= new Set()).add(who);
};
const dirs = (d) => (fs.existsSync(path.join(SRC, d)) ? fs.readdirSync(path.join(SRC, d), { withFileTypes: true }) : []);
const read = (p) => fs.readFileSync(path.join(SRC, p), 'utf8');

for (const d of dirs('lwc').filter((e) => e.isDirectory()))
  for (const f of fs.readdirSync(path.join(SRC, 'lwc', d.name)).filter((f) => f.endsWith('.js')))
    for (const m of strip(read(`lwc/${d.name}/${f}`)).matchAll(/@salesforce\/apex\/(\w+)\./g)) addUse(m[1], 'lwc', d.name);

for (const d of dirs('aura').filter((e) => e.isDirectory()))
  for (const f of fs.readdirSync(path.join(SRC, 'aura', d.name)).filter((f) => /.(cmp|app)$/.test(f)))
    for (const m of read(`aura/${d.name}/${f}`).matchAll(/(?<![A-Za-z])(?:controller|extensions)\s*=\s*"([^"]+)"/gi))
      for (const c of m[1].split(',')) addUse(c.trim(), 'aura', d.name);

for (const [dir, ext] of [['pages', '.page'], ['components', '.component']])
  for (const e of dirs(dir).filter((e) => e.name.endsWith(ext)))
    for (const m of read(`${dir}/${e.name}`).matchAll(/(?<![A-Za-z])(?:controller|extensions)\s*=\s*"([^"]+)"/gi))
      for (const c of m[1].split(',')) addUse(c.trim(), 'vf', e.name.slice(0, -ext.length));

for (const e of dirs('flows').filter((e) => e.name.endsWith('.flow-meta.xml')))
  for (const m of read(`flows/${e.name}`).matchAll(/<actionName>(\w+)<\/actionName>/g)) addUse(m[1], 'flow', e.name.replace('.flow-meta.xml', ''));

const usage = (name) => {
  const u = usedBy[name];
  if (!u) return undefined;
  return Object.fromEntries(Object.entries(u).map(([k, v]) => [k, [...v].sort((a, b) => a.localeCompare(b))]));
};

const result = {};
for (const [name, info] of Object.entries(triggerInfo)) {
  result[name] = { category: 'Apex Trigger', object: info.object, related: [...info.calls].filter((c) => handlerNames.has(c)).sort() };
}
for (const [name, code] of Object.entries(classes)) {
  if (isTest(code)) continue;
  const category = classify(name, code);
  const entry = { category };
  if (category === 'Apex Trigger Handler') entry.related = [...(calledByTrigger.get(name) ?? [])].sort();
  if (category === 'Apex Handler Service' && calledByHandler.has(name)) entry.related = [...calledByHandler.get(name)].sort();
  const used = usage(name);
  if (used) entry.usedBy = used;
  result[name] = entry;
}

const sorted = Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b)));
const body = `// GENERATED by scripts/classify-apex.mjs from the retrieved Salesforce source. Do not edit by hand.
import type { ApexClassInfo } from './types';

export const apexClassification: Record<string, ApexClassInfo> = ${JSON.stringify(sorted, null, 2)};
`;
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, body);

const counts = {};
for (const v of Object.values(sorted)) counts[v.category] = (counts[v.category] ?? 0) + 1;
console.log(`Wrote ${path.relative(ROOT, OUT)}: ${Object.keys(sorted).length} entries (tests skipped)`);
console.table(counts);
