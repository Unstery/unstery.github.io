import type { ColorNameType } from './color-name.type';
import type { GradientColorType } from './gradient-color.type';
import type { ColorEntriesType } from './color-entries.type';

export type ColorType = {
  readonly [x in ColorNameType]?: GradientColorType | ColorEntriesType
};
