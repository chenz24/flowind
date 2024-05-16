'use client';

import React, { cloneElement } from 'react';

import { useMergedRef } from '@flowind/hooks';
import { getDefaultZIndex, useComponentDefaultProps } from '@/styles';
import { isElement } from '@/utils/is-element/is-element';
import { Box } from '../../box';
import { OptionalPortal } from '../../portal';
import { TOOLTIP_ERRORS } from '../tooltip.errors';
import useStyles from '../tooltip.styles';
import { TooltipBaseProps } from '../tooltip.types';
import { useFloatingTooltip } from './use-floating-tooltip';

export interface TooltipFloatingProps extends TooltipBaseProps {
  variant?: string;

  /** Offset from mouse */
  offset?: number;
}

const defaultProps: Partial<TooltipFloatingProps> = {
  refProp: 'ref',
  withinPortal: true,
  offset: 10,
  position: 'right',
  zIndex: getDefaultZIndex('popover'),
  color: 'light',
};

export function TooltipFloating(props: TooltipFloatingProps) {
  const {
    children,
    refProp,
    withinPortal,
    portalProps,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset,
    position,
    multiline,
    width,
    zIndex,
    disabled,
    variant,
    ...others
  } = useComponentDefaultProps('TooltipFloating', defaultProps, props);

  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
    offset,
    position,
  });

  const { classes, cx } = useStyles(
    { radius, color, multiline, width },
    { name: 'TooltipFloating', classNames, styles, unstyled, variant },
  );

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const targetRef = useMergedRef(boundaryRef, (children as any).ref);

  const onMouseEnter = (event: React.MouseEvent<unknown, MouseEvent>) => {
    children.props.onMouseEnter?.(event);
    handleMouseMove(event);
    setOpened(true);
  };

  const onMouseLeave = (event: React.MouseEvent<unknown, MouseEvent>) => {
    children.props.onMouseLeave?.(event);
    setOpened(false);
  };

  return (
    <>
      <OptionalPortal {...portalProps} withinPortal={withinPortal}>
        <Box
          {...others}
          ref={floating}
          className={cx(classes.tooltip, className)}
          style={{
            ...style,
            zIndex,
            display: !disabled && opened ? 'block' : 'none',
            top: y ?? '',
            left: Math.round(x) ?? '',
          }}
        >
          {label}
        </Box>
      </OptionalPortal>

      {cloneElement(children, {
        ...children.props,
        [refProp]: targetRef,
        onMouseEnter,
        onMouseLeave,
      })}
    </>
  );
}

TooltipFloating.displayName = 'TooltipFloating';
