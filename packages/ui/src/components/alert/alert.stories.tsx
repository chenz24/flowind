import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../stack';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'Alert type',
      defaultValue: 'primary',
    },
    variant: {
      control: 'select',
      options: ['light', 'filled', 'default'],
      description: 'Alert variant style',
      defaultValue: 'light',
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Border radius size',
      defaultValue: 'sm',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether to show close button',
      defaultValue: false,
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

interface AlertDemoProps {
  variant?: 'light' | 'filled' | 'default';
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  title?: string;
  dismissible?: boolean;
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const AlertDemo = ({
  variant = 'light',
  type = 'primary',
  title,
  dismissible = false,
  radius = 'sm',
}: AlertDemoProps) => (
  <Alert
    variant={variant}
    type={type}
    title={title}
    dismissible={dismissible}
    radius={radius}
    className="w-[400px]"
  >
    This is a {variant} {type} alert with {title ? 'a title' : 'no title'}. You can use it to show
    important messages to users.
  </Alert>
);

export const Default: Story = {
  render: () => <AlertDemo />,
  args: {},
};

export const WithTitle: Story = {
  render: () => <AlertDemo title="Alert Title" />,
  args: {
    title: 'Alert Title',
  },
};

export const Dismissible: Story = {
  render: () => <AlertDemo dismissible />,
  args: {
    dismissible: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack direction="col" spacing="md">
      <AlertDemo variant="light" title="Light Variant" />
      <AlertDemo variant="filled" title="Filled Variant" />
      <AlertDemo variant="default" title="Default Variant" />
    </Stack>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <Stack direction="col" spacing="md">
      <AlertDemo type="primary" title="Primary Alert" />
      <AlertDemo type="secondary" title="Secondary Alert" />
      <AlertDemo type="success" title="Success Alert" />
      <AlertDemo type="warning" title="Warning Alert" />
      <AlertDemo type="danger" title="Danger Alert" />
      <AlertDemo type="info" title="Info Alert" />
    </Stack>
  ),
};

export const AllRadiusSizes: Story = {
  render: () => (
    <Stack direction="col" spacing="md">
      <AlertDemo radius="xs" title="Extra Small Radius" />
      <AlertDemo radius="sm" title="Small Radius" />
      <AlertDemo radius="md" title="Medium Radius" />
      <AlertDemo radius="lg" title="Large Radius" />
      <AlertDemo radius="xl" title="Extra Large Radius" />
    </Stack>
  ),
};

export const FilledVariants: Story = {
  render: () => (
    <Stack direction="col" spacing="md">
      <AlertDemo variant="filled" type="primary" title="Primary Filled" />
      <AlertDemo variant="filled" type="secondary" title="Secondary Filled" />
      <AlertDemo variant="filled" type="success" title="Success Filled" />
      <AlertDemo variant="filled" type="warning" title="Warning Filled" />
      <AlertDemo variant="filled" type="danger" title="Danger Filled" />
      <AlertDemo variant="filled" type="info" title="Info Filled" />
    </Stack>
  ),
};

export const DefaultVariants: Story = {
  render: () => (
    <Stack direction="col" spacing="md">
      <AlertDemo variant="default" type="primary" title="Primary Default" />
      <AlertDemo variant="default" type="secondary" title="Secondary Default" />
      <AlertDemo variant="default" type="success" title="Success Default" />
      <AlertDemo variant="default" type="warning" title="Warning Default" />
      <AlertDemo variant="default" type="danger" title="Danger Default" />
      <AlertDemo variant="default" type="info" title="Info Default" />
    </Stack>
  ),
};
