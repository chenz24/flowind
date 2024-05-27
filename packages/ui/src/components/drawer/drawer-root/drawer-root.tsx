'use client';

import React from 'react';

import { useComponentDefaultProps } from '@/styles';
import { ModalBase, ModalBaseDefaultProps, ModalBaseSettings } from '../../modal-base';
import { FlowindTransition } from '../../transition';
import { DrawerProvider, ScrollAreaComponent } from '../drawer.context';
import useStyles from './drawer-root.styles';

export type DrawerPosition = 'bottom' | 'left' | 'right' | 'top';

export interface DrawerRootProps extends ModalBaseSettings {
  /** Scroll area component, ScrollArea.Autosize by default */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Side of the screen where drawer will be opened, 'left' by default */
  position?: 'bottom' | 'left' | 'right' | 'top';
}

const transitions: Record<DrawerPosition, FlowindTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-right',
  right: 'slide-left',
};

const rtlTransitions: Record<DrawerPosition, FlowindTransition> = {
  top: 'slide-down',
  bottom: 'slide-up',
  right: 'slide-right',
  left: 'slide-left',
};

const defaultProps: Partial<DrawerRootProps> = {
  ...ModalBaseDefaultProps,
  position: 'left',
};

export function DrawerRoot(props: DrawerRootProps) {
  const { classNames, variant, width, scrollAreaComponent, position, transitionProps, ...others } =
    useComponentDefaultProps('DrawerRoot', defaultProps, props);

  const { classes, cx, theme, styls } = useStyles({ position }, { name: 'Drawer', variant });

  const drawerTransition = (theme.dir === 'rtl' ? rtlTransitions : transitions)[position];

  return (
    <DrawerProvider value={{ scrollAreaComponent }}>
      <ModalBase
        __staticSelector="Drawer"
        width={width}
        variant={variant}
        transitionProps={{ transition: drawerTransition, duration: 200, ...transitionProps }}
        classNames={{
          ...classNames,
          content: cx(classes.content, classNames?.content),
          inner: cx(classes.inner, classNames?.inner),
        }}
        styles={{
          content: styls.content,
        }}
        {...others}
      />
    </DrawerProvider>
  );
}
