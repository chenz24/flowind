import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ColorPicker } from './color-picker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export function Demo() {
  return <ColorPicker format="hexa" />;
}

export function ColorSwatchesEvents() {
  const [value, setValue] = useState('#efefefe');
  return (
    <div style={{ width: '200px' }}>
      <ColorPicker
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        swatches={['#eeeeee', '#d4d4d4', '#d4d5d6', '#5f3e4e']}
      />
      Value: {value}
    </div>
  );
}

export function UncontrolledSwatches() {
  return (
    <>
      <ColorPicker swatches={['#eeeeee', '#d4d4d4', '#d4d5d6', '#5f3e4e']} />
    </>
  );
}

export function withSwatches() {
  return (
    <ColorPicker
      format="hex"
      swatchesPerRow={10}
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
