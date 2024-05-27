'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, FlowindSize, getDefaultZIndex, useComponentDefaultProps } from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { Box } from '../box';
import useStyles, { OverlayStylesParams } from './overlay.styles';

export interface OverlayProps extends DefaultProps<never, OverlayStylesParams> {
  variant?: string;

  /** Overlay background-color opacity 0–1, disregarded when gradient prop is set, 0.6 by default */
  opacity?: number;

  /** Overlay background-color, #000 by default */
  color?: React.CSSProperties['backgroundColor'];

  /** Overlay background blur, 0 by default */
  blur?: number | string;

  /** Changes overlay to gradient, if set color prop is ignored */
  gradient?: string;

  /** Overlay z-index, 200 by default */
  zIndex?: React.CSSProperties['zIndex'];

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Content rendered inside overlay */
  children?: React.ReactNode;

  /** Determines whether content inside overlay should be vertically and horizontally centered, false by default */
  center?: boolean;

  /** Determines whether overlay should have fixed position instead of absolute, false by default */
  fixed?: boolean;
}

const defaultProps: Partial<OverlayProps> = {
  opacity: 0.6,
  color: '#000',
  zIndex: getDefaultZIndex('modal'),
  radius: 'xs',
};

const _Overlay = forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
  const {
    variant,
    opacity,
    color,
    blur,
    gradient,
    zIndex,
    radius,
    children,
    className,
    classNames,
    styles,
    unstyled,
    center,
    fixed,
    style,
    ...others
  } = useComponentDefaultProps('Overlay', defaultProps, props);

  const { classes, styls, cx } = useStyles(
    { color, opacity, blur, radius, gradient, fixed, zIndex },
    { name: 'Overlay', classNames, styles, unstyled, variant },
  );

  return (
    <Box
      ref={ref}
      className={cx(classes.root, className)}
      style={{ ...styls.root, ...style }}
      data-center={center || undefined}
      {...others}
    >
      {children}
    </Box>
  );
});

_Overlay.displayName = 'Overlay';
export const Overlay = createPolymorphicComponent<'div', OverlayProps>(_Overlay);
