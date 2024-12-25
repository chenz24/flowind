import { CSSProperties } from 'react';

import { clx, createStyles, FlowindSize, rem } from '@/styles';
import { fontSizes } from './input-label/input-label.styles';

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
    padding: 'px-1.5',
    affix: 'w-6',
    withSuffixPadding: 'pr-6',
    withPrefixPadding: 'pl-6',
  },
  sm: {
    height: 'h-7',
    minHeight: 'min-h-7',
    padding: 'px-1.5',
    affix: 'w-7',
    withSuffixPadding: 'pr-7',
    withPrefixPadding: 'pl-7',
  },
  md: {
    height: 'h-8',
    minHeight: 'min-h-8',
    padding: 'px-2',
    affix: 'w-8',
    withSuffixPadding: 'pr-8',
    withPrefixPadding: 'pl-8',
  },
  lg: {
    height: 'h-9',
    minHeight: 'min-h-9',
    padding: 'px-2.5',
    affix: 'w-9',
    withSuffixPadding: 'pr-9',
    withPrefixPadding: 'pl-9',
  },
  xl: {
    height: 'h-11',
    minHeight: 'min-h-11',
    padding: 'px-3',
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
        wrapper: `relative flex transition shadow-borders-base focus-within:shadow-borders-interactive-with-active
        [&:has(input:is(:disabled))]:bg-bg-disabled transition-fg bg-bg-field hover:bg-bg-field-hover 
        ${radiusClasses} ${clx({
          'mt-1.5': offsetTop,
          'mb-1.5': offsetBottom,
          'h-auto': multiline,
          [sizeClasses.minHeight]: multiline,
          '!shadow-borders-error': invalid,
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
        input: `w-full min-h-full outline-none caret-fg-base bg-transparent disabled:text-fg-disabled disabled:cursor-not-allowed
        ${radiusClasses} resize-none appearance-none box-border block text-left text-fg-base 
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
        addonBefore: `${radiusClasses} px-3 flex items-center h-full border-e border-border-base`,
        addonAfter: `${radiusClasses} px-3 flex items-center h-full border-s border-border-base`,
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
