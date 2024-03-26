import React, { forwardRef } from 'react';

import { InputError } from '@/components/input/input-error/input-error';
import { InputLabel } from '@/components/input/input-label/input-label';
import { InputPlaceholder } from '@/components/input/input-placeholder/input-placeholder';
import { InputWrapper } from '@/components/input/input-wrapper/InputWrapper';
import {
  DefaultProps,
  FlowindSize,
  rem,
  Selectors,
  useComponentDefaultProps,
  Variants,
} from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { Box } from '../box';
import { InputDescription } from './input-description/input-description';
import { useInputWrapperContext } from './input-wrapper.context';
import useStyles from './Input.styles';

export type InputStylesNames = Selectors<typeof useStyles>;

export interface InputSharedProps {
  /** Left section of input */
  addonBefore?: React.ReactNode;

  /** Right section of input */
  addonAfter?: React.ReactNode;

  /** Prefix element of input, like icon */
  prefix?: React.ReactNode;

  /** Suffix element of input, like icon */
  suffix?: React.ReactNode;

  /** Width of prefix section */
  prefixWidth?: React.CSSProperties['width'];

  /** Width of suffixWidth section */
  suffixWidth?: React.CSSProperties['width'];

  /** Right section of input, similar to icon but on the right */
  rightSection?: React.ReactNode;

  /** Width of right section, is used to calculate input padding-right */
  rightSectionWidth?: React.CSSProperties['width'];

  /** Props spread to rightSection div element */
  rightSectionProps?: Record<string, any>;

  /** Properties spread to root element */
  wrapperProps?: Record<string, any>;

  /** Sets required on input element */
  required?: boolean;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Defines input appearance, defaults to default in light color scheme and filled in dark */
  variant?: Variants<'default' | 'filled' | 'unstyled'>;

  /** Disabled input state */
  disabled?: boolean;

  /** Input size */
  size?: FlowindSize;
}

export interface InputProps extends InputSharedProps, DefaultProps<InputStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;

  /** Determines whether input has error styles */
  error?: React.ReactNode;

  /** Will input have multiple lines? */
  multiline?: boolean;

  /** Determines whether cursor on input should be pointer */
  pointer?: boolean;
}

const defaultProps: Partial<InputProps> = {
  size: 'sm',
  variant: 'default',
  radius: 'sm',
};

export const _Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    error,
    required,
    disabled,
    variant,
    suffix,
    suffixWidth,
    prefix,
    prefixWidth,
    addonBefore,
    addonAfter,
    style,
    radius,
    size,
    wrapperProps,
    classNames,
    styles,
    __staticSelector,
    multiline,
    // sx,
    unstyled,
    pointer,
    // ...others
  } = useComponentDefaultProps('Input', defaultProps, props);
  const { offsetBottom, offsetTop, describedBy } = useInputWrapperContext();

  const { classes, styls, cx } = useStyles(
    {
      radius,
      multiline,
      invalid: !!error,
      withSuffix: !!suffix,
      withPrefix: !!prefix,
      suffixWidth: suffixWidth ? rem(suffixWidth) : undefined,
      prefixWidth: prefixWidth ? rem(prefixWidth) : undefined,
      offsetBottom,
      offsetTop,
      pointer,
    },
    { classNames, styles, name: ['Input', __staticSelector], unstyled, variant, size },
  );

  // const { systemStyles, rest } = extractSystemStyles(others);

  const hasAddon = addonBefore || addonAfter;

  const inputInner = (
    <Box
      className={cx({
        [classes.wrapper]: !hasAddon,
        'relative w-full': hasAddon,
        className: !hasAddon,
      })}
    >
      {prefix && (
        <Box className={classes.prefixWrapper} style={styls.prefixWrapper}>
          {prefix}
        </Box>
      )}
      <Box
        component="input"
        ref={ref}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        disabled={disabled}
        data-disabled={disabled || undefined}
        data-with-prefix={!!prefix || undefined}
        data-invalid={!!error || undefined}
        className={classes.input}
        style={styls.input}
      />
      {suffix && (
        <Box className={classes.suffixWrapper} style={styls.suffixWrapper}>
          {suffix}
        </Box>
      )}
    </Box>
  );

  if (hasAddon) {
    return (
      <Box
        className={cx(classes.wrapper, className)}
        style={{ ...style, ...styls.wrapper }}
        {...wrapperProps}
      >
        {addonBefore && (
          <Box className={classes.addonBefore} style={styls.addonBefore}>
            {addonBefore}
          </Box>
        )}
        {inputInner}
        {addonAfter && (
          <Box className={classes.addonAfter} style={styls.addonAfter}>
            {addonAfter}
          </Box>
        )}
      </Box>
    );
  }

  return inputInner;
}) as any;

_Input.displayName = 'Input';
_Input.Wrapper = InputWrapper;
_Input.Label = InputLabel;
_Input.Description = InputDescription;
_Input.Error = InputError;
_Input.Placeholder = InputPlaceholder;

export const Input = createPolymorphicComponent<
  'input',
  InputProps,
  {
    Wrapper: typeof InputWrapper;
    Label: typeof InputLabel;
    Description: typeof InputDescription;
    Error: typeof InputError;
    Placeholder: typeof InputPlaceholder;
  }
>(_Input);
