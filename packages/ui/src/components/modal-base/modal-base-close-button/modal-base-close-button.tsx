import React, { forwardRef } from 'react';

import { Selectors, useComponentDefaultProps } from '@/styles';
import { CloseButton, CloseButtonProps } from '../../close-button';
import { useModalBaseContext } from '../modal-base.context';
import useStyles from './modal-base-close-button.styles';

export type ModalBaseCloseButtonStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseCloseButtonProps
  extends CloseButtonProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, keyof CloseButtonProps> {}

const defaultProps: Partial<ModalBaseCloseButtonProps> = {
  size: 'sm',
};

export const ModalBaseCloseButton = forwardRef<HTMLButtonElement, ModalBaseCloseButtonProps>(
  (props, ref) => {
    const ctx = useModalBaseContext();

    const { className, ...others } = useComponentDefaultProps(
      `${ctx.__staticSelector}CloseButton`,
      defaultProps,
      props,
    );

    const { classes, cx } = useStyles(null, ctx.stylesApi);

    return (
      <CloseButton
        className={cx(classes.close, className)}
        ref={ref}
        onClick={ctx.onClose}
        {...others}
      />
    );
  },
);
