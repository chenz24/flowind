import { createUseExternalEvents } from '@/utils/create-use-external-events/create-use-external-events';
import {
  FlowindModal,
  FlowindModals,
  ModalSettings,
  OpenConfirmModal,
  OpenContextModal,
  OpenStateModal,
} from './context';

type ModalsEvents = {
  openModal: (payload: ModalSettings) => void;
  closeModal: (id: string) => void;
  closeContextModal: <TKey extends FlowindModal>(id: TKey) => void;
  closeAllModals: () => void;
  openConfirmModal: (payload: OpenConfirmModal) => void;
  openInfoModal: (payload: OpenStateModal) => void;
  openWarningModal: (payload: OpenStateModal) => void;
  openErrorModal: (payload: OpenStateModal) => void;
  openContextModal: <TKey extends FlowindModal>(
    payload: OpenContextModal<Parameters<FlowindModals[TKey]>[0]['innerProps']> & { modal: TKey },
  ) => void;
};

export const [useModalsEvents, createEvent] =
  createUseExternalEvents<ModalsEvents>('flowind-modals');

export const openModal = createEvent('openModal');
export const closeModal = createEvent('closeModal');
export const closeContextModal: ModalsEvents['closeContextModal'] = <TKey extends FlowindModal>(
  id: TKey,
) => createEvent('closeContextModal')(id);
export const closeAllModals = createEvent('closeAllModals');
export const openConfirmModal = createEvent('openConfirmModal');
export const openInfoModal = createEvent('openInfoModal');
export const openWarningModal = createEvent('openWarningModal');
export const openErrorModal = createEvent('openErrorModal');
export const openContextModal: ModalsEvents['openContextModal'] = <TKey extends FlowindModal>(
  payload: OpenContextModal<Parameters<FlowindModals[TKey]>[0]['innerProps']> & { modal: TKey },
) => createEvent('openContextModal')(payload);

export const modals = {
  open: openModal,
  close: closeModal,
  closeAll: closeAllModals,
  openConfirmModal,
  openContextModal,
  info: openInfoModal,
  warning: openWarningModal,
  error: openErrorModal,
};
