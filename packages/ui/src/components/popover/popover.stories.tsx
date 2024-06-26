import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '../box';
import { Button } from '../button';
import { MultiSelect } from '../multi-select';
import { Stack } from '../stack';
import { Tooltip } from '../tooltip';
import { Popover } from './popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
};

export function Uncontrolled() {
  return (
    <div style={{ padding: 40 }}>
      <Popover>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function withFloatingAutoUpdate() {
  return (
    <div style={{ padding: 40, height: 400, overflow: 'scroll' }}>
      <div style={{ height: 150 }} />
      <Popover>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
      <div style={{ height: 300 }} />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <Popover disabled>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function WithArrow() {
  return (
    <div style={{ padding: 40 }}>
      <Popover withArrow width={200}>
        <Popover.Target>
          <Button>arrow popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown with arrow</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function WithArrowRadius() {
  return (
    <div style={{ padding: 40 }}>
      <Popover withArrow width={400} arrowRadius={4}>
        <Popover.Target>
          <Button>arrow popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown with arrow radius</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function Controlled() {
  const [opened, setState] = useState(false);

  return (
    <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Popover
        opened={opened}
        onChange={setState}
        middlewares={{ shift: false, flip: false }}
        position="bottom"
        withArrow
        trapFocus
        radius="md"
        returnFocus
      >
        <Popover.Target>
          <Button onClick={() => setState((c) => !c)}>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>
          <Button onClick={() => setState(false)}>Close</Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function SameWidth() {
  const [opened, setState] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Popover opened={opened} width="target" onChange={setState}>
        <Popover.Target>
          <Button onClick={() => setState((c) => !c)} fullWidth>
            Toggle popover
          </Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function WithinGroup() {
  return (
    <Stack grow>
      <Popover>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
      <Button>Regular button</Button>
    </Stack>
  );
}

export function PopoverTargetWithTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <Popover>
        <Tooltip label="Tooltip first">
          <Popover.Target>
            <Button>Tooltip first</Button>
          </Popover.Target>
        </Tooltip>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>

      <Popover>
        <Popover.Target>
          <Tooltip label="Tooltip last">
            <Button className="ml-3">Tooltip last</Button>
          </Tooltip>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function WithMultiSelect() {
  return (
    <div style={{ padding: 40 }}>
      <Popover width={400}>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>
          <MultiSelect data={['react', 'ng']} defaultValue={['ng']} withinPortal />
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function Inline() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam in quos aperiam magni
      quas neque{' '}
      <Popover middlewares={{ shift: true, flip: true, inline: true }} position="top">
        <Popover.Target>
          <span style={{ background: 'pink' }}>aliquid laboriosam dolorum</span>
        </Popover.Target>
        <Popover.Dropdown>Inline popover</Popover.Dropdown>
      </Popover>
      , eum voluptate, perferendis placeat repudiandae nesciunt explicabo quibusdam deserunt, animi
      dicta.
    </div>
  );
}

export function Size() {
  const [opened, setState] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Popover
        opened={opened}
        middlewares={{ shift: true, flip: true, size: true }}
        onChange={setState}
      >
        <Popover.Target>
          <button type="button" onClick={() => setState((c) => !c)}>
            Toggle popover
          </button>
        </Popover.Target>

        <Popover.Dropdown style={{ overflow: 'auto' }}>
          <div style={{ width: 100, height: 2000, background: 'pink' }} />
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export function PopoverEvents() {
  const [opened, setState] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <div style={{ padding: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stack>
        <Popover
          opened={opened}
          onChange={setState}
          onOpen={() => setToggle1(true)}
          onClose={() => setToggle1(false)}
          middlewares={{ shift: false, flip: false }}
          position="bottom"
          withArrow
          trapFocus
          radius="md"
          returnFocus
        >
          <Popover.Target>
            <Box>
              <Button onClick={() => setState((c) => !c)}>Toggle controlled popover</Button>
              <br />
              <div>Controlled State: {toggle1 ? 'Open' : 'Closed'}</div>
            </Box>
          </Popover.Target>

          <Popover.Dropdown>
            <Button onClick={() => setState(false)}>Close</Button>
          </Popover.Dropdown>
        </Popover>
        <Popover onOpen={() => setToggle2(true)} onClose={() => setToggle2(false)}>
          <Popover.Target>
            <Box>
              <Button>Toggle uncontrolled popover</Button>
              <br />
              <div>Uncontrolled State: {toggle2 ? 'Open' : 'Closed'}</div>
            </Box>
          </Popover.Target>

          <Popover.Dropdown>Dropdown</Popover.Dropdown>
        </Popover>
      </Stack>
    </div>
  );
}

export function AxisOffset() {
  return (
    <div style={{ padding: 40 }}>
      <Popover offset={{ mainAxis: 50, crossAxis: 50 }}>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>

        <Popover.Dropdown>Dropdown</Popover.Dropdown>
      </Popover>
    </div>
  );
}
