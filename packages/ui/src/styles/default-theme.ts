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
    none: 'rounded-none',
    xs: 'rounded-sm',
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-3xl',
    xl: 'rounded-full',
  },
  shadows: {
    none: 'shadow-none',
    xs: 'shadow-sm',
    sm: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },
  primaryColor: 'blue',
  secondaryColor: 'neutral',
  respectReducedMotion: true,
  transitionTimingFunction: 'ease',
  focusRing:
    'outline outline-offset-2 outline-0 focus-visible:outline-2 outline-blue-500 dark:outline-blue-500',
  focusInput:
    'focus-within:ring focus-within:ring-blue-200 focus-within:dark:ring-blue-700/30 focus-within:border-blue-500 focus-within:dark:border-blue-700',
};

export const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);
