import { Tuple } from './tuple';

export type DefaultFlowindColor = 'neutral' | 'red' | 'yellow' | 'emerald' | 'cyan' | 'blue';

export type FlowindThemeColorsOverride = NonNullable<unknown>;

export type FlowindThemeColors = FlowindThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>;
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultFlowindColor, Tuple<string, 10>>;

export type FlowindColor = keyof FlowindThemeColors;

export type StatusType = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info';
