import React, { forwardRef } from 'react';

import { DefaultProps, FlowindColor, useComponentDefaultProps } from '@/styles';
import { Box } from '../box';
import useStyles from './mark.styles';

export interface MarkProps extends DefaultProps, React.ComponentPropsWithoutRef<'mark'> {
  variant?: string;

  /** Background color from theme.colors */
  color?: FlowindColor;
}

const defaultProps: Partial<MarkProps> = {
  color: 'yellow',
};

export const Mark = forwardRef<HTMLElement, MarkProps>((props, ref) => {
  const { color, className, unstyled, variant, ...others } = useComponentDefaultProps(
    'Mark',
    defaultProps,
    props,
  );

  const { classes, cx } = useStyles({ color }, { unstyled, name: 'Mark', variant });
  return <Box component="mark" ref={ref} className={cx(classes.root, className)} {...others} />;
});

Mark.displayName = 'Mark';
