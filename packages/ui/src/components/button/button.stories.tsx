import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Plus } from '@flowind/icons';
import { Stack } from '../stack';
import { Tooltip } from '../tooltip';
import { Button, ButtonProps } from './button';
import { FancyButton } from './fancy-button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'light', 'default'],
      description: 'Button variant',
      defaultValue: 'filled',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Button size',
      defaultValue: 'md',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled button',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
  },
};

export const Variants: Story = {
  render: (args: ButtonProps) => (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Button {...args} variant="filled">
        Filled
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="light">
        Light
      </Button>
      <Button {...args} variant="default">
        Default
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args: ButtonProps) => (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="xl">
        Extra Large
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'filled',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    variant: 'filled',
    loading: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    leftIcon: <Plus key={1} />,
    variant: 'filled',
  },
};

export const Compact: Story = {
  args: {
    children: 'Compact Button',
    compact: true,
    variant: 'filled',
  },
};

export function FancyButtonDemo() {
  return (
    <Stack>
      <Tooltip label="test tooltip">
        <Button
          variant="fancy"
          type="primary"
          size="xs"
          onClick={() => {
            console.log(31);
          }}
        >
          Extra small
        </Button>
      </Tooltip>
      <Button variant="fancy" type="secondary" size="sm">
        Button
      </Button>
      <FancyButton
        variant="danger"
        onClick={() => {
          console.log(123);
        }}
      >
        Medium
      </FancyButton>
      <FancyButton variant="secondary">Button</FancyButton>
      <FancyButton variant="success" size="lg">
        Large
      </FancyButton>
      <FancyButton variant="warning">Large</FancyButton>
      <FancyButton variant="info" size="xl">
        Extra large
      </FancyButton>
    </Stack>
  );
}

export const ButtonGroup: StoryObj<typeof Button> = {
  render: () => (
    <Button.Group>
      <Button variant="filled">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
      <Button variant="outline">Forth</Button>
      <Button variant="outline">Last</Button>
    </Button.Group>
  ),
};
