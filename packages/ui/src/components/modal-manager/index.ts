export { ModalsProvider } from './modals-provider';
export { useModals } from './use-modals/use-modals';
export {
  openModal,
  closeModal,
  closeAllModals,
  openConfirmModal,
  openContextModal,
  openInfoModal,
  modals,
} from './events';

export type { ModalsProviderProps } from './modals-provider';
export type {
  ContextModalProps,
  FlowindModalsOverride,
  FlowindModals,
  FlowindModal,
  ModalSettings,
} from './context';
