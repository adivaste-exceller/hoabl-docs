import type { Entity, Relation } from './types';

export function getRelations(entities: Entity[]): Relation[] {
  const names = new Set(entities.map((e) => e.name));
  const relations: Relation[] = [];

  for (const entity of entities) {
    for (const column of entity.columns) {
      if (!column.fk || !names.has(column.fk.table)) continue;
      relations.push({
        id: `${entity.name}.${column.name}`,
        source: entity.name,
        sourceColumn: column.name,
        target: column.fk.table,
        targetColumn: column.fk.column,
        cardinality: column.unique || column.pk ? '1:1' : 'N:1',
      });
    }
  }

  return relations;
}
