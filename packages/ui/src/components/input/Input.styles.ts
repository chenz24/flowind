import { CSSProperties } from 'react';

import { clx, createStyles, FlowindSize, FlowindTheme, rem } from '@/styles';
import { fontSizes } from './input-label/input-label.styles';

// 配置表加样式计算

export interface InputStylesParams {
  radius: FlowindSize;
  multiline: boolean;
  invalid: boolean;
  withSuffix: boolean;
  withPrefix: boolean;
  suffixWidth: string | number;
  prefixWidth: string | number;
  offsetBottom: boolean;
  offsetTop: boolean;
  pointer: boolean;
}

export const sizes = {
  xs: {
    height: 'h-6',
    minHeight: 'min-h-6',
    padding: 'px-2',
    affix: 'w-6',
    withSuffixPadding: 'pr-6',
    withPrefixPadding: 'pl-6',
  },
  sm: {
    height: 'h-8',
    minHeight: 'min-h-8',
    padding: 'px-2.5',
    affix: 'w-8',
    withSuffixPadding: 'pr-8',
    withPrefixPadding: 'pl-8',
  },
  md: {
    height: 'h-9',
    minHeight: 'min-h-9',
    padding: 'px-3',
    affix: 'w-9',
    withSuffixPadding: 'pr-9',
    withPrefixPadding: 'pl-9',
  },
  lg: {
    height: 'h-10',
    minHeight: 'min-h-10',
    padding: 'px-3.5',
    affix: 'w-10',
    withSuffixPadding: 'pr-10',
    withPrefixPadding: 'pl-10',
  },
  xl: {
    height: 'h-11',
    minHeight: 'min-h-11',
    padding: 'px-3.5',
    affix: 'w-11',
    withSuffixPadding: 'pr-11',
    withPrefixPadding: 'pl-11',
  },
};

// const INPUT_VARIANTS = ['default', 'filled', 'unstyled'];

interface GetSizeStylesInput {
  size: FlowindSize;
  multiline: boolean;
  withSuffix: boolean;
  withPrefix: boolean;
  suffixWidth: string | number;
  prefixWidth: string | number;
}

const getSizeClasses = ({
  size,
  withPrefix,
  withSuffix,
  suffixWidth,
  prefixWidth,
  // multiline,
}: GetSizeStylesInput) => {
  const _sizes = sizes[size];

  if (!_sizes) {
    return '';
  }

  return `${_sizes.padding}
  ${withPrefix && !prefixWidth ? _sizes.withPrefixPadding : ''}
  ${withSuffix && !suffixWidth ? _sizes.withSuffixPadding : ''}`;
};

export default createStyles(
  (
    theme,
    {
      multiline,
      radius,
      invalid,
      prefixWidth,
      suffixWidth,
      withPrefix,
      withSuffix,
      offsetBottom,
      offsetTop,
      pointer,
    }: InputStylesParams,
    { variant, size },
  ) => {
    const radiusClasses = theme.radius[radius];
    const sizeClasses = sizes[size];

    const inputStyle: CSSProperties = {};
    const prefixWrapper: CSSProperties = {};
    if (prefixWidth) {
      prefixWrapper.width = rem(prefixWidth);
      inputStyle.paddingLeft = rem(prefixWidth);
    }
    const suffixWrapper: CSSProperties = {};
    if (suffixWidth) {
      suffixWrapper.width = rem(suffixWidth);
      inputStyle.paddingRight = rem(suffixWidth);
    }

    return {
      classes: {
        wrapper: `relative flex transition border border-solid border-gray-200 dark:border-gray-700
        hover:border-neutral-300 dark:hover:border-gray-600 dark:focus-within:border-gray-600
        [&:has(input:is(:disabled))]:bg-slate-50 dark:[&:has(input:is(:disabled))]:bg-zinc-800 dark:bg-slate-900 
        ${theme.focusInput} 
        ${radiusClasses} ${clx({
          'mt-1.5': offsetTop,
          'mb-1.5': offsetBottom,
          'h-auto': multiline,
          [sizeClasses.minHeight]: multiline,
          'focus-within:!border-slate-400': !invalid,
          '!border-red-500 dark:!border-red-700': invalid,
          [sizeClasses.height]: !multiline,
        })}`,
        innerWrapper: 'relative',
        prefixWrapper: `flex items-center justify-center absolute inset-y-0 left-0 min-h-full ${clx(
          {
            [sizeClasses.affix]: !prefixWidth,
          },
        )}`,
        suffixWrapper: `flex items-center justify-center absolute inset-y-0 right-0 min-h-full ${clx(
          {
            [sizeClasses.affix]: !suffixWidth,
          },
        )}`,
        input: `w-full min-h-full outline-none dark:bg-slate-900 
        ${radiusClasses} resize-none appearance-none box-border block text-left text-slate-900 dark:text-gray-400
        ${clx({
          'cursor-pointer': pointer,
        })} ${fontSizes[size]} ${getSizeClasses({
          size,
          withPrefix,
          withSuffix,
          multiline,
          suffixWidth,
          prefixWidth,
        })}`,
        addonBefore: `${radiusClasses} px-3 flex items-center h-full bg-slate-50 dark:bg-zinc-800`,
        addonAfter: `${radiusClasses} px-3 flex items-center h-full bg-slate-50 dark:bg-zinc-800`,
      },
      styles: {
        wrapper: {},
        prefixWrapper,
        suffixWrapper,
        input: inputStyle,
        addonBefore: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
        addonAfter: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
    };
  },
);
