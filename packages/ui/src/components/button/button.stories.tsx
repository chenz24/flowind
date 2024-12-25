import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ChevronDownMini, Facebook, Github, Google, Plus, Star, X } from '@flowind/icons';
import { Badge } from '../badge';
import { Tooltip } from '../tooltip';
import { Button, ButtonProps } from './button';
import { FancyButton } from './fancy-button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
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
    variant: 'default',
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
      <Button {...args} variant="subtle" color="neutral">
        Subtle
      </Button>
    </div>
  ),
};

export const Colors: Story = {
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
      <Button {...args} variant="filled" color="neutral">
        neutral
      </Button>
      <Button {...args} variant="filled" color="red">
        red
      </Button>
      <Button {...args} variant="filled" color="yellow">
        yellow
      </Button>
      <Button {...args} variant="filled" color="emerald">
        emerald
      </Button>
      <Button {...args} variant="filled" color="cyan">
        cyan
      </Button>
      <Button {...args} variant="filled" color="blue">
        blue
      </Button>
    </div>
  ),
};

export const Types: Story = {
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
      <Button {...args} variant="filled" type="primary">
        neutral
      </Button>
      <Button {...args} variant="filled" type="secondary">
        secondary
      </Button>
      <Button {...args} variant="filled" type="success">
        success
      </Button>
      <Button {...args} variant="filled" type="danger">
        danger
      </Button>
      <Button {...args} variant="filled" type="warning">
        warning
      </Button>
      <Button {...args} variant="filled" type="info">
        info
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
    <div
      className=""
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
      <Tooltip content="test tooltip">
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
    </div>
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

export const Usage: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button
        classNames={{ root: 'bg-[#DB4437] text-white hover:bg-[#DB4437]/90', leftIcon: 'mr-8' }}
        radius="md"
        leftIcon={<Google />}
      >
        Login with Google
      </Button>
      <Button
        classNames={{ root: 'bg-[#14171a] text-white hover:bg-[#14171a]/90', leftIcon: 'mr-8' }}
        radius="md"
        leftIcon={<X />}
      >
        Login with X
      </Button>
      <Button
        classNames={{ root: 'bg-[#1877f2] text-white hover:bg-[#1877f2]/90', leftIcon: 'mr-8' }}
        radius="md"
        leftIcon={<Facebook />}
      >
        Login with Facebook
      </Button>
      <Button
        classNames={{ root: 'bg-[#333333] text-white hover:bg-[#333333]/90', leftIcon: 'mr-8' }}
        radius="md"
        leftIcon={<Github />}
      >
        Login with Github
      </Button>
      <Button
        classNames={{ root: '', leftIcon: 'mr-3' }}
        radius="md"
        leftIcon={<Google />}
        variant="default"
      >
        Login with Google
      </Button>
      <Button
        classNames={{ root: '', leftIcon: 'mr-3' }}
        radius="md"
        leftIcon={<X />}
        variant="default"
      >
        Login with X
      </Button>
      <Button
        classNames={{ root: '', leftIcon: 'mr-3' }}
        radius="md"
        leftIcon={<Facebook />}
        variant="default"
      >
        Login with Facebook
      </Button>
      <Button
        classNames={{ root: '', leftIcon: 'mr-3' }}
        radius="md"
        leftIcon={<Github />}
        variant="default"
      >
        Login with Github
      </Button>
      <Button.Group>
        <Button
          radius="md"
          classNames={{ root: '', leftIcon: 'mr-3' }}
          leftIcon={<Star />}
          type="secondary"
        >
          Star
          <Badge
            className="ml-2"
            classNames={{ root: 'px-0.5 py-0.5 leading-none' }}
            radius="xs"
            variant="outline"
            size="sm"
          >
            12
          </Badge>
        </Button>
        <Button
          radius="md"
          type="secondary"
          classNames={{ root: '!border-l border-solid border-fg-subtle' }}
        >
          <ChevronDownMini />
        </Button>
      </Button.Group>
    </div>
  ),
};
