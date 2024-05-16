import React, { forwardRef } from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { Box } from '../../box';
import { useModalBaseContext } from '../modal-base.context';
import useStyles from './modal-base-header.styles';

export type ModalBaseHeaderStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseHeaderProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

const defaultProps: Partial<ModalBaseHeaderProps> = {};

export const ModalBaseHeader = forwardRef<HTMLDivElement, ModalBaseHeaderProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, style, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Header`,
    defaultProps,
    props,
  );

  const { classes, styls, cx } = useStyles({ padding: ctx.padding }, ctx.stylesApi);

  return (
    <Box
      ref={ref}
      className={cx(classes.header, className)}
      style={{ ...styls.header, ...style }}
      {...others}
    />
  );
});
