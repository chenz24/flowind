import { createStyles, FlowindColor, FlowindNumberSize, getSize, rem } from '@/styles';
import { sizes } from '../slider-root/slider-root.styles';

interface MarksStyles {
  color: FlowindColor;
  disabled: boolean;
  thumbSize?: number;
  size?: FlowindNumberSize;
}

export default createStyles((theme, { color, disabled, size }: MarksStyles) => {
  const { border } = theme.fn.variantColors({ variant: 'outline', color });
  return {
    classes: {
      marksContainer: 'absolute',
      markWrapper: 'absolute h-0 z-[2]',
      mark: 'bg-white pointer-events-none rounded-full',
      markFilled: `${disabled ? 'border-border-base' : 'border-transparent'}`,
      markLabel: 'cursor-pointer select-none whitespace-nowrap text-sm text-fg-muted',
    },
    styles: {
      marksContainer: {
        // right: thumbSize ? rem(thumbSize / 2) : getSize({ sizes, size }),
        // left: thumbSize ? rem(thumbSize / 2) : getSize({ sizes, size }),
        right: 0,
        left: 0,
      },
      markWrapper: {
        top: `calc(${rem(getSize({ sizes, size }))} / 1.5)`,
      },
      mark: {
        height: `calc(${getSize({ sizes, size })} / 1.5)`,
        width: `calc(${getSize({ sizes, size })} / 1.5)`,
        transform: `translateX(calc(-${getSize({ sizes, size })} / 2))`,
      },
      markLabel: {
        transform: 'translate(-50%, 0.3125rem)',
      },
    },
  };
});
