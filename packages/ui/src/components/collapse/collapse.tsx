'use client';

import React, { forwardRef } from 'react';

import { useReducedMotion } from '@flowind/hooks';
import { DefaultProps, useComponentDefaultProps, useFlowindTheme } from '@/styles';
import { Box } from '../box';
import { useCollapse } from './use-collapse';

export interface CollapseProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be collapsed */
  children: React.ReactNode;

  /** Opened state */
  in: boolean;

  /** Called each time transition ends */
  onTransitionEnd?: () => void;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Transition timing function */
  transitionTimingFunction?: string;

  /** Should opacity be animated */
  animateOpacity?: boolean;
}

const defaultProps: Partial<CollapseProps> = {
  transitionDuration: 200,
  transitionTimingFunction: 'ease',
  animateOpacity: true,
};

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const {
    children,
    in: opened,
    transitionDuration,
    transitionTimingFunction,
    style,
    onTransitionEnd,
    animateOpacity,
    ...others
  } = useComponentDefaultProps('Collapse', defaultProps, props);
  const theme = useFlowindTheme();

  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;

  const duration = reduceMotion ? 0 : transitionDuration;
  const getCollapseProps = useCollapse({
    opened,
    transitionDuration: duration,
    transitionTimingFunction,
    onTransitionEnd,
  });

  if (duration === 0) {
    return opened ? <Box {...others}>{children}</Box> : null;
  }

  return (
    <Box {...getCollapseProps({ style, ref, ...others })}>
      <div
        style={{
          opacity: opened || !animateOpacity ? 1 : 0,
          transition: animateOpacity ? `opacity ${duration}ms ${transitionTimingFunction}` : 'none',
        }}
      >
        {children}
      </div>
    </Box>
  );
});

Collapse.displayName = 'Collapse';
