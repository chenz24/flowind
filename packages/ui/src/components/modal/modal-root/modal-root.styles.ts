import { createStyles, FlowindNumberSize, getSize, rem } from '@/styles';

const sizes = {
  xs: rem(320),
  sm: rem(380),
  md: rem(440),
  lg: rem(620),
  xl: rem(780),
};

interface ModalRootStylesParams {
  yOffset: number | string;
  xOffset: number | string;
  centered: boolean;
  fullScreen: boolean;
  width: FlowindNumberSize;
}

export default createStyles(
  (theme, { yOffset, xOffset, centered, fullScreen }: ModalRootStylesParams, { size }) => ({
    classes: {
      content: `max-w-full overflow-y-auto ${fullScreen ? 'rounded-none h-screen' : ''}`,
      inner: `flex justify-center ${centered ? 'items-center' : 'items-start'}`,
    },
    styles: {
      content: {
        flex: fullScreen ? '0 0 100%' : `0 0 ${getSize({ size, sizes })}`,
        maxHeight: fullScreen ? undefined : `calc(100vh - (${rem(yOffset)} * 2))`,
      },
      inner: {
        paddingTop: fullScreen ? 0 : yOffset,
        paddingBottom: fullScreen ? 0 : yOffset,
        paddingLeft: fullScreen ? 0 : xOffset,
        paddingRight: fullScreen ? 0 : xOffset,
      },
    },
  }),
);
