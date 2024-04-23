import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const AccordionDemo = ({ variant }) => {
  const [value, setValue] = React.useState('1');

  return (
    <div className="flex items-center justify-center p-8">
      <div className="p-0">
        <Accordion defaultValue="customization" variant={variant} className="w-[400px]">
          <Accordion.Item value="customization">
            <Accordion.Control>Customization</Accordion.Control>
            <Accordion.Panel>
              Colors, fonts, shadows and many other parts are customizable to fit your design needs
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="flexibility">
            <Accordion.Control>Flexibility</Accordion.Control>
            <Accordion.Panel>
              Configure components appearance and behavior with vast amount of settings or overwrite
              any part of component styles
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="focus-ring">
            <Accordion.Control>No annoying focus ring</Accordion.Control>
            <Accordion.Panel>
              With new :focus-visible pseudo-class focus ring appears only when user navigates with
              keyboard
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <AccordionDemo variant="default" />,
  args: {},
};

export const Separated: Story = {
  render: () => <AccordionDemo variant="separated" />,
  args: {
    variant: 'separated',
  },
};

export const Contained: Story = {
  render: () => <AccordionDemo variant="contained" />,
  args: {},
};
