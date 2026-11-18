'use client';

import { Search, X } from 'lucide-react';
import { Fragment, useMemo, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { APEX_CATEGORIES, type ApexCategory } from '@/data/apex/types';
import type { ApexRow } from '@/data/apex';

const ORDER = new Map(APEX_CATEGORIES.map((c, i) => [c.value, i]));
const META = new Map(APEX_CATEGORIES.map((c) => [c.value, c]));

function Code({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <code className={cn('rounded bg-fd-muted px-1.5 py-0.5 font-mono text-[0.82em] text-fd-foreground [overflow-wrap:anywhere]', className)}>
      {children}
    </code>
  );
}

/** Descriptions use `backticks` for code. Render them as inline code like the old Markdown tables did. */
function renderInline(text: string): ReactNode {
  return text.split(/`([^`]+)`/).map((part, i) => (i % 2 ? <Code key={i}>{part}</Code> : <Fragment key={i}>{part}</Fragment>));
}

function Dot({ color }: { color: string }) {
  return <span className="inline-block size-2 shrink-0 rounded-full" style={{ background: color }} />;
}

function names(list: string[]) {
  return list.map((n, i) => (
    <Fragment key={n}>
      {i > 0 && ' '}
      <Code>{n}</Code>
    </Fragment>
  ));
}

/** Small labelled facts under the description: trigger object, callers, called handlers, and the LWC/Aura/VF/Flow that use the class. */
function Facts({ row }: { row: ApexRow }) {
  const facts: { label: string; value: ReactNode }[] = [];
  if (row.category === 'Apex Trigger') {
    facts.push({ label: 'Fires on', value: <Code>{row.object}</Code> });
    if (row.related?.length) facts.push({ label: 'Calls', value: names(row.related) });
  } else if (row.related?.length) {
    facts.push({ label: row.category === 'Apex Trigger Handler' ? 'Called by trigger' : 'Called by handler', value: names(row.related) });
  }
  const used = row.usedBy;
  if (used?.lwc?.length) facts.push({ label: 'Used by LWC', value: names(used.lwc) });
  if (used?.aura?.length) facts.push({ label: 'Used by Aura', value: names(used.aura) });
  if (used?.vf?.length) facts.push({ label: 'Used by Visualforce', value: names(used.vf) });
  if (used?.flow?.length) facts.push({ label: 'Used by Flow', value: names(used.flow) });
  if (!facts.length) return null;

  return (
    <dl className="m-0 mt-2.5 flex flex-col gap-1.5 border-l-2 border-fd-border pl-3 text-xs text-fd-muted-foreground">
      {facts.map((fact) => (
        <div key={fact.label} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <dt className="font-medium">{fact.label}</dt>
          <dd className="m-0 flex flex-wrap gap-1">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ApexTable({ rows }: { rows: ApexRow[] }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<ApexCategory | 'all'>('all');

  const counts = useMemo(() => {
    const map = new Map<ApexCategory, number>();
    for (const row of rows) map.set(row.category, (map.get(row.category) ?? 0) + 1);
    return map;
  }, [rows]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows
      .filter((row) => active === 'all' || row.category === active)
      .filter((row) => {
        if (!q) return true;
        const components = Object.values(row.usedBy ?? {}).flat();
        return row.name.toLowerCase().includes(q) || row.description.toLowerCase().includes(q) || components.some((c) => c.toLowerCase().includes(q));
      })
      .sort((a, b) => ORDER.get(a.category)! - ORDER.get(b.category)! || a.name.localeCompare(b.name));
  }, [rows, query, active]);

  const chips = [
    { value: 'all' as const, label: 'All', color: undefined, hint: undefined, n: rows.length },
    ...APEX_CATEGORIES.filter((c) => counts.has(c.value)).map((c) => ({ value: c.value, label: c.value, color: c.color, hint: c.hint, n: counts.get(c.value)! })),
  ];

  return (
    <div className="not-prose my-5 flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <div className="relative w-full sm:w-80">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fd-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search classes, descriptions or components"
            aria-label="Search Apex classes"
            className="h-9 w-full rounded-lg border border-fd-border bg-fd-card pl-9 pr-9 text-sm outline-none placeholder:text-fd-muted-foreground focus-visible:border-fd-ring [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-fd-muted-foreground hover:text-fd-foreground"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
        <span className="text-xs text-fd-muted-foreground" aria-live="polite">
          Showing {visible.length} of {rows.length}
        </span>
      </div>

      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip.value}
            type="button"
            title={chip.hint}
            aria-pressed={active === chip.value}
            onClick={() => setActive(chip.value)}
            className={cn(
              'inline-flex h-8 items-center gap-2 rounded-full border px-3 text-[13px] transition-colors',
              active === chip.value
                ? 'border-fd-primary bg-fd-primary text-fd-primary-foreground'
                : 'border-fd-border bg-fd-card text-fd-muted-foreground hover:border-fd-ring hover:text-fd-foreground',
            )}
          >
            {chip.color && <Dot color={chip.color} />}
            {chip.label}
            <span className="tabular-nums opacity-60">{chip.n}</span>
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-fd-border bg-fd-card/40">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-fd-muted/60 text-xs font-medium uppercase tracking-wide text-fd-muted-foreground">
              <th scope="col" className="w-[30%] px-4 py-3 text-left font-medium">Class</th>
              <th scope="col" className="w-[190px] px-4 py-3 text-left font-medium">Category</th>
              <th scope="col" className="px-4 py-3 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.name} className="border-t border-fd-border transition-colors hover:bg-fd-muted/30">
                <td className="px-4 py-4 align-top">
                  <code className="font-mono text-[13px] font-medium text-fd-foreground [overflow-wrap:anywhere]">{row.name}</code>
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="inline-flex items-center gap-2 whitespace-nowrap text-[13px]">
                    <Dot color={META.get(row.category)!.color} />
                    {row.category}
                  </span>
                </td>
                <td className="px-4 py-4 align-top">
                  <p className="m-0 text-[13.5px] leading-relaxed text-fd-muted-foreground">{renderInline(row.description)}</p>
                  <Facts row={row} />
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr className="border-t border-fd-border">
                <td colSpan={3} className="px-4 py-10 text-center text-fd-muted-foreground">
                  No classes match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
