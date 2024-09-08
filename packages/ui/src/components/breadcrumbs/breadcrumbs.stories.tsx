import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../stack';
import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  // render: ({ children, ...args }) => <Badge {...args}>{children || 'Badge'}</Badge>,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export function variants() {
  const items = [
    { title: 'Flowind', href: '#' },
    { title: 'Flowind components', href: '#' },
    { title: 'breadcrumbs', href: '#' },
  ].map((item, index) => (
    <a href={item.href} key={index} className="text-fg-subtle">
      {item.title}
    </a>
  ));

  return (
    <Stack direction="col">
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" className="mt-4">
        {items}
      </Breadcrumbs>
    </Stack>
  );
}
