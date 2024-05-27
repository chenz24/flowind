import { createStyles, cva, FlowindColor, FlowindSize, StatusType } from '@/styles';

export interface ButtonStylesParams {
  color: FlowindColor;
  radius: FlowindSize;
  fullWidth: boolean;
  compact: boolean;
  withRightIcon: boolean;
  withLeftIcon: boolean;
  type: StatusType;
}

const root = cva({
  base: `relative font-medium select-none cursor-pointer transition-all
   disabled:pointer-events-none disabled:opacity-60 disabled:shadow-none`,
  variants: {
    size: {
      none: 'txt-compact-xs-plus gap-x-1',
      xs: 'txt-compact-xs-plus gap-x-1 px-1.5 h-6',
      sm: 'txt-compact-sm-plus gap-x-1 px-2 h-7',
      md: 'txt-compact-sm-plus gap-x-1.5 px-3 h-8',
      lg: 'txt-compact-md-plus gap-x-1.5 px-4 h-9',
      xl: 'txt-compact-lg-plus gap-x-1.5 px-5 h-10',
    },
    fullWidth: {
      true: 'block w-full',
      false: 'inline-block w-auto',
    },
    compact: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    { size: 'xs', compact: true, className: 'h-[22px] px-1.5' },
    { size: 'sm', compact: true, className: 'h-[26px] px-2' },
    { size: 'md', compact: true, className: 'h-[30px] px-2.5' },
    { size: 'lg', compact: true, className: 'h-[34px] px-3' },
    { size: 'xl', compact: true, className: 'h-[40px] px-3.5' },
  ],
});

const getLoaderClasses = (variant) => {
  if (variant === 'default') {
    return 'stroke-black dark:stroke-white fill-black dark:fill-white';
  }
  if (variant === 'filled') {
    return 'stroke-white fill-white';
  }

  return 'stroke-current fill-current';
};

export default createStyles(
  (theme, { radius, fullWidth, compact, color, type }: ButtonStylesParams, { variant, size }) => {
    const variantColor = color || type;
    const colors = theme.fn.variantColors({ color: variantColor, variant });

    return {
      classes: {
        root: `${root({ size, fullWidth, compact })} ${theme.radius[radius]} ${theme.focusRing} 
        ${colors.color} ${colors.background} ${colors.border} ${colors.hover}`,
        icon: 'flex items-center',
        leftIcon: 'mr-1.5',
        rightIcon: 'ml-1.5',
        loader: `${getLoaderClasses(variant)}`,
        centerLoader: 'absolute left-1/2 -translate-x-1/2 opacity-50',
        inner: 'flex items-center justify-center overflow-visible h-full',
        label: 'whitespace-nowrap overflow-hidden h-full flex items-center',
      },
      styles: {
        root: {},
        icon: {},
        leftIcon: {},
        rightIcon: {},
        loader: {},
        centerLoader: {},
        inner: {},
        label: {},
      },
    };
  },
);
