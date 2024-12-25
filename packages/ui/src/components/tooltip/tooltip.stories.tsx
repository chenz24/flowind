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
    side: {
      options: ['top', 'bottom', 'left', 'right'],
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
    showArrow: true,
    children: <InformationCircleSolid />,
  },
};

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip
        content={
          <div className="space-y-1 p-1">
            <p className="text-[13px] font-medium">Tooltip with title</p>
            <p className="text-xs text-fg-muted">
              Tooltips are made to be highly customizable, with features like dynamic placement,
              rich content, and a robust API. You can even use them as a full-featured dropdown menu
              by setting the <code>trigger</code> prop to <code>click</code>.
            </p>
          </div>
        }
        showArrow={false}
        width={290}
        color="dark"
      >
        <Button>target</Button>
      </Tooltip>
    </div>
  );
}
