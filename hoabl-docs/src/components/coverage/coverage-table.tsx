'use client';

import { ChevronDown, ChevronsUpDown, ChevronUp, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';
import {
  FAIR_THRESHOLD,
  GOOD_THRESHOLD,
  level,
  percent,
  type CoverageDataset,
  type CoverageLevel,
} from '@/lib/coverage';

type SortField = 'testClass' | 'coveredClass' | 'coverage';
type SortDir = 'asc' | 'desc';
type RowFilter = 'all' | CoverageLevel;

interface Row {
  testClass: string;
  coveredClass: string;
  pct: number;
  covered?: number;
  total?: number;
}

const LEVEL_STYLES: Record<CoverageLevel, { bar: string; text: string; dot: string }> = {
  good: { bar: 'bg-emerald-500', text: 'text-emerald-700 dark:text-emerald-400', dot: 'bg-emerald-500' },
  fair: { bar: 'bg-amber-500', text: 'text-amber-700 dark:text-amber-400', dot: 'bg-amber-500' },
  low: { bar: 'bg-red-500', text: 'text-red-700 dark:text-red-400', dot: 'bg-red-500' },
};

function CoverageBar({ row }: { row: Row }) {
  const styles = LEVEL_STYLES[level(row.pct)];
  return (
    <div className="flex min-w-[210px] items-center gap-3">
      <div
        className="h-1.5 flex-1 overflow-hidden rounded-full bg-fd-muted"
        role="progressbar"
        aria-valuenow={row.pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${row.coveredClass} coverage`}
      >
        <div className={cn('h-full rounded-full', styles.bar)} style={{ width: `${row.pct}%` }} />
      </div>
      <span className={cn('w-9 text-right text-xs font-semibold tabular-nums', styles.text)}>{row.pct}%</span>
      {row.total !== undefined && (
        <span className="w-[68px] text-right font-mono text-[11px] tabular-nums text-fd-muted-foreground">
          {row.covered}/{row.total}
        </span>
      )}
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border border-fd-border bg-fd-card px-3.5 py-2.5">
      <div className="text-[11px] font-medium uppercase tracking-wide text-fd-muted-foreground">{label}</div>
      <div className="mt-0.5 flex items-baseline gap-1.5">
        <span className="text-xl font-semibold tabular-nums">{value}</span>
        {hint && <span className="text-xs text-fd-muted-foreground">{hint}</span>}
      </div>
    </div>
  );
}

function Segmented<T extends string>({
  value,
  onChange,
  options,
  label,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex rounded-md border border-fd-border bg-fd-card p-0.5">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            'h-7 whitespace-nowrap rounded px-2.5 text-xs transition-colors',
            value === option.value
              ? 'bg-fd-primary text-fd-primary-foreground'
              : 'text-fd-muted-foreground hover:text-fd-foreground',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function SortHeader({
  field,
  label,
  sortField,
  sortDir,
  onSort,
}: {
  field: SortField;
  label: string;
  sortField: SortField;
  sortDir: SortDir;
  onSort: (field: SortField) => void;
}) {
  const active = sortField === field;
  const Icon = !active ? ChevronsUpDown : sortDir === 'asc' ? ChevronUp : ChevronDown;
  return (
    <th
      scope="col"
      aria-sort={active ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
      className="sticky top-0 z-10 border-b border-fd-border bg-fd-card p-0 text-left"
    >
      <button
        type="button"
        onClick={() => onSort(field)}
        className={cn(
          'flex w-full items-center gap-1.5 whitespace-nowrap px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide transition-colors',
          active ? 'text-fd-foreground' : 'text-fd-muted-foreground hover:text-fd-foreground',
        )}
      >
        {label}
        <Icon className="size-3" aria-hidden />
      </button>
    </th>
  );
}

const cellCode = 'rounded bg-fd-muted px-1.5 py-0.5 font-mono text-xs';

export function CoverageTable({ dataset }: { dataset: CoverageDataset }) {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState<SortField>('testClass');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [grouped, setGrouped] = useState(false);
  const [rowFilter, setRowFilter] = useState<RowFilter>('all');

  const allRows = useMemo<Row[]>(
    () =>
      dataset.items.flatMap((item) =>
        item.coveredClasses.map((cls) => ({
          testClass: item.testClass,
          coveredClass: cls.name,
          pct: percent(cls),
          covered: cls.covered,
          total: cls.total,
        })),
      ),
    [dataset],
  );

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allRows.filter(
      (r) =>
        (rowFilter === 'all' || level(r.pct) === rowFilter) &&
        (!q || r.testClass.toLowerCase().includes(q) || r.coveredClass.toLowerCase().includes(q)),
    );
  }, [allRows, search, rowFilter]);

  const compare = useMemo(() => {
    const dir = sortDir === 'asc' ? 1 : -1;
    return (a: Row, b: Row) => {
      let result: number;
      if (sortField === 'coverage') result = a.pct - b.pct;
      else if (sortField === 'testClass') result = a.testClass.localeCompare(b.testClass) || a.coveredClass.localeCompare(b.coveredClass);
      else result = a.coveredClass.localeCompare(b.coveredClass);
      return result * dir;
    };
  }, [sortField, sortDir]);

  const flatRows = useMemo(() => [...visible].sort(compare), [visible, compare]);

  const groups = useMemo(() => {
    const map = new Map<string, Row[]>();
    for (const row of visible) map.set(row.testClass, [...(map.get(row.testClass) ?? []), row]);

    const dir = sortDir === 'asc' ? 1 : -1;
    const average = (rows: Row[]) => rows.reduce((sum, r) => sum + r.pct, 0) / rows.length;

    return [...map.entries()]
      .map(([testClass, rows]) => ({
        testClass,
        // Inside a group the test class is constant, so fall back to the class name.
        rows: [...rows].sort(sortField === 'testClass' ? (a, b) => a.coveredClass.localeCompare(b.coveredClass) * dir : compare),
        average: Math.round(average(rows)),
      }))
      .sort((a, b) => {
        if (sortField === 'coverage') return (a.average - b.average) * dir;
        if (sortField === 'coveredClass') return a.rows[0].coveredClass.localeCompare(b.rows[0].coveredClass) * dir;
        return a.testClass.localeCompare(b.testClass) * dir;
      });
  }, [visible, sortField, sortDir, compare]);

  function toggleSort(field: SortField) {
    if (field === sortField) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortField(field);
      setSortDir(field === 'coverage' ? 'desc' : 'asc');
    }
  }

  // Overall coverage is weighted by lines when we have them, otherwise a plain average.
  const hasLines = allRows.every((r) => r.total !== undefined);
  const overall = hasLines
    ? Math.round(
        (allRows.reduce((s, r) => s + (r.covered ?? 0), 0) / Math.max(1, allRows.reduce((s, r) => s + (r.total ?? 0), 0))) * 100,
      )
    : Math.round(allRows.reduce((s, r) => s + r.pct, 0) / Math.max(1, allRows.length));
  const belowGood = allRows.filter((r) => r.pct < GOOD_THRESHOLD).length;
  const belowFair = allRows.filter((r) => r.pct < FAIR_THRESHOLD).length;
  const testClassCount = new Set(allRows.map((r) => r.testClass)).size;

  const sortProps = { sortField, sortDir, onSort: toggleSort };

  const renderRow = (row: Row, leading?: React.ReactNode) => (
    <tr key={`${row.testClass}/${row.coveredClass}`} className="transition-colors hover:bg-fd-accent/50">
      {leading}
      <td className="px-4 py-2.5 align-middle">
        <code className="font-mono text-xs text-fd-muted-foreground">{row.coveredClass}</code>
      </td>
      <td className="px-4 py-2.5 align-middle">
        <CoverageBar row={row} />
      </td>
    </tr>
  );

  return (
    <div className="not-prose my-6 space-y-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Overall" value={`${overall}%`} hint={hasLines ? 'by lines' : 'average'} />
        <Stat label="Classes" value={String(allRows.length)} />
        <Stat label="Test classes" value={String(testClassCount)} />
        <Stat label={`Under ${GOOD_THRESHOLD}%`} value={String(belowGood)} hint={belowFair > 0 ? `${belowFair} under ${FAIR_THRESHOLD}%` : undefined} />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-[200px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-fd-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by test or class name…"
            aria-label="Filter by test or class name"
            className="h-9 w-full rounded-md border border-fd-border bg-fd-card pl-9 pr-8 font-sans text-sm outline-none placeholder:text-fd-muted-foreground focus:ring-2 focus:ring-fd-ring"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Clear filter"
              className="absolute right-2 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center rounded text-fd-muted-foreground hover:text-fd-foreground"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>
        <Segmented
          label="Coverage filter"
          value={rowFilter}
          onChange={setRowFilter}
          options={[
            { value: 'all', label: 'All' },
            { value: 'good', label: `${GOOD_THRESHOLD}+` },
            { value: 'fair', label: `${FAIR_THRESHOLD}-${GOOD_THRESHOLD}` },
            { value: 'low', label: `<${FAIR_THRESHOLD}` },
          ]}
        />
        <Segmented
          label="Layout"
          value={grouped ? 'grouped' : 'flat'}
          onChange={(v) => setGrouped(v === 'grouped')}
          options={[
            { value: 'flat', label: 'Flat' },
            { value: 'grouped', label: 'By test class' },
          ]}
        />
      </div>

      <div className="max-h-[560px] overflow-auto rounded-lg border border-fd-border bg-fd-background">
        <table className="m-0 w-full border-collapse text-sm">
          <thead>
            <tr>
              <SortHeader field="testClass" label="Test class" {...sortProps} />
              <SortHeader field="coveredClass" label="Covered class" {...sortProps} />
              <SortHeader field="coverage" label="Coverage" {...sortProps} />
            </tr>
          </thead>
          <tbody className="divide-y divide-fd-border">
            {visible.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-10 text-center text-sm text-fd-muted-foreground">
                  {search ? (
                    <>
                      No classes match <span className="font-medium text-fd-foreground">“{search}”</span>
                    </>
                  ) : (
                    'No classes in this coverage range.'
                  )}
                </td>
              </tr>
            ) : grouped ? (
              groups.map((group) =>
                group.rows.map((row, i) =>
                  renderRow(
                    row,
                    i === 0 && (
                      <td rowSpan={group.rows.length} className="border-r border-fd-border px-4 py-2.5 align-top">
                        <code className={cellCode}>{group.testClass}</code>
                        <div className="mt-1.5 text-[11px] text-fd-muted-foreground">
                          {group.rows.length} {group.rows.length === 1 ? 'class' : 'classes'} · avg {group.average}%
                        </div>
                      </td>
                    ),
                  ),
                ),
              )
            ) : (
              flatRows.map((row) =>
                renderRow(
                  row,
                  <td className="px-4 py-2.5 align-middle">
                    <code className={cellCode}>{row.testClass}</code>
                  </td>,
                ),
              )
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-fd-muted-foreground">
        <span>
          {visible.length !== allRows.length && `Showing ${visible.length} of ${allRows.length} · `}
          Measured on {dataset.source}
        </span>
        <span className="flex items-center gap-3">
          {(['good', 'fair', 'low'] as const).map((l) => (
            <span key={l} className="inline-flex items-center gap-1.5">
              <span className={cn('size-2 rounded-full', LEVEL_STYLES[l].dot)} />
              {l === 'good' ? `${GOOD_THRESHOLD}%+` : l === 'fair' ? `${FAIR_THRESHOLD}–${GOOD_THRESHOLD - 1}%` : `Under ${FAIR_THRESHOLD}%`}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
