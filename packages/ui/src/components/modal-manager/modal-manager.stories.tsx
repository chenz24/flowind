import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Stack } from '../stack';
import { Text } from '../text';
import {
  closeAllModals,
  closeModal,
  ContextModalProps,
  ModalsProvider,
  openConfirmModal,
  openContextModal,
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

  const showSingleConfirmModal = () =>
    openConfirmModal({
      title: 'Just confirm',
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
      </Stack>
    </ModalsProvider>
  );
}
