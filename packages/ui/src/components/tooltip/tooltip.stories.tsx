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
        label={
          <div className="space-y-1 p-1">
            <p className="text-[13px] font-medium">Tooltip with title</p>
            <p className="text-xs text-muted-foreground">
              Tooltips are made to be highly customizable, with features like dynamic placement,
              rich content, and a robust API. You can even use them as a full-featured dropdown menu
              by setting the <code>trigger</code> prop to <code>click</code>.
            </p>
          </div>
        }
        withArrow={false}
        width={290}
        arrowSize={8}
        color="dark"
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
