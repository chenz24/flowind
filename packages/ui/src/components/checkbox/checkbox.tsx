'use client';

import React, { forwardRef } from 'react';

import { useId } from '@flowind/hooks';
import { DefaultProps, FlowindSize, Selectors, useComponentDefaultProps } from '@/styles';
import { ForwardRefWithStaticComponents } from '@/utils/forwardRef-with-static-components';
import { InlineInput, InlineInputStylesNames } from '../inline-input';
import { useCheckboxGroupContext } from './checkbox-group.context';
import { CheckboxGroup } from './checkbox-group/checkbox-group';
import { CheckboxIcon } from './checkbox-icon';
import useStyles, { CheckboxStylesParams } from './checkbox.styles';

export type CheckboxStylesNames = Selectors<typeof useStyles> | InlineInputStylesNames;

export interface CheckboxProps
  extends DefaultProps<CheckboxStylesNames, CheckboxStylesParams>,
    Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  variant?: string;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Controls label font-size and checkbox width and height */
  size?: FlowindSize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, if set, `checked` prop is ignored */
  indeterminate?: boolean;

  /** Props added to the root element */
  wrapperProps?: Record<string, any>;

  /** Icon rendered when checkbox has checked or indeterminate state */
  icon?: React.FC<{ indeterminate: boolean; className: string }>;

  /** Position of the label */
  labelPosition?: 'left' | 'right';

  /** Description, displayed after the label */
  description?: React.ReactNode;

  /** Error message displayed after the input */
  error?: React.ReactNode;
}

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
  radius: 'sm',
  icon: CheckboxIcon,
  labelPosition: 'right',
};

type CheckboxComponent = ForwardRefWithStaticComponents<
  CheckboxProps,
  { Group: typeof CheckboxGroup }
>;

export const Checkbox: CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      className,
      style,
      checked,
      disabled,
      label,
      indeterminate,
      id,
      size,
      radius,
      wrapperProps,
      // children,
      classNames,
      styles,
      icon: Icon,
      unstyled,
      labelPosition,
      description,
      error,
      variant,
      ...others
    } = useComponentDefaultProps('Checkbox', defaultProps, props);

    const ctx = useCheckboxGroupContext();
    const uuid = useId(id);
    // const { systemStyles, rest } = extractSystemStyles(others);
    const { classes } = useStyles(
      {
        radius,
        labelPosition,
        error: !!error,
        indeterminate,
      },
      { name: 'Checkbox', classNames, styles, unstyled, variant, size: ctx?.size || size },
    );

    const contextProps = ctx
      ? {
          checked: ctx.value.includes(others.value as string),
          onChange: ctx.onChange,
        }
      : {};

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
        __staticSelector="Checkbox"
        classNames={classNames}
        styles={styles}
        unstyled={unstyled}
        data-checked={contextProps.checked || undefined}
        variant={variant}
        {...wrapperProps}
      >
        <div className={classes.inner}>
          <input
            id={uuid}
            ref={ref}
            type="checkbox"
            className={classes.input}
            checked={checked}
            disabled={disabled}
            {...others}
            {...contextProps}
          />
          <Icon indeterminate={indeterminate} className={classes.icon} />
        </div>
      </InlineInput>
    );
  },
) as any;

Checkbox.displayName = 'Checkbox';
Checkbox.Group = CheckboxGroup;
