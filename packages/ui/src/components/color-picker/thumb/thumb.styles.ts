import { createStyles, rem } from '@/styles';

export const THUMB_SIZES = {
  xs: rem(8),
  sm: rem(12),
  md: rem(16),
  lg: rem(20),
  xl: rem(22),
};

export default createStyles((theme, _params, { size }) => {
  const _size = THUMB_SIZES[size];
  return {
    classes: {
      thumb:
        'overflow-hidden absolute bg-transparent outline-border-interactive outline-2 outline-offset-2 group-focus:outline',
    },
    styles: {
      thumb: {
        width: _size,
        height: _size,
        borderRadius: _size,
        boxShadow: `0 0 ${rem(1)} rgba(0, 0, 0, .6)`,
        border: `${rem(2)} solid #fff`,
      },
    },
  };
});
