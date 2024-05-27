import React, { forwardRef } from 'react';

import { Selectors, useComponentDefaultProps } from '@/styles';
import { Container, ContainerProps } from '../../container';
import { FocusTrap } from '../../focus-trap';
import { Transition, TransitionOverride } from '../../transition';
import { useModalBaseContext } from '../modal-base.context';
import useStyles from './modal-base-content.styles';

export type ModalBaseContentStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseContentProps
  extends ContainerProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof ContainerProps> {
  /** Props added to Transition component */
  transitionProps?: TransitionOverride;
}

const defaultProps: Partial<ModalBaseContentProps> = {};

export const ModalBaseContent = forwardRef<HTMLElement, ModalBaseContentProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, transitionProps, style, onKeyDown, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Content`,
    defaultProps,
    props,
  );

  const { classes, styls, cx } = useStyles({ zIndex: ctx.zIndex }, ctx.stylesApi);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const shouldTrigger =
      (event.target as HTMLElement)?.getAttribute('data-flowind-stop-propagation') !== 'true';
    shouldTrigger && event.key === 'Escape' && ctx.closeOnEscape && ctx.onClose();
    onKeyDown?.(event);
  };

  return (
    <Transition mounted={ctx.opened} transition="pop" {...ctx.transitionProps} {...transitionProps}>
      {(transitionStyles) => (
        <div className={cx(classes.inner)} style={styls.inner}>
          <FocusTrap active={ctx.opened && ctx.trapFocus}>
            <Container
              component="section"
              role="dialog"
              tabIndex={-1}
              aria-modal
              aria-describedby={ctx.bodyMounted ? ctx.getBodyId() : undefined}
              aria-labelledby={ctx.titleMounted ? ctx.getTitleId() : undefined}
              onKeyDown={handleKeyDown}
              ref={ref}
              className={cx(classes.content, className)}
              style={{ ...styls.content, ...style, ...transitionStyles }}
              padding="none"
              unstyled
              {...others}
            >
              {others.children}
            </Container>
          </FocusTrap>
        </div>
      )}
    </Transition>
  );
});
