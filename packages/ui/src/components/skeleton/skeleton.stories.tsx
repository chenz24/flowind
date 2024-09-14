import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Stack } from '../stack';
import { Text } from '../text';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  // render: ({ children, ...args }) => <Badge {...args}>{children || 'Badge'}</Badge>,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export function WithContent() {
  const [loading, setLoading] = useState(true);
  console.log(loading);

  return (
    <>
      <Skeleton visible={loading}>
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
      </Skeleton>

      <Stack align="center" justify="center">
        <Button onClick={() => setLoading((l) => !l)}>Toggle Skeleton</Button>
      </Stack>
    </>
  );
}

export function Usage() {
  return (
    <div className="w-96">
      <Skeleton height={50} circle className="mb-5" />
      <Skeleton height={8} radius="xl" className="mb-5" />
      <Skeleton height={8} className="mb-5" radius="xl" />
      <Skeleton height={8} className="mb-5" width="70%" radius="xl" />
    </div>
  );
}
