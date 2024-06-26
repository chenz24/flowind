import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from './overlay';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const lorem =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione expedita voluptatibus aperiam cum, consectetur, tenetur consequuntur error qui eum eligendi, ea illum! Sit, sint totam dicta rem deleniti perspiciatis!';
const content = Array(20)
  .fill(0)
  .map((_, index) => <p key={index}>{lorem}</p>);

type Story = StoryObj<typeof Overlay>;

export function Usage() {
  return (
    <>
      <Overlay blur={3} radius="xl">
        Some content
      </Overlay>
      {content}
    </>
  );
}

export function Gradient() {
  return (
    <>
      <Overlay gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)">
        Some content
      </Overlay>
      {content}
    </>
  );
}

export function Center() {
  return (
    <>
      <Overlay center color="#fff" opacity={0.9}>
        Some content
      </Overlay>
      {content}
    </>
  );
}

export function Fixed() {
  return (
    <>
      <Overlay fixed>Some content</Overlay>
      {content}
    </>
  );
}
