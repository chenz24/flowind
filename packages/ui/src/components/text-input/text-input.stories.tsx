import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Puzzle } from '@flowind/icons';
import { Stack } from '../stack';
import { TextInput } from './text-input';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  // render: ({ children, ...args }) => <Badge {...args}>{children || 'Badge'}</Badge>,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

// export const Grey: Story = {
//   args: {
//     color: 'gray',
//     children: 'Badge',
//   },
// };

export function Default() {
  return (
    <Stack direction="col" spacing="md" className="w-[400px]" grow>
      <TextInput placeholder="Enter your name" className="w-full" />
      <TextInput
        size="md"
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      />
      <TextInput placeholder="Enter your password" />
    </Stack>
  );
}

export function InputWrapperOrder() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextInput
        value="Default"
        label="Input label"
        description="Input description"
        error="Input error"
      />

      <TextInput
        className="mt-5"
        value="Text input"
        label="Input label"
        required
        inputWrapperOrder={['label', 'input']}
      />

      <TextInput
        className="mt-5"
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'error', 'description', 'input']}
      />

      <TextInput
        className="mt-5"
        value="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'description', 'error', 'input']}
        addonAfter={<Puzzle className="text-gray-500" />}
      />

      <TextInput
        className="mt-5"
        defaultValue="Text input"
        label="Input label"
        description="Input description"
        error="Input error"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
        prefix={<Puzzle className="text-gray-500" />}
      />
    </div>
  );
}
