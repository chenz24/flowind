import React, { forwardRef } from 'react';

import { DefaultProps } from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';

export interface BoxProps extends DefaultProps {
  children?: React.ReactNode;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
}

export const _Box = forwardRef<HTMLDivElement, BoxProps & { component: any }>(
  ({ className, component, width, height, style, ...others }, ref) => {
    const Element = component || 'div';
    return (
      <Element ref={ref} className={className} style={{ width, height, ...style }} {...others} />
    );
  },
);

_Box.displayName = 'Box';

export const Box = createPolymorphicComponent<'div', BoxProps>(_Box);
