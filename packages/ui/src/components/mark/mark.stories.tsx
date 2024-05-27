import type { Meta, StoryObj } from '@storybook/react';

import { Mark } from './mark';

const meta: Meta<typeof Mark> = {
  title: 'Components/Mark',
  component: Mark,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Mark>;

export const Default: Story = {
  args: {
    children: '⌘ + K',
    color: 'blue',
  },
};
