import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { useDisclosure } from '@flowind/hooks';
import { Box } from '../box';
import { Button } from '../button';
import { Stack } from '../stack';
import { Text } from '../text';
import { LoadingOverlay } from './loading-overlay';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Components/LoadingOverlay',
  component: LoadingOverlay,
  parameters: {
    layout: 'centered',
  },
  // render: ({ children, ...args }) => <Badge {...args}>{children || 'Badge'}</Badge>,
};

export default meta;

type Story = StoryObj<typeof LoadingOverlay>;

export function Default() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box
        style={{
          position: 'relative',
          margin: 'auto',
        }}
      >
        <LoadingOverlay visible={visible} zIndex={1000} overlayBlur={2} overlayColor="#fff" />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore
          magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus
          aspernatur aperiam magnam debitis facere odio?
        </Text>
        <Text>
          Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis
          dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique
          nemo eum! Dolore maxime voluptate inventore atque.
        </Text>
      </Box>

      <Stack justify="center" className="mt-4">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Stack>
    </>
  );
}
