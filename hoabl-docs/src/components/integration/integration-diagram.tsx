'use client';

import '@xyflow/react/dist/style.css';
import {
  Background,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  ReactFlowProvider,
  type Edge,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import { icons, Cloud, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';
import {
  hoablIntegrations,
  CATEGORY_META,
  type Integration,
  type IntegrationCategory,
} from '@/data/integrations/hoabl-integrations';

const HUB_WIDTH = 200;
const HUB_HEIGHT = 100;
const SPOKE_WIDTH = 250;
const SPOKE_HEIGHT = 84;
const ROW_GAP = 28;
const COL_GAP = 200;

type HubData = { label: string; count: number };
type SpokeData = { integration: Integration; active: boolean; selected: boolean };

function HubNode({ data }: NodeProps & { data: HubData }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border-2 border-fd-primary bg-fd-primary/10 px-4 text-center shadow-sm"
      style={{ width: HUB_WIDTH, height: HUB_HEIGHT }}
    >
      <Handle type="source" position={Position.Right} id="out" style={{ visibility: 'hidden' }} />
      <Handle type="target" position={Position.Right} id="in" style={{ visibility: 'hidden' }} />
      <Cloud className="size-6 text-fd-primary" />
      <div className="text-sm font-semibold text-fd-foreground">Salesforce</div>
      <div className="text-[11px] text-fd-muted-foreground">{data.count} shown</div>
    </div>
  );
}

function SpokeNode({ data }: NodeProps & { data: SpokeData }) {
  const { integration: i, active, selected } = data;
  const Icon = icons[i.icon as keyof typeof icons] ?? Cloud;
  const color = CATEGORY_META[i.category].color;
  return (
    <div
      className={cn(
        'flex h-full w-full cursor-pointer flex-col justify-center gap-1 rounded-xl border bg-fd-card px-3 py-2 shadow-sm transition-all',
        i.confidence === 'config-only' && 'border-dashed',
        selected ? 'ring-2 ring-fd-primary' : active ? 'border-fd-primary' : 'border-fd-border',
      )}
      style={{ width: SPOKE_WIDTH, height: SPOKE_HEIGHT }}
    >
      <Handle type="target" position={Position.Left} id="in" style={{ visibility: 'hidden' }} />
      <Handle type="source" position={Position.Left} id="out" style={{ visibility: 'hidden' }} />
      <div className="flex items-center gap-2">
        <span
          className="flex size-7 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}22`, color }}
        >
          <Icon className="size-4" />
        </span>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-fd-foreground">{i.name}</div>
          <div className="truncate text-[11px] text-fd-muted-foreground">{i.kind}</div>
        </div>
        {i.confidence === 'config-only' && (
          <span className="ml-auto shrink-0 rounded-full border border-fd-border px-1.5 py-0.5 text-[9px] font-medium text-fd-muted-foreground">
            unconfirmed
          </span>
        )}
      </div>
      <p className="m-0 line-clamp-1 text-[11px] leading-snug text-fd-muted-foreground">{i.summary}</p>
    </div>
  );
}

const nodeTypes = { hub: HubNode, spoke: SpokeNode };

function buildGraph(integrations: Integration[], hoverSlug: string | null, selectedSlug: string | null) {
  const byCategory = new Map<IntegrationCategory, Integration[]>();
  for (const i of integrations) {
    if (!byCategory.has(i.category)) byCategory.set(i.category, []);
    byCategory.get(i.category)!.push(i);
  }
  const categories = [...byCategory.keys()];

  let totalRows = 0;
  for (const cat of categories) totalRows += byCategory.get(cat)!.length;
  const totalHeight = totalRows * SPOKE_HEIGHT + (totalRows - 1) * ROW_GAP + (categories.length - 1) * ROW_GAP;

  const hub: Node = {
    id: 'hub',
    type: 'hub',
    position: { x: 0, y: Math.max(0, totalHeight / 2 - HUB_HEIGHT / 2) },
    data: { label: 'Salesforce', count: integrations.length },
    draggable: false,
    selectable: false,
  };

  const spokes: Node[] = [];
  const edges: Edge[] = [];
  let y = 0;
  for (const cat of categories) {
    for (const integration of byCategory.get(cat)!) {
      const active = hoverSlug === integration.slug;
      const selected = selectedSlug === integration.slug;
      spokes.push({
        id: integration.slug,
        type: 'spoke',
        position: { x: HUB_WIDTH + COL_GAP, y },
        data: { integration, active, selected },
        draggable: false,
      });
      const color = CATEGORY_META[integration.category].color;
      const stroke = active || selected ? color : 'var(--color-fd-muted-foreground)';
      const dashed = integration.confidence === 'config-only';
      edges.push({
        id: `${integration.slug}-edge`,
        source: 'hub',
        sourceHandle: 'out',
        target: integration.slug,
        targetHandle: 'in',
        style: { stroke, strokeWidth: active || selected ? 2 : 1, strokeDasharray: dashed ? '4 3' : undefined },
        markerEnd: { type: MarkerType.ArrowClosed, color: stroke, width: 14, height: 14 },
      });
      y += SPOKE_HEIGHT + ROW_GAP;
    }
    y += ROW_GAP;
  }

  return { nodes: [hub, ...spokes], edges };
}

const ALL_CATEGORIES = Object.keys(CATEGORY_META) as IntegrationCategory[];

export function IntegrationDiagram({ height = 560 }: { height?: number }) {
  const [hoverSlug, setHoverSlug] = useState<string | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<IntegrationCategory>>(new Set(ALL_CATEGORIES));
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return hoablIntegrations.filter((i) => {
      if (!activeCategories.has(i.category)) return false;
      if (!q) return true;
      return (
        i.name.toLowerCase().includes(q) ||
        i.kind.toLowerCase().includes(q) ||
        i.summary.toLowerCase().includes(q) ||
        i.classes.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [query, activeCategories]);

  const { nodes, edges } = useMemo(
    () => buildGraph(filtered, hoverSlug, selectedSlug),
    [filtered, hoverSlug, selectedSlug],
  );

  const selected = hoablIntegrations.find((i) => i.slug === selectedSlug) ?? null;

  function toggleCategory(cat: IntegrationCategory) {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  return (
    <div className="not-prose overflow-hidden rounded-xl border border-fd-border bg-fd-background">
      {/* Category filter chips */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-fd-border px-3 py-2">
        {ALL_CATEGORIES.map((cat) => {
          const meta = CATEGORY_META[cat];
          const on = activeCategories.has(cat);
          const count = hoablIntegrations.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => toggleCategory(cat)}
              className={cn(
                'flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-opacity',
                on ? 'border-transparent text-white' : 'border-fd-border text-fd-muted-foreground opacity-60',
              )}
              style={on ? { backgroundColor: meta.color } : undefined}
            >
              {meta.label} <span className="opacity-80">{count}</span>
            </button>
          );
        })}
        <div className="relative ml-auto">
          <Search className="pointer-events-none absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-fd-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations or classes..."
            className="h-7 w-56 rounded-md border border-fd-border bg-fd-card pl-7 pr-2 text-xs outline-none focus:ring-2 focus:ring-fd-ring"
          />
        </div>
      </div>

      <ReactFlowProvider>
        <div style={{ height }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.15 }}
            nodesConnectable={false}
            elementsSelectable={false}
            panOnScroll
            zoomOnScroll={false}
            proOptions={{ hideAttribution: true }}
            onNodeMouseEnter={(_, node) => node.id !== 'hub' && setHoverSlug(node.id)}
            onNodeMouseLeave={() => setHoverSlug(null)}
            onNodeClick={(_, node) => node.id !== 'hub' && setSelectedSlug((s) => (s === node.id ? null : node.id))}
          >
            <Background gap={20} size={1} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-fd-border px-3 py-2 text-[11px] text-fd-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4 bg-fd-muted-foreground" /> Confirmed (live config + matching Apex)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4 border-t-2 border-dashed border-fd-muted-foreground" /> Config-only (live in the org, no Apex class matched)
        </span>
        <span className="ml-auto">Click an integration for full detail &middot; {filtered.length} of {hoablIntegrations.length} shown</span>
      </div>

      {selected && (
        <div className="space-y-2 border-t border-fd-border px-4 py-3 text-xs">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-sm font-semibold text-fd-foreground">
                {selected.name} <span className="font-normal text-fd-muted-foreground">&mdash; {selected.kind}</span>
              </div>
              <p className="m-0 mt-0.5 text-fd-muted-foreground">{selected.summary}</p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSlug(null)}
              className="shrink-0 rounded-md p-1 text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground"
            >
              <X className="size-3.5" />
            </button>
          </div>

          {selected.note && (
            <p className="m-0 rounded-md border border-fd-border bg-fd-accent/40 px-2.5 py-1.5 text-fd-muted-foreground">
              {selected.note}
            </p>
          )}

          <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            <div>
              <div className="font-medium text-fd-foreground">Endpoints</div>
              <ul className="m-0 list-disc pl-4 text-fd-muted-foreground">
                {selected.endpoints.map((e) => (
                  <li key={e}>
                    <code className="font-mono text-[11px]">{e}</code>
                  </li>
                ))}
              </ul>
            </div>
            {selected.objects.length > 0 && (
              <div>
                <div className="font-medium text-fd-foreground">Objects</div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {selected.objects.map((o) => (
                    <code key={o} className="rounded border border-fd-border px-1.5 py-0.5 text-[10px]">
                      {o}
                    </code>
                  ))}
                </div>
              </div>
            )}
            {(selected.outbound || selected.inbound) && (
              <div className="sm:col-span-2">
                <div className="font-medium text-fd-foreground">Data flow</div>
                <div className="flex flex-col gap-1 pt-1 text-fd-muted-foreground">
                  {selected.outbound && (
                    <div>
                      <span className="font-medium text-fd-foreground">&rarr; {selected.outbound.label}:</span> {selected.outbound.detail}
                    </div>
                  )}
                  {selected.inbound && (
                    <div>
                      <span className="font-medium text-fd-foreground">&larr; {selected.inbound.label}:</span> {selected.inbound.detail}
                    </div>
                  )}
                </div>
              </div>
            )}
            {selected.config.length > 0 && (
              <div className="sm:col-span-2">
                <div className="font-medium text-fd-foreground">Configuration</div>
                <ul className="m-0 list-disc pl-4 text-fd-muted-foreground">
                  {selected.config.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
            {selected.classes.length > 0 && (
              <div className="sm:col-span-2">
                <div className="font-medium text-fd-foreground">Apex classes</div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {selected.classes.map((c) => (
                    <code key={c} className="rounded border border-fd-border px-1.5 py-0.5 font-mono text-[10px]">
                      {c}
                    </code>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
