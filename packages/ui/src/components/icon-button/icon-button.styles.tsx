import { createStyles, cva, FlowindColor, FlowindSize, StatusType } from '@/styles';

export interface IconButtonStylesParams {
  color: FlowindColor;
  radius: FlowindSize;
  type: StatusType;
}

const root = cva({
  base: 'relative inline-flex items-center justify-center leading-none p-0',
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-9 w-9',
      lg: 'h-10 w-10',
      xl: 'h-11 w-11',
    },
  },
});

export default createStyles(
  (theme, { radius, color, type }: IconButtonStylesParams, { variant, size }) => {
    const variantColor = color || type;
    const colors = theme.fn.variantColors({ color: variantColor, variant });

    return {
      classes: {
        root: `${root({ size })} ${theme.radius[radius]} ${colors.border} 
        ${colors.background} ${colors.color} ${colors.hover}`,
      },
      styles: {
        root: {},
      },
    };
  },
);
