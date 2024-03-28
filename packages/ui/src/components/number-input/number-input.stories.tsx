import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput } from './number-input';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="w-[400px]">
      <NumberInput {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <NumberInput label="With required asterisk" withAsterisk className="mb-5" />
      <NumberInput
        required
        className="mb-5"
        value={10}
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'input', 'error', 'description']}
      />
      <NumberInput
        label="Step on hold"
        description="Step the value when clicking and holding the arrows"
        stepHoldDelay={500}
        stepHoldInterval={100}
        className="mb-5"
      />

      <NumberInput
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
        className="mb-5"
      />

      <NumberInput
        label="Number input with decimal steps"
        defaultValue={0.05}
        precision={2}
        min={-1}
        step={0.05}
        max={1}
        className="mb-5"
      />

      <NumberInput
        decimalSeparator=","
        thousandsSeparator="."
        label="Number input with custom separators"
        defaultValue={0.5}
        precision={2}
        step={0.5}
      />
    </div>
  );
}
