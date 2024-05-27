import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../stack';
import { SegmentedControl } from './segmented-control';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Very long label', value: 'svelte' },
];
export function Usage() {
  return <SegmentedControl data={data} />;
}

export function ReadOnly() {
  return <SegmentedControl readOnly data={data} />;
}

export function EmptyData() {
  return <SegmentedControl data={[]} />;
}
