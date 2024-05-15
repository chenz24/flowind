import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/button';
import { Copy } from './copy';

const meta: Meta<typeof Copy> = {
  title: 'Components/Copy',
  component: Copy,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Copy>;

export const Default: Story = {
  args: {
    content: 'Hello world',
  },
};

export const AsChild: Story = {
  args: {
    content: 'Hello world',
    asChild: false,
    children: (
      <Button className="text-fg-on-color" color="blue">
        Copy
      </Button>
    ),
  },
};
