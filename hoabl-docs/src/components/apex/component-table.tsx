'use client';

import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { ComponentInfo } from '@/data/components/types';

const KIND = {
  lwc: { first: 'LWC name', noun: 'components', empty: 'No controller (UI only)' },
  vf: { first: 'Page name', noun: 'pages', empty: 'No Apex controller' },
} as const;

function Code({ children }: { children: string }) {
  return (
    <code className="rounded bg-fd-muted px-1.5 py-0.5 font-mono text-[0.82em] text-fd-foreground [overflow-wrap:anywhere]">{children}</code>
  );
}

export function ComponentTable({ rows, kind }: { rows: ComponentInfo[]; kind: keyof typeof KIND }) {
  const [query, setQuery] = useState('');
  const copy = KIND[kind];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => [r.name, r.standard ?? '', ...r.controllers].some((s) => s.toLowerCase().includes(q)));
  }, [rows, query]);

  return (
    <div className="not-prose my-5 flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <div className="relative w-full sm:w-80">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fd-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${copy.noun} or controllers`}
            aria-label={`Search ${copy.noun}`}
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

      <div className="overflow-x-auto rounded-xl border border-fd-border bg-fd-card/40">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-fd-muted/60 text-xs font-medium uppercase tracking-wide text-fd-muted-foreground">
              <th scope="col" className="w-[40%] px-4 py-3 text-left font-medium">{copy.first}</th>
              <th scope="col" className="px-4 py-3 text-left font-medium">Controller</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.name} className="border-t border-fd-border transition-colors hover:bg-fd-muted/30">
                <td className="px-4 py-3.5 align-top">
                  <code className="font-mono text-[13px] font-medium text-fd-foreground [overflow-wrap:anywhere]">{row.name}</code>
                </td>
                <td className="px-4 py-3.5 align-top">
                  {row.controllers.length || row.standard ? (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {row.controllers.map((c) => (
                        <Code key={c}>{c}</Code>
                      ))}
                      {row.standard && (
                        <span className="text-xs text-fd-muted-foreground">
                          Standard controller: <Code>{row.standard}</Code>
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-fd-muted-foreground">{copy.empty}</span>
                  )}
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr className="border-t border-fd-border">
                <td colSpan={2} className="px-4 py-10 text-center text-fd-muted-foreground">
                  No {copy.noun} match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
