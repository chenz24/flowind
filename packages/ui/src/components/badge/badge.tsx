import React, { forwardRef } from 'react';

import {
  DefaultProps,
  FlowindColor,
  FlowindSize,
  Selectors,
  useComponentDefaultProps,
} from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { Box } from '../box';
import useStyles, { BadgeStylesParams, BadgeVariant } from './badge.styles';

export type BadgeStylesNames = Selectors<typeof useStyles>;

export interface BadgeProps extends DefaultProps<BadgeStylesNames, BadgeStylesParams> {
  /** Key of theme.colors */
  color?: FlowindColor;

  /** Controls appearance */
  variant?: BadgeVariant;

  /** Badge height and font size */
  size?: FlowindSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: FlowindSize;

  /** Sets badge width to 100% of parent element, hides overflow text with text-overflow: ellipsis */
  fullWidth?: boolean;

  /** Section rendered on the left side of label */
  leftSection?: React.ReactNode;

  /** Section rendered on the right side of label */
  rightSection?: React.ReactNode;

  /** Badge label */
  children?: React.ReactNode;
}

const defaultProps: Partial<BadgeProps> = {
  variant: 'light',
  size: 'md',
  radius: 'xl',
  color: 'blue',
  fullWidth: false,
};

export const _Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    className,
    color,
    variant,
    fullWidth,
    children,
    size,
    leftSection,
    rightSection,
    radius,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('Badge', defaultProps, props);

  const { classes, styls, cx } = useStyles(
    { fullWidth, color, radius },
    { classNames, styles, name: 'Badge', unstyled, variant, size },
  );

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {variant === 'dot' && <span className={classes.dot} style={styls.dot} />}
      {leftSection && <span className={classes.leftSection}>{leftSection}</span>}
      <span className={classes.inner} style={styls.leftSection}>
        {children}
      </span>
      {rightSection && (
        <span className={classes.rightSection} style={styls.rightSection}>
          {rightSection}
        </span>
      )}
    </Box>
  );
});

_Badge.displayName = '@flowind/core/Badge';

export const Badge = createPolymorphicComponent<'div', BadgeProps>(_Badge);
