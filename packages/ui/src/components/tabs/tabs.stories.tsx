import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../container';
import { Tabs, TabsProps } from './tabs';
import { TabsList } from './tabs-list/tabs-list';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const base = (
  <>
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react">React Panel</Tabs.Panel>
    <Tabs.Panel value="sv">Svelte Panel</Tabs.Panel>
    <Tabs.Panel value="ng">Angular Panel</Tabs.Panel>
  </>
);

const verticalBase = (
  <>
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react">React Panel</Tabs.Panel>
    <Tabs.Panel value="sv">Svelte Panel</Tabs.Panel>
    <Tabs.Panel value="ng">Angular Panel</Tabs.Panel>
  </>
);

const Wrapper = (props: TabsProps) => (
  <Tabs classNames={{ tabsList: 'mb-2' }} style={{ maxWidth: 500 }} {...props} />
);

const Demo = ({ variant }) => (
  <div className="h-screen max-h-[500px] w-screen max-w-[700px]">
    <Wrapper defaultValue="react" variant={variant} loop={false}>
      {base}
    </Wrapper>
  </div>
);

export const Default: Story = {
  render: () => <Demo variant="default" />,
};

export const Pilled: Story = {
  render: () => <Demo variant="pills" />,
};

export const Outline: Story = {
  render: () => <Demo variant="outline" />,
};
