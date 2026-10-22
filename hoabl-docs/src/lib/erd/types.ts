export interface Column {
  name: string;
  type: string;
  pk?: boolean;
  /** Foreign key reference. Drives the relations drawn in the ER diagram. */
  fk?: { table: string; column: string };
  nullable?: boolean;
  unique?: boolean;
  default?: string;
  description?: string;
}

export interface Entity {
  /** Table or object API name. Used for ids, anchors and relations. */
  name: string;
  /** Friendly display name. Falls back to `name` when omitted. */
  label?: string;
  /** Key into `ModuleSchema.groups`. */
  group: string;
  description?: string;
  columns: Column[];
}

export interface Group {
  label: string;
  /** Any CSS color. Used for node headers, the minimap and legend chips. */
  color: string;
}

export interface ModuleSchema {
  slug: string;
  title: string;
  groups: Record<string, Group>;
  entities: Entity[];
}

export interface Relation {
  id: string;
  /** Table that owns the foreign key. */
  source: string;
  sourceColumn: string;
  /** Referenced table. */
  target: string;
  targetColumn: string;
  cardinality: 'N:1' | '1:1';
}
