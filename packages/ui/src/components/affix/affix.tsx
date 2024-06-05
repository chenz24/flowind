'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, getDefaultZIndex, useComponentDefaultProps } from '@/styles';
import { Box } from '../box';
import { OptionalPortal, PortalProps } from '../portal';

export interface AffixProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLDivElement;

  /** Root element z-index property */
  zIndex?: React.CSSProperties['zIndex'];

  /** Determines whether component should be rendered within portal, defaults to true */
  withinPortal?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal' | 'target'>;

  /** Affix position on screen, defaults to { bottom: 0, right: 0 } */
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };
}

const defaultProps: Partial<AffixProps> = {
  position: { bottom: 0, right: 0 },
  zIndex: getDefaultZIndex('modal'),
  withinPortal: true,
};

export const Affix = forwardRef<HTMLDivElement, AffixProps>((props: AffixProps, ref) => {
  const { target, position, zIndex, withinPortal, portalProps, ...others } =
    useComponentDefaultProps('Affix', defaultProps, props);

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal} target={target}>
      <Box style={{ position: 'fixed', zIndex, ...position }} ref={ref} {...others} />
    </OptionalPortal>
  );
});

Affix.displayName = 'Affix';
