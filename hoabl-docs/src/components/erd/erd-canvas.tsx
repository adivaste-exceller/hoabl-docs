'use client';

import '@xyflow/react/dist/style.css';
import {
  Background,
  ConnectionMode,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Panel,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  type Edge,
  type Node,
  type NodeChange,
  type NodeProps,
} from '@xyflow/react';
import ELK from 'elkjs/lib/elk.bundled.js';
import { Maximize2, Minimize2, RotateCcw, Search, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/cn';
import { getRelations } from '@/lib/erd/relations';
import type { Column, Entity, ModuleSchema, Relation } from '@/lib/erd/types';

type ColumnMode = 'all' | 'keys' | 'none';

const NODE_WIDTH = 270;
const HEADER_HEIGHT = 38;
const ROW_HEIGHT = 26;
const NODE_PADDING = 6;

const MODES: { value: ColumnMode; label: string }[] = [
  { value: 'all', label: 'All columns' },
  { value: 'keys', label: 'Keys' },
  { value: 'none', label: 'Tables' },
];

function visibleColumns(entity: Entity, mode: ColumnMode): Column[] {
  if (mode === 'none') return [];
  if (mode === 'keys') return entity.columns.filter((c) => c.pk || c.fk);
  return entity.columns;
}

function nodeHeight(entity: Entity, mode: ColumnMode) {
  const rows = visibleColumns(entity, mode).length;
  return HEADER_HEIGHT + (rows > 0 ? rows * ROW_HEIGHT + NODE_PADDING * 2 : 0);
}

const elk = new ELK();

async function computeLayout(entities: Entity[], relations: Relation[], mode: ColumnMode) {
  const graph = await elk.layout({
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
      'elk.spacing.nodeNode': '48',
      'elk.layered.spacing.nodeNodeBetweenLayers': '130',
      'elk.layered.nodePlacement.strategy': 'NETWORK_SIMPLEX',
      'elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP',
      'elk.separateConnectedComponents': 'true',
    },
    children: entities.map((e) => ({ id: e.name, width: NODE_WIDTH, height: nodeHeight(e, mode) })),
    edges: relations.map((r) => ({ id: r.id, sources: [r.source], targets: [r.target] })),
  });

  const positions = new Map<string, { x: number; y: number }>();
  for (const child of graph.children ?? []) positions.set(child.id, { x: child.x ?? 0, y: child.y ?? 0 });
  return positions;
}

function useColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setMode(root.classList.contains('dark') ? 'dark' : 'light');
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return mode;
}

interface TableNodeData extends Record<string, unknown> {
  entity: Entity;
  color: string;
  groupLabel: string;
  mode: ColumnMode;
  dimmed: boolean;
  selected: boolean;
  /** Column names that take part in a relation of the focused table. */
  activeColumns: string[];
}

type TableNode = Node<TableNodeData, 'table'>;

/** Hover tooltip rendered in a portal so it keeps its size at any zoom level and is never clipped. */
function useHoverTip(content: ReactNode) {
  const [rect, setRect] = useState<DOMRect | null>(null);

  const bind = {
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => setRect(event.currentTarget.getBoundingClientRect()),
    onMouseLeave: () => setRect(null),
    onMouseDown: () => setRect(null),
  };

  const TIP_WIDTH = 288;
  const tip =
    rect &&
    createPortal(
      <div
        role="tooltip"
        className="pointer-events-none fixed z-[70] rounded-lg border border-fd-border bg-fd-popover p-3 text-xs text-fd-popover-foreground shadow-lg"
        style={{
          width: TIP_WIDTH,
          top: Math.max(8, Math.min(rect.top, window.innerHeight - 180)),
          left: rect.right + 10 + TIP_WIDTH > window.innerWidth ? rect.left - TIP_WIDTH - 10 : rect.right + 10,
        }}
      >
        {content}
      </div>,
      document.body,
    );

  return { bind, tip };
}

function ColumnTip({ column }: { column: Column }) {
  const flags = [column.pk && 'Primary key', column.unique && 'Unique', column.nullable && 'Nullable'].filter(Boolean);
  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <div className="text-[13px] font-semibold">{column.label ?? column.name}</div>
        <code className="font-mono text-[11px] text-fd-muted-foreground">{column.name}</code>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-fd-muted-foreground">
        <span className="rounded border border-fd-border px-1.5 py-px font-mono text-[10px]">{column.type}</span>
        {flags.map((flag) => (
          <span key={String(flag)}>{flag}</span>
        ))}
      </div>
      {column.fk && (
        <div className="text-fd-muted-foreground">
          References <code className="font-mono text-fd-foreground">{column.fk.table}</code>
        </div>
      )}
      {column.description && <p className="m-0 leading-relaxed text-fd-muted-foreground">{column.description}</p>}
    </div>
  );
}

function EntityTip({ entity, groupLabel }: { entity: Entity; groupLabel: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <div className="text-[13px] font-semibold">{entity.label ?? entity.name}</div>
        <code className="font-mono text-[11px] text-fd-muted-foreground">{entity.name}</code>
      </div>
      <div className="text-fd-muted-foreground">
        {groupLabel} · {entity.columns.length} fields
      </div>
      {entity.description && <p className="m-0 leading-relaxed text-fd-muted-foreground">{entity.description}</p>}
    </div>
  );
}

function ColumnRow({ column, color, active }: { column: Column; color: string; active: boolean }) {
  const { bind, tip } = useHoverTip(<ColumnTip column={column} />);
  return (
    <li
      {...bind}
      className={cn('relative flex items-center gap-2 rounded px-1.5 text-xs hover:bg-fd-accent', active && 'bg-fd-accent')}
      style={{ height: ROW_HEIGHT }}
    >
      <span className="w-6 shrink-0 text-[9px] font-bold tracking-wide">
        {column.pk && <span style={{ color }}>PK</span>}
        {column.fk && !column.pk && <span className="text-fd-muted-foreground">FK</span>}
      </span>
      <span className={cn('truncate font-mono', column.pk && 'font-semibold')}>{column.name}</span>
      {column.nullable && <span className="text-fd-muted-foreground">?</span>}
      <span className="ml-auto shrink-0 truncate pl-2 font-mono text-[11px] text-fd-muted-foreground">
        {column.type}
      </span>
      <Handle
        id={`${column.name}-l`}
        type="source"
        position={Position.Left}
        isConnectable={false}
        className="!size-1.5 !min-h-0 !min-w-0 !border-0 !bg-transparent"
      />
      <Handle
        id={`${column.name}-r`}
        type="source"
        position={Position.Right}
        isConnectable={false}
        className="!size-1.5 !min-h-0 !min-w-0 !border-0 !bg-transparent"
      />
      {tip}
    </li>
  );
}

function TableNodeView({ data }: NodeProps<TableNode>) {
  const { entity, color, groupLabel, mode, dimmed, selected, activeColumns } = data;
  const columns = visibleColumns(entity, mode);
  const header = useHoverTip(<EntityTip entity={entity} groupLabel={groupLabel} />);

  return (
    <div
      className={cn(
        'cursor-grab rounded-lg border bg-fd-card text-fd-card-foreground shadow-sm transition-opacity active:cursor-grabbing',
        dimmed && 'opacity-25',
        selected ? 'ring-2 ring-offset-1 ring-offset-fd-background' : 'border-fd-border',
      )}
      style={{ width: NODE_WIDTH, ...(selected ? { borderColor: color, ['--tw-ring-color' as string]: color } : {}) }}
    >
      <div
        {...header.bind}
        className="flex items-center justify-between gap-2 rounded-t-[7px] px-3 text-white"
        style={{ height: HEADER_HEIGHT, background: color }}
      >
        {header.tip}
        <span className={cn('truncate text-[13px] font-semibold', !entity.label && 'font-mono')}>
          {entity.label ?? entity.name}
        </span>
        <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide opacity-80">{groupLabel}</span>
      </div>

      {columns.length > 0 && (
        <ul style={{ padding: NODE_PADDING }}>
          {columns.map((column) => (
            <ColumnRow key={column.name} column={column} color={color} active={activeColumns.includes(column.name)} />
          ))}
        </ul>
      )}

      {/* Tables-only mode has no rows, so edges attach to the header instead. */}
      {columns.length === 0 &&
        entity.columns.map((column) => (
          <span key={column.name}>
            <Handle
              id={`${column.name}-l`}
              type="source"
              position={Position.Left}
              isConnectable={false}
              style={{ top: HEADER_HEIGHT / 2 }}
              className="!size-1.5 !min-h-0 !min-w-0 !border-0 !bg-transparent"
            />
            <Handle
              id={`${column.name}-r`}
              type="source"
              position={Position.Right}
              isConnectable={false}
              style={{ top: HEADER_HEIGHT / 2 }}
              className="!size-1.5 !min-h-0 !min-w-0 !border-0 !bg-transparent"
            />
          </span>
        ))}
    </div>
  );
}

const nodeTypes = { table: TableNodeView };

function Canvas({ schema, height }: { schema: ModuleSchema; height: number }) {
  const colorMode = useColorMode();
  const flow = useReactFlow();
  const [mode, setMode] = useState<ColumnMode>('all');
  const [hiddenGroups, setHiddenGroups] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [fullscreen, setFullscreen] = useState(false);
  const [layoutRun, setLayoutRun] = useState(0);
  const [positions, setPositions] = useState<Map<string, { x: number; y: number }>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  const entities = useMemo(
    () => schema.entities.filter((e) => !hiddenGroups.includes(e.group)),
    [schema.entities, hiddenGroups],
  );
  const relations = useMemo(() => getRelations(entities), [entities]);

  // Re-run the layout only when the set of tables or their height changes, not on selection.
  useEffect(() => {
    let cancelled = false;
    computeLayout(entities, relations, mode).then((next) => {
      if (cancelled) return;
      setPositions(next);
      requestAnimationFrame(() => flow.fitView({ duration: 400, padding: 0.12 }));
    });
    return () => {
      cancelled = true;
    };
  }, [entities, relations, mode, flow, layoutRun]);

  // Keep dragged positions in state, otherwise the derived nodes snap back on the next render.
  const onNodesChange = useCallback((changes: NodeChange<TableNode>[]) => {
    setPositions((prev) => {
      let next: Map<string, { x: number; y: number }> | null = null;
      for (const change of changes) {
        if (change.type !== 'position' || !change.position) continue;
        next ??= new Map(prev);
        next.set(change.id, change.position);
      }
      return next ?? prev;
    });
  }, []);

  const neighbours = useMemo(() => {
    if (!selected) return null;
    const set = new Set([selected]);
    for (const r of relations) {
      if (r.source === selected) set.add(r.target);
      if (r.target === selected) set.add(r.source);
    }
    return set;
  }, [selected, relations]);

  const nodes = useMemo<TableNode[]>(
    () =>
      entities
        .filter((e) => positions.has(e.name))
        .map((entity) => {
          const group = schema.groups[entity.group];
          const activeColumns = selected
            ? relations.flatMap((r) => {
                if (r.source === selected && r.source === entity.name) return [r.sourceColumn];
                if (r.target === selected && r.target === entity.name) return [r.targetColumn];
                if (r.source === selected && r.target === entity.name) return [r.targetColumn];
                if (r.target === selected && r.source === entity.name) return [r.sourceColumn];
                return [];
              })
            : [];
          return {
            id: entity.name,
            type: 'table' as const,
            position: positions.get(entity.name)!,
            data: {
              entity,
              color: group?.color ?? '#64748b',
              groupLabel: group?.label ?? entity.group,
              mode,
              dimmed: neighbours ? !neighbours.has(entity.name) : false,
              selected: selected === entity.name,
              activeColumns,
            },
          };
        }),
    [entities, positions, schema.groups, mode, selected, neighbours, relations],
  );

  const edges = useMemo<Edge[]>(
    () =>
      relations
        .filter((r) => positions.has(r.source) && positions.has(r.target))
        .map((r) => {
          const from = positions.get(r.source)!;
          const to = positions.get(r.target)!;
          const sourceRight = from.x <= to.x;
          const active = selected ? r.source === selected || r.target === selected : false;
          const dimmed = selected ? !active : false;
          const stroke = active ? 'var(--color-fd-primary)' : 'var(--color-fd-muted-foreground)';
          return {
            id: r.id,
            source: r.source,
            target: r.target,
            sourceHandle: `${r.sourceColumn}-${sourceRight ? 'r' : 'l'}`,
            targetHandle: `${r.targetColumn}-${sourceRight ? 'l' : 'r'}`,
            type: 'smoothstep',
            animated: active,
            label: active ? r.cardinality : undefined,
            labelStyle: { fontFamily: 'var(--font-geist-mono)', fontSize: 10, fill: 'var(--color-fd-foreground)' },
            labelBgStyle: { fill: 'var(--color-fd-card)' },
            style: { stroke, strokeWidth: active ? 2 : 1.25, opacity: dimmed ? 0.12 : active ? 1 : 0.7 },
            markerEnd: { type: MarkerType.ArrowClosed, color: stroke, width: 14, height: 14 },
          };
        }),
    [relations, positions, selected],
  );

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return schema.entities
      .filter((e) => e.name.toLowerCase().includes(q) || e.label?.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query, schema.entities]);

  const focusTable = useCallback(
    (name: string) => {
      setQuery('');
      if (!positions.has(name)) return;
      setSelected(name);
      flow.fitView({ nodes: [{ id: name }], duration: 500, maxZoom: 1.1, padding: 0.8 });
    },
    [flow, positions],
  );

  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setFullscreen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [fullscreen]);

  useEffect(() => {
    const id = setTimeout(() => flow.fitView({ duration: 300, padding: 0.12 }), 50);
    return () => clearTimeout(id);
  }, [fullscreen, flow]);

  const selectedEntity = selected ? schema.entities.find((e) => e.name === selected) : null;

  return (
    <div
      ref={containerRef}
      className={cn(
        'not-prose overflow-hidden rounded-xl border border-fd-border bg-fd-background',
        fullscreen && 'fixed inset-0 z-50 rounded-none border-0',
      )}
      style={fullscreen ? undefined : { height }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        colorMode={colorMode}
        connectionMode={ConnectionMode.Loose}
        nodesConnectable={false}
        nodesDraggable
        onNodesChange={onNodesChange}
        elementsSelectable={false}
        onlyRenderVisibleElements
        minZoom={0.1}
        maxZoom={1.6}
        proOptions={{ hideAttribution: true }}
        onNodeClick={(_, node) => setSelected((prev) => (prev === node.id ? null : node.id))}
        onPaneClick={() => setSelected(null)}
      >
        <Background gap={20} size={1} />
        <Controls showInteractive={false} position="bottom-right" />
        <MiniMap
          pannable
          zoomable
          position="bottom-left"
          nodeColor={(n) => (n.data as TableNodeData).color}
          maskColor={colorMode === 'dark' ? 'rgb(0 0 0 / 0.55)' : 'rgb(240 240 240 / 0.6)'}
          style={{ background: 'var(--color-fd-card)' }}
        />

        <Panel position="top-left" className="!m-3 flex max-w-[calc(100%-1.5rem)] flex-col gap-2">
          <div className="relative w-64">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-fd-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && matches[0] && focusTable(matches[0].name)}
              placeholder="Find a table…"
              className="h-8 w-full rounded-md border border-fd-border bg-fd-card pl-8 pr-2 font-sans text-xs outline-none focus:ring-2 focus:ring-fd-ring"
            />
            {matches.length > 0 && (
              <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-md border border-fd-border bg-fd-popover shadow-md">
                {matches.map((e) => (
                  <li key={e.name}>
                    <button
                      type="button"
                      onClick={() => focusTable(e.name)}
                      className="flex w-full items-center gap-2 px-2.5 py-1.5 text-left font-sans text-xs hover:bg-fd-accent"
                    >
                      <span
                        className="size-2 rounded-full"
                        style={{ background: schema.groups[e.group]?.color }}
                      />
                      {e.label ?? e.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {Object.entries(schema.groups).map(([key, group]) => {
              const hidden = hiddenGroups.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() =>
                    setHiddenGroups((prev) => (hidden ? prev.filter((g) => g !== key) : [...prev, key]))
                  }
                  className={cn(
                    'flex h-7 items-center gap-1.5 rounded-full border border-fd-border bg-fd-card px-2.5 text-xs transition-opacity',
                    hidden && 'opacity-45',
                  )}
                  aria-pressed={!hidden}
                  title={hidden ? 'Show group' : 'Hide group'}
                >
                  <span className="size-2 rounded-full" style={{ background: group.color }} />
                  {group.label}
                </button>
              );
            })}
          </div>
        </Panel>

        <Panel position="top-right" className="!m-3 flex items-center gap-2">
          <div className="flex rounded-md border border-fd-border bg-fd-card p-0.5">
            {MODES.map((m) => (
              <button
                key={m.value}
                type="button"
                onClick={() => setMode(m.value)}
                className={cn(
                  'h-7 rounded px-2.5 text-xs',
                  mode === m.value ? 'bg-fd-primary text-fd-primary-foreground' : 'text-fd-muted-foreground hover:text-fd-foreground',
                )}
              >
                {m.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setLayoutRun((n) => n + 1)}
            className="flex size-8 items-center justify-center rounded-md border border-fd-border bg-fd-card hover:bg-fd-accent"
            aria-label="Reset layout"
            title="Reset layout"
          >
            <RotateCcw className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setFullscreen((v) => !v)}
            className="flex size-8 items-center justify-center rounded-md border border-fd-border bg-fd-card hover:bg-fd-accent"
            aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            title={fullscreen ? 'Exit fullscreen (Esc)' : 'Fullscreen'}
          >
            {fullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
          </button>
        </Panel>

        {selectedEntity && (
          <Panel position="top-center" className="!mt-3">
            <div className="flex items-center gap-3 rounded-full border border-fd-border bg-fd-card py-1 pl-4 pr-1.5 text-xs shadow-sm">
              <span className={cn('font-semibold', !selectedEntity.label && 'font-mono')}>
                {selectedEntity.label ?? selectedEntity.name}
              </span>
              <span className="text-fd-muted-foreground">
                {relations.filter((r) => r.source === selected || r.target === selected).length} relations
              </span>
              <a
                href={`#${selectedEntity.name}`}
                onClick={() => setFullscreen(false)}
                className="rounded-full bg-fd-primary px-2.5 py-1 text-fd-primary-foreground"
              >
                View docs
              </a>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="flex size-6 items-center justify-center rounded-full hover:bg-fd-accent"
                aria-label="Clear focus"
              >
                <X className="size-3.5" />
              </button>
            </div>
          </Panel>
        )}
      </ReactFlow>
    </div>
  );
}

export function ErdCanvas(props: { schema: ModuleSchema; height?: number }) {
  return (
    <ReactFlowProvider>
      <Canvas schema={props.schema} height={props.height ?? 680} />
    </ReactFlowProvider>
  );
}
