import { createStyles } from '@/styles';
import { fontSizes } from '../input-description/input-description.styles';

export default createStyles((theme, _params, { size }) => ({
  classes: {
    error: `block break-words text-red-500 dark:text-red-700 ${fontSizes[size]} leading-5`,
  },
}));
