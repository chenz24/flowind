import { createStyles, cva, FlowindSize, rem } from '@/styles';

export interface TooltipStylesParams {
  radius: FlowindSize;
  width: number | 'auto';
  color: 'dark' | 'light';
}

const tooltip = cva({
  base: 'py-1 px-2.5 shadow-elevation-tooltip text-xs leading-5',
  variants: {
    color: {
      light: 'bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-400',
      dark: 'bg-zinc-900 text-gray-300',
    },
    multiline: {
      true: 'whitespace-normal',
      false: 'whitespace-nowrap',
    },
  },
});

export default createStyles((theme, { radius, color, width }: TooltipStylesParams) => ({
  classes: {
    tooltip: `${theme.radius[radius]} ${tooltip({ color })}`,
    content: `relative z-50 max-w-[280px] bg-bg-base text-sm text-fg-subtle 
    animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 
    data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
    data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${theme.radius[radius]} ${tooltip({ color })}`,
    arrow: '-my-px fill-bg-base drop-shadow-[0_2px_0_var(--border-base)]',
  },
  styles: {
    content: {
      width: rem(width),
    },
    arrow: {},
  },
}));
