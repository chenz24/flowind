import React from 'react';

import { useFocusReturn } from '@flowind/hooks';
import { DefaultProps, rem, useComponentDefaultProps } from '@/styles';
import { closeOnEscape } from '@/utils/close-on-escape/close-on-escape';
import { Box } from '../../box';
import { FloatingArrow } from '../../floating';
import { FocusTrap } from '../../focus-trap';
import { OptionalPortal } from '../../portal';
import { Transition } from '../../transition';
import { usePopoverContext } from '../popover.context';
import useStyles from './popover-dropdown.styles';

export interface PopoverDropdownProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Dropdown content */
  children?: React.ReactNode;
}

const defaultProps: Partial<PopoverDropdownProps> = {};

export function PopoverDropdown(props: PopoverDropdownProps) {
  const { style, className, children, onKeyDownCapture, ...others } = useComponentDefaultProps(
    'PopoverDropdown',
    defaultProps,
    props,
  );

  const ctx = usePopoverContext();
  const { classes, cx } = useStyles(
    { radius: ctx.radius, shadow: ctx.shadow },
    {
      name: ctx.__staticSelector,
      classNames: ctx.classNames,
      styles: ctx.styles,
      unstyled: ctx.unstyled,
      variant: ctx.variant,
    },
  );

  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus,
  });

  const accessibleProps = ctx.withRoles
    ? {
        'aria-labelledby': ctx.getTargetId(),
        id: ctx.getDropdownId(),
        role: 'dialog',
      }
    : {};

  if (ctx.disabled) {
    return null;
  }

  return (
    <OptionalPortal {...ctx.portalProps} withinPortal={ctx.withinPortal}>
      <Transition
        mounted={ctx.opened}
        {...ctx.transitionProps}
        transition={ctx.transitionProps.transition || 'fade'}
        duration={ctx.transitionProps.duration ?? 150}
        keepMounted={ctx.keepMounted}
        exitDuration={
          typeof ctx.transitionProps.exitDuration === 'number'
            ? ctx.transitionProps.exitDuration
            : ctx.transitionProps.duration
        }
      >
        {(transitionStyles) => (
          <FocusTrap active={ctx.trapFocus}>
            <Box
              {...accessibleProps}
              tabIndex={-1}
              ref={ctx.floating}
              style={{
                ...style,
                ...transitionStyles,
                zIndex: ctx.zIndex,
                top: ctx.y ?? 0,
                left: ctx.x ?? 0,
                width: ctx.width === 'target' ? undefined : rem(ctx.width),
              }}
              className={cx(classes.dropdown, className)}
              onKeyDownCapture={closeOnEscape(ctx.onClose, {
                active: ctx.closeOnEscape,
                onTrigger: returnFocus,
                onKeyDown: onKeyDownCapture,
              })}
              data-position={ctx.placement}
              {...others}
            >
              {children}

              <FloatingArrow
                ref={ctx.arrowRef}
                arrowX={ctx.arrowX}
                arrowY={ctx.arrowY}
                visible={ctx.withArrow}
                position={ctx.placement}
                arrowSize={ctx.arrowSize}
                arrowRadius={ctx.arrowRadius}
                arrowOffset={ctx.arrowOffset}
                arrowPosition={ctx.arrowPosition}
                className={classes.arrow}
              />
            </Box>
          </FocusTrap>
        )}
      </Transition>
    </OptionalPortal>
  );
}

PopoverDropdown.displayName = 'PopoverDropdown';
