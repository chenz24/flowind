'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, FlowindSize, Selectors } from '@/styles';
import { Box } from '../box';
import { Input } from '../input';
import useStyles from './inline-input.styles';

export type InlineInputStylesNames = Selectors<typeof useStyles>;

export interface InlineInputProps
  extends DefaultProps<InlineInputStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  __staticSelector: string;
  label: React.ReactNode;
  description: React.ReactNode;
  id: string;
  disabled: boolean;
  error: React.ReactNode;
  size: FlowindSize;
  labelPosition: 'left' | 'right';
}

export const InlineInput = forwardRef<HTMLDivElement, InlineInputProps>(
  (
    {
      __staticSelector,
      className,
      classNames,
      styles,
      unstyled,
      children,
      label,
      description,
      id,
      disabled,
      error,
      size,
      labelPosition,
      variant,
      ...others
    },
    ref,
  ) => {
    const { classes, cx } = useStyles(
      { labelPosition },
      { name: __staticSelector, styles, classNames, unstyled, variant, size },
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        <div className={cx(classes.body)}>
          {children}

          <div className={classes.labelWrapper}>
            {label != null && (
              <label className={classes.label} data-disabled={disabled || undefined} htmlFor={id}>
                {label}
              </label>
            )}

            {description && (
              <Input.Description className={classes.description}>{description}</Input.Description>
            )}

            {error && error !== 'boolean' && (
              <Input.Error className={classes.error}>{error}</Input.Error>
            )}
          </div>
        </div>
      </Box>
    );
  },
);

InlineInput.displayName = 'InlineInput';
