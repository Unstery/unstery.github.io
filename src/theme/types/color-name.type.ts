import ColorNameEnum from './color-name.enum';

export type ColorNameType =
  | ColorNameEnum.PRIMARY
  | ColorNameEnum.BACKGROUND
  | ColorNameEnum.TEXT
  | ColorNameEnum.INFORMATION
  | ColorNameEnum.SUCCESS
  | ColorNameEnum.ERROR
  | ColorNameEnum.WARNING;
