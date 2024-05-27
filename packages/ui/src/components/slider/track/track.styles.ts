import { createStyles, FlowindColor, FlowindNumberSize, getSize, rem } from '@/styles';
import { sizes } from '../slider-root/slider-root.styles';

interface TrackStyles {
  radius: FlowindNumberSize;
  color: FlowindColor;
  disabled: boolean;
  inverted: boolean;
  thumbSize?: number;
  size?: FlowindNumberSize;
}

export default createStyles(
  (theme, { radius, color, disabled, inverted, thumbSize }: TrackStyles, { size }) => {
    const { background } = theme.fn.variantColors({ variant: 'filled', color });
    return {
      classes: {
        trackContainer: 'flex items-center w-full cursor-pointer',
        track: 'relative w-full',
        trackLine: `absolute top-0 bottom-0 z-0 ${theme.radius[radius]} 
      ${inverted ? (disabled ? 'bg-bg-hover' : background) : 'bg-gray-200 dark:bg-gray-700'}`,
        bar: `absolute top-0 bottom-0 z-[1] ${theme.radius[radius]}
        ${inverted ? 'bg-gray-200 dark:bg-gray-700' : disabled ? 'bg-gray-300 dark:bg-gray-600' : background}`,
      },
      styles: {
        trackContainer: {
          height: `calc(${getSize({ sizes, size })} * 2)`,
        },
        track: {
          height: getSize({ sizes, size }),
          // marginRight: thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes }),
          // marginLeft: thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes }),
        },
        trackLine: {
          right: `calc(${thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes })} * -1)`,
          left: `calc(${thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes })} * -1)`,
        },
        bar: {},
      },
    };
  },
);
