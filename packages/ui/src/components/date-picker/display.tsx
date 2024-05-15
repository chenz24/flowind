import React from 'react';
import * as Primitives from '@radix-ui/react-popover';
import { cva } from 'cva';

import { Calendar as CalendarIcon } from '@flowind/icons';
import { clx } from '@/utils/clx';

interface DisplayProps extends React.ComponentProps<'button'> {
  placeholder?: string;
  size?: 'small' | 'base';
}

const displayVariants = cva({
  base: clx(
    'text-fg-base bg-bg-field transition-fg shadow-buttons-neutral flex w-full items-center gap-x-2 rounded-md outline-none',
    'hover:bg-bg-field-hover',
    'focus-visible:shadow-borders-interactive-with-active data-[state=open]:shadow-borders-interactive-with-active',
    'disabled:bg-bg-disabled disabled:text-fg-disabled disabled:shadow-buttons-neutral',
    'aria-[invalid=true]:!shadow-borders-error',
  ),
  variants: {
    size: {
      base: 'txt-compact-sm h-8 px-2 py-1.5',
      small: 'txt-compact-sm h-7 px-2 py-1',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

export const Display = React.forwardRef<HTMLButtonElement, DisplayProps>(
  (
    {
      className,
      children,
      /**
       * Placeholder of the date picker's input.
       */
      placeholder,
      /**
       * The size of the date picker's input.
       */
      size = 'base',
      ...props
    }: DisplayProps,
    ref,
  ) => (
    <Primitives.Trigger asChild>
      <button
        type="button"
        ref={ref}
        className={clx(displayVariants({ size }), className)}
        {...props}
      >
        <CalendarIcon className="text-fg-muted" />
        <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left">
          {children || (placeholder ? <span className="text-fg-muted">{placeholder}</span> : null)}
        </span>
      </button>
    </Primitives.Trigger>
  ),
);

Display.displayName = 'DatePicker.Display';
