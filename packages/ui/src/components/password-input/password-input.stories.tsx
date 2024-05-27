import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PasswordInput } from './password-input';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="w-[400px]">
      <PasswordInput {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <PasswordInput label="With required asterisk" withAsterisk className="mb-5" />
      <PasswordInput
        required
        className="mb-5"
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'input', 'error', 'description']}
      />
      <PasswordInput label="Required asterisk off" required withAsterisk={false} className="mb-5" />
      <PasswordInput label="Required false asterisk on" required={false} withAsterisk disabled />
    </div>
  );
}
