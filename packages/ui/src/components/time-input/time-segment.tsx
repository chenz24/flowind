import React from 'react';
import { useDateSegment } from '@react-aria/datepicker';
import { type DateFieldState, type DateSegment } from '@react-stately/datepicker';

import { clx } from '@/utils/clx';

type TimeSegmentProps = {
  segment: DateSegment;
  state: DateFieldState;
};

const inputBaseStyles = clx(
  'caret-fg-base bg-bg-field hover:bg-bg-field-hover shadow-borders-base placeholder-fg-muted text-fg-base transition-fg relative w-full appearance-none rounded-md outline-none',
  'focus-visible:shadow-borders-interactive-with-active',
  'disabled:text-fg-disabled disabled:!bg-bg-disabled disabled:placeholder-fg-disabled disabled:cursor-not-allowed',
  'aria-[invalid=true]:!shadow-borders-error  invalid:!shadow-borders-error',
);

export const TimeSegment = ({ segment, state }: TimeSegmentProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { segmentProps } = useDateSegment(segment, state, ref);

  const isColon = segment.type === 'literal' && segment.text === ':';
  const isSpace = segment.type === 'literal' && segment.text === ' ';

  const isDecorator = isColon || isSpace;

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={clx(
        'txt-compact-sm w-full rounded-md px-2 py-1 text-left uppercase tabular-nums',
        inputBaseStyles,
        'group-aria-[invalid=true]/time-input:!shadow-borders-error group-invalid/time-input:!shadow-borders-error',
        {
          'text-fg-muted !w-fit border-none bg-transparent px-0 shadow-none': isDecorator,
          hidden: isSpace,
          'text-fg-disabled bg-bg-disabled border-border-base shadow-none': state.isDisabled,
          '!text-fg-muted !bg-transparent': !segment.isEditable,
        },
      )}
    >
      <span
        aria-hidden="true"
        className={clx('txt-compact-sm text-fg-muted pointer-events-none block w-full text-left', {
          hidden: !segment.isPlaceholder,
          'h-0': !segment.isPlaceholder,
        })}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </div>
  );
};
