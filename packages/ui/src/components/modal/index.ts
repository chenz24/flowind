import type {
  ModalBaseBodyProps,
  ModalBaseCloseButtonProps,
  ModalBaseHeaderProps,
  ModalBaseOverlayProps,
  ModalBaseStylesNames,
  ModalBaseTitleProps,
} from '../modal-base';

export { Modal } from './modal';
export type { ModalProps } from './modal';
export type { ModalContentProps } from './modal-content/modal-content';
export type ModalStylesNames = ModalBaseStylesNames;

export type ModalBodyProps = ModalBaseBodyProps;
export type ModalCloseButtonProps = ModalBaseCloseButtonProps;
export type ModalHeaderProps = ModalBaseHeaderProps;
export type ModalOverlayProps = ModalBaseOverlayProps;
export type ModalTitleProps = ModalBaseTitleProps;
