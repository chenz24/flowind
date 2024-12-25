import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Check, Pencil } from '@flowind/icons';
import { Stack } from '../stack';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  // render: ({ children, ...args }) => <Badge {...args}>{children || 'Badge'}</Badge>,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export function variants() {
  return (
    <Stack>
      <Badge variant="light">Light</Badge>
      <Badge variant="lighter">Light</Badge>
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="dot" color="red">
        Dot
      </Badge>
    </Stack>
  );
}

export function dot() {
  return (
    <Stack>
      <Badge color="neutral" variant="dot">
        Gray
      </Badge>
      <Badge color="red" variant="dot">
        Red
      </Badge>
      <Badge color="emerald" variant="dot">
        Green
      </Badge>
      <Badge color="blue" variant="dot">
        Blue
      </Badge>
      <Badge color="yellow" variant="dot" radius="sm">
        Yellow
      </Badge>
    </Stack>
  );
}

export function colors() {
  return (
    <Stack>
      <Badge color="neutral">Gray</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="emerald">Green</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="yellow">Yellow</Badge>
    </Stack>
  );
}

export function lighterColors() {
  return (
    <Stack>
      <Badge color="neutral" variant="lighter">
        Gray
      </Badge>
      <Badge color="red" variant="lighter">
        Red
      </Badge>
      <Badge color="emerald" variant="lighter">
        Green
      </Badge>
      <Badge color="blue" variant="lighter">
        Blue
      </Badge>
      <Badge color="yellow" variant="lighter">
        Yellow
      </Badge>
      <Badge color="cyan" variant="lighter">
        Yellow
      </Badge>
    </Stack>
  );
}

export function sizes() {
  return (
    <Stack>
      <Badge size="xs">XS</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </Stack>
  );
}

export function radius() {
  return (
    <Stack>
      <Badge radius="xs">XS</Badge>
      <Badge radius="sm">Small</Badge>
      <Badge radius="md">Medium</Badge>
      <Badge radius="lg">Large</Badge>
      <Badge radius="xl">Extra Large</Badge>
    </Stack>
  );
}

export function icon() {
  return (
    <Stack>
      <Badge leftSection={<Check size={12} />} variant="lighter">
        Left Section
      </Badge>
      <Badge rightSection={<Pencil size={12} />} variant="outline">
        Right Section
      </Badge>
    </Stack>
  );
}
