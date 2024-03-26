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
