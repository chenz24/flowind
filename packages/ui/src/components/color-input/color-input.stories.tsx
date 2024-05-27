import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ColorInput } from './color-input';

const meta: Meta<typeof ColorInput> = {
  title: 'Components/ColorInput',
  component: ColorInput,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ColorInput>;

export function WithEyeDropper() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <ColorInput size="xs" label="With eye dropper" placeholder="Read only" withEyeDropper />
      <ColorInput size="sm" label="With eye dropper" placeholder="Read only" withEyeDropper />
      <ColorInput size="md" label="With eye dropper" placeholder="Read only" withEyeDropper />
      <ColorInput size="lg" label="With eye dropper" placeholder="Read only" withEyeDropper />
      <ColorInput size="xl" label="With eye dropper" placeholder="Read only" withEyeDropper />
    </div>
  );
}

export function withSwatches() {
  return (
    <ColorInput
      format="hex"
      swatches={[
        '#25262b',
        '#868e96',
        '#fa5252',
        '#e64980',
        '#be4bdb',
        '#7950f2',
        '#4c6ef5',
        '#228be6',
        '#15aabf',
        '#12b886',
        '#40c057',
        '#82c91e',
        '#fab005',
        '#fd7e14',
      ]}
    />
  );
}

export function OnlySwatches() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        '#25262b',
        '#868e96',
        '#fa5252',
        '#e64980',
        '#be4bdb',
        '#7950f2',
        '#4c6ef5',
        '#228be6',
        '#15aabf',
        '#12b886',
        '#40c057',
        '#82c91e',
        '#fab005',
        '#fd7e14',
      ]}
    />
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <ColorInput label="Read only" placeholder="Read only" readOnly />
    </div>
  );
}

export function WithoutPickerAndSwatches() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <ColorInput withPicker={false} swatches={[]} />
    </div>
  );
}
