import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import type { MDXComponents } from 'mdx/types';
import { Callout } from '@/components/callout';
import { Coverage } from '@/components/coverage/coverage';
import { ERDiagram } from '@/components/erd/erd-diagram';
import { EntityOverview, SchemaTables } from '@/components/erd/schema-tables';
import { Section } from '@/components/section';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Callout,
    Coverage,
    Step,
    Steps,
    ERDiagram,
    EntityOverview,
    SchemaTables,
    Section,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
