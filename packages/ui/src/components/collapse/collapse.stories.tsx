import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useDisclosure } from '@flowind/hooks';
import { Container } from '@/components/container';
import { Button } from '../button';
import { Collapse } from './collapse';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Collapse>;

const CollapseDemo = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className="w-[400px]">
      <Button onClick={toggle}>Toggle content</Button>

      <Collapse in={opened}>
        <p>
          From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with
          darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of
          its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are
          visible in the upper jaw when its mouth is open. Each of its thick legs ends with three
          sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted
          there at birth. The bulb also conceals two slender, tentacle-like vines and provides it
          with energy through photosynthesis as well as from the nutrient-rich seeds contained
          within.
        </p>
      </Collapse>
    </div>
  );
};

export const Default: Story = {
  render: () => <CollapseDemo />,
  args: {},
};
