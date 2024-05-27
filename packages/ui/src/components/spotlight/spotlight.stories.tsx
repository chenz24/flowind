import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Camera, Phone, Photo } from '@flowind/icons';
import { Button } from '../button';
import { Stack } from '../stack';
import { spotlight, SpotlightAction, SpotlightProvider, SpotlightProviderProps } from './index';
import { Spotlight } from './spotlight/spotlight';

const meta: Meta<typeof Spotlight> = {
  title: 'Components/Spotlight',
  component: Spotlight,
  parameters: {
    layout: 'centered',
  },
  // render: ({ children, ...args }) => <Badge {...args}>{children || 'Badge'}</Badge>,
};

export default meta;

type Story = StoryObj<typeof Spotlight>;

function Wrapper({ ...others }: Partial<SpotlightProviderProps> & { buttonLabel?: string }) {
  return (
    <SpotlightProvider actions={actions} {...others}>
      <SpotlightControl />
    </SpotlightProvider>
  );
}

function SpotlightControl() {
  return (
    <Stack justify="center">
      <Button onClick={spotlight.open}>Open spotlight</Button>
    </Stack>
  );
}

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <Photo size="1.2rem" className="text-fg-muted" />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <Phone size="1.2rem" className="text-fg-muted" />,
  },
  {
    title: 'Documentation',
    keywords: ['react', 'vue'],
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <Camera size="1.2rem" className="text-fg-muted" />,
  },
];

export function Demo() {
  return <Wrapper searchPlaceholder="Search..." shortcut="mod + shift + 1" />;
}

export function Highlight() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      shortcut="mod + k"
      highlightQuery
      highlightColor="blue"
    />
  );
}
