import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../stack';
import { Rating } from './rating';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Fractions: Story = {
  render: () => (
    <div className="w-[350px] h-10">
      <Rating size="xl" defaultValue={3} fractions={2} />
    </div>
  ),
};
