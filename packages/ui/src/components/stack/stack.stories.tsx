import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './stack';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  // argTypes: {
  //   src: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  //   fallback: {
  //     control: {
  //       type: 'text',
  //     },
  //   },
  //   variant: {
  //     control: {
  //       type: 'select',
  //       options: ['rounded', 'squared'],
  //     },
  //   },
  //   size: {
  //     control: {
  //       type: 'select',
  //       options: ['default', 'large'],
  //     },
  //   },
  // },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

const Rectangle = () => <div className="w-28 h-28 bg-blue-100" />;

export const Demo: Story = {
  args: {
    children: [<Rectangle />, <Rectangle />, <Rectangle />],
  },
};

export const justifies = () => (
  <div className="w-[800px]">
    <Stack justify="flex-start" spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack justify="center" spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack justify="flex-end" spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack justify="space-around" spacing="sm">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
  </div>
);

export const spacing = () => (
  <div className="w-[800px]">
    <Stack spacing="xs" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack spacing="md" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack spacing="lg">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
  </div>
);

export const direction = () => (
  <div className="w-[800px]">
    <Stack direction="row" spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack direction="col" spacing="sm">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
  </div>
);

export const align = () => (
  <div className="w-[800px]">
    <Stack align="flex-start" spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack align="center" spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack align="flex-end" spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack align="stretch" spacing="sm" className="mb-10">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
    <Stack align="baseline" spacing="sm">
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Stack>
  </div>
);
