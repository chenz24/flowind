import React, { forwardRef, useEffect } from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { Box } from '../../box';
import { useModalBaseContext } from '../modal-base.context';
import useStyles from './modal-base-body.styles';

export type ModalBaseBodyStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseBodyProps extends DefaultProps, React.ComponentPropsWithoutRef<'h2'> {}

const defaultProps: Partial<ModalBaseBodyProps> = {};

export const ModalBaseBody = forwardRef<HTMLHeadingElement, ModalBaseBodyProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, style, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Body`,
    defaultProps,
    props,
  );

  const { classes, styls, cx } = useStyles({ padding: ctx.padding }, ctx.stylesApi);

  useEffect(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);

  return (
    <Box
      id={ctx.getBodyId()}
      className={cx(classes.body, className)}
      style={{ ...styls.body, ...style }}
      ref={ref}
      {...others}
    />
  );
});
