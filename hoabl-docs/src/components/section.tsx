import { ChevronRight } from 'lucide-react';
import { Children, type ReactNode } from 'react';

/**
 * Collapsible page section. The first child must be the section heading (`## Title`),
 * so it still appears in the table of contents; everything after it is the body.
 */
export function Section({ open = false, children }: { open?: boolean; children?: ReactNode }) {
  const [heading, ...body] = Children.toArray(children);

  return (
    <details open={open} className="group/section my-2 border-b border-fd-border pb-2">
      <summary className="flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden [&>h2]:my-3 [&>h2]:flex-1 [&>h2]:border-0 [&>h2]:pb-0">
        <ChevronRight className="size-4 shrink-0 text-fd-muted-foreground transition-transform group-open/section:rotate-90" />
        {heading}
      </summary>
      <div className="pb-2">{body}</div>
    </details>
  );
}
