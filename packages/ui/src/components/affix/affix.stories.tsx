import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useWindowScroll } from '@flowind/hooks';
import { ArrowUpMini } from '@flowind/icons';
import { Button } from '../button';
import { Text } from '../text';
import { Transition } from '../transition';
import { Affix } from './affix';

const meta: Meta<typeof Affix> = {
  title: 'Components/Affix',
  component: Affix,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Affix>;

export function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text>Affix is located at the bottom of the screen, scroll to see it</Text>
      <div style={{ width: '20px', height: '1800px' }}></div>
      <Affix position={{ bottom: '20px', right: '20px' }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUpMini />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
