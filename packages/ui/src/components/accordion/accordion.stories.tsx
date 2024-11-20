import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'contained', 'separated'],
      description: 'Accordion variant',
      defaultValue: 'default',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple items to be opened at the same time',
      defaultValue: false,
    },
    chevronPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the chevron icon',
      defaultValue: 'right',
    },
    disableChevronRotation: {
      control: 'boolean',
      description: 'Disable chevron icon rotation',
      defaultValue: false,
    },
    transitionDuration: {
      control: 'number',
      description: 'Duration of the transition in milliseconds',
      defaultValue: 200,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

interface AccordionDemoProps {
  variant?: 'default' | 'contained' | 'separated';
  multiple?: boolean;
  chevronPosition?: 'left' | 'right';
  disableChevronRotation?: boolean;
  transitionDuration?: number;
}

const AccordionDemo = ({
  variant = 'default',
  multiple = false,
  chevronPosition = 'right',
  disableChevronRotation = false,
  transitionDuration = 200,
}: AccordionDemoProps) => (
  <div className="flex items-center justify-center p-8">
    <div className="p-0">
      <Accordion
        defaultValue={multiple ? ['customization'] : 'customization'}
        variant={variant}
        className="w-[400px]"
        multiple={multiple}
        chevronPosition={chevronPosition}
        disableChevronRotation={disableChevronRotation}
        transitionDuration={transitionDuration}
      >
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
  args: {
    variant: 'contained',
  },
};

export const Multiple: Story = {
  render: () => <AccordionDemo variant="default" multiple />,
  args: {
    multiple: true,
  },
};

export const ChevronLeft: Story = {
  render: () => <AccordionDemo variant="default" chevronPosition="left" />,
  args: {
    chevronPosition: 'left',
  },
};

export const DisableChevronRotation: Story = {
  render: () => <AccordionDemo variant="default" disableChevronRotation />,
  args: {
    disableChevronRotation: true,
  },
};

export const CustomTransition: Story = {
  render: () => <AccordionDemo variant="default" transitionDuration={1000} />,
  args: {
    transitionDuration: 1000,
  },
};
