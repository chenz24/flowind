import React, { forwardRef } from 'react';

import { DefaultProps, FlowindNumberSize, Selectors } from '@/styles';
import { Box } from '../../box';
import useStyles from './slider-root.styles';

export type SliderRootStylesNames = Selectors<typeof useStyles>;

export interface SliderRootProps
  extends DefaultProps<SliderRootStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  size: FlowindNumberSize;
  children: React.ReactNode;
  disabled: boolean;
  variant: string;
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  (
    {
      className,
      // size,
      classNames,
      styles,
      // disabled,
      unstyled,
      variant,
      ...others
    }: SliderRootProps,
    ref,
  ) => {
    const { classes, styls, cx } = useStyles(null, {
      name: 'SliderRoot',
      classNames,
      styles,
      unstyled,
      variant,
      // size,
    });
    return (
      <Box
        {...others}
        tabIndex={-1}
        className={cx(classes.root, className)}
        style={styls.root}
        ref={ref}
      />
    );
  },
);

SliderRoot.displayName = 'SliderRoot';
