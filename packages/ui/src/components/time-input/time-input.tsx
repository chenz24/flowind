'use client';

import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { AriaTimeFieldProps, TimeValue, useTimeField } from '@react-aria/datepicker';
import { useTimeFieldState } from '@react-stately/datepicker';

import { TimeSegment } from './time-segment';

type TimeInputProps = Omit<
  AriaTimeFieldProps<TimeValue>,
  'label' | 'shouldForceLeadingZeros' | 'description' | 'errorMessage'
>;

/**
 * This component is based on the `div` element and supports all of its props.
 */
const TimeInput = forwardRef<HTMLDivElement, TimeInputProps>(
  (
    {
      /**
       * The time's format. If no value is specified, the format is
       * set based on the user's locale.
       */
      hourCycle,
      ...props
    }: TimeInputProps,
    ref,
  ) => {
    const innerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => innerRef?.current);

    const locale = window !== undefined ? window.navigator.language : 'en-US';

    const state = useTimeFieldState({
      hourCycle,
      locale,
      shouldForceLeadingZeros: true,
      autoFocus: true,
      ...props,
    });

    const { fieldProps } = useTimeField(
      {
        ...props,
        hourCycle,
        shouldForceLeadingZeros: true,
      },
      state,
      innerRef,
    );

    return (
      <div {...fieldProps} ref={innerRef} className="group/time-input inline-flex w-full gap-x-2">
        {state.segments.map((segment, i) => (
          <TimeSegment key={i} segment={segment} state={state} />
        ))}
      </div>
    );
  },
);
TimeInput.displayName = 'TimeInput';

export { TimeInput };
