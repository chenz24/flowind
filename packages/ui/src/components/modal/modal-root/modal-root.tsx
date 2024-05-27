import React from 'react';

import { FlowindSize, useComponentDefaultProps } from '@/styles';
import { ModalBase, ModalBaseDefaultProps, ModalBaseSettings } from '../../modal-base';
import { ModalProvider, ScrollAreaComponent } from '../modal.context';
import useStyles from './modal-root.styles';

export interface ModalRootProps extends ModalBaseSettings {
  /** Top/bottom modal offset, 5vh by default */
  yOffset?: React.CSSProperties['marginTop'];

  /** Left/right modal offset, 5vw by default */
  xOffset?: React.CSSProperties['marginLeft'];

  /** Scroll area component, ScrollArea.Autosize by default */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Determines whether the modal should be centered vertically, false by default */
  centered?: boolean;

  /** Determines whether the modal should take the entire screen */
  fullScreen?: boolean;
}

const defaultProps: Partial<ModalRootProps> = {
  ...ModalBaseDefaultProps,
  yOffset: '5dvh',
  xOffset: '5vw',
};

export function ModalRoot(props: ModalRootProps) {
  const {
    classNames,
    variant,
    width,
    yOffset,
    xOffset,
    scrollAreaComponent,
    radius,
    centered,
    fullScreen,
    styles,
    ...others
  } = useComponentDefaultProps('ModalRoot', defaultProps, props);

  const { classes, styls, cx } = useStyles(
    { yOffset, xOffset, centered, fullScreen, width },
    { name: 'Modal', variant },
  );

  return (
    <ModalProvider value={{ yOffset, scrollAreaComponent, radius }}>
      <ModalBase
        __staticSelector="Modal"
        width={width}
        variant={variant}
        classNames={{
          ...classNames,
          content: cx(classes.content, classNames?.content),
          inner: cx(classes.inner, classNames?.inner),
        }}
        styles={{
          ...styles,
          content: styls.content,
          inner: styls.inner,
        }}
        {...others}
      />
    </ModalProvider>
  );
}
