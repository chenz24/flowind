import { attachFunctions } from './functions/attach-functions';
import { FlowindThemeBase } from './types';

export const FLOWIND_COLORS = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export const radius = {};

export const _DEFAULT_THEME: FlowindThemeBase = {
  dir: 'ltr',
  colorScheme: 'light',
  components: {},
  loader: 'oval',
  radius: {
    xs: 'rounded-sm',
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-3xl',
    xl: 'rounded-full',
  },
  primaryColor: 'blue',
  secondaryColor: 'gray',
};

export const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);
