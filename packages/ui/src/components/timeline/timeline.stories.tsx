import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AcademicCap, Beaker, LightBulb } from '@flowind/icons';
import { Timeline } from './timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export function Usage() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<LightBulb />} title="New branch" lineVariant="dashed">
        <p className="text-fg-muted text-sm">
          You've created new branch fix-notifications from master
        </p>
        <p className="text-xs">2 hours ago</p>
      </Timeline.Item>
      <Timeline.Item bullet={<Beaker />} title="Commits">
        asdfsdf
      </Timeline.Item>
      <Timeline.Item bullet={<AcademicCap />} title="Commits">
        12312313
      </Timeline.Item>
    </Timeline>
  );
}
