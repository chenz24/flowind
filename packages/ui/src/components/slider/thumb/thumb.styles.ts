import { createStyles, FlowindColor, FlowindNumberSize, getSize, rem } from '@/styles';
import { sizes } from '../slider-root/slider-root.styles';

interface ThumbStyles {
  color: FlowindColor;
  disabled: boolean;
  thumbSize: number | string;
  size: FlowindNumberSize;
}

export default createStyles((theme, { color, disabled, thumbSize, size }: ThumbStyles) => {
  const { border } = theme.fn.variantColors({ variant: 'outline', color });
  return {
    classes: {
      label: `absolute -top-9 select-none pointer-events-none touch-none whitespace-nowrap rounded-sm p-1 
        text-white txt-compact-xs bg-gray-800 dark:bg-gray-600`,
      thumb: `absolute ${disabled ? 'hidden' : 'flex'} cursor-pointer items-center justify-center select-none z-10 
      rounded-full top-1/2 bg-white dark:bg-transparent ${border} border-4 dark:border-white`,
      dragging: 'shadow-sm',
    },
    styles: {
      label: {},
      thumb: {
        transform: 'translate(-50%, -50%)',
        height: thumbSize ? rem(thumbSize) : `calc(${getSize({ sizes, size })} * 2)`,
        width: thumbSize ? rem(thumbSize) : `calc(${getSize({ sizes, size })} * 2)`,
      },
      dragging: {
        transform: 'translate(-50%, -50%) scale(1.05)',
      },
    },
  };
});
