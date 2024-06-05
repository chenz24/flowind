'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, FlowindNumberSize, FlowindSize, useComponentDefaultProps } from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { Box } from '../box';
import useStyles, { ContainerStylesParams } from './container.styles';

export interface ContainerProps extends DefaultProps<never, ContainerStylesParams> {
  variant?: string;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: FlowindSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Card padding used to offset Card.Section, use it instead of p prop */
  padding?: 'none' | FlowindNumberSize;

  /** Adds border styles */
  withBorder?: boolean;

  /** Paper children */
  children?: React.ReactNode;
}

const defaultProps: Partial<ContainerProps> = {
  radius: 'sm',
  padding: 'sm',
  withBorder: true,
  shadow: 'xs',
};

export const _Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const {
    className,
    children,
    radius,
    padding,
    withBorder,
    shadow,
    unstyled,
    variant,
    style,
    ...others
  } = useComponentDefaultProps('Container', defaultProps, props);

  const { classes, styls, cx } = useStyles(
    { radius, shadow, padding },
    { name: 'Container', unstyled, variant },
  );

  return (
    <Box
      className={cx(classes.root, className)}
      data-with-border={withBorder || undefined}
      style={{ ...style, ...styls.root }}
      ref={ref}
      {...others}
    >
      {children}
    </Box>
  );
});

_Container.displayName = 'Container';

export const Container = createPolymorphicComponent<'div', ContainerProps>(_Container);
