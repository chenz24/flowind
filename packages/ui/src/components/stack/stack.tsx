'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, FlowindNumberSize, useComponentDefaultProps } from '@/styles';
import { Box } from '../box';
import { filterFalsyChildren } from './filter-falsy-children/filter-falsy-children';
import useStyles, { StackDirection } from './stack.styles';

export interface StackProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Defines flex-direction property */
  direction?: StackDirection;

  /** Defines justify-content property */
  justify?: React.CSSProperties['justifyContent'];

  /** Defined flex-wrap property */
  noWrap?: boolean;

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: FlowindNumberSize;

  /** Defines align-items css property */
  align?: React.CSSProperties['alignItems'];
}

const defaultProps: Partial<StackProps> = {
  direction: 'row',
  justify: 'left',
  spacing: 'md',
};

export const Stack = forwardRef<HTMLDivElement, StackProps>((props: StackProps, ref) => {
  const {
    className,
    direction,
    justify,
    align,
    children,
    noWrap,
    grow,
    spacing,
    unstyled,
    style,
    ...others
  } = useComponentDefaultProps('Stack', defaultProps, props);

  const filteredChildren = filterFalsyChildren(children);
  const { classes, styls, cx } = useStyles(
    {
      align,
      grow,
      noWrap,
      spacing,
      justify,
      direction,
      count: filteredChildren.length,
    },
    { unstyled, name: 'Group' },
  );

  return (
    <Box
      className={cx(classes.root, className)}
      style={{ ...styls.root, ...style }}
      ref={ref}
      {...others}
    >
      {filteredChildren}
    </Box>
  );
});

Stack.displayName = 'Stack';
