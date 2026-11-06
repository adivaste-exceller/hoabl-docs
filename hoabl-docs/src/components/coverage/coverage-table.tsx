'use client';

import { ChevronDown, ChevronsUpDown, ChevronUp, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';
import { type CoverageDataset } from '@/lib/coverage';

type SortField = 'testClass' | 'coveredClass';
type SortDir = 'asc' | 'desc';

interface Row {
  testClass: string;
  coveredClass: string;
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

  const allRows = useMemo<Row[]>(
    () =>
      dataset.items.flatMap((item) =>
        item.coveredClasses.map((cls) => ({
          testClass: item.testClass,
          coveredClass: cls.name,
        })),
      ),
    [dataset],
  );

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allRows.filter((r) => !q || r.testClass.toLowerCase().includes(q) || r.coveredClass.toLowerCase().includes(q));
  }, [allRows, search]);

  const compare = useMemo(() => {
    const dir = sortDir === 'asc' ? 1 : -1;
    return (a: Row, b: Row) => {
      const result =
        sortField === 'testClass'
          ? a.testClass.localeCompare(b.testClass) || a.coveredClass.localeCompare(b.coveredClass)
          : a.coveredClass.localeCompare(b.coveredClass);
      return result * dir;
    };
  }, [sortField, sortDir]);

  const flatRows = useMemo(() => [...visible].sort(compare), [visible, compare]);

  const groups = useMemo(() => {
    const map = new Map<string, Row[]>();
    for (const row of visible) map.set(row.testClass, [...(map.get(row.testClass) ?? []), row]);

    const dir = sortDir === 'asc' ? 1 : -1;

    return [...map.entries()]
      .map(([testClass, rows]) => ({
        testClass,
        // Inside a group the test class is constant, so fall back to the class name.
        rows: [...rows].sort(sortField === 'testClass' ? (a, b) => a.coveredClass.localeCompare(b.coveredClass) * dir : compare),
      }))
      .sort((a, b) => {
        if (sortField === 'coveredClass') return a.rows[0].coveredClass.localeCompare(b.rows[0].coveredClass) * dir;
        return a.testClass.localeCompare(b.testClass) * dir;
      });
  }, [visible, sortField, sortDir, compare]);

  function toggleSort(field: SortField) {
    if (field === sortField) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortField(field);
      setSortDir('asc');
    }
  }

  const sortProps = { sortField, sortDir, onSort: toggleSort };

  const renderRow = (row: Row, leading?: React.ReactNode) => (
    <tr key={`${row.testClass}/${row.coveredClass}`} className="transition-colors hover:bg-fd-accent/50">
      {leading}
      <td className="px-4 py-2.5 align-middle">
        <code className="font-mono text-xs text-fd-muted-foreground">{row.coveredClass}</code>
      </td>
    </tr>
  );

  return (
    <div className="not-prose my-6 space-y-3">
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
            </tr>
          </thead>
          <tbody className="divide-y divide-fd-border">
            {visible.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-4 py-10 text-center text-sm text-fd-muted-foreground">
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
                          {group.rows.length} {group.rows.length === 1 ? 'class' : 'classes'}                        </div>
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
      </div>
    </div>
  );
}
