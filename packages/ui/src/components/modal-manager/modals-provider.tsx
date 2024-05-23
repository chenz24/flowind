import React, { useCallback, useReducer, useRef } from 'react';

import { randomId } from '@flowind/hooks';
import { ExclamationCircleSolid, InformationCircleSolid, QuestionMarkCircle } from '@flowind/icons';
import { getDefaultZIndex } from '@/styles';
import { MediaObject } from '../media-object';
import { Modal } from '../modal';
import { ConfirmModal } from './confirm-modal';
import {
  ConfirmLabels,
  ContextModalProps,
  ModalsContext,
  ModalsContextProps,
  ModalSettings,
  ModalState,
  OpenConfirmModal,
  OpenContextModal,
  OpenStateModal,
} from './context';
import { useModalsEvents } from './events';
import { modalsReducer } from './reducer';

export interface ModalsProviderProps {
  /** Your app */
  children: React.ReactNode;

  /** Predefined modals */
  modals?: Record<string, React.FC<ContextModalProps<any>>>;

  /** Shared Modal component props, applied for every modal */
  modalProps?: ModalSettings;

  /** Confirm modal labels */
  labels?: ConfirmLabels;
}

function separateConfirmModalProps(props: OpenConfirmModal) {
  if (!props) {
    return { confirmProps: {}, modalProps: {} };
  }

  const {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels,
    footerLeftSection,
    ...others
  } = props;

  return {
    confirmProps: {
      id,
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      groupProps,
      labels,
      footerLeftSection,
    },
    modalProps: {
      id,
      ...others,
    },
  };
}

interface StateModal {
  modal: ModalState;
  labels: ConfirmLabels;
  type?: 'warning' | 'info' | 'error' | 'confirm';
}

const stateIcons = {
  warning: {
    icon: <ExclamationCircleSolid size={22} className="text-yellow-500" />,
    className: 'bg-yellow-100',
  },
  info: {
    icon: <InformationCircleSolid size={22} className="text-blue-500" />,
    className: 'bg-blue-100',
  },
  error: {
    icon: <ExclamationCircleSolid size={22} className="text-red-500" />,
    className: 'bg-red-100',
  },
  confirm: {
    icon: <QuestionMarkCircle size={22} className="text-blue-500" />,
    className: 'bg-blue-100',
  },
};

function openStateModal({ modal, labels, type = 'info' }: StateModal) {
  const _props = modal.props as OpenStateModal;
  const { children, title, description, icon, withCloseButton = false, width = 400 } = _props;
  const { modalProps: separatedModalProps, confirmProps: separatedConfirmProps } =
    separateConfirmModalProps(modal.props);

  const image = (
    <div
      className={`w-10 h-10 rounded-lg ${stateIcons[type].className} flex justify-center items-center`}
    >
      {stateIcons[type].icon}
    </div>
  );

  const _title = (
    <MediaObject
      classNames={{ title: 'text-base', root: 'items-start gap-x-3' }}
      image={icon || image}
      title={title}
      description={description}
    />
  );

  const hasCancelButton = type === 'confirm';

  const footer = (
    <ConfirmModal
      hasCancelButton={hasCancelButton}
      {...separatedConfirmProps}
      id={modal.id}
      labels={_props.labels || labels}
    />
  );

  return {
    modalProps: {
      withCloseButton,
      width,
      ...separatedModalProps,
      title: _title,
      footer,
      classNames: { header: 'py-4', footer: `${!children && 'border-t-0'}` },
    },
    content: children,
  };
}

export function ModalsProvider({ children, modalProps, labels, modals }: ModalsProviderProps) {
  const [state, dispatch] = useReducer(modalsReducer, { modals: [], current: null });
  const stateRef = useRef(state);
  stateRef.current = state;

  const closeAll = useCallback(
    (canceled?: boolean) => {
      dispatch({ type: 'CLOSE_ALL', canceled });
    },
    [stateRef, dispatch],
  );

  const openModal = useCallback(
    ({ modalId, ...props }: ModalSettings) => {
      const id = modalId || randomId();

      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'content',
          props,
        },
      });
      return id;
    },
    [dispatch],
  );

  const openConfirmModal = useCallback(
    ({ modalId, ...props }: OpenConfirmModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'confirm',
          props,
        },
      });
      return id;
    },
    [dispatch],
  );

  const openInfoModal = useCallback(
    ({ modalId, ...props }: OpenConfirmModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'info',
          props,
        },
      });
      return id;
    },
    [dispatch],
  );

  const openWarningModal = useCallback(
    ({ modalId, ...props }: OpenConfirmModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'warning',
          props,
        },
      });
      return id;
    },
    [dispatch],
  );

  const openErrorModal = useCallback(
    ({ modalId, ...props }: OpenConfirmModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'error',
          props,
        },
      });
      return id;
    },
    [dispatch],
  );

  const openContextModal = useCallback(
    (modal: string, { modalId, ...props }: OpenContextModal) => {
      const id = modalId || randomId();
      dispatch({
        type: 'OPEN',
        modal: {
          id,
          type: 'context',
          props,
          ctx: modal,
        },
      });
      return id;
    },
    [dispatch],
  );

  const closeModal = useCallback(
    (id: string, canceled?: boolean) => {
      dispatch({ type: 'CLOSE', modalId: id, canceled });
    },
    [stateRef, dispatch],
  );

  useModalsEvents({
    openModal,
    openConfirmModal,
    openInfoModal,
    openWarningModal,
    openErrorModal,
    openContextModal: ({ modal, ...payload }) => openContextModal(modal, payload),
    closeModal,
    closeContextModal: closeModal,
    closeAllModals: closeAll,
  });

  const ctx: ModalsContextProps = {
    modals: state.modals,
    openModal,
    openConfirmModal,
    openContextModal,
    closeModal,
    closeContextModal: closeModal,
    closeAll,
  };

  const getCurrentModal = () => {
    const currentModal = stateRef.current.current;
    switch (currentModal?.type) {
      case 'context': {
        const { innerProps, ...rest } = currentModal.props;
        const ContextModal = modals[currentModal.ctx];

        return {
          modalProps: rest,
          content: <ContextModal innerProps={innerProps} context={ctx} id={currentModal.id} />,
        };
      }
      case 'confirm': {
        return openStateModal({
          modal: currentModal,
          labels,
          type: 'confirm',
        });
      }
      case 'info': {
        return openStateModal({
          modal: currentModal,
          labels,
          type: 'info',
        });
      }
      case 'warning': {
        return openStateModal({
          modal: currentModal,
          labels,
          type: 'warning',
        });
      }
      case 'error': {
        return openStateModal({
          modal: currentModal,
          labels,
          type: 'error',
        });
      }
      case 'content': {
        const { children: currentModalChildren, ...rest } = currentModal.props;

        return {
          modalProps: rest,
          content: <>{currentModalChildren}</>,
        };
      }
      default: {
        return {
          modalProps: {},
          content: null,
        };
      }
    }
  };

  const { modalProps: currentModalProps, content } = getCurrentModal();

  return (
    <ModalsContext.Provider value={ctx}>
      <Modal
        zIndex={getDefaultZIndex('modal') + 1}
        {...modalProps}
        {...currentModalProps}
        opened={state.modals.length > 0}
        onClose={() => closeModal(state.current.id)}
      >
        {content}
      </Modal>

      {children}
    </ModalsContext.Provider>
  );
}
