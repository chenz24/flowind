import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InformationCircleSolid } from '@flowind/icons';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    side: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'The quick brown fox jumps over the lazy dog.',
    side: 'top',
    children: <InformationCircleSolid />,
  },
};
