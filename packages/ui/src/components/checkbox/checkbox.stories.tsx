import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../stack';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="Default" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate className="mt-3" />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="xs" size="xs" />
      <Checkbox label="sm" size="sm" className="mt-3" />
      <Checkbox label="md" size="md" className="mt-3" />
      <Checkbox label="lg" size="lg" className="mt-3" />
      <Checkbox label="xl" size="xl" className="mt-3" />
    </div>
  );
}

export function CheckboxGroup() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox.Group defaultValue={['react']}>
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>
    </div>
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Checkbox.Group label="With required asterisk" withAsterisk>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Just required" required>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Required asterisk off" required withAsterisk={false}>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Required false asterisk on" required={false} withAsterisk>
        <Checkbox value="1" />
      </Checkbox.Group>
    </div>
  );
}

export function labelPosition() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Checkbox labelPosition="left" label="Hello from left" value="1" />
      <Checkbox labelPosition="right" label="Hello from right" value="1" />
    </Stack>
  );
}

export function WithDescription() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Checkbox
        description="This is left Checkbox"
        labelPosition="left"
        label="Hello from left "
        value="1"
      />
      <Checkbox
        description="This is right Checkbox"
        labelPosition="right"
        label="Hello from right"
        value="1"
      />
    </Stack>
  );
}

export function WithError() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Checkbox label="Invalid Checkbox without message" value="1" error />
      <Checkbox error="This is error" labelPosition="right" label="Hello from right" value="1" />
      <Checkbox error="Invalid Checkbox without label" value="1" />
    </Stack>
  );
}

export function Disable() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="Default" defaultChecked disabled />
      <Checkbox label="Indeterminate" indeterminate disabled className="mt-3" />
    </div>
  );
}
