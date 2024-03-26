import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { PlusMini } from '@flowind/icons';
import { Stack } from '../stack';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export function types() {
  return (
    <>
      <Stack>
        <Button variant="filled" type="primary">
          Primary
        </Button>
        <Button variant="filled" type="secondary">
          Secondary
        </Button>
        <Button variant="filled" type="danger">
          Danger
        </Button>
        <Button variant="filled" type="warning">
          Warning
        </Button>
        <Button variant="filled" type="info">
          Info
        </Button>
        <Button variant="filled" type="success">
          Success
        </Button>
      </Stack>
      <Stack className="mt-3.5">
        <Button variant="light" type="primary">
          Primary
        </Button>
        <Button variant="light" type="secondary">
          Secondary
        </Button>
        <Button variant="light" type="danger">
          Danger
        </Button>
        <Button variant="light" type="warning">
          Warning
        </Button>
        <Button variant="light" type="info">
          Info
        </Button>
        <Button variant="light" type="success">
          Success
        </Button>
      </Stack>
    </>
  );
}

export function Variants() {
  return (
    <Stack>
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outlined</Button>
      <Button variant="light">Light</Button>
      <Button variant="default">Default</Button>
      <Button variant="subtle">Subtle</Button>
    </Stack>
  );
}

export const Transparent: Story = {
  args: {
    children: 'Action',
    variant: 'filled',
  },
};

export const Compact: Story = {
  args: {
    children: 'Action',
    compact: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Action',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Action',
    leftIcon: <PlusMini key={1} />,
  },
};

export function Sizes() {
  return (
    <>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
    </>
  );
}

export function Types() {
  return (
    <Stack>
      <Button variant="filled" type="primary">
        Filled
      </Button>
      <Button variant="filled" type="secondary">
        Filled
      </Button>
      <Button variant="filled" type="danger">
        Filled
      </Button>
      <Button variant="filled" type="warning">
        Filled
      </Button>
      <Button variant="filled" type="info">
        Filled
      </Button>
      <Button variant="filled" type="success">
        Filled
      </Button>
    </Stack>
  );
}

export const Loading: Story = {
  args: {
    children: 'Action',
    loading: true,
  },
};

export const Large: Story = {
  args: {
    children: 'Action',
    size: 'lg',
  },
};

export const XLarge: Story = {
  args: {
    children: 'Action',
    size: 'xl',
  },
};
