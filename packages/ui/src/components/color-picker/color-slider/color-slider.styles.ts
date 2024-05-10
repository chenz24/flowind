import { createStyles, getSize, rem } from '@/styles';
import { THUMB_SIZES } from '../thumb/thumb.styles';

export default createStyles((theme, _params, { size }) => ({
  classes: {
    sliderThumb: '',
    slider: 'relative outline-0 group',
    sliderOverlay: 'absolute top-0 bottom-0',
  },
  styles: {
    slider: {
      height: `calc(${getSize({ size, sizes: THUMB_SIZES })} + ${rem(2)})`,
      marginLeft: `calc(${getSize({ size, sizes: THUMB_SIZES })} / 2)`,
      marginRight: `calc(${getSize({ size, sizes: THUMB_SIZES })} / 2)`,
    },
    sliderOverlay: {
      left: `calc(${getSize({ size, sizes: THUMB_SIZES })} * -1 / 2 - ${rem(1)})`,
      right: `calc(${getSize({ size, sizes: THUMB_SIZES })} * -1 / 2 - ${rem(1)})`,
      borderRadius: 1000,
    },
  },
}));
