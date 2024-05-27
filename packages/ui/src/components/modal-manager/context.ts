import { createContext, ReactNode } from 'react';

import { ModalProps } from '../modal';
import type { ConfirmModalProps } from './confirm-modal';

export type ModalSettings = Partial<Omit<ModalProps, 'opened'>> & { modalId?: string };

export type ConfirmLabels = Record<'confirm' | 'cancel', ReactNode>;

export interface OpenConfirmModal extends ModalSettings, ConfirmModalProps {}

export interface OpenStateModal extends ModalSettings, ConfirmModalProps {}

export interface OpenContextModal<CustomProps extends Record<string, any> = {}>
  extends ModalSettings {
  innerProps: CustomProps;
}

export interface ContextModalProps<T extends Record<string, any> = {}> {
  context: ModalsContextProps;
  innerProps: T;
  id: string;
}

export type ModalState =
  | { id: string; props: ModalSettings; type: 'content' }
  | { id: string; props: OpenConfirmModal; type: 'confirm' }
  | { id: string; props: OpenStateModal; type: 'info' }
  | { id: string; props: OpenStateModal; type: 'warning' }
  | { id: string; props: OpenStateModal; type: 'error' }
  | { id: string; props: OpenContextModal; type: 'context'; ctx: string };

export interface ModalsContextProps {
  modals: ModalState[];
  openModal: (props: ModalSettings) => string;
  openConfirmModal: (props: OpenConfirmModal) => string;
  openContextModal: <TKey extends FlowindModal>(
    modal: TKey,
    props: OpenContextModal<Parameters<FlowindModals[TKey]>[0]['innerProps']>,
  ) => string;
  closeModal: (id: string, canceled?: boolean) => void;
  closeContextModal: <TKey extends FlowindModal>(id: TKey, canceled?: boolean) => void;
  closeAll: () => void;
}

export type FlowindModalsOverride = {};

export type FlowindModalsOverwritten = FlowindModalsOverride extends {
  modals: Record<string, React.FC<ContextModalProps<any>>>;
}
  ? FlowindModalsOverride
  : {
      modals: Record<string, React.FC<ContextModalProps<any>>>;
    };

export type FlowindModals = FlowindModalsOverwritten['modals'];

export type FlowindModal = keyof FlowindModals;

export const ModalsContext = createContext<ModalsContextProps>(null);
ModalsContext.displayName = 'ModalsContext';
