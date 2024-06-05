'use client';

import React, { forwardRef } from 'react';

import { clx, DefaultProps, useComponentDefaultProps } from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { Box } from '../box';
import useStyles from './unstyled-button.styles';

export interface UnstyledButtonProps extends DefaultProps {
  variant?: string;
  children?: React.ReactNode;
}

export const _UnstyledButton = forwardRef<
  HTMLDivElement,
  UnstyledButtonProps & { component?: any }
>((props, ref) => {
  const {
    className,
    component = 'button',
    unstyled,
    variant,
    ...others
  } = useComponentDefaultProps('UnstyledButton', {}, props);

  const { classes } = useStyles(null, { name: 'UnstyledButton', unstyled, variant });

  return (
    <Box
      component={component}
      ref={ref}
      className={clx(classes.root, className)}
      type={component === 'button' ? 'button' : undefined}
      {...others}
    />
  );
});

_UnstyledButton.displayName = 'UnstyledButton';

export const UnstyledButton = createPolymorphicComponent<'button', UnstyledButtonProps>(
  _UnstyledButton,
);
