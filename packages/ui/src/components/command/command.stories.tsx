import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../badge';
import { Command } from './command';

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <Command>
        <Badge className="dark" size="sm" color="emerald">
          Get
        </Badge>
        <code>localhost:9000/store/products</code>
        <Command.Copy content="localhost:9000/store/products" />
      </Command>
    </div>
  ),
};
