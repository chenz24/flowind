import React, { forwardRef } from 'react';

import { DefaultProps, FlowindSize, useComponentDefaultProps } from '@/styles';
import { Box } from '../box';
import useStyles, { SkeletonStylesParams } from './skeleton.styles';

export interface SkeletonProps
  extends DefaultProps<never, SkeletonStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Should skeleton overlay be displayed */
  visible?: boolean;

  /** Skeleton height */
  height?: number | string;

  /** Skeleton width */
  width?: number | string;

  /** If Skeleton is a circle, it's width and border-radius will be equal to height */
  circle?: boolean;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Whether to show the animation effect */
  animate?: boolean;
}

const defaultProps: Partial<SkeletonProps> = {
  height: 'auto',
  width: '100%',
  visible: true,
  animate: true,
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const {
    height,
    width,
    visible,
    animate,
    className,
    circle,
    radius,
    unstyled,
    variant,
    style,
    ...others
  } = useComponentDefaultProps('Skeleton', defaultProps, props);

  const { classes, styls, cx } = useStyles(
    { height, width, circle, radius, animate },
    { name: 'Skeleton', unstyled, variant },
  );

  return (
    <Box
      className={cx(classes.root, { [classes.visible]: visible }, className)}
      style={{ ...style, ...styls.root }}
      ref={ref}
      {...others}
    />
  );
});

Skeleton.displayName = 'Skeleton';
