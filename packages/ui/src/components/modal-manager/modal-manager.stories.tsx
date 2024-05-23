import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { openErrorModal, openWarningModal } from '@/components/modal-manager/events';
import { Button } from '../button';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextInput } from '../text-input';
import {
  closeAllModals,
  closeModal,
  ContextModalProps,
  ModalsProvider,
  openConfirmModal,
  openContextModal,
  openInfoModal,
  openModal,
  useModals,
} from './index';

const meta: Meta = {
  title: 'Components/ModalManager',
  // component: Kbd,
  // parameters: {
  //   layout: 'centered',
  // },
};

export default meta;

// type Story = StoryObj<typeof Kbd>;

export function Usage() {
  const showContextModal = () =>
    openContextModal({
      modalId: 'context-modal',
      modal: 'hello',
      title: 'Context modal',
      centered: true,
      onClose: () => console.log('context modal closed'),
      innerProps: {
        contextProp: 'test-modal',
      },
    });

  const showContentModal = () =>
    openModal({
      modalId: 'content-modal',
      title: 'Hello there',
      children: (
        <Text color="blue" onClick={() => closeModal('content-modal')}>
          My content modal
        </Text>
      ),
      onClose: () => console.log('content modal 1 closed'),
    });

  const showInfoModal = () =>
    openInfoModal({
      modalId: 'info-modal',
      title: 'Hello there info modal',
      description:
        'Insert your status modal description here. It would look better as two lines of text.',
      footerLeftSection: (
        <Text color="blue" onClick={() => closeModal('info-modal')}>
          Left
        </Text>
      ),
      onClose: () => console.log('content modal 1 closed'),
    });

  const showWarningModal = () =>
    openWarningModal({
      modalId: 'info-modal',
      title: 'Hello there info modal',
      description:
        'Insert your status modal description here. It would look better as two lines of text.',
      onClose: () => console.log('content modal 1 closed'),
    });

  const showErrorModal = () =>
    openErrorModal({
      modalId: 'info-modal',
      title: 'Hello there info modal',
      description:
        'Insert your status modal description here. It would look better as two lines of text.',
      onClose: () => console.log('content modal 1 closed'),
    });

  const showSingleConfirmModal = () =>
    openConfirmModal({
      title: 'Delete Something',
      description: 'Are you sure? This cannot be undone.',
      children: (
        <div className="pt-1.5">
          <p className="txt-sm text-fg-subtle">
            Please type <span className="font-semibold">project</span> to confirm
          </p>
          <div>
            <TextInput />
          </div>
        </div>
      ),
      onCancel: () => console.log('Single confirm modal cancelled'),
      onConfirm: () => console.log('Single confirm modal confirmed'),
      onClose: () => console.log('Single confirm modal closed'),
    });

  const showNestedModal = () =>
    openConfirmModal({
      title: 'Are you really sure?',
      closeOnConfirm: false,
      onConfirm: closeAllModals,
      onClose: () => console.log('confirm modal 2 closed'),
    });

  const showConfirmModal = () =>
    openConfirmModal({
      title: 'Please confirm this action',
      confirmProps: { color: 'red' },
      closeOnConfirm: false,
      children: (
        <Text size="sm" color="dimmed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam modi vitae
          molestias unde tempora exercitationem fugit, ex repellat doloribus maiores facilis quo
          quis, itaque temporibus obcaecati vel iusto praesentium.
        </Text>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: showNestedModal,
      onClose: () => console.log('confirm modal 1 closed'),
    });

  return (
    <ModalsProvider
      modalProps={{ centered: true }}
      modals={{
        hello: ({ context, id, innerProps }: ContextModalProps<{ contextProp: string }>) => {
          console.log(innerProps, id, context);
          return (
            <div>
              <div>Test custom modal: {innerProps.contextProp}</div>
              <Button onClick={() => context.closeModal(id)}>Close</Button>
            </div>
          );
        },
      }}
      labels={{ confirm: '确定', cancel: 'Cancel' }}
    >
      <Stack>
        <Button onClick={showContextModal}>Open context modal</Button>
        <Button onClick={showConfirmModal} color="red">
          Open nested confirm modal
        </Button>
        <Button onClick={showSingleConfirmModal} color="cyan">
          Open single confirm modal
        </Button>
        <Button onClick={showContentModal} color="blue">
          Open content modal
        </Button>
        <Button onClick={showInfoModal} color="blue">
          Open info modal
        </Button>
        <Button onClick={showWarningModal} color="yellow">
          Open warning modal
        </Button>
        <Button onClick={showErrorModal} color="red">
          Open error modal
        </Button>
      </Stack>
    </ModalsProvider>
  );
}
