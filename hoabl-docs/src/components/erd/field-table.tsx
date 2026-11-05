'use client';

import { useState } from 'react';
import type { Column } from '@/lib/erd/types';

/** Fields shown before the "show all" toggle. */
const FIELD_CAP = 10;

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
              <th className="w-[32%] py-2">Field</th>
              <th className="w-[18%] py-2">Type</th>
              {hasDefaults && <th className="w-[12%] py-2">Default</th>}
              <th className="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((column) => (
              <tr key={column.name}>
                <td className="break-words py-1.5 align-top">
                  {column.label ? (
                    <>
                      <div className="font-medium">{column.label}</div>
                      <code className="mt-0.5 block break-all border-0 bg-transparent p-0 text-[11px] text-fd-muted-foreground">
                        {column.name}
                      </code>
                    </>
                  ) : (
                    <code className="break-all">{column.name}</code>
                  )}
                </td>
                <td className="py-1.5 align-top">
                  <code className="break-all text-xs">{column.type}</code>
                </td>
                {hasDefaults && <td className="py-1.5 align-top">{column.default ? <code>{column.default}</code> : '—'}</td>}
                <td className="py-1.5 align-top">
                  {column.fk && (
                    <>
                      References{' '}
                      <a className="decoration-dashed decoration-1 decoration-current/70 underline-offset-4" href={`#${column.fk.table}`}>
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
