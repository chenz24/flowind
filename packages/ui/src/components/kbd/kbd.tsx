import React, { forwardRef } from 'react';

import { DefaultProps, FlowindSize, useComponentDefaultProps } from '@/styles';
import { Box } from '../box';
import useStyles from './kbd.styles';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  variant?: string;

  /** Keyboard key */
  children: React.ReactNode;

  /** Controls component size, 'xs' by default */
  size?: FlowindSize;
}

const defaultProps: Partial<KbdProps> = {
  size: 'xs',
};

export const Kbd = forwardRef<HTMLElement, KbdProps>((props: KbdProps, ref) => {
  const { className, children, unstyled, variant, size, style, ...others } =
    useComponentDefaultProps('Kbd', defaultProps, props);

  const { classes, styls, cx } = useStyles(null, { name: 'Kbd', unstyled, variant, size });

  return (
    <Box
      component="kbd"
      className={cx(classes.root, className)}
      style={{ ...styls.root, ...style }}
      ref={ref}
      {...others}
    >
      {children}
    </Box>
  );
});

Kbd.displayName = 'Kbd';
