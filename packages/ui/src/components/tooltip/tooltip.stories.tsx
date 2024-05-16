import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InformationCircleSolid } from '@flowind/icons';
import { Button } from '../button';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
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
    label: 'The quick brown fox jumps over the lazy dog.',
    position: 'top',
    withArrow: true,
    children: <InformationCircleSolid />,
  },
};

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip
        label="The quick brown fox jumps over the lazy dog."
        withArrow
        width={200}
        arrowSize={8}
      >
        <Button>target</Button>
      </Tooltip>
    </div>
  );
}

export const TooltipGroup = () => (
  <Tooltip.Group openDelay={500}>
    <Tooltip label="Tooltip 1">
      <Button>Button 1</Button>
    </Tooltip>
    <Tooltip label="Tooltip 2">
      <Button>Button 2</Button>
    </Tooltip>
    <Tooltip label="Tooltip 3">
      <Button>Button 3</Button>
    </Tooltip>
  </Tooltip.Group>
);
