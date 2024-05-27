import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Stack } from '../stack';
import { Stepper } from './stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} className="w-[800px]">
        <Stepper.Step label="First step" description="Create an account">
          <div>Step 1 content: Create an account</div>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <div>Step 2 content: Verify email</div>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          <p>Step 3 content: Get full access</p>
        </Stepper.Step>

        <Stepper.Completed>
          <p>Completed, click back button to get to previous step</p>
        </Stepper.Completed>
      </Stepper>

      <Stack justify="center">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Stack>
    </>
  );
}
