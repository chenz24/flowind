import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useDisclosure } from '@flowind/hooks';
import { ExclamationCircle } from '@flowind/icons';
import { Button } from '../button';
import { ModalBase } from './modal-base';

const meta: Meta<typeof ModalBase> = {
  title: 'Components/ModalBase',
  component: ModalBase,
  parameters: {
    layout: 'centered',
  },
};

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, atque animi ducimus tempora iste distinctio harum nostrum eos tempore voluptatem, voluptas dolorem eveniet fugiat pariatur! Repellendus minus nulla non?';
const content = Array(20)
  .fill(0)
  .map((_, index) => <p key={index}>{lorem}</p>);

export default meta;

export function Usage() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <ModalBase
        opened={opened}
        onClose={close}
        __staticSelector="Modal"
        transitionProps={{ keepMounted: true }}
      >
        <ModalBase.Overlay />
        <ModalBase.Content>
          <ModalBase.Header>
            <ModalBase.Title>Modal title</ModalBase.Title>
            <ModalBase.CloseButton />
          </ModalBase.Header>
          <ModalBase.Body>Modal content</ModalBase.Body>
        </ModalBase.Content>
      </ModalBase>

      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
    </div>
  );
}

export function AlertDialog() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <ModalBase
        opened={opened}
        onClose={close}
        __staticSelector="Modal"
        transitionProps={{ keepMounted: true }}
      >
        <ModalBase.Overlay />
        <ModalBase.Content>
          <ModalBase.Body>
            <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
              <div
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
                aria-hidden="true"
              >
                <ExclamationCircle className="opacity-80" size={18} />
              </div>
              <div className="flex flex-col space-y-1 text-center sm:text-left">
                <h2 className="text-lg font-semibold">Are you sure?</h2>
                <p className="text-sm text-muted-foreground">
                  Are you sure you want to delete your account? All your data will be removed.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3">
              <Button variant="default" onClick={close}>
                Cancel
              </Button>
              <Button type="secondary">Delete account</Button>
            </div>
          </ModalBase.Body>
        </ModalBase.Content>
      </ModalBase>
    </div>
  );
}
