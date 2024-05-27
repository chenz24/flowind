'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, useComponentDefaultProps } from '@/styles';
import { Box } from '../../box';

export interface InputPlaceholderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'span'> {}

const defaultProps: Partial<InputPlaceholderProps> = {};

export const InputPlaceholder = forwardRef<HTMLSpanElement, InputPlaceholderProps>((props, ref) => {
  const { ...others } = useComponentDefaultProps('InputPlaceholder', defaultProps, props);
  return <Box component="span" ref={ref} {...others} />;
});

InputPlaceholder.displayName = 'InputPlaceholder';
