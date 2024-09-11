import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FlowindSize } from '@/styles';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

// type Story = StoryObj<typeof Input>;

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as FlowindSize[];

export function Variants() {
  return (
    <div style={{ padding: 40 }}>
      <Input placeholder="default" />
      <Input placeholder="invalid" error />
      <Input placeholder="disabled" disabled />
      <Input placeholder="with icon" prefix="$" />
      <Input placeholder="filled" variant="filled" />
      <Input placeholder="unstyled" variant="unstyled" />
    </div>
  );
}

export function Sizes() {
  const sizes = SIZES.map((size) => (
    <Input
      placeholder={`Input ${size}`}
      size={size}
      key={size}
      prefix={size}
      rightSection={size}
      className="mb-4"
      styles={{
        addonAfter: { backgroundColor: 'pink' },
        prefixWrapper: { backgroundColor: 'cyan' },
      }}
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function RightSection() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Input
        placeholder="Input with right section"
        rightSection="$"
        defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
      />
    </div>
  );
}
