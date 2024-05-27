import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../stack';
import { Text } from '../text';
import { Divider } from './divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="w-[400px]">
      <Divider {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export function variants() {
  return (
    <div style={{ width: 600, padding: 20 }}>
      <Divider label="Label on the left" labelPosition="left" className="my-5" />
      <Divider label="Label on the right" labelPosition="right" className="my-5" />
      <Divider label="Label on the center" labelPosition="center" className="my-5" />
      <Divider label="variant dotted" labelPosition="left" variant="dotted" className="my-5" />
      <Divider label="variant dashed" labelPosition="right" variant="dashed" className="my-5" />
    </div>
  );
}

export function vertical() {
  return (
    <Stack style={{ width: 600, padding: 20 }}>
      <Text>Label</Text>
      <Divider orientation="vertical" />
      <Text>Label</Text>
    </Stack>
  );
}

export function sizes() {
  return (
    <div style={{ width: 600, padding: 20 }}>
      <Divider label="Label on the left" labelPosition="left" size="xs" className="my-5" />
      <Divider label="Label on the right" labelPosition="right" size="sm" className="my-5" />
      <Divider label="Label on the center" labelPosition="center" size="md" className="my-5" />
      <Divider
        label="variant dotted"
        labelPosition="left"
        variant="dotted"
        size="lg"
        className="my-5"
      />
      <Divider
        label="variant dashed"
        labelPosition="right"
        variant="dashed"
        size="xl"
        className="my-5"
      />
    </div>
  );
}
