import { CSSProperties } from 'react';

import type { VariantInput, VariantOutput } from '../functions/fns/variant-colors/variant-colors';
import { ColorScheme } from './color-scheme';
import { FlowindColor } from './flowind-color';
import { FlowindSizes } from './flowind-size';

interface FlowindThemeFunctions {
  variantColors: (payload: VariantInput) => VariantOutput;
}

export interface FlowindTheme {
  dir: 'ltr' | 'rtl';
  loader: 'oval' | 'bars' | 'dots';
  colorScheme: ColorScheme;
  components: FlowindThemeComponents;
  radius: FlowindSizes;
  fn: FlowindThemeFunctions;
  primaryColor: FlowindColor;
  secondaryColor: FlowindColor;
}

export type FlowindThemeComponents = Record<string, ThemeComponent>;

export interface ContextStylesParams {
  variant?: string;
  size?: string | number;
}

interface ThemeComponent {
  defaultProps?: Record<string, any>;
  classNames?: Record<string, string>;
  styles?: Record<string, CSSProperties>;
  variants?: Record<
    PropertyKey,
    (theme: FlowindTheme, params: any, context: ContextStylesParams) => Record<string, string>
  >;
  sizes?: Record<
    PropertyKey,
    (theme: FlowindTheme, params: any, context: ContextStylesParams) => Record<string, string>
  >;
}

export type FlowindThemeBase = Omit<FlowindTheme, 'fn'>;
