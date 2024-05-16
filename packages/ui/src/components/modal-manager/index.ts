export { ModalsProvider } from './modals-provider';
export { useModals } from './use-modals/use-modals';
export {
  openModal,
  closeModal,
  closeAllModals,
  openConfirmModal,
  openContextModal,
  modals,
} from './events';

export type { ModalsProviderProps } from './modals-provider';
export type {
  ContextModalProps,
  MantineModalsOverride,
  MantineModals,
  MantineModal,
} from './context';
