import { createStyles } from '@/styles';

export const fontSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-base',
};

export default createStyles((theme, _params, { size }) => ({
  classes: {
    label: `inline-block ${fontSizes[size]} break-words cursor-default
    text-fg-base`,
    required: 'text-red-500 dark:text-red-700',
  },
}));
