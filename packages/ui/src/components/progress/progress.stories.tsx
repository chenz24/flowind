import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export function Striped() {
  return (
    <div style={{ padding: 40, width: 400 }}>
      <Progress value={50} striped />
    </div>
  );
}

export function Animation() {
  return (
    <div style={{ padding: 40, width: 400 }}>
      <Progress value={50} striped animate />
    </div>
  );
}

export function WithTooltips() {
  return (
    <div style={{ padding: 40, width: 400 }}>
      <Progress
        size="md"
        sections={[
          { value: 40, color: 'cyan', tooltip: 'Hello' },
          { value: 20, color: 'blue', tooltip: 'There' },
          { value: 15, color: 'emerald', tooltip: 'You' },
        ]}
      />
    </div>
  );
}

export function Label() {
  return (
    <div style={{ padding: 40, width: 400 }}>
      <Progress value={75} label="75%" size="xl" radius="xl" />
      <Progress
        className="mt-3"
        size="xl"
        radius="xl"
        striped
        animate
        sections={[
          { value: 30, color: 'blue', label: 'Documents', tooltip: 'Documents' },
          { value: 30, color: 'emerald', label: 'Apps' },
          { value: 25, color: 'red', label: 'Other' },
        ]}
      />
    </div>
  );
}
