import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useDisclosure } from '@flowind/hooks';
import { Button } from '@/components/button';
import { Drawer } from './drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, atque animi ducimus tempora iste distinctio harum nostrum eos tempore voluptatem, voluptas dolorem eveniet fugiat pariatur! Repellendus minus nulla non?';
const content = Array(40)
  .fill(0)
  .map((_, index) => (
    <p key={index} style={{ margin: 0 }}>
      {lorem}
    </p>
  ));

export function Default() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open drawer</Button>
      {content}
      <Button onClick={open}>Open drawer</Button>
      <Drawer opened={opened} onClose={close} title="A drawer" position="right">
        Content
      </Drawer>
    </div>
  );
}

export function Scroll() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open drawer</Button>
      {content}
      <Button onClick={open}>Open drawer</Button>
      <Drawer opened={opened} onClose={close} title="A drawer" position="right">
        {content}
      </Drawer>
    </div>
  );
}
