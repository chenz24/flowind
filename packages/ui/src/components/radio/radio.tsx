import React, { forwardRef } from 'react';

import { useId } from '@flowind/hooks';
import { DefaultProps, FlowindSize, Selectors, useComponentDefaultProps } from '@/styles';
import { ForwardRefWithStaticComponents } from '@/utils/forwardRef-with-static-components';
import { InlineInput, InlineInputStylesNames } from '../inline-input';
import { useRadioGroupContext } from './radio-group.context';
import { RadioGroup } from './radio-group/radio-group';
import { RadioIcon } from './radio-icon';
import useStyles, { RadioStylesParams } from './radio.styles';

export type RadioStylesNames = Selectors<typeof useStyles> | InlineInputStylesNames;

export interface RadioProps
  extends DefaultProps<RadioStylesNames, RadioStylesParams>,
    Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  variant?: string;

  /** Radio label */
  label?: React.ReactNode;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: FlowindSize;

  /** Replace default icon */
  icon?: React.FC<React.ComponentPropsWithoutRef<'svg'>>;

  /** Props spread to root element */
  wrapperProps?: Record<string, any>;

  /** Position of label */
  labelPosition?: 'left' | 'right';

  /** description, displayed after label */
  description?: React.ReactNode;

  /** Displays error message after input */
  error?: React.ReactNode;
}

const defaultProps: Partial<RadioProps> = {
  icon: RadioIcon,
  size: 'sm',
  labelPosition: 'right',
};

type RadioComponent = ForwardRefWithStaticComponents<RadioProps, { Group: typeof RadioGroup }>;

export const Radio: RadioComponent = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    className,
    style,
    id,
    label,
    size,
    // title,
    disabled,
    classNames,
    styles,
    icon: Icon,
    wrapperProps,
    unstyled,
    labelPosition,
    description,
    error,
    variant,
    ...others
  } = useComponentDefaultProps('Radio', defaultProps, props);
  const ctx = useRadioGroupContext();

  const contextSize = ctx?.size ?? size;
  const componentSize = props.size ? size : contextSize;

  const { classes } = useStyles(
    { labelPosition, error: !!error },
    { name: 'Radio', classNames, styles, unstyled, variant, size: componentSize },
  );

  const uuid = useId(id);

  const contextProps = ctx
    ? {
        checked: ctx.value === others.value,
        name: others.name ?? ctx.name,
        onChange: ctx.onChange,
      }
    : {};

  return (
    <InlineInput
      className={className}
      style={style}
      id={uuid}
      size={componentSize}
      labelPosition={labelPosition}
      label={label}
      description={description}
      error={error}
      disabled={disabled}
      __staticSelector="Radio"
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      data-checked={contextProps.checked || undefined}
      variant={variant}
      {...wrapperProps}
    >
      <div className={classes.inner}>
        <input
          ref={ref}
          className={classes.radio}
          type="radio"
          id={uuid}
          disabled={disabled}
          {...others}
          {...contextProps}
        />
        <Icon className={classes.icon} aria-hidden />
      </div>
    </InlineInput>
  );
}) as any;

Radio.displayName = 'Radio';
Radio.Group = RadioGroup;
