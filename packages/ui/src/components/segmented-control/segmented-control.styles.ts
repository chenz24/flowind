import { createStyles, FlowindColor, FlowindSize } from '@/styles';

export const WRAPPER_PADDING = 4;

export interface SegmentedControlStylesParams {
  fullWidth: boolean;
  color: FlowindColor;
  radius: FlowindSize;
  shouldAnimate: boolean;
  transitionDuration: number;
  transitionTimingFunction: string;
  orientation: 'vertical' | 'horizontal';
}

const sizes = {
  xs: 'py-[0.1875rem] px-1.5',
  sm: 'py-[0.3125rem] px-2.5',
  md: 'py-[0.4375rem] px-3.5',
  lg: 'py-[0.5625rem] px-4',
  xl: 'py-3 px-5',
};

const fontSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export default createStyles(
  (
    theme,
    {
      fullWidth,
      color,
      radius,
      shouldAnimate,
      // transitionDuration,
      // transitionTimingFunction,
      orientation,
    }: SegmentedControlStylesParams,
    { size },
  ) => {
    const vertical = orientation === 'vertical';
    const colors = theme.fn.variantColors({ variant: 'filled', color });
    const borderRadius = theme.radius[radius];

    return {
      classes: {
        label: `font-medium cursor-pointer block text-center whitespace-nowrap overflow-hidden text-ellipsis
        select-none data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed ${
          sizes[size in sizes ? size : 'sm']
        }
        ${shouldAnimate ? '[transition:color_200ms_ease]' : ''}
        ${size in fontSizes ? fontSizes[size] : fontSizes.sm}
        ${
          color
            ? 'data-[active=true]:text-white hover:data-[active=true]:text-white'
            : 'text-zinc-500 data-[active=true]:text-gray-700 dark:text-zinc-400 dark:data-[active=true]:text-white'
        }`,
        control: `relative box-border flex-1 z-[2] [transition:border-left-color_200ms_ease]
        [&:not(:first-of-type)]:border-solid ${
          vertical ? '[&:not(:first-of-type)]:border-t' : '[&:not(:first-of-type)]:border-l'
        } [&:not(:first-of-type)]:border-zinc-200 dark:[&:not(:first-of-type)]:border-gray-700`,
        input: 'w-0 h-0 absolute overflow-hidden opacity-0 whitespace-nowrap',
        root: `relative overflow-hidden bg-slate-100 dark:bg-zinc-800 p-1 ${
          fullWidth || vertical ? 'flex' : 'inline-flex'
        } ${vertical && !fullWidth ? 'w-max' : 'w-auto'} ${
          vertical ? 'flex-col' : 'flex-row'
        } ${borderRadius}`,
        controlActive: `!border-l-transparent !border-t-transparent ${borderRadius} ${
          shouldAnimate ? (color ? '' : 'shadow-sm dark:shadow-none') : ''
        } [&+*]:!border-l-transparent [&+*]:!border-t-transparent`,
        indicator: `box-border absolute z-[1] ${
          shouldAnimate ? '[transition:transform_200ms_ease_0s,width_100ms_ease_0s]' : ''
        } ${borderRadius} ${color ? '' : 'shadow-sm dark:shadow-none'} ${
          color ? colors.background : 'bg-white dark:bg-gray-700'
        }`,
      },
    };
  },
);
