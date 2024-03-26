import { createStyles } from '@/styles';

export const fontSizes = {
  xs: 'text-[10px]',
  sm: 'text-[12px]',
  md: 'text-[14px]',
  lg: 'text-[16px]',
  xl: 'text-[18px]',
};

export default createStyles((theme, _params, { size }) => ({
  classes: {
    description: `break-words block leading-none ${fontSizes[size]} text-gray-500`,
  },
  styles: {
    description: {},
  },
}));
