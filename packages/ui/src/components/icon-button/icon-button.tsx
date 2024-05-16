'use client';

import React, { forwardRef } from 'react';

import {
  DefaultProps,
  FlowindColor,
  FlowindSize,
  Selectors,
  StatusType,
  useComponentDefaultProps,
} from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { Loader, LoaderProps } from '../loader';
import { UnstyledButton } from '../unstyled-button';
import useStyles, { IconButtonStylesParams } from './icon-button.styles';

export type IconButtonStylesNames = Selectors<typeof useStyles>;

export interface IconButtonProps
  extends DefaultProps<IconButtonStylesNames, IconButtonStylesParams> {
  __staticSelector?: string;

  /** Icon */
  children?: React.ReactNode;

  type?: StatusType;

  htmlType?: 'button' | 'submit' | 'reset';

  /** Controls appearance, subtle by default */
  variant?: 'filled' | 'outline' | 'light' | 'default' | 'subtle';

  /** Key of theme.colors */
  color?: FlowindColor;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Predefined button size or any valid CSS value to set width and height */
  size?: FlowindSize;

  /** Props added to Loader component (only visible when `loading` prop is set) */
  loaderProps?: LoaderProps;

  /** Indicates loading state */
  loading?: boolean;

  /** Indicates disabled state */
  disabled?: boolean;
}

const defaultProps: Partial<IconButtonProps> = {
  type: 'secondary',
  size: 'sm',
  variant: 'subtle',
  radius: 'sm',
  htmlType: 'button',
};

export const _IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {
    className,
    style,
    color,
    children,
    radius,
    size,
    variant,
    disabled,
    loaderProps,
    loading,
    unstyled,
    htmlType,
    type,
    __staticSelector,
    ...others
  } = useComponentDefaultProps('IconButton', defaultProps, props);

  const { classes, styls, cx } = useStyles(
    { radius, color, type },
    { name: ['IconButton', __staticSelector], unstyled, size, variant },
  );

  const loader = (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Loader color="currentColor" size="100%" data-action-icon-loader {...loaderProps} />
  );

  return (
    <UnstyledButton
      className={cx(classes.root, className)}
      style={{ ...styls.root, ...style }}
      ref={ref}
      disabled={disabled || loading}
      data-disabled={disabled || undefined}
      data-loading={loading || undefined}
      unstyled={unstyled}
      type={htmlType}
      {...others}
    >
      {loading ? loader : children}
    </UnstyledButton>
  );
});

_IconButton.displayName = 'IconButton';

export const IconButton = createPolymorphicComponent<'button', IconButtonProps>(_IconButton);
