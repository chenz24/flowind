import type { FlowindTheme, FlowindThemeBase } from '../types';
import { fns } from './fns';

export function attachFunctions(themeBase: FlowindThemeBase): FlowindTheme {
  return {
    ...themeBase,
    fn: {
      variantColors: fns.variantColors(themeBase),
    },
  };
}
