import { createStyles, rem } from '@/styles';

export const sizes = {
  xs: rem(4),
  sm: rem(6),
  md: rem(8),
  lg: rem(10),
  xl: rem(12),
};

export default createStyles(() => ({
  classes: {
    root: 'relative outline-0 flex flex-col items-center touch-none',
  },
  styles: {
    root: {
      WebkitTapHighlightColor: 'transparent',
    },
  },
}));
