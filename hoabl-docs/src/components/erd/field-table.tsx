'use client';

import { useState } from 'react';
import type { Column } from '@/lib/erd/types';

/** Fields shown before the "show all" toggle. */
const FIELD_CAP = 10;

function Badge({ children, tone }: { children: React.ReactNode; tone: 'pk' | 'fk' | 'muted' }) {
  const styles = {
    pk: 'bg-fd-primary text-fd-primary-foreground',
    fk: 'bg-fd-accent text-fd-accent-foreground',
    muted: 'border border-fd-border text-fd-muted-foreground',
  };
  return (
    <span className={`inline-block rounded px-1.5 py-px font-mono text-[10px] font-semibold leading-4 ${styles[tone]}`}>
      {children}
    </span>
  );
}

function ColumnFlags({ column }: { column: Column }) {
  return (
    <span className="flex flex-wrap gap-1">
      {column.pk && <Badge tone="pk">PK</Badge>}
      {column.fk && <Badge tone="fk">FK</Badge>}
      {column.unique && !column.pk && <Badge tone="muted">UNIQUE</Badge>}
      {column.nullable && <Badge tone="muted">NULL</Badge>}
    </span>
  );
}

/** Column reference for one table. Long tables are capped until the reader asks for every field. */
export function FieldTable({ columns }: { columns: Column[] }) {
  const [showAll, setShowAll] = useState(false);
  const capped = columns.length > FIELD_CAP;
  const rows = capped && !showAll ? columns.slice(0, FIELD_CAP) : columns;
  const hasDefaults = columns.some((c) => c.default);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="my-0 w-full table-fixed">
          <thead>
            <tr>
              <th className="w-[30%]">Column</th>
              <th className="w-[16%]">Type</th>
              <th className="w-[10%]">Flags</th>
              {hasDefaults && <th className="w-[12%]">Default</th>}
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((column) => (
              <tr key={column.name}>
                <td className="break-words align-top">
                  <code className="break-all">{column.name}</code>
                  {column.label && <div className="mt-0.5 text-xs text-fd-muted-foreground">{column.label}</div>}
                </td>
                <td className="align-top">
                  <code className="break-all">{column.type}</code>
                </td>
                <td className="align-top">
                  <ColumnFlags column={column} />
                </td>
                {hasDefaults && <td className="align-top">{column.default ? <code>{column.default}</code> : '—'}</td>}
                <td className="align-top">
                  {column.fk && (
                    <>
                      References{' '}
                      <a href={`#${column.fk.table}`}>
                        <code>{column.fk.table}</code>
                      </a>
                      {column.description ? '. ' : ''}
                    </>
                  )}
                  {column.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {capped && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-2 rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-xs font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground"
        >
          {showAll ? 'Show fewer fields' : `Show all ${columns.length} fields`}
        </button>
      )}
    </div>
  );
}
