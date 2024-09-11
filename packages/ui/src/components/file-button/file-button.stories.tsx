/* eslint-disable no-console */
import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { FileButton } from './file-button';

const meta: Meta<typeof FileButton> = {
  title: 'Components/FileButton',
  component: FileButton,
  parameters: {
    layout: 'centered',
  },
  // render: ({ children, ...args }) => <Badge {...args}>{children || 'Badge'}</Badge>,
};

export default meta;

export function Default() {
  return (
    <FileButton accept="image/jpeg,image/png" onChange={(file) => console.log(file)}>
      {(props) => <Button {...props}>Upload files</Button>}
    </FileButton>
  );
}

export function Multiple() {
  return (
    <FileButton multiple onChange={(files) => console.log(files)}>
      {(props) => <Button {...props}>Upload files</Button>}
    </FileButton>
  );
}
