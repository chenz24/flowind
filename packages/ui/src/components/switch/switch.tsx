'use client';

import React, { forwardRef } from 'react';

import { useId, useUncontrolled } from '@flowind/hooks';
import { DefaultProps, FlowindSize, Selectors, useComponentDefaultProps } from '@/styles';
import { ForwardRefWithStaticComponents } from '@/utils/forwardRef-with-static-components';
// import { extractSystemStyles } from '../box';
import { InlineInput, InlineInputStylesNames } from '../inline-input';
import { useSwitchGroupContext } from './switch-group.context';
import { SwitchGroup } from './switch-group/switch-group';
import useStyles, { SwitchStylesParams } from './switch.styles';

export type SwitchStylesNames = Selectors<typeof useStyles> | InlineInputStylesNames;

export interface SwitchProps
  extends DefaultProps<SwitchStylesNames, SwitchStylesParams>,
    Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  variant?: string;

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Inner label when Switch is in unchecked state */
  offLabel?: React.ReactNode;

  /** Inner label when Switch is in checked state */
  onLabel?: React.ReactNode;

  /** Predefined size value */
  size?: FlowindSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: FlowindSize;

  /** Props spread to wrapper element */
  wrapperProps?: Record<string, any>;

  /** Icon inside the thumb of switch */
  thumbIcon?: React.ReactNode;

  /** Position of label */
  labelPosition?: 'left' | 'right';

  /** description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
  error?: React.ReactNode;
}

const defaultProps: Partial<SwitchProps> = {
  offLabel: '',
  onLabel: '',
  size: 'sm',
  radius: 'xl',
  error: false,
};

type SwitchComponent = ForwardRefWithStaticComponents<SwitchProps, { Group: typeof SwitchGroup }>;

export const Switch: SwitchComponent = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    className,
    label,
    offLabel,
    onLabel,
    id,
    style,
    size,
    radius,
    wrapperProps,
    children,
    unstyled,
    styles,
    classNames,
    thumbIcon,
    checked,
    defaultChecked,
    onChange,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    ...others
  } = useComponentDefaultProps('Switch', defaultProps, props);

  const ctx = useSwitchGroupContext();
  const _size = ctx?.size || size;

  const { classes, styls } = useStyles(
    { radius, labelPosition, error: !!error },
    { name: 'Switch', classNames, styles, unstyled, size: _size, variant },
  );

  // const { systemStyles, rest } = extractSystemStyles(others);
  const uuid = useId(id);

  const contextProps = ctx
    ? {
        checked: ctx.value.includes(others.value as string),
        onChange: ctx.onChange,
      }
    : {};

  const [_checked, handleChange] = useUncontrolled({
    value: contextProps.checked ?? checked,
    defaultValue: defaultChecked,
    finalValue: false,
  });

  return (
    <InlineInput
      className={className}
      style={style}
      id={uuid}
      size={ctx?.size || size}
      labelPosition={labelPosition}
      label={label}
      description={description}
      error={error}
      disabled={disabled}
      __staticSelector="Switch"
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      data-checked={contextProps.checked || undefined}
      variant={variant}
      {...wrapperProps}
    >
      <input
        {...others}
        disabled={disabled}
        checked={_checked}
        onChange={(event) => {
          ctx ? contextProps.onChange(event) : onChange?.(event);
          handleChange(event.currentTarget.checked);
        }}
        id={uuid}
        ref={ref}
        type="checkbox"
        className={classes.input}
        style={styls.input}
      />

      <label htmlFor={uuid} className={classes.track} style={styls.track}>
        <div className={classes.thumb} style={styls.thumb}>
          {thumbIcon}
        </div>
        <div className={classes.trackLabel} style={styls.trackLabel}>
          {_checked ? onLabel : offLabel}
        </div>
      </label>
    </InlineInput>
  );
}) as any;

Switch.displayName = 'Switch';
Switch.Group = SwitchGroup;
