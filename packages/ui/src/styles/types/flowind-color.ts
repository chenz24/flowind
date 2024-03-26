import { Tuple } from './tuple';

export type DefaultFlowindColor =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

export type FlowindThemeColorsOverride = NonNullable<unknown>;

export type FlowindThemeColors = FlowindThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>;
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultFlowindColor, Tuple<string, 10>>;

export type FlowindColor = keyof FlowindThemeColors;

export type StatusType = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info';
