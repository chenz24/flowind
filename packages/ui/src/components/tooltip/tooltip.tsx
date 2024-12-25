'use client';

import React, { cloneElement, forwardRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { DefaultProps, FlowindSize, Selectors, useComponentDefaultProps } from '@/styles';
import { ForwardRefWithStaticComponents } from '@/utils/forwardRef-with-static-components';
import { isElement } from '@/utils/is-element/is-element';
import { TOOLTIP_ERRORS } from './tooltip.errors';
import useStyles, { TooltipStylesParams } from './tooltip.styles';

export type TooltipStylesNames = Selectors<typeof useStyles>;

type ContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;

interface TooltipContentProps extends Omit<ContentProps, 'content'> {
  showArrow?: boolean;
}

export interface TooltipProps
  extends TooltipContentProps,
    DefaultProps<TooltipStylesNames, TooltipStylesParams> {
  /** Tooltip content */
  content: React.ReactNode;

  /** Open delay in ms */
  delayDuration?: number;

  /** Close delay in ms, `0` by default */
  closeDelay?: number;

  /** How much time a user has to enter another trigger without incurring a delay again. */
  skipDelayDuration?: number;

  /** Prevents Tooltip.Content from remaining open when hovering. Disabling this has accessibility consequences. */
  disableHoverableContent?: boolean;

  /** Controlled opened state */
  open?: boolean;

  defaultOpen?: boolean;

  /** Event handler called when the open state of the tooltip changes. */
  onOpenChange?: (open: boolean) => void;

  /** Space between target element and tooltip in px, `5` by default */
  sideOffset?: number;

  /** Determines whether the tooltip should have an arrow, `false` by default */
  showArrow?: boolean;

  /** Determines which events will be used to show tooltip, `{ hover: true, focus: false, touch: false }` by default */
  events?: { hover: boolean; focus: boolean; touch: boolean };

  // /** Must be set if the tooltip target is an inline element */
  // inline?: boolean;

  /** If set, the tooltip will not be unmounted from the DOM when it is hidden, `display: none` styles will be applied instead */
  keepMounted?: boolean;

  width?: number;

  color?: 'light' | 'dark';

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  disabled?: boolean;
}

const defaultProps: Partial<TooltipProps> = {
  side: 'top',
  sideOffset: 5,
  delayDuration: 0,
  radius: 'sm',
  color: 'light',
};

const TooltipProviderContext = React.createContext(false);

export const TooltipProvider = ({ children, ...props }: TooltipPrimitive.TooltipProviderProps) => (
  <TooltipProviderContext.Provider value>
    <TooltipPrimitive.Provider {...props}>{children}</TooltipPrimitive.Provider>
  </TooltipProviderContext.Provider>
);

const useTooltipProvider = () => React.useContext(TooltipProviderContext);

const removeUndefined = <T extends Record<string, any>>(obj: T): Partial<T> => {
  const result: Partial<T> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      result[key as keyof T] = value;
    }
  }
  return result;
};

const _Tooltip = forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipProps>(
  (props, ref) => {
    const hasProvider = useTooltipProvider();
    const {
      children,
      side,
      content,
      delayDuration,
      skipDelayDuration,
      disableHoverableContent,
      open,
      onOpenChange,
      defaultOpen,
      radius,
      width,
      color,
      classNames,
      styles,
      unstyled,
      // style,
      className,
      showArrow,
      sideOffset,
      disabled,
      ...others
    } = useComponentDefaultProps('Tooltip', defaultProps, props);

    const { classes, styls, cx } = useStyles(
      { radius, color, width },
      { name: 'Tooltip', classNames, styles, unstyled },
    );

    if (!isElement(children)) {
      throw new Error(TOOLTIP_ERRORS.children);
    }

    const rootProps = removeUndefined({
      open,
      onOpenChange,
      defaultOpen,
      delayDuration,
      disableHoverableContent,
    });

    if (disabled || !content) {
      rootProps.open = false;
    }

    const tooltipContent = (
      <TooltipPrimitive.Root {...rootProps}>
        <TooltipPrimitive.Trigger asChild>{cloneElement(children, {})}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            ref={ref}
            side={side}
            sideOffset={sideOffset}
            className={cx(classes.content, className)}
            {...others}
          >
            {content}
            {showArrow && <TooltipPrimitive.Arrow className={classes.arrow} style={styls.arrow} />}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    );

    if (!hasProvider) {
      return (
        <TooltipProvider
          delayDuration={delayDuration}
          skipDelayDuration={skipDelayDuration}
          disableHoverableContent={disableHoverableContent}
        >
          {tooltipContent}
        </TooltipProvider>
      );
    }

    return tooltipContent;
  },
) as any;

_Tooltip.displayName = 'Tooltip';

_Tooltip.Provider = TooltipProvider;

export const Tooltip: ForwardRefWithStaticComponents<TooltipProps, {}> = _Tooltip;
