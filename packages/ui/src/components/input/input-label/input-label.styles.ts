import { createStyles } from '@/styles';
import { fontSizes } from '../input-description/input-description.styles';

export default createStyles((theme, _params, { size }) => ({
  classes: {
    label: `inline-block ${fontSizes[size]} font-medium break-words cursor-default
    text-slate-900 dark:text-slate-200`,
    required: 'text-red-500 dark:text-red-700',
  },
}));
