import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../stack';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  // argTypes: {
  //   variant: {
  //     control: {
  //       type: 'select',
  //       options: ['info', 'error', 'success', 'warning'],
  //     },
  //   },
  //   dismissible: {
  //     control: {
  //       type: 'boolean',
  //     },
  //   },
  // },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

const Text =
  "We have sent you an email with instructions on how to reset your password. If you don't receive an email, please check your spam folder or try again.";

export const Info: Story = {
  args: {
    variant: 'light',
    children: Text,
  },
  render: (args) => (
    <div className="max-w-[300px]">
      <Alert {...args} />
    </div>
  ),
};

export function types() {
  return (
    <Stack direction="col">
      <Alert variant="filled" type="primary" dismissible className="w-[400px]" title="这是标题">
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="filled" type="secondary" className="w-[400px]">
        Secondary
      </Alert>
      <Alert variant="filled" type="danger" className="w-[400px]">
        Danger
      </Alert>
      <Alert variant="filled" type="warning" className="w-[400px]">
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="filled" type="info" className="w-[400px]">
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="filled" type="success" className="w-[400px]">
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>

      <Alert variant="light" type="primary" dismissible className="w-[400px]" title="这是标题">
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="light" type="secondary" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="light" type="danger" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="light" type="warning" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="light" type="info" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="light" type="success" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="default" type="success" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
    </Stack>
  );
}

export function outline() {
  return (
    <Stack direction="col">
      <Alert variant="outline" type="primary" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="outline" type="secondary" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="outline" type="info" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="outline" type="warning" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
      <Alert variant="outline" type="danger" className="w-[400px]" title="这是标题" dismissible>
        使用 Figma 的 Transform 功能：在 Figma 的 Editor 视图中，选择多个图片，并在 Transform
        面板中输入相同的尺寸值。这将将所有选定的图片calaulated to the same size.
      </Alert>
    </Stack>
  );
}

// export const Error: Story = {
//   args: {
//     variant: 'error',
//     children: Text,
//   },
//   render: (args) => (
//     <div className="max-w-[300px]">
//       <Alert {...args} />
//     </div>
//   ),
// };
//
// export const Success: Story = {
//   args: {
//     variant: 'success',
//     children: Text,
//   },
//   render: (args) => (
//     <div className="max-w-[300px]">
//       <Alert {...args} />
//     </div>
//   ),
// };
//
// export const Warning: Story = {
//   args: {
//     variant: 'warning',
//     children: Text,
//   },
//   render: (args) => (
//     <div className="max-w-[300px]">
//       <Alert {...args} />
//     </div>
//   ),
// };
//
// export const Dismissible: Story = {
//   args: {
//     dismissible: true,
//     children: Text,
//   },
//   render: (args) => (
//     <div className="max-w-[300px]">
//       <Alert {...args} />
//     </div>
//   ),
// };
