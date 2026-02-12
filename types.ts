export enum ModuleId {
  VISUAL_ELEMENTS = 'visual_elements',
  SHAPE_LANGUAGE = 'shape_language',
  DESIGN_PRINCIPLES = 'design_principles',
  SILHUETTE = 'silhouette',
  NOTAN = 'notan'
}

export interface ModuleDefinition {
  id: ModuleId;
  title: string;
  subtitle: string;
}

export const MODULES: ModuleDefinition[] = [
  { id: ModuleId.VISUAL_ELEMENTS, title: '01 // ELEMENTOS', subtitle: 'Ponto, Linha, Volume' },
  { id: ModuleId.SHAPE_LANGUAGE, title: '02 // LINGUAGEM DA FORMA', subtitle: 'Psicologia da Forma' },
  { id: ModuleId.DESIGN_PRINCIPLES, title: '03 // PRINCÍPIOS', subtitle: '80/20 & Hierarquia' },
  { id: ModuleId.SILHUETTE, title: '04 // SILHUETA', subtitle: 'Checagem de Leitura' },
  { id: ModuleId.NOTAN, title: '05 // NOTAN', subtitle: 'Estrutura de Luz & Sombra' },
];