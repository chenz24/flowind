import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Sparkles } from '@flowind/icons';
import { MediaObject } from './media-object';

const meta: Meta<typeof MediaObject> = {
  title: 'Components/MediaObject',
  component: MediaObject,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MediaObject>;

export const Default: Story = {
  args: {
    image: <Sparkles size={24} />,
    title: 'Section Title',
    description: 'Data about this section...',
  },
};

export const withoutImage: Story = {
  args: {
    title: 'Section Title',
    description: 'Data about this section...',
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'Section Title',
  },
};
