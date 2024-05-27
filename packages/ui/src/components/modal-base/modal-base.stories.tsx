import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useDisclosure } from '@flowind/hooks';
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
