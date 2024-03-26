import { createStyles, cva, FlowindColor, FlowindSize, FlowindTheme } from '@/styles';

export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot';

const BADGE_VARIANTS = ['light', 'filled', 'outline', 'dot'];

export interface BadgeStylesParams {
  color: FlowindColor;
  radius: FlowindSize;
  fullWidth: boolean;
}

interface BadgeStylesOptions {
  variant: BadgeVariant;
  size: FlowindSize;
}

interface GetVariantStylesInput {
  theme: FlowindTheme;
  variant: string;
  color: FlowindColor;
  size: string | number;
}

function getVariantStyles({ theme, variant, color }: GetVariantStylesInput) {
  if (!BADGE_VARIANTS.includes(variant)) {
    return null;
  }

  if (variant === 'dot') {
    const dot = theme.fn.variantColors({ color, variant: 'filled' }).background;
    return {
      rootClasses: '',
      dotClasses: dot,
    };
  }

  const colors = theme.fn.variantColors({ color, variant });
  return {
    rootClasses: `${colors.background} ${colors.color} ${colors.border}`,
    dotClasses: '',
  };
}

const dot = cva({
  base: 'block',
  variants: {
    size: {
      xs: 'w-1 h-1 rounded pl-1 mr-1',
      sm: 'w-1 h-1 rounded pl-1 mr-1',
      md: 'w-1.5 h-1.5 rounded-md pl-1.5 mr-1.5',
      lg: 'w-2 h-2 rounded-lg pl-2 mr-2',
      xl: 'w-[0.625rem] h-[0.625rem] rounded-[0.625rem] pl-[0.625rem] mr-[0.625rem]',
    },
  },
});

const root = cva({
  base: 'no-underline box-border items-center justify-center font-bold text-ellipsis overflow-hidden border border-solid',
  variants: {
    size: {
      xs: 'text-[9px] h-4 px-1',
      sm: 'text-[10px] h-[18px] px-1.5',
      md: 'text-[11px] h-5 px-2',
      lg: 'text-[13px] h-[26px] px-2.5',
      xl: 'text-[16px] h-8 px-3',
    },
    fullWidth: {
      true: 'w-full flex',
      false: 'w-auto inline-flex',
    },
    variant: {
      light: '',
      filled: '',
      outline: '',
      dot: 'bg-transparent border border-solid border-slate-300 dark:border-zinc-700 text-slate:500 dark:text-slate:400',
    },
  },
});

export default createStyles(
  (
    theme,
    { color, radius, fullWidth }: BadgeStylesParams,
    { variant, size }: BadgeStylesOptions,
  ) => {
    const { rootClasses, dotClasses } = getVariantStyles({ theme, variant, color, size });

    return {
      classes: {
        leftSection: 'mr-1',
        rightSection: 'ml-1',
        inner: 'overflow-hidden text-ellipsis whitespace-nowrap',
        root: `${root({ fullWidth, size, variant })} ${rootClasses} ${theme.radius[radius]}`,
        dot: `${dot({ size })} ${dotClasses}`,
      },
      styles: {
        root: {},
        dot: {},
        inner: {},
        leftSection: {},
        rightSection: {},
      },
    };
  },
);
