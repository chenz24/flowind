import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Plus } from '@flowind/icons';
import { Stack } from '../stack';
import { CloseButton } from './close-button';

const meta: Meta<typeof CloseButton> = {
  title: 'Components/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Base: Story = {
  args: {
    size: 'sm',
  },
};

export function colors() {
  return (
    <Stack>
      <CloseButton size="sm" type="primary" />
      <CloseButton size="sm" type="secondary" />
      <CloseButton size="sm" type="danger" />
      <CloseButton size="sm" type="warning" />
      <CloseButton size="sm" type="info" />
    </Stack>
  );
}

export function variants() {
  return (
    <Stack>
      <CloseButton size="sm" variant="subtle" />
      <CloseButton size="sm" variant="filled" />
      <CloseButton size="sm" variant="outline" />
      <CloseButton size="sm" variant="light" />
      <CloseButton size="sm" variant="default" />
    </Stack>
  );
}

export function sizes() {
  return (
    <Stack>
      <CloseButton size="xs" />
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
      <CloseButton size="xl" />
    </Stack>
  );
}

// export const BaseTransparent: Story = {
//   args: {
//     variant: 'transparent',
//     size: 'base',
//     children: <Plus />,
//   },
// };
//
// export const LargePrimary: Story = {
//   args: {
//     variant: 'primary',
//     size: 'large',
//     children: <Plus />,
//   },
// };
//
// export const LargeTransparent: Story = {
//   args: {
//     variant: 'transparent',
//     size: 'large',
//     children: <Plus />,
//   },
// };
//
// export const XLargePrimary: Story = {
//   args: {
//     variant: 'primary',
//     size: 'xlarge',
//     children: <Plus />,
//   },
// };
//
// export const XLargeTransparent: Story = {
//   args: {
//     variant: 'transparent',
//     size: 'xlarge',
//     children: <Plus />,
//   },
// };
//
// export const Disabled: Story = {
//   args: {
//     variant: 'primary',
//     size: 'base',
//     children: <Plus />,
//     disabled: true,
//   },
// };
//
// export const IsLoading: Story = {
//   args: {
//     variant: 'primary',
//     size: 'base',
//     children: <Plus />,
//     isLoading: true,
//   },
// };
