import type { ColorEntriesType } from './color-entries.type';
import type { ColorVariantType } from './color-variant.type';

export type GradientColorType = {
  readonly [x:ColorVariantType]: ColorEntriesType;
};
