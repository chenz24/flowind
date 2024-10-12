import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Puzzle } from '@flowind/icons';
import { Stack } from '../stack/stack';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export function WithLabels() {
  return (
    <Stack>
      <Switch size="lg" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="md" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="sm" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="xs" onLabel={<span>1</span>} offLabel="0" />
    </Stack>
  );
}

export function IconInsideThumb() {
  return <Switch size="lg" thumbIcon={<Puzzle color="black" />} label="Hello" />;
}

export function SwitchGroup() {
  return (
    <>
      <Switch.Group defaultValue={['one', 'three']} label="Switch Group">
        <Switch value="one" size="md" />
        <Switch value="two" size="md" />
        <Switch value="three" size="md" />
        <Switch value="four" size="md" />
      </Switch.Group>
    </>
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Switch.Group label="With required asterisk" withAsterisk>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Just required" required>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Required asterisk off" required withAsterisk={false}>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Required false asterisk on" required={false} withAsterisk>
        <Switch value="1" className="mt-1" />
      </Switch.Group>
    </div>
  );
}
