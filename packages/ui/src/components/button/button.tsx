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
import { ButtonGroup } from './button-group/button-group';
import useStyles, { ButtonStylesParams } from './button.styles';
import { FancyButton } from './fancy-button';

export type ButtonStylesNames = Selectors<typeof useStyles>;

export interface ButtonProps extends DefaultProps<ButtonStylesNames, ButtonStylesParams> {
  /** Predefined button size */
  size?: FlowindSize;

  type?: StatusType;

  /** Button type attribute */
  htmlType?: 'submit' | 'button' | 'reset';

  /** Button color from theme */
  color?: FlowindColor;

  /** Content displayed on the left side of the button label */
  leftIcon?: React.ReactNode;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Sets button width to 100% of parent element */
  fullWidth?: boolean;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Controls button appearance */
  variant?: 'filled' | 'outline' | 'light' | 'default' | 'subtle' | 'fancy';

  /** Reduces vertical and horizontal spacing */
  compact?: boolean;

  /** Indicate loading state */
  loading?: boolean;

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Loader position relative to button label */
  loaderPosition?: 'left' | 'right' | 'center';

  /** Button label */
  children?: React.ReactNode;

  /** Disabled state */
  disabled?: boolean;

  /** The native button click event handler. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const defaultProps: Partial<ButtonProps> = {
  size: 'md',
  radius: 'sm',
  htmlType: 'button',
  variant: 'filled',
  loaderPosition: 'left',
  type: 'primary',
  // color: 'blue',
};

export const _Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    size,
    color,
    htmlType,
    type,
    disabled,
    children,
    leftIcon,
    rightIcon,
    fullWidth,
    variant,
    radius,
    compact,
    loading,
    loaderPosition,
    loaderProps,
    classNames,
    styles,
    unstyled,
    onClick,
    ...others
  } = useComponentDefaultProps('Button', defaultProps, props);

  const { classes, cx } = useStyles(
    {
      radius,
      color,
      fullWidth,
      compact,
      withLeftIcon: !!leftIcon,
      withRightIcon: !!rightIcon,
      type,
    },
    { name: 'Button', unstyled, classNames, styles, variant, size },
  );

  const loader = <Loader className={classes.loader} size={size} {...loaderProps} />;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (loading || disabled) {
      event.preventDefault();
      return;
    }

    onClick && onClick(event);
  };

  if (variant === 'fancy') {
    return (
      <FancyButton
        variant={type}
        disabled={disabled}
        className={className}
        size={size}
        isLoading={loading}
        children={children}
        onClick={handleClick}
        ref={ref}
      />
    );
  }

  return (
    <UnstyledButton
      className={cx(classes.root, className)}
      type={htmlType}
      disabled={disabled || loading}
      data-button
      data-disabled={disabled || undefined}
      data-loading={loading || undefined}
      ref={ref}
      unstyled={unstyled}
      onClick={handleClick}
      {...others}
    >
      <div className={classes.inner}>
        {(leftIcon || (loading && loaderPosition === 'left')) && (
          <span className={cx(classes.icon, classes.leftIcon)}>
            {loading && loaderPosition === 'left' ? loader : leftIcon}
          </span>
        )}

        {loading && loaderPosition === 'center' && (
          <span className={classes.centerLoader}>{loader}</span>
        )}

        <span className={classes.label}>{children}</span>

        {(rightIcon || (loading && loaderPosition === 'right')) && (
          <span className={cx(classes.icon, classes.rightIcon)}>
            {loading && loaderPosition === 'right' ? loader : rightIcon}
          </span>
        )}
      </div>
    </UnstyledButton>
  );
}) as any;

_Button.displayName = 'Button';
_Button.Group = ButtonGroup;

export const Button = createPolymorphicComponent<
  'button',
  ButtonProps,
  { Group: typeof ButtonGroup }
>(_Button);
