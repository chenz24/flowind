import React, { forwardRef } from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { Box } from '../../box';
import { useModalBaseContext } from '../modal-base.context';
import useStyles from './modal-base-title.styles';

export type ModalBaseTitleStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseTitleProps extends DefaultProps, React.ComponentPropsWithoutRef<'h2'> {}

const defaultProps: Partial<ModalBaseTitleProps> = {};

export const ModalBaseTitle = forwardRef<HTMLHeadingElement, ModalBaseTitleProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Title`,
    defaultProps,
    props,
  );

  const { classes, cx } = useStyles(null, ctx.stylesApi);

  return (
    <Box
      component="h2"
      id={ctx.getTitleId()}
      className={cx(classes.title, className)}
      ref={ref}
      {...others}
    />
  );
});
