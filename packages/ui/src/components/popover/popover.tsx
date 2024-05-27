'use client';

/* eslint-disable react/no-unused-prop-types */
import React, { useCallback, useRef, useState } from 'react';

import { useClickOutside, useId } from '@flowind/hooks';
import {
  ClassNames,
  FlowindSize,
  getDefaultZIndex,
  Styles,
  useComponentDefaultProps,
  useFlowindTheme,
} from '@/styles';
import {
  ArrowPosition,
  FloatingAxesOffsets,
  FloatingPosition,
  FloatingStrategy,
  getFloatingPosition,
} from '../floating';
import { PortalProps } from '../portal';
import { TransitionOverride } from '../transition';
import { PopoverDropdown } from './popover-dropdown/popover-dropdown';
import { PopoverTarget } from './popover-target/popover-target';
import { PopoverContextProvider } from './popover.context';
import {
  PopoverMiddlewares,
  PopoverStylesNames,
  PopoverStylesParams,
  PopoverWidth,
} from './popover.types';
import { usePopover } from './use-popover';

export interface PopoverBaseProps {
  /** Dropdown position relative to target */
  position?: FloatingPosition;

  /** Default Y axis or either (main, cross, alignment) X and Y axis space between target element and dropdown  */
  offset?: number | FloatingAxesOffsets;

  /** Called when dropdown position changes */
  onPositionChange?: (position: FloatingPosition) => void;

  /** useEffect dependencies to force update dropdown position */
  positionDependencies?: any[];

  /** Called when dropdown closes */
  onClose?: () => void;

  /** Called when dropdown opens */
  onOpen?: () => void;

  /** If set dropdown will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
  keepMounted?: boolean;

  /** Props added to Transition component that used to animate dropdown presence, use to configure duration and animation type, { duration: 150, transition: 'fade' } by default */
  transitionProps?: TransitionOverride;

  /** Dropdown width, or 'target' to make dropdown width the same as target element */
  width?: PopoverWidth;

  /** Floating ui middlewares to configure position handling */
  middlewares?: PopoverMiddlewares;

  /** Determines whether component should have an arrow */
  withArrow?: boolean;

  /** Arrow size */
  arrowSize?: number;

  /** Arrow offset */
  arrowOffset?: number;

  /** Arrow border-radius */
  arrowRadius?: number;

  /** Arrow position **/
  arrowPosition?: ArrowPosition;

  /** Determines whether dropdown should be rendered within Portal, defaults to false */
  withinPortal?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;

  /** Dropdown z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Key of theme.shadow or any other valid css box-shadow value */
  shadow?: FlowindSize;

  /** If set, popover dropdown will not render */
  disabled?: boolean;

  /** Determines whether focus should be automatically returned to control when dropdown closes, false by default */
  returnFocus?: boolean;

  /** Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy), `'absolute'` by default */
  floatingStrategy?: FloatingStrategy;
}

export interface PopoverProps extends PopoverBaseProps {
  /** Popover.Target and Popover.Dropdown components */
  children: React.ReactNode;

  /** Initial opened state for uncontrolled component */
  defaultOpened?: boolean;

  /** Controls dropdown opened state */
  opened?: boolean;

  /** Called with current state when dropdown opens or closes */
  onChange?: (opened: boolean) => void;

  /** Determines whether dropdown should be closed on outside clicks, default to true */
  closeOnClickOutside?: boolean;

  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[];

  /** Determines whether focus should be trapped within dropdown, default to false */
  trapFocus?: boolean;

  /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
  closeOnEscape?: boolean;

  /** id base to create accessibility connections */
  id?: string;

  /** Determines whether dropdown and target element should have accessible roles, defaults to true */
  withRoles?: boolean;

  variant?: string;
  unstyled?: boolean;
  classNames?: ClassNames<PopoverStylesNames>;
  styles?: Styles<PopoverStylesNames, PopoverStylesParams>;
  __staticSelector?: string;
}

const defaultProps: Partial<PopoverProps> = {
  position: 'bottom',
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: 'fade', duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: 'side',
  closeOnClickOutside: true,
  withinPortal: false,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ['mousedown', 'touchstart'],
  zIndex: getDefaultZIndex('popover'),
  __staticSelector: 'Popover',
  width: 'max-content',
};

export function Popover(props: PopoverProps) {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const {
    children,
    position,
    offset,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    floatingStrategy,
    ...others
  } = useComponentDefaultProps('Popover', defaultProps, props);

  const [targetNode, setTargetNode] = useState<HTMLElement>(null);
  const [dropdownNode, setDropdownNode] = useState<HTMLElement>(null);

  const uid = useId(id);
  const theme = useFlowindTheme();
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(theme.dir, position),
    offset: typeof offset === 'number' ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose,
    strategy: floatingStrategy,
  });

  useClickOutside(
    () => popover.opened && closeOnClickOutside && popover.onClose(),
    clickOutsideEvents,
    [targetNode, dropdownNode],
  );

  const reference = useCallback(
    (node: HTMLElement) => {
      setTargetNode(node);
      popover.floating.refs.setReference(node);
    },
    [popover.floating.refs.reference],
  );

  const floating = useCallback(
    (node: HTMLElement) => {
      setDropdownNode(node);
      popover.floating.refs.setFloating(node);
    },
    [popover.floating.refs.setFloating],
  );

  return (
    <PopoverContextProvider
      value={{
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x!,
        y: popover.floating.y!,
        arrowX: popover.floating?.middlewareData?.arrow?.x,
        arrowY: popover.floating?.middlewareData?.arrow?.y,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize: arrowSize!,
        arrowOffset: arrowOffset!,
        arrowRadius: arrowRadius!,
        arrowPosition: arrowPosition!,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector: __staticSelector!,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
      }}
    >
      {children}
    </PopoverContextProvider>
  );
}

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = 'Popover';
