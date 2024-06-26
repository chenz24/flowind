import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from './scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="w-[400px]">
      <ScrollArea {...args} />
    </div>
  ),
};

export default meta;

// type Story = StoryObj<typeof ScrollArea>;
//
// export const Default: Story = {
//   args: {
//     placeholder: 'Placeholder',
//   },
// };
const content = Array(10)
  .fill(0)
  .map((_, index) => (
    <p key={index}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui minima, voluptates aperiam
      labore delectus consequuntur tempore a sed ullam? Vitae ducimus amet distinctio, fugiat odio
      accusamus veniam sit hic.
    </p>
  ));

export function OnScrollChange() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <ScrollArea style={{ height: 200 }} onScrollPositionChange={onScrollPositionChange}>
        <div style={{ width: 600 }}>{content}</div>
      </ScrollArea>
      <div>
        scroll position x: {scrollPosition.x}, y: {scrollPosition.y}
      </div>
    </div>
  );
}

export function NeverType() {
  return (
    <ScrollArea style={{ height: 200 }} type="hover">
      <div style={{ width: 600 }}>{content}</div>
    </ScrollArea>
  );
}
