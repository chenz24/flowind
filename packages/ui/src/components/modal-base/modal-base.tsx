'use client';

/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import { useFocusReturn, useId, useWindowEvent } from '@flowind/hooks';
// import { getDefaultZIndex, MantineNumberSize, MantineShadow } from '@flowind/styles';
import {
  ClassNames,
  DefaultProps,
  FlowindNumberSize,
  FlowindSize,
  getDefaultZIndex,
  Selectors,
  Styles,
  useComponentDefaultProps,
} from '@/styles';
import { Box } from '../box';
import { OptionalPortal, PortalProps } from '../portal';
import { TransitionOverride } from '../transition';
import { ModalBaseBody, ModalBaseBodyStylesNames } from './modal-base-body/modal-base-body';
import {
  ModalBaseCloseButton,
  ModalBaseCloseButtonStylesNames,
} from './modal-base-close-button/modal-base-close-button';
import {
  ModalBaseContent,
  ModalBaseContentStylesNames,
} from './modal-base-content/modal-base-content';
import { ModalBaseHeader, ModalBaseHeaderStylesNames } from './modal-base-header/modal-base-header';
import {
  ModalBaseOverlay,
  ModalBaseOverlayStylesNames,
} from './modal-base-overlay/modal-base-overlay';
import { ModalBaseTitle, ModalBaseTitleStylesNames } from './modal-base-title/modal-base-title';
import { ModalBaseProvider } from './modal-base.context';
import useStyles from './modal-base.styles';
import { NativeScrollArea } from './native-scroll-area/native-scroll-area';
import { useLockScroll } from './use-lock-scroll';

export type ModalBaseStylesNames =
  | Selectors<typeof useStyles>
  | ModalBaseCloseButtonStylesNames
  | ModalBaseOverlayStylesNames
  | ModalBaseContentStylesNames
  | ModalBaseHeaderStylesNames
  | ModalBaseTitleStylesNames
  | ModalBaseBodyStylesNames;

export interface ModalBaseSettings extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  classNames?: ClassNames<ModalBaseStylesNames>;
  styles?: Styles<ModalBaseStylesNames>;
  unstyled?: boolean;

  /** If set modal/drawer will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
  keepMounted?: boolean;

  /** Determines whether modal/drawer is opened */
  opened: boolean;

  /** Called when modal/drawer is closed */
  onClose: () => void;

  /** Child component */
  children?: React.ReactNode;

  /** Determines whether the modal/drawer should be closed when user clicks on the overlay, true by default */
  closeOnClickOutside?: boolean;

  /** Props added to Transition component that used to animate overlay and body, use to configure duration and animation type, { duration: 200, transition: 'pop' } by default */
  transitionProps?: TransitionOverride;

  /** Determines whether component should be rendered inside Portal, true by default */
  withinPortal?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal' | 'target'>;

  /** Target element or selector where Portal should be rendered, by default new element is created and appended to the document.body */
  target?: HTMLElement | string;

  /** Determines whether scroll should be locked when opened={true}, defaults to true */
  lockScroll?: boolean;

  /** Determines whether focus should be trapped, true by default */
  trapFocus?: boolean;

  /** z-index CSS property of root element, 200 by default */
  zIndex?: number;

  /** Key of theme.spacing or any valid CSS value to set content, header and footer padding, 'md' by default */
  padding?: FlowindSize;

  /** Id used to connect modal/drawer with body and title */
  id?: string;

  /** Determines whether focus should be returned to the last active element onClose is called, true by default */
  returnFocus?: boolean;

  /** Determines whether onClose should be called when user presses escape key, true by default */
  closeOnEscape?: boolean;

  // /** Controls content width, 'md' by default */
  // size?: FlowindNumberSize;

  /** Controls content width, 'md' by default */
  width?: FlowindNumberSize;

  /** Key of theme.shadows or any valid css box-shadow value, 'xl' by default */
  shadow?: FlowindSize;
}

export interface ModalBaseProps extends ModalBaseSettings {
  /** Base component name for styles and components default props */
  __staticSelector: string;
}

export const ModalBaseDefaultProps: Partial<ModalBaseProps> = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: getDefaultZIndex('modal'),
  padding: 'md',
  // size: 'md',
  width: 'md',
  shadow: 'xl',
};

export function ModalBase(props: ModalBaseProps) {
  const {
    opened,
    onClose,
    children,
    closeOnClickOutside,
    __staticSelector,
    transitionProps,
    withinPortal,
    portalProps,
    keepMounted,
    target,
    zIndex,
    lockScroll,
    trapFocus,
    closeOnEscape,
    returnFocus,
    padding,
    shadow,
    id,
    width,
    variant,
    classNames,
    unstyled,
    styles,
    className,
    ...others
  } = useComponentDefaultProps('ModalBase', ModalBaseDefaultProps, props);

  const { classes, cx } = useStyles(
    { width },
    {
      name: __staticSelector,
      classNames,
      styles,
      unstyled,
      variant,
    },
  );

  const _id = useId(id);
  const [titleMounted, setTitleMounted] = useState(false);
  const [bodyMounted, setBodyMounted] = useState(false);

  const transitionDuration =
    typeof transitionProps?.duration === 'number' ? transitionProps?.duration : 200;

  const shouldLockScroll = useLockScroll({ opened, transitionDuration });

  useWindowEvent('keydown', (event) => {
    if (!trapFocus && event.key === 'Escape' && closeOnEscape) {
      onClose();
    }
  });

  useFocusReturn({ opened, shouldReturnFocus: trapFocus && returnFocus });

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal} target={target}>
      <ModalBaseProvider
        value={{
          __staticSelector,
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: { ...transitionProps, duration: transitionDuration, keepMounted },
          zIndex,
          padding,
          id: _id,
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape,
          shadow,
          stylesApi: {
            name: __staticSelector,
            variant,
            classNames,
            styles,
            unstyled,
          },
        }}
      >
        <RemoveScroll enabled={shouldLockScroll && lockScroll}>
          <Box className={cx(classes.root, className)} {...others}>
            {children}
          </Box>
        </RemoveScroll>
      </ModalBaseProvider>
    </OptionalPortal>
  );
}

ModalBase.CloseButton = ModalBaseCloseButton;
ModalBase.Overlay = ModalBaseOverlay;
ModalBase.Content = ModalBaseContent;
ModalBase.Header = ModalBaseHeader;
ModalBase.Title = ModalBaseTitle;
ModalBase.Body = ModalBaseBody;
ModalBase.NativeScrollArea = NativeScrollArea;
