import { createStyles, getSize, rem } from '@/styles';
import { THUMB_SIZES } from '../thumb/thumb.styles';

const SATURATION_HEIGHTS = {
  xs: rem(100),
  sm: rem(110),
  md: rem(120),
  lg: rem(140),
  xl: rem(160),
};

export default createStyles((theme, _params, { size }) => {
  const overlayOffset = `calc(${getSize({ size, sizes: THUMB_SIZES })} * -1 / 2 - ${rem(1)})`;
  return {
    classes: {
      saturationThumb: '',
      saturation: 'relative rounded group',
      saturationOverlay: 'rounded absolute',
    },
    styles: {
      saturationThumb: {},
      saturation: {
        height: getSize({ size, sizes: SATURATION_HEIGHTS }),
        margin: `calc(${getSize({ size, sizes: THUMB_SIZES })} / 2)`,
        WebkitTapHighlightColor: 'transparent',
      },
      saturationOverlay: {
        top: overlayOffset,
        bottom: overlayOffset,
        left: overlayOffset,
        right: overlayOffset,
      },
    },
  };
});
