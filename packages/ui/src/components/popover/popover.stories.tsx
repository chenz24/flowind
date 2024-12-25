import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Popover } from './popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: () => (
    <div className="p-10">
      <Popover>
        <Popover.Trigger asChild>
          <Button type="primary">打开 Popover</Button>
        </Popover.Trigger>
        <Popover.Content side="top">
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-[13px] font-medium">基础 Popover</p>
              <p className="text-xs text-muted-foreground">
                这是一个基础的 Popover 示例，展示了最基本的用法。
              </p>
            </div>
            <Button size="sm" className="h-7 px-2">
              了解更多
            </Button>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <div className="p-10">
      <Popover>
        <Popover.Trigger asChild>
          <Button type="primary">带箭头的 Popover</Button>
        </Popover.Trigger>
        <Popover.Content showArrow className="w-[200px]">
          <p>这是一个带箭头指示的 Popover</p>
        </Popover.Content>
      </Popover>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-4 p-10">
      <Popover>
        <Popover.Trigger asChild>
          <Button type="primary">上方显示</Button>
        </Popover.Trigger>
        <Popover.Content side="top" showArrow>
          <p>Popover 内容</p>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button type="primary">右侧显示</Button>
        </Popover.Trigger>
        <Popover.Content side="right" showArrow>
          <p>Popover 内容</p>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button type="primary">下方显示</Button>
        </Popover.Trigger>
        <Popover.Content side="bottom" showArrow>
          <p>Popover 内容</p>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger asChild>
          <Button type="primary">左侧显示</Button>
        </Popover.Trigger>
        <Popover.Content side="left" showArrow>
          <p>Popover 内容</p>
        </Popover.Content>
      </Popover>
    </div>
  ),
};

export const CustomWidth: Story = {
  render: () => (
    <div className="p-10">
      <Popover>
        <Popover.Trigger asChild>
          <Button type="primary">自定义宽度</Button>
        </Popover.Trigger>
        <Popover.Content className="w-[300px]" showArrow>
          <div className="space-y-2">
            <h4 className="font-medium">自定义宽度的 Popover</h4>
            <p className="text-sm text-muted-foreground">
              通过设置 className="w-[300px]" 来控制 Popover 的宽度。
              这样可以更好地控制内容的展示效果。
            </p>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  ),
};

export const WithAnchor: Story = {
  render: () => (
    <div className="p-10">
      <Popover>
        <Popover.Anchor className="inline-flex gap-2">
          <Button variant="outline">锚点 1</Button>
          <Popover.Trigger asChild>
            <Button type="primary">打开 Popover</Button>
          </Popover.Trigger>
          <Button variant="outline">锚点 2</Button>
        </Popover.Anchor>
        <Popover.Content showArrow>
          <p>使用 Anchor 组件可以更灵活地控制 Popover 的定位参考点</p>
        </Popover.Content>
      </Popover>
    </div>
  ),
};
