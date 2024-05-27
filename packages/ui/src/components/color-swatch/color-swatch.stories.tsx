import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ColorSwatch } from './color-swatch';

const meta: Meta<typeof ColorSwatch> = {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ColorSwatch>;

export function usage() {
  return <ColorSwatch color="#f300f3" component="button" />;
}
