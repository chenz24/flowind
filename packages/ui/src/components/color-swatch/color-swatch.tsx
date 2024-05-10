import React, { forwardRef } from 'react';

import { DefaultProps, FlowindSize, rem, Selectors, useComponentDefaultProps } from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { Box } from '../box';
import useStyles, { ColorSwatchStylesParams } from './color-swatch.styles';

export type ColorSwatchStylesNames = Selectors<typeof useStyles>;

export interface ColorSwatchProps
  extends DefaultProps<ColorSwatchStylesNames, ColorSwatchStylesParams> {
  variant?: string;

  /** Swatch background-color in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width and height */
  size?: number | string;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** ColorSwatch children */
  children?: React.ReactNode;

  /** Determines whether swatch should have inner shadow */
  withShadow?: boolean;
}

const defaultProps: Partial<ColorSwatchProps> = {
  size: rem(25),
  radius: 'xl',
  withShadow: true,
};

export const _ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>((props, ref) => {
  const {
    color,
    size,
    radius,
    className,
    children,
    classNames,
    styles,
    unstyled,
    withShadow,
    variant,
    style,
    ...others
  } = useComponentDefaultProps('ColorSwatch', defaultProps, props);

  const { classes, styls, cx } = useStyles(
    { radius, size },
    { classNames, styles, unstyled, name: 'ColorSwatch', variant },
  );

  return (
    <Box
      className={cx(classes.root, className)}
      style={{ ...styls.root, ...style }}
      ref={ref}
      {...others}
    >
      <div className={cx(classes.alphaOverlay, classes.overlay)} style={styls.alphaOverlay} />
      {withShadow && <div className={cx(classes.shadowOverlay, classes.overlay)} />}
      <div className={classes.overlay} style={{ backgroundColor: color }} />
      <div className={cx(classes.children, classes.overlay)}>{children}</div>
    </Box>
  );
});

_ColorSwatch.displayName = 'ColorSwatch';

export const ColorSwatch = createPolymorphicComponent<'div', ColorSwatchProps>(_ColorSwatch);
