import { createStyles, FlowindColor, FlowindSize, rem } from '@/styles';

const sizes = {
  xs: rem(3),
  sm: rem(5),
  md: rem(8),
  lg: rem(12),
  xl: rem(16),
};

const fontSizes = {
  xs: 'text-[2px]',
  sm: 'text-[6px]',
  md: 'text-[8px]',
  lg: 'text-[9px]',
  xl: 'text-[10px]',
};

export interface ProgressStylesParams {
  color: FlowindColor;
  radius: FlowindSize;
}

export default createStyles((theme, { color, radius }: ProgressStylesParams, { size }) => {
  const _radius = theme.radius[radius];
  const { background } = theme.fn.variantColors({ color, variant: 'filled' });
  return {
    classes: {
      root: `relative overflow-hidden bg-bg-subtle-pressed ${_radius}`,
      bar: `flex justify-center items-center absolute top-0 bottom-0 left-0 h-full ${_radius} ${background}
      data-[striped=true]:bg-[length:20px_20px] data-[striped=true]:bg-progress-striped
      data-[animate=true]:animate-stripes-animation`,
      label: `select-none overflow-hidden whitespace-nowrap text-fg-on-color ${fontSizes[size || 'sm']}`,
    },
    styles: {
      root: {
        height: sizes[size || 'sm'],
      },
    },
  };
});
