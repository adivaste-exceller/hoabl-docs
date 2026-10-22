import { getModule } from '@/data/modules';
import { ErdCanvas } from './erd-canvas';

export function ERDiagram({ module, height }: { module: string; height?: number }) {
  return <ErdCanvas schema={getModule(module)} height={height} />;
}
