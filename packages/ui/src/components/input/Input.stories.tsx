import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { useCharacterLimit } from '@flowind/hooks';
import { FlowindSize } from '@/styles';
import { Kbd } from '../kbd';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

// type Story = StoryObj<typeof Input>;

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as FlowindSize[];

export function Variants() {
  return (
    <div style={{ padding: 40 }} className="space-y-3">
      <Input placeholder="default" />
      <Input placeholder="invalid" error />
      <Input placeholder="disabled" disabled />
      <Input placeholder="with icon" prefix="$" />
      <Input placeholder="with icon" addonAfter="$" />
      <Input placeholder="filled" variant="filled" />
      <Input placeholder="unstyled" variant="unstyled" />
    </div>
  );
}

export function Sizes() {
  const sizes = SIZES.map((size) => (
    <Input
      placeholder={`Input ${size}`}
      size={size}
      key={size}
      prefix={size}
      rightSection={size}
      className="mb-4"
      styles={{
        addonAfter: { backgroundColor: 'pink' },
        prefixWrapper: { backgroundColor: 'cyan' },
      }}
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function InputWithAddon() {
  const addonBefore = <span className="text-fg-subtle text-sm">https://</span>;
  const addonAfter = <span className="text-fg-subtle text-sm">.com</span>;
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Input
        placeholder="Input with addon"
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        width={240}
      />
    </div>
  );
}

export function InputWithSuffix() {
  const maxLength = 50;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  const suffix = <Kbd className="mr-1">⌘K</Kbd>;

  const limitSuffix = (
    <div
      id="character-count"
      className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs tabular-nums text-fg-muted peer-disabled:opacity-50"
      aria-live="polite"
      role="status"
    >
      {characterCount}/{limit}
    </div>
  );

  return (
    <div style={{ padding: 40, maxWidth: 600 }} className="space-y-5">
      <Input placeholder="Input with addon" suffix={suffix} width={240} />
      <Input.Wrapper label="Input with character limit">
        <Input
          placeholder="Input"
          width={300}
          maxLength={maxLength}
          onChange={handleChange}
          suffix={limitSuffix}
          suffixWidth={50}
        />
      </Input.Wrapper>
    </div>
  );
}

export function InputWithLabelAnimation() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <div className="group relative">
        <Input
          id="input-32"
          type="email"
          size="lg"
          classNames={{ input: 'text-sm' }}
          placeholder=""
          width={280}
        />
        <label
          htmlFor="input-32"
          className={`origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-fg-muted 
          transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default 
          group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-fg-base 
          group-has-[input:not(:placeholder-shown)]:pointer-events-none group-has-[input:not(:placeholder-shown)]:top-0 
          group-has-[input:not(:placeholder-shown)]:cursor-default group-has-[input:not(:placeholder-shown)]:text-xs 
          group-has-[input:not(:placeholder-shown)]:font-medium group-has-[input:not(:placeholder-shown)]:text-fg-base`}
        >
          <span className="inline-flex bg-bg-field px-2 z-10">Input with label animation</span>
        </label>
      </div>
    </div>
  );
}

export function InputWithInsetLabel() {
  return (
    <div className="relative rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
      <label htmlFor="input-33" className="block px-3 pt-2 text-xs font-medium text-foreground">
        Input with inset label
      </label>
      <input
        id="input-33"
        className="flex h-10 w-full bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none"
        placeholder="Email"
        type="email"
      />
    </div>
  );
}

export function InputWithDescription() {
  const maxLength = 8;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  const description = (
    <>
      <span className="tabular-nums">{limit - characterCount}</span> characters left
    </>
  );
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Input.Wrapper description={description}>
        <Input placeholder="Input" width={300} maxLength={maxLength} onChange={handleChange} />
      </Input.Wrapper>
    </div>
  );
}

export function InputWrapper() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }} className="space-y-5">
      <Input.Wrapper label="Input with wrapper" description="this is description" required>
        <Input placeholder="Input" width={300} />
      </Input.Wrapper>
      <Input.Wrapper label="Input with wrror" error="this is error message" required>
        <Input placeholder="Input" width={300} error />
      </Input.Wrapper>
    </div>
  );
}
