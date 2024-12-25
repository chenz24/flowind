import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from './multi-select';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

const data = ['React', 'Angular', 'Vue', 'Svelte'];

export const Default: Story = {
  render: () => (
    <div className="w-[350px]">
      <MultiSelect
        width={300}
        data={data}
        clearable={false}
        defaultValue={['React', 'Angular']}
        searchable
      />
    </div>
  ),
};
