import * as React from 'react';
import type { Meta } from '@storybook/react';

import { useDisclosure } from '@flowind/hooks';
import { Button } from '../button';
import { FocusTrap } from './focus-trap';

const meta: Meta<typeof FocusTrap> = {
  title: 'Components/FocusTrap',
  component: FocusTrap,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export function Usage() {
  const [active, handlers] = useDisclosure(false);
  return (
    <>
      <Button onClick={handlers.toggle}>Toggle</Button>
      <FocusTrap active={active}>
        <div>
          <input />
          <input />
          <input />
        </div>
      </FocusTrap>
    </>
  );
}
