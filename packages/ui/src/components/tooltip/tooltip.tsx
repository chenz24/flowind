'use client';

import React, { cloneElement, forwardRef, useRef } from 'react';

import { useMergedRef } from '@flowind/hooks';
import { getDefaultZIndex, useComponentDefaultProps } from '@/styles';
import { ForwardRefWithStaticComponents } from '@/utils/forwardRef-with-static-components';
import { isElement } from '@/utils/is-element/is-element';
import { Box } from '../box';
import {
  ArrowPosition,
  FloatingArrow,
  FloatingAxesOffsets,
  FloatingPosition,
  FloatingStrategy,
  getFloatingPosition,
  getFloatingSide,
} from '../floating';
import { OptionalPortal } from '../portal';
import { Transition, TransitionOverride } from '../transition';
import { TooltipFloating } from './tooltip-floating/tooltip-floating';
import { TooltipGroup } from './tooltip-group/tooltip-group';
import { TOOLTIP_ERRORS } from './tooltip.errors';
import useStyles from './tooltip.styles';
import { TooltipBaseProps } from './tooltip.types';
import { useTooltip } from './use-tooltip';

export interface TooltipProps extends TooltipBaseProps {
  variant?: string;

  /** Called when tooltip position changes */
  onPositionChange?: (position: FloatingPosition) => void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms, `0` by default */
  closeDelay?: number;

  /** Controlled opened state */
  opened?: boolean;

  /** Space between target element and tooltip in px, `5` by default */
  offset?: number | FloatingAxesOffsets;

  /** Determines whether the tooltip should have an arrow, `false` by default */
  withArrow?: boolean;

  /** Arrow size in px, `4` by default */
  arrowSize?: number;

  /** Arrow offset in px, `5` by default */
  arrowOffset?: number;

  /** Arrow `border-radius` in px, `0` by default */
  arrowRadius?: number;

  /** Arrow position relative to the tooltip, `side` by default */
  arrowPosition?: ArrowPosition;

  /** Props passed down to the `Transition` component that used to animate tooltip presence, use to configure duration and animation type, `{ duration: 100, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;

  /** Determines which events will be used to show tooltip, `{ hover: true, focus: false, touch: false }` by default */
  events?: { hover: boolean; focus: boolean; touch: boolean };

  /** `useEffect` dependencies to force update tooltip position */
  positionDependencies?: any[];

  /** Must be set if the tooltip target is an inline element */
  inline?: boolean;

  /** If set, the tooltip will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
  keepMounted?: boolean;

  /** Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy), `'absolute'` by default */
  floatingStrategy?: FloatingStrategy;
}

const defaultProps: Partial<TooltipProps> = {
  position: 'top',
  refProp: 'ref',
  withinPortal: true,
  inline: false,
  arrowSize: 8,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: 'side',
  offset: 5,
  transitionProps: { duration: 100, transition: 'fade' },
  width: 'auto',
  events: { hover: true, focus: false, touch: false },
  zIndex: getDefaultZIndex('popover'),
  positionDependencies: [],
  radius: 'sm',
  color: 'light',
  multiline: true,
  classNames: {
    tooltip: `animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 
      data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
      data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
    arrow: '',
  },
};

const _Tooltip = forwardRef<HTMLElement, TooltipProps>((props, ref) => {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const {
    children,
    position,
    refProp,
    label,
    openDelay,
    closeDelay,
    onPositionChange,
    opened,
    withinPortal,
    portalProps,
    radius,
    color,
    classNames,
    styles,
    unstyled,
    style,
    className,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    offset,
    transitionProps,
    multiline,
    width,
    events,
    zIndex,
    disabled,
    positionDependencies,
    onClick,
    onMouseEnter,
    onMouseLeave,
    inline,
    variant,
    keepMounted,
    floatingStrategy,
    ...others
  } = useComponentDefaultProps('Tooltip', defaultProps, props);

  const { classes, styls, cx, theme } = useStyles(
    { radius, color, width, multiline },
    { name: 'Tooltip', classNames, styles, unstyled, variant },
  );

  const tooltip = useTooltip({
    position: getFloatingPosition(theme.dir, position),
    closeDelay,
    openDelay,
    onPositionChange,
    opened,
    events,
    arrowRef,
    arrowOffset,
    offset: typeof offset === 'number' ? offset! + (withArrow ? arrowSize! / 2 : 0) : offset!,
    positionDependencies: [...positionDependencies!, children],
    inline,
    strategy: floatingStrategy,
  });

  if (!isElement(children)) {
    throw new Error(TOOLTIP_ERRORS.children);
  }

  const targetRef = useMergedRef(tooltip.reference, (children as any).ref, ref);
  const floatingSide = getFloatingSide(theme.dir, position);

  return (
    <>
      <OptionalPortal {...portalProps} withinPortal={withinPortal}>
        <Transition
          keepMounted={keepMounted}
          mounted={!disabled && tooltip.opened}
          {...transitionProps}
          transition={transitionProps.transition || 'fade'}
          duration={tooltip.isGroupPhase ? 10 : transitionProps.duration ?? 100}
        >
          {(transitionStyles) => (
            <Box
              data-side={floatingSide}
              {...others}
              {...tooltip.getFloatingProps({
                ref: tooltip.floating,
                className: classes.tooltip,
                style: {
                  ...style,
                  ...transitionStyles,
                  ...styls.tooltip,
                  zIndex,
                  top: tooltip.y ?? 0,
                  left: tooltip.x ?? 0,
                },
              })}
            >
              {label}

              <FloatingArrow
                ref={arrowRef}
                arrowX={tooltip.arrowX}
                arrowY={tooltip.arrowY}
                visible={withArrow}
                position={tooltip.placement}
                arrowSize={arrowSize}
                arrowOffset={arrowOffset}
                arrowRadius={arrowRadius}
                arrowPosition={arrowPosition}
                className={classes.arrow}
              />
            </Box>
          )}
        </Transition>
      </OptionalPortal>

      {cloneElement(
        children,
        tooltip.getReferenceProps({
          onClick,
          onMouseEnter,
          onMouseLeave,
          onMouseMove: props.onMouseMove,
          onPointerDown: props.onPointerDown,
          onPointerEnter: props.onPointerEnter,
          [refProp!]: targetRef,
          className: cx(className, children.props.className),
          ...children.props,
        }),
      )}
    </>
  );
}) as any;

_Tooltip.Group = TooltipGroup;
_Tooltip.Floating = TooltipFloating;

_Tooltip.displayName = 'Tooltip';

export const Tooltip: ForwardRefWithStaticComponents<
  TooltipProps,
  { Group: typeof TooltipGroup; Floating: typeof TooltipFloating }
> = _Tooltip;
