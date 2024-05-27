import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/components/label';
import { Text } from '@/components/text';
import { Radio } from './radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => (
    <Radio.Group>
      <Radio label="React" value="react" />
      <Radio label="Angular" value="ng" className="mt-3" />
      <Radio label="Svelte" value="sv" className="mt-3" />
    </Radio.Group>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Radio.Group>
      <Radio label="React" value="react" size="xs" />
      <Radio label="Angular" value="ng" size="sm" className="mt-3" />
      <Radio label="Svelte" value="sv" size="md" className="mt-3" />
      <Radio label="large" value="large" size="lg" className="mt-3" />
      <Radio label="xlarge" value="xlarge" size="xl" className="mt-3" />
    </Radio.Group>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Radio.Group>
      <div className="flex items-center gap-x-3">
        <Radio value="1" id="radio_1" />
        <Label htmlFor="radio_1" weight="plus">
          Radio 1
        </Label>
      </div>
      <div className="flex items-center gap-x-3">
        <Radio value="2" id="radio_2" />
        <Label htmlFor="radio_2" weight="plus">
          Radio 2
        </Label>
      </div>
      <div className="flex items-center gap-x-3">
        <Radio value="3" id="radio_3" />
        <Label htmlFor="radio_3" weight="plus">
          Radio 3
        </Label>
      </div>
    </Radio.Group>
  ),
};

export const WithLabelAndDescription: Story = {
  render: () => (
    <Radio.Group>
      <Radio
        value="1"
        id="radio_1"
        label="Radio 1"
        description="The quick brown fox jumps over a lazy dog."
      />
      <Radio
        value="2"
        id="radio_2"
        label="Radio 2"
        description="The quick brown fox jumps over a lazy dog."
        className="mt-3"
      />
      <Radio
        value="3"
        id="radio_4"
        label="Radio 3"
        description="The quick brown fox jumps over a lazy dog."
        className="mt-3"
      />
    </Radio.Group>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Radio.Group>
      <Radio value="1" disabled />
      <Radio value="2" />
      <Radio value="3" disabled checked />
    </Radio.Group>
  ),
};

// export const ChoiceBox: Story = {
//   render: () => (
//     <RadioGroup>
//       <RadioGroup.ChoiceBox
//         value="1"
//         label="One"
//         description="The quick brown fox jumps over a lazy dog."
//       />
//       <RadioGroup.ChoiceBox
//         value="2"
//         label="Two"
//         description="The quick brown fox jumps over a lazy dog."
//       />
//       <RadioGroup.ChoiceBox
//         value="3"
//         label="Three"
//         description="The quick brown fox jumps over a lazy dog."
//         disabled
//       />
//     </RadioGroup>
//   ),
// };

// export const ChoiceBoxDisabledSelected: Story = {
//   render: () => (
//     <RadioGroup defaultValue="3">
//       <RadioGroup.ChoiceBox
//         value="1"
//         label="One"
//         description="The quick brown fox jumps over a lazy dog."
//       />
//       <RadioGroup.ChoiceBox
//         value="2"
//         label="Two"
//         description="The quick brown fox jumps over a lazy dog."
//       />
//       <RadioGroup.ChoiceBox
//         value="3"
//         label="Three"
//         description="The quick brown fox jumps over a lazy dog."
//         disabled
//       />
//     </RadioGroup>
//   ),
// };
