'use client';

import { Braces, ChevronRight, ChevronsDownUp, ChevronsUpDown, CornerDownRight, FileText, Layers, Puzzle, Search, Webhook, X, type LucideIcon } from 'lucide-react';
import { Fragment, useMemo, useState, type CSSProperties } from 'react';
import { cn } from '@/lib/cn';
import { SITE_KINDS, type SiteComponent, type SiteInfo, type SiteKind } from '@/data/sites/types';

const KIND = new Map(SITE_KINDS.map((k) => [k.value, k]));

type Layer = 'vf' | 'aura' | 'lwc' | 'apex';

/** One color per layer, used for the counts on a closed row and for the cards of an open one. */
const LAYERS: Record<Layer, { label: string; short: string; icon: LucideIcon; color: string }> = {
  vf: { label: 'Visualforce page', short: 'VF', icon: FileText, color: '#2563eb' },
  aura: { label: 'Aura', short: 'Aura', icon: Layers, color: '#7c3aed' },
  lwc: { label: 'LWC', short: 'LWC', icon: Puzzle, color: '#059669' },
  apex: { label: 'Apex classes', short: 'Apex', icon: Braces, color: '#ea580c' },
};

const tint = (color: string, pct: number): CSSProperties => ({ background: `color-mix(in oklab, ${color} ${pct}%, transparent)` });

function Dot({ color }: { color: string }) {
  return <span className="inline-block size-2 shrink-0 rounded-full" style={{ background: color }} />;
}

/**
 * Lets a long identifier wrap only at an underscore or a camelCase boundary, so it never snaps mid-word.
 * A name with no such boundary stays on one line.
 */
function breakable(text: string) {
  const parts = text.split(/(?<=_)|(?<=[a-z0-9])(?=[A-Z])/);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <wbr />}
    </Fragment>
  ));
}

function Name({ children, className }: { children: string; className?: string }) {
  return <span className={cn('font-mono text-[12.5px] leading-snug text-fd-foreground', className)}>{breakable(children)}</span>;
}

/** A controller an item calls, drawn as a small orange tag so the link from component to Apex reads at a glance. */
function Calls({ controllers }: { controllers: string[] }) {
  if (!controllers.length) return null;
  return (
    <div className="mt-1.5 flex flex-col gap-1">
      {controllers.map((c) => (
        <div key={c} className="flex items-start gap-1.5">
          <CornerDownRight aria-hidden className="mt-[5px] size-3 shrink-0 text-fd-muted-foreground" />
          <span className="rounded px-1.5 py-0.5 font-mono text-[11.5px] leading-snug text-fd-foreground" style={tint(LAYERS.apex.color, 12)}>
            {breakable(c)}
          </span>
        </div>
      ))}
    </div>
  );
}

const COLLAPSED_AT = 8;
const SHOWN_WHEN_COLLAPSED = 5;

/** Long lists (the portals have dozens of LWCs) show a few rows and expand on request. */
function Items<T>({ items, noun, render }: { items: T[]; noun: string; render: (item: T) => React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const collapsible = items.length > COLLAPSED_AT;
  const shown = collapsible && !open ? items.slice(0, SHOWN_WHEN_COLLAPSED) : items;
  return (
    <div>
      <ul className="m-0 flex list-none flex-col gap-3 p-0">{shown.map(render)}</ul>
      {collapsible && (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mt-3 rounded-md border border-fd-border px-2 py-1 text-xs text-fd-muted-foreground transition-colors hover:border-fd-ring hover:text-fd-foreground"
        >
          {open ? `Show fewer ${noun}` : `Show all ${items.length} ${noun}`}
        </button>
      )}
    </div>
  );
}

function LayerCard({ layer, count, children }: { layer: Layer; count: number; children: React.ReactNode }) {
  const { label, icon: Icon, color } = LAYERS[layer];
  return (
    <section className="min-w-0 flex-1 rounded-lg border border-fd-border border-t-2 bg-fd-background/70 p-3.5" style={{ borderTopColor: color }}>
      <header className="mb-3 flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-md" style={{ ...tint(color, 14), color }}>
          <Icon className="size-3.5" strokeWidth={2.25} />
        </span>
        <h4 className="m-0 text-[13px] font-semibold">{label}</h4>
        <span className="ml-auto text-xs tabular-nums text-fd-muted-foreground">{count}</span>
      </header>
      {children}
    </section>
  );
}

function componentList(items: SiteComponent[], noun: string) {
  return (
    <Items
      items={items}
      noun={noun}
      render={(c) => (
        <li key={c.name}>
          <Name>{c.name}</Name>
          <Calls controllers={c.controllers} />
        </li>
      )}
    />
  );
}

function ApexList({ site }: { site: SiteInfo }) {
  const restPath = new Map(site.rest.map((r) => [r.cls, r.path]));
  const notGranted = new Set(site.notGranted);
  return (
    <Items
      items={site.apex}
      noun="classes"
      render={(cls) => (
        <li key={cls}>
          <Name>{cls}</Name>
          {notGranted.has(cls) && (
            <span title="Called by this site's components but not enabled on its guest profile" className="ml-1 cursor-help text-amber-600 dark:text-amber-400">
              †
            </span>
          )}
          {restPath.has(cls) && <div className="mt-0.5 font-mono text-[11.5px] text-fd-muted-foreground">{breakable(restPath.get(cls)!)}</div>}
        </li>
      )}
    />
  );
}

/** Visualforce -> Aura -> LWC -> Apex, left to right. A layer the site doesn't have is left out. */
function Chain({ site }: { site: SiteInfo }) {
  const layers: { layer: Layer; count: number; body: React.ReactNode }[] = [];
  if (site.vfPages.length) layers.push({ layer: 'vf', count: site.vfPages.length, body: componentList(site.vfPages, 'pages') });
  if (site.aura.length) layers.push({ layer: 'aura', count: site.aura.length, body: componentList(site.aura, 'Aura components') });
  if (site.lwc.length) layers.push({ layer: 'lwc', count: site.lwc.length, body: componentList(site.lwc, 'LWCs') });
  layers.push({ layer: 'apex', count: site.apex.length, body: <ApexList site={site} /> });

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-2">
      {layers.map((l, i) => (
        <Fragment key={l.layer}>
          {i > 0 && <ChevronRight aria-hidden className="mt-9 hidden size-4 shrink-0 text-fd-muted-foreground lg:block" />}
          <LayerCard layer={l.layer} count={l.count}>
            {l.body}
          </LayerCard>
        </Fragment>
      ))}
    </div>
  );
}

/** REST sites have no UI: an endpoint list says it all. */
function Endpoints({ site }: { site: SiteInfo }) {
  const restClasses = new Set(site.rest.map((r) => r.cls));
  const others = site.apex.filter((c) => !restClasses.has(c));
  const { color } = LAYERS.apex;
  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-lg border border-fd-border border-t-2 bg-fd-background/70 p-3.5" style={{ borderTopColor: color }}>
        <header className="mb-3 flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-md" style={{ ...tint(color, 14), color }}>
            <Webhook className="size-3.5" strokeWidth={2.25} />
          </span>
          <h4 className="m-0 text-[13px] font-semibold">REST endpoints</h4>
          <span className="ml-auto text-xs tabular-nums text-fd-muted-foreground">{site.rest.length}</span>
        </header>
        <ul className="m-0 flex list-none flex-col p-0">
          {site.rest.map((r) => (
            <li key={r.cls} className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-fd-border py-2 first:border-t-0 first:pt-0 last:pb-0">
              <span className="rounded bg-fd-muted px-1.5 py-0.5 font-mono text-[12px]">{r.path}</span>
              <ChevronRight aria-hidden className="size-3.5 text-fd-muted-foreground" />
              <Name>{r.cls}</Name>
            </li>
          ))}
        </ul>
      </section>
      {(others.length > 0 || site.vfPages.length > 0) && (
        <div className="flex flex-col gap-3 lg:flex-row">
          {site.vfPages.length > 0 && (
            <LayerCard layer="vf" count={site.vfPages.length}>
              {componentList(site.vfPages, 'pages')}
            </LayerCard>
          )}
          {others.length > 0 && (
            <LayerCard layer="apex" count={others.length}>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {others.map((c) => (
                  <li key={c}>
                    <Name>{c}</Name>
                  </li>
                ))}
              </ul>
            </LayerCard>
          )}
        </div>
      )}
    </div>
  );
}

function SiteRow({ site, open, forced, onToggle }: { site: SiteInfo; open: boolean; forced: boolean; onToggle: () => void }) {
  const kind = KIND.get(site.kind)!;
  const isOpen = open || forced;
  const counts: [Layer, number][] = [
    ['vf', site.vfPages.length],
    ['aura', site.aura.length],
    ['lwc', site.lwc.length],
    ['apex', site.apex.length],
  ];
  const panelId = `site-${site.name.replace(/\W+/g, '-')}`;

  return (
    <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card/40">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3.5 text-left transition-colors hover:bg-fd-muted/40"
      >
        <ChevronRight aria-hidden className={cn('size-4 shrink-0 text-fd-muted-foreground transition-transform', isOpen && 'rotate-90')} />
        <span className="min-w-[180px] flex-1 text-[15px] font-semibold">{site.name}</span>
        <span className="inline-flex items-center gap-1.5 text-xs text-fd-muted-foreground">
          <Dot color={kind.color} />
          {site.kind}
        </span>
        <span className="flex flex-wrap items-center gap-1.5">
          {counts
            .filter(([, n]) => n > 0)
            .map(([layer, n]) => (
              <span
                key={layer}
                title={`${n} ${LAYERS[layer].label}`}
                className="rounded-full px-2 py-0.5 text-[11.5px] font-medium tabular-nums"
                style={{ ...tint(LAYERS[layer].color, 13), color: LAYERS[layer].color }}
              >
                {n} {LAYERS[layer].short}
              </span>
            ))}
        </span>
      </button>
      {isOpen && (
        <div id={panelId} className="border-t border-fd-border px-4 pb-4 pt-4">
          {site.kind === 'REST API' ? <Endpoints site={site} /> : <Chain site={site} />}
        </div>
      )}
    </div>
  );
}

export function SitesDirectory({ sites }: { sites: SiteInfo[] }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<SiteKind | 'all'>('all');
  const [open, setOpen] = useState<Set<string>>(() => new Set(sites.slice(0, 1).map((s) => s.name)));

  const counts = useMemo(() => {
    const map = new Map<SiteKind, number>();
    for (const s of sites) map.set(s.kind, (map.get(s.kind) ?? 0) + 1);
    return map;
  }, [sites]);

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      sites
        .filter((s) => active === 'all' || s.kind === active)
        .filter(
          (s) =>
            !q ||
            [s.name, ...[...s.vfPages, ...s.aura, ...s.lwc].map((c) => c.name), ...s.apex, ...s.rest.map((r) => r.path)].some((v) =>
              v.toLowerCase().includes(q),
            ),
        ),
    [sites, q, active],
  );

  const hasFlag = visible.some((s) => s.notGranted.length > 0);
  const allOpen = visible.length > 0 && visible.every((s) => open.has(s.name));

  function toggle(name: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  const chips = [
    { value: 'all' as const, label: 'All', color: undefined, hint: undefined, n: sites.length },
    ...SITE_KINDS.filter((k) => counts.has(k.value)).map((k) => ({ value: k.value, label: k.value, color: k.color, hint: k.hint, n: counts.get(k.value)! })),
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
            placeholder="Search sites, pages, components or classes"
            aria-label="Search sites"
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
          Showing {visible.length} of {sites.length}
        </span>
        <button
          type="button"
          onClick={() => setOpen(allOpen ? new Set() : new Set(visible.map((s) => s.name)))}
          className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-lg border border-fd-border bg-fd-card px-3 text-[13px] text-fd-muted-foreground transition-colors hover:border-fd-ring hover:text-fd-foreground"
        >
          {allOpen ? <ChevronsDownUp className="size-3.5" /> : <ChevronsUpDown className="size-3.5" />}
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      <div role="group" aria-label="Filter by site type" className="flex flex-wrap gap-2">
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

      <div className="flex flex-col gap-2.5">
        {visible.map((site) => (
          <SiteRow key={site.name} site={site} open={open.has(site.name)} forced={q.length > 0} onToggle={() => toggle(site.name)} />
        ))}
        {visible.length === 0 && (
          <div className="rounded-xl border border-fd-border px-4 py-10 text-center text-sm text-fd-muted-foreground">No sites match your search.</div>
        )}
      </div>

      {hasFlag && (
        <p className="m-0 text-xs text-fd-muted-foreground">
          <span className="text-amber-600 dark:text-amber-400">†</span> Called by the site&apos;s components but not enabled on its guest profile. On the portals
          these are usually the logged-in user&apos;s access.
        </p>
      )}
    </div>
  );
}
