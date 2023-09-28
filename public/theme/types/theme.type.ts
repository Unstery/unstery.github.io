import type { ColorType } from './color.type';

export type ThemeType = {
  readonly colors: ColorType
  readonly fonts?: Record<string, string>
  readonly logo?: string
};
