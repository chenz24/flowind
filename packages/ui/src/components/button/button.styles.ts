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
  base: `relative font-medium select-none cursor-pointer transition-all leading-none
   disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none`,
  variants: {
    size: {
      xs: 'h-6 px-2.5 text-xs',
      sm: 'h-8 px-3 text-sm',
      md: 'h-9 px-3.5 text-base',
      lg: 'h-10 px-4 text-lg',
      xl: 'h-11 px-5 text-xl',
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
        root: `${root({ size, fullWidth, compact })} ${theme.radius[radius]} 
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
