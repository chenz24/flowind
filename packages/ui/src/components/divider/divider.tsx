import React, { forwardRef } from 'react';

import {
  DefaultProps,
  FlowindColor,
  FlowindSize,
  useComponentDefaultProps,
  Variants,
} from '@/styles';
import { Box } from '../box';
import useStyles from './divider.styles';

export type DividerStylesNames = 'label';

export interface DividerProps
  extends DefaultProps<DividerStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Key of theme.colors, defaults to "gray" in light color scheme and to "dark" in dark color scheme */
  color?: FlowindColor;

  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Sets height when orientation="horizontal" and width when orientation="vertical" */
  size?: FlowindSize;

  /** Text inside the divider, only applicable when orientation="horizontal" */
  label?: React.ReactNode;

  /** Label position, only applicable when orientation="horizontal" */
  labelPosition?: 'left' | 'center' | 'right';

  /** Props added to the label element */
  labelProps?: Record<string, any>;

  /** Controls appearance */
  variant?: Variants<'solid' | 'dashed' | 'dotted'>;
}

const defaultProps: Partial<DividerProps> = {
  orientation: 'horizontal',
  size: 'xs',
  labelPosition: 'left',
  variant: 'solid',
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>((props: DividerProps, ref) => {
  const {
    className,
    color,
    orientation,
    size,
    label,
    labelPosition,
    // labelProps,
    variant,
    styles,
    classNames,
    unstyled,
    ...others
  } = useComponentDefaultProps('Divider', defaultProps, props);

  const horizontal = orientation === 'horizontal';
  const withLabel = !!label && horizontal;

  const { classes, cx } = useStyles(
    { color, labelPosition, withLabel, orientation },
    { classNames, styles, unstyled, name: 'Divider', variant, size },
  );

  return (
    <Box
      ref={ref}
      className={cx(classes.root, className)}
      component="div"
      role="separator"
      {...others}
    >
      {label}
    </Box>
  );
});

Divider.displayName = 'Divider';
