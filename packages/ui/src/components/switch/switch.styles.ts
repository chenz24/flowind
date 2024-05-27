import { createStyles, FlowindSize, getSize, rem } from '@/styles';

export interface SwitchStylesParams {
  radius: FlowindSize;
  labelPosition: 'left' | 'right';
  error: boolean;
}

const switchHeight = {
  xs: 'h-4',
  sm: 'h-5',
  md: 'h-6',
  lg: 'h-7',
  xl: 'h-9',
};

const switchWidth = {
  xs: 'min-w-8',
  sm: 'min-w-9',
  md: 'min-w-11',
  lg: 'min-w-14',
  xl: 'min-w-[4.5rem]',
};

const thumbPosition = {
  xs: 'peer-checked:[&>*:first-child]:left-[calc(100%-0.9rem)]',
  sm: 'peer-checked:[&>*:first-child]:left-[calc(100%-1rem)]',
  md: 'peer-checked:[&>*:first-child]:left-[calc(100%-1.1rem)]',
  lg: 'peer-checked:[&>*:first-child]:left-[calc(100%-1.4rem)]',
  xl: 'peer-checked:[&>*:first-child]:left-[calc(100%-1.6rem)]',
};

const handleSizes = {
  xs: 'size-3',
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-5',
  xl: 'size-6',
};

const labelWidth = {
  xs: 'min-w-5',
  sm: 'min-w-6',
  md: 'min-w-7',
  lg: 'min-w-9',
  xl: 'min-w-11',
};

const labelMargin = {
  xs: { on: 'peer-checked:[&>*:last-child]:mr-3', off: 'ml-3' },
  sm: { on: 'peer-checked:[&>*:last-child]:mr-3.5', off: 'ml-3.5' },
  md: { on: 'peer-checked:[&>*:last-child]:mr-4', off: 'ml-4' },
  lg: { on: 'peer-checked:[&>*:last-child]:mr-5', off: 'ml-5' },
  xl: { on: 'peer-checked:[&>*:last-child]:mr-6', off: 'ml-6' },
};

const labelFontSizes = {
  xs: 'text-[5px]',
  sm: 'text-[6px]',
  md: 'text-[7px]',
  lg: 'text-[9px]',
  xl: 'text-[11px]',
};

const trackLabelPaddings = {
  xs: rem(4),
  sm: rem(5),
  md: rem(6),
  lg: rem(8),
  xl: rem(10),
};

export default createStyles((theme, { radius, labelPosition }: SwitchStylesParams, { size }) => {
  const handleSize = handleSizes[size] || handleSizes.sm;
  const borderRadius = theme.radius[radius];
  const trackWidth = switchWidth[size] || switchWidth.sm;
  const trackLabelWidth = labelWidth[size] || labelWidth.sm;
  const trackLabelMargin = labelMargin[size] || labelMargin.sm;
  const trackFontSize = labelFontSizes[size] || labelFontSizes.sm;

  return {
    classes: {
      input: 'peer absolute size-0 overflow-hidden whitespace-nowrap p-0',
      track: `relative overflow-hidden cursor-pointer margin-0 transition box-border appearance-none
          flex items-center font-semibold z-0 leading-none select-none border border-solid ${borderRadius}
          ${labelPosition === 'left' ? 'order-2' : 'order-1'} ${
            switchHeight[size]
          }  ${trackWidth} ${trackFontSize}
          bg-slate-100 dark:bg-zinc-700 text-slate-500
        dark:text-slate-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:text-white
        ${
          thumbPosition[size]
        } peer-checked:[&>*:first-child]:border-white peer-disabled:opacity-60 peer-disabled:cursor-not-allowed
        ${trackLabelMargin.on} peer-checked:[&>*:last-child]:ml-0`,
      thumb: `absolute z-[1] flex box-border bg-white border border-solid border-neutral-300
          dark:border-gray-600 left-0.5 ${handleSize} ${borderRadius}`,
      trackLabel: `h-full grid place-content-center transition ${trackLabelWidth} ${trackLabelMargin.off}`,
    },
    styles: {
      input: {
        clipPath: 'inset(50%)',
        WebkitClipPath: 'inset(50%)',
      },
      thumb: {
        transition: 'left 150ms ease',
      },
      track: {},
      trackLabel: {
        transitionProperty: 'margin',
        paddingInline: getSize({ size, sizes: trackLabelPaddings }),
      },
    },
  };
});
