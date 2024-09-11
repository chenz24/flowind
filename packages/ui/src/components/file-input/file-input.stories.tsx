import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { FileButton } from '../file-button';
import { FileInput } from './file-input';

const meta: Meta<typeof FileInput> = {
  title: 'Components/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export function Usage() {
  return (
    <div style={{ width: 300 }}>
      <FileInput label="Pick file" required placeholder="File input" clearable />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ width: 300 }}>
      <FileInput label="Pick file" required placeholder="File input" clearable readOnly />
    </div>
  );
}

export function Controlled() {
  const [singleValue, setSingleValue] = useState<File | null>(null);
  const [multipleValue, setMultipleValue] = useState<File[]>([]);
  return (
    <div style={{ width: 300 }}>
      <FileInput
        value={singleValue}
        onChange={setSingleValue}
        placeholder="Controlled single"
        clearable
      />
      <FileInput
        className="mt-4"
        multiple
        value={multipleValue}
        onChange={setMultipleValue}
        placeholder="Controlled multiple"
        clearable
      />
    </div>
  );
}

export function Suffix() {
  const [multipleValue, setMultipleValue] = useState<File[]>([]);
  return (
    <div style={{ width: 300 }}>
      <FileInput
        className="mt-4"
        multiple
        onChange={setMultipleValue}
        value={multipleValue}
        placeholder="Controlled multiple"
        suffix={
          <FileButton multiple onChange={setMultipleValue}>
            {(props) => (
              <Button variant="default" type="secondary" size="xs" {...props}>
                上传
              </Button>
            )}
          </FileButton>
        }
        suffixWidth={60}
        clearable
      />
    </div>
  );
}
