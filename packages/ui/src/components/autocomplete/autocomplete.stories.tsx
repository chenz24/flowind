import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete } from './autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

const data = ['React', 'Angular', 'Svelte', 'Vue'];

export const Default: Story = {
  render: () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={data} />
    </div>
  ),
};
