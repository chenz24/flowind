'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, FlowindSize, Selectors, useComponentDefaultProps } from '@/styles';
import { Text } from '../../text';
import useStyles from './input-description.styles';

export type InputDescriptionStylesNames = Selectors<typeof useStyles>;

export interface InputDescriptionProps
  extends DefaultProps<InputDescriptionStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Description content */
  children?: React.ReactNode;

  /** Predefined size */
  size?: FlowindSize;

  __staticSelector?: string;
}

const defaultProps: Partial<InputDescriptionProps> = {
  size: 'sm',
};

export const InputDescription = forwardRef<HTMLDivElement, InputDescriptionProps>((props, ref) => {
  const {
    children,
    className,
    classNames,
    styles,
    unstyled,
    size,
    __staticSelector,
    variant,
    ...others
  } = useComponentDefaultProps('InputDescription', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['InputWrapper', __staticSelector],
    classNames,
    styles,
    unstyled,
    variant,
    size,
  });

  return (
    <Text className={cx(classes.description, className)} ref={ref} {...others}>
      {children}
    </Text>
  );
});

InputDescription.displayName = 'InputDescription';
