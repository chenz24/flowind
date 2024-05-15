import type {
  ModalBaseBodyProps,
  ModalBaseCloseButtonProps,
  ModalBaseHeaderProps,
  ModalBaseOverlayProps,
  ModalBaseStylesNames,
  ModalBaseTitleProps,
} from '../modal-base';

export { Drawer } from './drawer';
export type { DrawerProps } from './drawer';
export type { DrawerContentProps } from './drawer-content/drawer-content';
export type DrawerStylesNames = ModalBaseStylesNames;

export type DrawerBodyProps = ModalBaseBodyProps;
export type DrawerCloseButtonProps = ModalBaseCloseButtonProps;
export type DrawerHeaderProps = ModalBaseHeaderProps;
export type DrawerOverlayProps = ModalBaseOverlayProps;
export type DrawerTitleProps = ModalBaseTitleProps;
