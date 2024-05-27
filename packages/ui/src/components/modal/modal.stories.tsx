import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useDisclosure } from '@flowind/hooks';
import { CubeSolid } from '@flowind/icons';
import { Button } from '../button';
import { MediaObject } from '../media-object';
import { Stack } from '../stack';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, atque animi ducimus tempora iste distinctio harum nostrum eos tempore voluptatem, voluptas dolorem eveniet fugiat pariatur! Repellendus minus nulla non?';
const content = Array(20)
  .fill(0)
  .map((_, index) => (
    <p key={index} style={{ margin: 0 }}>
      {lorem}
    </p>
  ));

const title = (
  <MediaObject
    title="Modal Title"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    image={<CubeSolid size={24} className="text-fg-subtle" />}
  />
);

const footer = (
  <Stack justify="flex-end">
    <Button variant="default">Cancel</Button>
    <Button type="primary">Save</Button>
  </Stack>
);

export function Usage() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Modal
        opened={opened}
        onClose={close}
        footer={footer}
        title={title}
        width="lg"
        zIndex={73812}
      >
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
        consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco
        minim nostrud elit officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
        exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.
        Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem
        aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
        eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
      </Modal>
    </div>
  );
}

export function CustomTransition() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Just a Modal"
        width="md"
        transitionProps={{ transition: 'fade', duration: 200 }}
        overlayProps={{ blur: 10 }}
      >
        Modal with some content
      </Modal>
    </div>
  );
}

export function Centered() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" centered>
        Centered modal
      </Modal>
    </div>
  );
}

export function FullScreen() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" fullScreen>
        Fullscreen modal
      </Modal>
    </div>
  );
}

export function WithScroll() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} footer={footer} title="Just a Modal" width="md">
        {content}
      </Modal>
    </div>
  );
}

export function NativeScrollArea() {
  return (
    <div style={{ padding: 40 }}>
      <Modal
        opened
        onClose={() => {}}
        title="Just a Modal"
        width="md"
        scrollAreaComponent={Modal.NativeScrollArea}
      >
        {content}
      </Modal>
    </div>
  );
}

export function NestedModals() {
  const [parentOpened, { open: parentOpen, close: parentClose }] = useDisclosure(false);
  const [nestedOpened, { open: nestedOpen, close: nestedClose }] = useDisclosure(false);

  return (
    <div style={{ padding: 40 }}>
      <Modal opened={parentOpened} onClose={parentClose} title="Parent Modal" width={1400} centered>
        <div>{content}</div>

        <Button onClick={nestedOpen}>Open Nested</Button>

        <Modal opened={nestedOpened} onClose={nestedClose} title="Nested Modal" centered>
          <div>Nested Content</div>
        </Modal>
      </Modal>

      <Button onClick={parentOpen}>Open Parent</Button>
    </div>
  );
}
