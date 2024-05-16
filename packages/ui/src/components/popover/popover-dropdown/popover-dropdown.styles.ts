import { createStyles, FlowindSize } from '@/styles';

export interface PopoverStylesParams {
  radius?: FlowindSize;
  shadow?: FlowindSize;
}

export default createStyles((theme, { radius, shadow }: PopoverStylesParams) => ({
  classes: {
    dropdown: `absolute bg-bg-base text-fg-base shadow-elevation-flyout
    focus:outline-none py-2 px-3 ${theme.radius[radius || 'sm']}`,
    arrow: 'z-[1] bg-inherit border border-solid border-neutral-300 dark:border-gray-600',
  },
}));
