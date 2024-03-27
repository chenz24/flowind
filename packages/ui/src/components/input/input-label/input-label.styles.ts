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
    label: `inline-block ${fontSizes[size]} font-medium break-words cursor-default
    text-slate-900 dark:text-slate-200`,
    required: 'text-red-500 dark:text-red-700',
  },
}));
