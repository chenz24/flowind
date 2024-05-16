import { createStyles, cva, FlowindSize, rem } from '@/styles';

export interface TooltipStylesParams {
  radius: FlowindSize;
  width: number | 'auto';
  multiline: boolean;
  color: 'dark' | 'light';
}

const tooltip = cva({
  base: 'absolute py-1 px-2.5 shadow-elevation-tooltip text-xs leading-5',
  variants: {
    color: {
      light: 'bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-400',
      dark: 'bg-zinc-900 text-gray-400',
    },
    multiline: {
      true: 'whitespace-normal',
      false: 'whitespace-nowrap',
    },
  },
});

export default createStyles((theme, { radius, color, width, multiline }: TooltipStylesParams) => ({
  classes: {
    tooltip: `${theme.radius[radius]} ${tooltip({ color, multiline })}`,
    arrow: `${color === 'dark' ? 'dark:border' : 'border'} z-[1] bg-inherit border-neutral-200 dark:border-zinc-800`,
  },
  styles: {
    tooltip: {
      width: rem(width),
    },
    arrow: {},
  },
}));
