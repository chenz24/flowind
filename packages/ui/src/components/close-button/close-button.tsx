import React, { forwardRef } from 'react';

import { rem, useComponentDefaultProps } from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { IconButton, IconButtonProps } from '../icon-button';
import { CloseIcon } from './close-icon';

export interface CloseButtonProps
  extends Omit<IconButtonProps, 'children'>,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'color' | 'type'> {
  /** Width and height of X icon */
  iconSize?: number | string;
}

const iconSizes = {
  xs: rem(12),
  sm: rem(16),
  md: rem(20),
  lg: rem(28),
  xl: rem(34),
};

const defaultProps: Partial<CloseButtonProps> = {
  size: 'sm',
  type: 'secondary',
  variant: 'subtle',
};

export const _CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { iconSize, size, variant, children, ...others } = useComponentDefaultProps(
    'CloseButton',
    defaultProps,
    props,
  );

  const _iconSize = rem(iconSize || iconSizes[size]);

  return (
    <IconButton ref={ref} __staticSelector="CloseButton" size={size} variant={variant} {...others}>
      {children || <CloseIcon width={_iconSize} height={_iconSize} />}
    </IconButton>
  );
});

_CloseButton.displayName = 'CloseButton';

export const CloseButton = createPolymorphicComponent<'button', CloseButtonProps>(_CloseButton);
