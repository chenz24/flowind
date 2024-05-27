import { createStyles, rem } from '@/styles';

interface SwatchesStyles {
  swatchesPerRow: number;
}

export default createStyles((theme, { swatchesPerRow }: SwatchesStyles) => ({
  classes: {
    swatch: 'h-0 box-content m-0.5',
    swatches: 'flex flex-wrap -ml-0.5 -mr-0.5',
  },
  styles: {
    swatch: {
      width: `calc(${100 / swatchesPerRow}% - ${rem(4)})`,
      height: 0,
      paddingBottom: `calc(${100 / swatchesPerRow}% - ${rem(4)})`,
    },
    swatches: {},
  },
}));
