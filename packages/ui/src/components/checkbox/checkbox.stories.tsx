import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../divider';
import { Label } from '../label';
import { Stack } from '../stack';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export function Usage() {
  return (
    <div style={{ padding: 40 }} className="space-y-5">
      <Checkbox label="Default" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate className="mt-3" />
      <Divider />
      <div className="flex items-center gap-2">
        <Checkbox
          id="checkbox-07"
          label={
            <span>
              I agree to the{' '}
              <a className="underline" href="https://flowind.com" target="_blank" rel="noreferrer">
                terms of service
              </a>
            </span>
          }
        />
      </div>
      <Divider />
      <div className="flex gap-4">
        <Checkbox id="checkbox-08-a" label="React" />
        <Checkbox id="checkbox-08-b" label="Vue" />
        <Checkbox id="checkbox-08-c" label="Angular" />
      </div>
      <Divider />
      <div className="grid gap-3">
        <Checkbox label="React" />
        <Checkbox label="Vue" />
        <Checkbox label="Angular" />
      </div>
    </div>
  );
}

export function checkbox() {
  return (
    <div className="space-y-5">
      <Checkbox.Group className="space-y-5">
        <Checkbox
          description="This is left Checkbox"
          labelPosition="left"
          label="Label"
          value="1"
          classNames={{
            body: 'relative w-[300px] h-[65px] justify-between rounded-lg border border-border-base p-4 transition-colors has-[[data-checked=true]]:border-border-interactive',
            label: 'absolute z-10 cursor-pointer inset-0 pt-4 pl-4',
            description: 'absolute top-9 left-4',
          }}
        />

        <div className="relative flex w-[300px] h-[65px] rounded-lg border border-border-base p-4 transition-colors has-[[data-checked=true]]:border-border-interactive">
          <svg
            className="shrink-0"
            width={32}
            height={24}
            viewBox="0 0 32 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="32" height="24" rx="4" fill="#252525" />
            <path d="M19.0537 6.49742H12.9282V17.5026H19.0537V6.49742Z" fill="#FF5A00" />
            <path
              d="M13.3359 12C13.3359 9.76408 14.3871 7.77961 16 6.49741C14.8129 5.56408 13.3155 5 11.6822 5C7.81295 5 4.68221 8.13074 4.68221 12C4.68221 15.8693 7.81295 19 11.6822 19C13.3155 19 14.8129 18.4359 16 17.5026C14.3848 16.2385 13.3359 14.2359 13.3359 12Z"
              fill="#EB001B"
            />
            <path
              d="M27.3178 12C27.3178 15.8693 24.1871 19 20.3178 19C18.6845 19 17.1871 18.4359 16 17.5026C17.6333 16.2181 18.6641 14.2359 18.6641 12C18.6641 9.76408 17.6129 7.77961 16 6.49741C17.1848 5.56408 18.6822 5 20.3155 5C24.1871 5 27.3178 8.15113 27.3178 12Z"
              fill="#F79E1B"
            />
          </svg>
          <Checkbox
            description="This is left Checkbox"
            labelPosition="left"
            label="Label"
            value="2"
            classNames={{
              root: 'w-full',
              body: 'justify-between w-full',
              label: 'absolute z-10 cursor-pointer inset-0 pt-4 pl-14',
              description: 'absolute top-9 left-14',
            }}
          />
        </div>
      </Checkbox.Group>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="xs" size="xs" />
      <Checkbox label="sm" size="sm" className="mt-3" />
      <Checkbox label="md" size="md" className="mt-3" />
      <Checkbox label="lg" size="lg" className="mt-3" />
      <Checkbox label="xl" size="xl" className="mt-3" />
    </div>
  );
}

export function CheckboxGroup() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox.Group defaultValue={['react']}>
        <Checkbox label="React" value="react" />
        <Checkbox label="Angular" value="ng" />
      </Checkbox.Group>
    </div>
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Checkbox.Group label="With required asterisk" withAsterisk>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Just required" required>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Required asterisk off" required withAsterisk={false}>
        <Checkbox value="1" />
      </Checkbox.Group>
      <Checkbox.Group label="Required false asterisk on" required={false} withAsterisk>
        <Checkbox value="1" />
      </Checkbox.Group>
    </div>
  );
}

export function labelPosition() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Checkbox labelPosition="left" label="Hello from left" value="1" />
      <Checkbox labelPosition="right" label="Hello from right" value="1" />
    </Stack>
  );
}

export function WithDescription() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Checkbox
        description="This is left Checkbox"
        labelPosition="left"
        label="Hello from left "
        value="1"
      />
      <Checkbox
        description="This is right Checkbox"
        labelPosition="right"
        label="Hello from right"
        value="1"
      />
    </Stack>
  );
}

export function WithError() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Checkbox label="Invalid Checkbox without message" value="1" error />
      <Checkbox error="This is error" labelPosition="right" label="Hello from right" value="1" />
      <Checkbox error="Invalid Checkbox without label" value="1" />
    </Stack>
  );
}

export function Disable() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="Default" defaultChecked disabled />
      <Checkbox label="Indeterminate" indeterminate disabled className="mt-3" />
    </div>
  );
}
