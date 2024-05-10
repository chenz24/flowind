import { createStyles, getSize } from '@/styles';

export interface ColorPickerStylesParams {
  fullWidth: boolean;
}

export const sizes = {
  xs: 'w-44',
  sm: 'w-52',
  md: 'w-60',
  lg: 'w-72',
  xl: 'w-80',
};

const bodyPadding = {
  xs: 'pt-1.5',
  sm: 'pt-1.5',
  md: 'pt-2',
  lg: 'pt-2.5',
  xl: 'pt-3',
};

export default createStyles((theme, { fullWidth }: ColorPickerStylesParams, { size }) => ({
  classes: {
    preview: '',
    wrapper: `box-border p-px ${fullWidth ? 'w-full' : getSize({ size, sizes })}`,
    body: `flex box-border ${bodyPadding[size]}`,
    sliders: 'flex-1 box-border [&:not(:only-child)]:mr-2.5',
    slider: 'box-border',
    swatch: 'cursor-pointer',
  },
}));
