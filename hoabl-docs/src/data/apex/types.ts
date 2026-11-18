export type ApexCategory =
  | 'Apex Trigger'
  | 'Apex Trigger Handler'
  | 'Apex Handler Service'
  | 'Controller'
  | 'Batch / Scheduled'
  | 'Integration / Callout'
  | 'Utility / Helper';

/** Generated per class by scripts/classify-apex.mjs. */
export interface ApexClassInfo {
  category: ApexCategory;
  /** Triggers only: the sObject the trigger fires on. */
  object?: string;
  /** Trigger: its handlers. Handler: the triggers that call it. Service: the handlers that call it. */
  related?: string[];
  /** Components that use this class, by type. LWC and Aura are bundle names, VF is the page name, Flow the flow API name. */
  usedBy?: { lwc?: string[]; aura?: string[]; vf?: string[]; flow?: string[] };
}

/** Hand-written per module (descriptions came from the original Apex tables). */
export interface ApexClassDoc {
  name: string;
  description: string;
}

/** Display order, label colors and one-line explanations for the category chips. */
export const APEX_CATEGORIES: { value: ApexCategory; color: string; hint: string }[] = [
  { value: 'Apex Trigger', color: '#2563eb', hint: 'A .trigger file that fires on an object and delegates to a handler.' },
  { value: 'Apex Trigger Handler', color: '#7c3aed', hint: 'Called directly by a trigger; routes each event to the right logic.' },
  { value: 'Apex Handler Service', color: '#0891b2', hint: 'Business logic called by a trigger handler.' },
  { value: 'Controller', color: '#059669', hint: 'Backs a Lightning component, Visualforce page or Flow.' },
  { value: 'Batch / Scheduled', color: '#ea580c', hint: 'Batch, schedulable or queueable jobs.' },
  { value: 'Integration / Callout', color: '#db2777', hint: 'REST endpoints, HTTP callouts and inbound email handlers.' },
  { value: 'Utility / Helper', color: '#64748b', hint: 'Shared services, helpers and anything not matched above.' },
];
