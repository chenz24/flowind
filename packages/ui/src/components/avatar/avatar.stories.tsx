import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    fallback: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['rounded', 'squared'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'lg'],
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/10656102?v=4',
    fallback: 'J',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'J',
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-[0.6rem]">
      <Avatar src="https://avatars.githubusercontent.com/u/10656102?v=4" fallback="J" />
      <Avatar src="https://avatars.githubusercontent.com/u/4099122?v=4" fallback="J" />
      <Avatar src="https://avatars.githubusercontent.com/u/4099132?v=4" fallback="J" />
      <Avatar src="" fallback="+3" />
    </div>
  ),
};
