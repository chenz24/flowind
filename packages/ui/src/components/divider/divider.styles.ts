import { createStyles, cva, FlowindColor } from '@/styles';

export interface DividerStylesParams {
  color: FlowindColor;
  labelPosition: 'left' | 'center' | 'right';
  withLabel: boolean;
  orientation: 'horizontal' | 'vertical';
}

const borderLeft = {
  xs: 'w-[1px] border-l-[1px]',
  sm: 'border-l-2',
  md: 'border-l-[3px]',
  lg: 'border-l-4',
  xl: 'border-l-[5px]',
};

const borderTopBefore = {
  xs: 'before:border-t-[1px]',
  sm: 'before:border-t-2',
  md: 'before:border-t-[3px]',
  lg: 'before:border-t-4',
  xl: 'before:border-t-[5px]',
};

const borderTopAfter = {
  xs: 'after:border-t-[1px]',
  sm: 'after:border-t-2',
  md: 'after:border-t-[3px]',
  lg: 'after:border-t-4',
  xl: 'after:border-t-[5px]',
};

const variants = {
  vertical: {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  },
  before: {
    solid: 'before:border-solid',
    dashed: 'before:border-dashed',
    dotted: 'before:border-dotted',
  },
  after: {
    solid: 'after:border-solid',
    dashed: 'after:border-dashed',
    dotted: 'after:border-dotted',
  },
};

const divider = (variant, size) =>
  cva({
    base: `before:block border-zinc-200 dark:border-zinc-800 before:border-zinc-200 dark:before:border-zinc-800 
    after:border-zinc-200 dark:after:border-zinc-800 text-xs text-zinc-500`,
    variants: {
      withLabel: {
        true: 'flex items-center',
        false: `${variants.before[variant]} ${borderTopBefore[size]}`,
      },
      position: {
        left: '',
        right: '',
        center: '',
      },
      orientation: {
        horizontal: '',
        vertical: `before:!content-none self-stretch h-auto ${borderLeft[size]} ${variants.vertical[variant]}`,
      },
    },
    compoundVariants: [
      {
        withLabel: true,
        position: 'right',
        className: `before:me-2 before:flex-1 ${variants.before[variant]} ${borderTopBefore[size]}`,
      },
      {
        withLabel: true,
        position: 'left',
        className: `after:ms-2 after:flex-1 ${variants.after[variant]} ${borderTopAfter[size]}`,
      },
      {
        withLabel: true,
        position: 'center',
        className: `after:content-[""] before:flex-1 before:me-2 after:flex-1 after:ms-2 
        ${variants.before[variant]} ${borderTopBefore[size]} ${variants.after[variant]} ${borderTopAfter[size]}`,
      },
    ],
  });

export default createStyles(
  (theme, { labelPosition, withLabel, orientation }: DividerStylesParams, { size, variant }) => {
    const dividerCva = divider(variant, size);
    const dividerClasses = dividerCva({ withLabel, position: labelPosition, orientation });
    return {
      classes: {
        root: dividerClasses,
      },
      styles: {
        horizontal: {},
        vertical: {},
      },
    };
  },
);
