import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SparklesSolid } from '@flowind/icons';
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
    <div style={{ padding: 40, width: 400 }}>
      <Autocomplete
        prefix={<SparklesSolid />}
        label="Autocomplete"
        placeholder="Autocomplete"
        data={data}
      />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <Autocomplete
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      data={[
        { value: 'Rick', group: 'Used to be a pickle' },
        { value: 'Morty', group: 'Never was a pickle' },
        { value: 'Beth', group: 'Never was a pickle' },
        { value: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  ),
};
