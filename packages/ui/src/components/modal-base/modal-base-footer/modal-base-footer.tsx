import React, { forwardRef } from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { Box } from '../../box';
import { useModalBaseContext } from '../modal-base.context';
import useStyles from './modal-base-footer.styles';

export type ModalBaseFooterStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseFooterProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

const defaultProps: Partial<ModalBaseFooterProps> = {};

export const ModalBaseFooter = forwardRef<HTMLDivElement, ModalBaseFooterProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, style, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Footer`,
    defaultProps,
    props,
  );

  const { classes, styls, cx } = useStyles({ padding: ctx.padding }, ctx.stylesApi);

  return (
    <Box
      ref={ref}
      className={cx(classes.footer, className)}
      style={{ ...styls.footer, ...style }}
      {...others}
    />
  );
});
