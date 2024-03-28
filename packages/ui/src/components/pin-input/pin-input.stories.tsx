import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PinInput } from './pin-input';

const meta: Meta<typeof PinInput> = {
  title: 'Components/PinInput',
  component: PinInput,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="w-[400px]">
      <PinInput {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  args: {},
};

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <PinInput className="mb-5" spacing="xs" />
    </div>
  );
}
