import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Plus } from '@flowind/icons';
import { Stack } from '../stack';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const BasePrimary: Story = {
  args: {
    variant: 'filled',
    size: 'sm',
    children: <Plus />,
  },
};

export const variants = () => (
  <Stack direction="col">
    <Stack>
      <IconButton variant="filled" size="sm" children={<Plus />} />
      <IconButton variant="outline" size="sm" children={<Plus />} />
      <IconButton variant="light" size="sm" children={<Plus />} />
      <IconButton variant="default" size="sm" children={<Plus />} />
      <IconButton variant="subtle" size="sm" children={<Plus />} />
    </Stack>
    <Stack>
      <IconButton variant="filled" size="sm" type="secondary" children={<Plus />} />
      <IconButton variant="outline" size="sm" type="secondary" children={<Plus />} />
      <IconButton variant="light" size="sm" type="secondary" children={<Plus />} />
      <IconButton variant="default" size="sm" type="secondary" children={<Plus />} />
      <IconButton variant="subtle" size="sm" type="secondary" children={<Plus />} />
    </Stack>
    <Stack>
      <IconButton variant="filled" size="sm" type="danger" children={<Plus />} />
      <IconButton variant="outline" size="sm" type="danger" children={<Plus />} />
      <IconButton variant="light" size="sm" type="danger" children={<Plus />} />
      <IconButton variant="default" size="sm" type="danger" children={<Plus />} />
      <IconButton variant="subtle" size="sm" type="danger" children={<Plus />} />
    </Stack>
    <Stack>
      <IconButton variant="filled" size="sm" type="warning" children={<Plus />} />
      <IconButton variant="outline" size="sm" type="warning" children={<Plus />} />
      <IconButton variant="light" size="sm" type="warning" children={<Plus />} />
      <IconButton variant="default" size="sm" type="warning" children={<Plus />} />
      <IconButton variant="subtle" size="sm" type="warning" children={<Plus />} />
    </Stack>
    <Stack>
      <IconButton variant="filled" size="sm" type="info" children={<Plus />} />
      <IconButton variant="outline" size="sm" type="info" children={<Plus />} />
      <IconButton variant="light" size="sm" type="info" children={<Plus />} />
      <IconButton variant="default" size="sm" type="info" children={<Plus />} />
      <IconButton variant="subtle" size="sm" type="info" children={<Plus />} />
    </Stack>
    <Stack>
      <IconButton variant="filled" size="sm" type="success" children={<Plus />} />
      <IconButton variant="outline" size="sm" type="success" children={<Plus />} />
      <IconButton variant="light" size="sm" type="success" children={<Plus />} />
      <IconButton variant="default" size="sm" type="success" children={<Plus />} />
      <IconButton variant="subtle" size="sm" type="success" children={<Plus />} />
    </Stack>
  </Stack>
);

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
