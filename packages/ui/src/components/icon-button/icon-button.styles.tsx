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
      xs: 'size-[1.125rem]',
      sm: 'size-[1.375rem]',
      md: 'size-[1.75rem]',
      lg: 'size-[2.125rem]',
      xl: 'size-[2.75rem]',
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
