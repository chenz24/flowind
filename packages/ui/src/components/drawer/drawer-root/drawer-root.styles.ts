import { createStyles, getSize, rem } from '@/styles';

const sizes = {
  xs: rem(320),
  sm: rem(380),
  md: rem(440),
  lg: rem(620),
  xl: rem(780),
};

interface DrawerRootStylesParams {
  position: 'bottom' | 'left' | 'right' | 'top';
}

export default createStyles((theme, { position }: DrawerRootStylesParams, { size }) => ({
  classes: {
    header: 'z-[1000]',
    inner: `flex ${position === 'right' ? 'justify-end' : 'justify-start'} ${
      position === 'bottom' ? 'items-end' : 'items-start'
    }`,
    content: 'max-w-full max-h-full overflow-y-auto rounded-none',
  },
  styles: {
    content: {
      flex:
        position === 'right' || position === 'left'
          ? `0 0 ${getSize({ size, sizes })}`
          : '0 0 100%',
      height: position === 'right' || position === 'left' ? '100%' : getSize({ size, sizes }),
    },
  },
}));
