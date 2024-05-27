import { createStyles } from '@/styles';

export const fontSizes = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-xs',
  lg: 'text-sm',
  xl: 'text-sm',
};

export default createStyles((theme, _params, { size }) => ({
  classes: {
    description: `break-words block leading-none ${fontSizes[size]} text-gray-500`,
  },
  styles: {
    description: {},
  },
}));
