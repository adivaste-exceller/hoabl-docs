import { CircleCheck, CircleX, Info, Lightbulb, TriangleAlert, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type CalloutType = 'info' | 'warning' | 'error' | 'success' | 'idea';

const ALIASES: Record<string, CalloutType> = { warn: 'warning', tip: 'idea' };

const STYLES: Record<CalloutType, { icon: LucideIcon; color: string }> = {
  info: { icon: Info, color: 'hsl(215 80% 55%)' },
  warning: { icon: TriangleAlert, color: 'hsl(35 92% 48%)' },
  error: { icon: CircleX, color: 'hsl(0 78% 56%)' },
  success: { icon: CircleCheck, color: 'hsl(150 60% 38%)' },
  idea: { icon: Lightbulb, color: 'hsl(265 70% 60%)' },
};

export function Callout({
  type = 'info',
  title,
  icon,
  children,
}: {
  type?: CalloutType | 'warn' | 'tip';
  title?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
}) {
  const { icon: Icon, color } = STYLES[ALIASES[type] ?? (type as CalloutType)];

  return (
    <div
      role="note"
      className="my-5 flex gap-3 rounded-lg border p-3.5 text-sm"
      style={{
        borderColor: `color-mix(in oklab, ${color} 30%, transparent)`,
        background: `color-mix(in oklab, ${color} 7%, transparent)`,
      }}
    >
      <span
        className="mt-px flex size-6 shrink-0 items-center justify-center rounded-md"
        style={{ background: `color-mix(in oklab, ${color} 16%, transparent)`, color }}
      >
        {icon ?? <Icon className="size-3.5" strokeWidth={2.25} />}
      </span>
      <div className="min-w-0 flex-1 leading-relaxed [&>*]:my-0 [&>*+*]:mt-2">
        {title && <p className="font-semibold text-fd-foreground">{title}</p>}
        <div className="text-fd-muted-foreground [&>*]:my-0 [&>*+*]:mt-2 [&_strong]:text-fd-foreground">{children}</div>
      </div>
    </div>
  );
}
