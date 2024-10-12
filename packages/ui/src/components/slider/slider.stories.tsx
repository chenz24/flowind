import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../input';
import { RangeSlider, Slider } from './index';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export function Usage() {
  return (
    <div style={{ width: 400, padding: 40 }}>
      <Slider
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </div>
  );
}

export function MinRangeWithNegativeValues() {
  return (
    <div style={{ width: 400, padding: 40 }}>
      <RangeSlider min={-10} max={10} defaultValue={[-10, 0]} />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ width: 400, padding: 40 }}>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </div>
  );
}

export function Scaled() {
  function valueLabelFormat(value: number) {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }

    return `${scaledValue} ${units[unitIndex]}`;
  }

  return (
    <div style={{ width: 400, padding: 40 }}>
      <Slider
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        className="mt-16"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </div>
  );
}

export function FormLabel() {
  return (
    <div style={{ width: 400, padding: 40 }}>
      <Input.Wrapper label="最大值" required error="asdf">
        <Slider defaultValue={60} className="mt-1" />
      </Input.Wrapper>
    </div>
  );
}
