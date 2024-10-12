import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="w-[400px]">
      <Textarea {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="With required asterisk" withAsterisk className="mb-5" autosize minRows={4} />
      <Textarea label="Just required" required className="mb-5" />
      <Textarea label="Required asterisk off" required withAsterisk={false} className="mb-5" />
      <Textarea label="Required false asterisk on" required={false} withAsterisk disabled />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = React.useState('');
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Textarea label="Controlled" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
