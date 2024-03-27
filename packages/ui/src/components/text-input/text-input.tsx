import React, { forwardRef } from 'react';

import { DefaultProps, FlowindSize } from '@/styles';
import {
  Input,
  InputSharedProps,
  InputStylesNames,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
  useInputProps,
} from '../input';

export type TextInputStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface TextInputProps
  extends DefaultProps<TextInputStylesNames>,
    InputSharedProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'prefix'> {
  /** Input element type */
  type?: React.HTMLInputTypeAttribute;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Input size */
  size?: FlowindSize;

  __staticSelector?: string;
}

const defaultProps: Partial<TextInputProps> = {
  type: 'text',
  size: 'md',
  __staticSelector: 'TextInput',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps('TextInput', defaultProps, props);
  return (
    <Input.Wrapper {...wrapperProps}>
      <Input {...inputProps} {...others} ref={ref} />
    </Input.Wrapper>
  );
});

TextInput.displayName = 'TextInput';
