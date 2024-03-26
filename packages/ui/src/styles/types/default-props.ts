import type { CSSProperties } from 'react';

import { ContextStylesParams, FlowindTheme } from './flowind-theme';

export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>;

export type Styles<StylesNames extends string, StylesParams extends Record<string, any> = never> =
  | Partial<Record<StylesNames, CSSProperties>>
  | ((
      theme: FlowindTheme,
      params: StylesParams,
      context: ContextStylesParams,
    ) => Partial<Record<StylesNames, CSSProperties>>);

export interface DefaultProps<
  StylesNames extends string = never,
  StylesParams extends Record<string, any> = Record<string, any>,
> {
  className?: string;
  style?: CSSProperties;
  classNames?: ClassNames<StylesNames>;
  styles?: Styles<StylesNames, StylesParams>;
  unstyled?: boolean;
}
