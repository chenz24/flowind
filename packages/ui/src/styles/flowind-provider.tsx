'use client';

import React, { createContext, useContext } from 'react';
import merge from 'deepmerge';

import { DEFAULT_THEME } from './default-theme';
import { FlowindTheme } from './types';
import combineMerge from './utils/combine-merge/combine-merge';
import { filterProps } from './utils/filter-props/filter-props';

interface FlowindProviderContextType {
  theme?: FlowindTheme;
}

const FlowindProviderContext = createContext<FlowindProviderContextType>({
  theme: DEFAULT_THEME,
});

export function useFlowindTheme() {
  return useContext(FlowindProviderContext)?.theme || DEFAULT_THEME;
}

export function useFlowindProviderStyles(component: string | string[]) {
  const theme = useFlowindTheme();

  const getStyles = (name: string) => ({
    styles: theme.components[name]?.styles || {},
    classNames: theme.components[name]?.classNames || {},
    variants: theme.components[name]?.variants,
    sizes: theme.components[name]?.sizes,
  });

  if (Array.isArray(component)) {
    return component.map(getStyles);
  }

  return [getStyles(component)];
}

export function useComponentDefaultProps<T extends Record<string, any>, U extends Partial<T> = {}>(
  component: string,
  defaultProps: U,
  props: T,
): T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
} {
  const theme = useFlowindTheme();
  const contextPropsPayload = theme.components[component]?.defaultProps;
  const contextProps =
    typeof contextPropsPayload === 'function' ? contextPropsPayload(theme) : contextPropsPayload;

  return { ...defaultProps, ...contextProps, ...filterProps(props) };
}

export interface FlowindProviderProps {
  theme?: Partial<FlowindTheme>;
  children: React.ReactNode;
}

export function FlowindProvider({ children, theme }: FlowindProviderProps) {
  const mergedTheme = merge(DEFAULT_THEME, theme || {}, { arrayMerge: combineMerge });
  return (
    <FlowindProviderContext.Provider value={{ theme: mergedTheme }}>
      {children}
    </FlowindProviderContext.Provider>
  );
}
