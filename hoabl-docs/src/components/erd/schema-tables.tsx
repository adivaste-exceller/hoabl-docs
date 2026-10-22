import { getModule } from '@/data/modules';
import { getRelations } from '@/lib/erd/relations';
import type { Column } from '@/lib/erd/types';

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

/** One-row-per-table summary with links to each table's section. */
export function EntityOverview({ module }: { module: string }) {
  const schema = getModule(module);
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>Table</th>
            <th>Group</th>
            <th>Columns</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {schema.entities.map((entity) => (
            <tr key={entity.name}>
              <td>
                <a href={`#${entity.name}`}>
                  {entity.label ?? <code>{entity.name}</code>}
                </a>
              </td>
              <td>
                <span className="inline-flex items-center gap-1.5">
                  <span className="size-2 rounded-full" style={{ background: schema.groups[entity.group]?.color }} />
                  {schema.groups[entity.group]?.label ?? entity.group}
                </span>
              </td>
              <td>{entity.columns.length}</td>
              <td>{entity.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Full column reference for every table in a module. */
export function SchemaTables({ module }: { module: string }) {
  const schema = getModule(module);
  const relations = getRelations(schema.entities);

  return (
    <div className="flex flex-col gap-10">
      {schema.entities.map((entity) => {
        const outgoing = relations.filter((r) => r.source === entity.name);
        const incoming = relations.filter((r) => r.target === entity.name);
        return (
          <section key={entity.name} id={entity.name} className="scroll-mt-24">
            <div className="mb-1 flex items-center gap-2">
              <span className="size-2.5 rounded-full" style={{ background: schema.groups[entity.group]?.color }} />
              <h3 className="m-0 text-lg font-semibold">{entity.label ?? entity.name}</h3>
              {entity.label && <code className="text-xs">{entity.name}</code>}
            </div>
            {entity.description && <p className="mb-3 mt-1 text-fd-muted-foreground">{entity.description}</p>}

            <div className="overflow-x-auto">
              <table className="my-0">
                <thead>
                  <tr>
                    <th>Column</th>
                    <th>Type</th>
                    <th>Flags</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {entity.columns.map((column) => (
                    <tr key={column.name}>
                      <td>
                        <code>{column.name}</code>
                        {column.label && <div className="mt-0.5 text-xs text-fd-muted-foreground">{column.label}</div>}
                      </td>
                      <td>
                        <code>{column.type}</code>
                      </td>
                      <td>
                        <ColumnFlags column={column} />
                      </td>
                      <td>{column.default ? <code>{column.default}</code> : '—'}</td>
                      <td>
                        {column.fk && (
                          <>
                            References{' '}
                            <a href={`#${column.fk.table}`}>
                              <code>
                                {column.fk.table}.{column.fk.column}
                              </code>
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

            {(outgoing.length > 0 || incoming.length > 0) && (
              <p className="mt-3 text-sm text-fd-muted-foreground">
                {outgoing.length > 0 && (
                  <>
                    Belongs to{' '}
                    {outgoing.map((r, i) => (
                      <span key={r.id}>
                        {i > 0 && ', '}
                        <a href={`#${r.target}`}>
                          <code>{r.target}</code>
                        </a>{' '}
                        ({r.cardinality})
                      </span>
                    ))}
                    .{' '}
                  </>
                )}
                {incoming.length > 0 && (
                  <>
                    Referenced by{' '}
                    {[...new Set(incoming.map((r) => r.source))].map((name, i) => (
                      <span key={name}>
                        {i > 0 && ', '}
                        <a href={`#${name}`}>
                          <code>{name}</code>
                        </a>
                      </span>
                    ))}
                    .
                  </>
                )}
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
