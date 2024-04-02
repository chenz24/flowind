import { createStyles, FlowindSize } from '@/styles';

export interface PopoverStylesParams {
  radius?: FlowindSize;
  shadow?: FlowindSize;
}

export default createStyles((theme, { radius, shadow }: PopoverStylesParams) => ({
  classes: {
    dropdown: `absolute bg-white dark:bg-zinc-800 border border-solid border-zinc-200 dark:border-gray-700
    focus:outline-none py-3 px-4 ${theme.radius[radius || 'sm']} ${theme.shadows[shadow] || ''}`,
    arrow: 'z-[1] bg-inherit border border-solid border-neutral-300 dark:border-gray-600',
  },
}));
