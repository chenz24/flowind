import { CSSProperties } from 'react';
import cx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { randomId } from '@flowind/hooks';
import { useFlowindProviderStyles, useFlowindTheme } from '../../flowind-provider';
import { ContextStylesParams, FlowindSize, FlowindTheme } from '../../types';

type ContextClasses = ReturnType<typeof useFlowindProviderStyles>;

export interface UseStylesOptions<Key extends string> {
  classNames?:
    | Partial<Record<Key, string>>
    | ((
        theme: FlowindTheme,
        params: any,
        context: ContextStylesParams,
      ) => Partial<Record<Key, string>>);
  styles?:
    | Partial<Record<Key, CSSProperties>>
    | ((
        theme: FlowindTheme,
        params: any,
        context: ContextStylesParams,
      ) => Partial<Record<Key, CSSProperties>>);
  name: string | string[];
  unstyled?: boolean;
  variant?: string;
  size?: FlowindSize;
}

interface Variations {
  variant?: string;
  size?: FlowindSize;
}

function assignAccClasses(acc: Record<string, string>, classes: Record<string, string>) {
  if (classes) {
    Object.keys(classes).forEach((key) => {
      if (!acc[key]) {
        acc[key] = `${classes[key]}`;
      } else {
        acc[key] = `${acc[key]} ${classes[key]}`;
      }
    });
  }

  return acc;
}

function assignAccStyles(
  acc: Record<string, CSSProperties>,
  styles: Record<string, CSSProperties>,
) {
  if (styles) {
    Object.keys(styles).forEach((key) => {
      if (!acc[key]) {
        acc[key] = { ...styles[key] };
      } else {
        acc[key] = { ...acc[key], ...styles[key] };
      }
    });
  }

  return acc;
}

interface GetContextVariations {
  ctx: ContextClasses;
  theme: FlowindTheme;
  params: Record<string, any>;
  variant: string;
  size: number | string;
}

function getContextVariation({ ctx, theme, params, variant, size }: GetContextVariations) {
  return ctx.reduce<Record<string, string>>((acc, item) => {
    if (item.variants && item.variants[variant]) {
      assignAccClasses(acc, item.variants[variant](theme, params, { variant, size }));
    }

    if (item.sizes && item.sizes[size]) {
      assignAccClasses(acc, item.sizes[size](theme, params, { variant, size }));
    }

    return acc;
  }, {});
}

function getClasses<Key extends string>(
  classNames: UseStylesOptions<Key>['classNames'] | ContextClasses,
  theme: FlowindTheme,
  params: Record<string, any>,
  contextParams: ContextStylesParams,
): Record<string, string> {
  const extractClasses = (classNamesPartial: UseStylesOptions<Key>['classNames']) =>
    typeof classNamesPartial === 'function'
      ? classNamesPartial(theme, params || {}, contextParams)
      : classNamesPartial || {};

  if (Array.isArray(classNames)) {
    return classNames
      .map((item) => extractClasses(item.classNames))
      .reduce<Record<string, string>>((acc, item) => ({ ...acc, ...item }), {});
  }

  return extractClasses(classNames);
}

function getStyles<Key extends string>(
  styles: UseStylesOptions<Key>['styles'] | ContextClasses,
  theme: FlowindTheme,
  params: Record<string, any>,
  contextParams: ContextStylesParams,
): CSSProperties {
  const extractStyles = (stylesPartial: UseStylesOptions<Key>['styles']) =>
    typeof stylesPartial === 'function'
      ? stylesPartial(theme, params || {}, contextParams)
      : stylesPartial || {};

  if (Array.isArray(styles)) {
    return styles
      .map((item) => extractStyles(item.styles))
      .reduce<Record<string, CSSProperties>>((acc, item) => assignAccStyles(acc, item), {});
  }

  return extractStyles(styles);
}

interface InputType<Key extends string> {
  classes?: Record<Key, string>;
  styles?: Record<Key, CSSProperties>;
}

export function createStyles<
  Key extends string = string,
  Params extends Record<string, any> = NonNullable<unknown>,
  Input extends InputType<Key> = InputType<Key>,
>(input: ((theme: FlowindTheme, params: Params, variations: Variations) => Input) | Input) {
  const getCssObject = typeof input === 'function' ? input : () => input;

  function useStyles(params: Params, options?: UseStylesOptions<Key>) {
    const theme = useFlowindTheme();
    const context = useFlowindProviderStyles(options?.name);

    const contextParams = { variant: options?.variant, size: options?.size };
    const cssObject: Record<string, any> = options?.unstyled
      ? {}
      : getCssObject(theme, params, contextParams);
    const componentClasses = getClasses(options?.classNames, theme, params, contextParams);
    const providerClasses = getClasses(context, theme, params, contextParams);
    const contextVariations = getContextVariation({
      ctx: context,
      theme,
      params,
      variant: options?.variant,
      size: options?.size,
    });

    const { classes: inputClasses, styles: inputStyles = {} } = cssObject;
    const componentName = options?.name || randomId();
    const classId = Array.isArray(componentName) ? componentName.join('-') : componentName;

    const classes = Object.fromEntries(
      Object.keys(inputClasses).map((key) => {
        const mergedClasses = twMerge(
          `flowind-${classId}-${key}`,
          inputClasses[key],
          contextVariations[key],
          providerClasses[key],
          componentClasses[key],
        );
        return [key, mergedClasses];
      }),
    ) as {
      [key in keyof Input['classes']]: string;
    };

    const componentStyles = getStyles(options?.styles, theme, params, contextParams);
    const styls = Object.fromEntries(
      Object.keys(inputStyles).map((key) => {
        const mergedStyles = {
          ...inputStyles[key],
          ...componentStyles[key],
        };
        return [key, mergedStyles];
      }),
    ) as {
      [key in keyof Input['styles']]: CSSProperties;
    };

    return {
      classes,
      cx,
      theme,
      styls,
    };
  }

  return useStyles;
}
