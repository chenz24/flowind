import React, { forwardRef } from 'react';

import { useFlowindTheme } from '@/styles';
import { ArrowPosition, FloatingPosition } from '../types';
import { getArrowPositionStyles } from './get-arrow-position-styles';

interface FloatingArrowProps extends React.ComponentPropsWithoutRef<'div'> {
  position: FloatingPosition;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  arrowX: number | undefined;
  arrowY: number | undefined;
  visible: boolean | undefined;
}

export const FloatingArrow = forwardRef<HTMLDivElement, FloatingArrowProps>(
  (
    {
      position,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      visible,
      arrowX,
      arrowY,
      style,
      ...others
    },
    ref,
  ) => {
    const theme = useFlowindTheme();
    if (!visible) {
      return null;
    }

    return (
      <div
        {...others}
        ref={ref}
        style={{
          ...style,
          ...getArrowPositionStyles({
            position,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition,
            dir: theme.dir,
            arrowX,
            arrowY,
          }),
        }}
      />
    );
  },
);

FloatingArrow.displayName = 'FloatingArrow';
