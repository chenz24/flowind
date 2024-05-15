'use client';

import React from 'react';

import { Copy } from '@/components/copy';
import { clx } from '@/utils/clx';

/**
 * This component is based on the div element and supports all of its props
 */
const CommandComponent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clx(
      'bg-code-bg-base border-code-border flex items-center rounded-lg border px-3 py-2',
      '[&>code]:text-code-fg-base [&>code]:code-body [&>code]:mx-3',
      className,
    )}
    {...props}
  />
);
CommandComponent.displayName = 'Command';

const CommandCopy = React.forwardRef<
  React.ElementRef<typeof Copy>,
  React.ComponentPropsWithoutRef<typeof Copy>
>(({ className, ...props }, ref) => (
  <Copy {...props} ref={ref} className={clx('!text-code-fg-muted ml-auto', className)} />
));
CommandCopy.displayName = 'Command.Copy';

const Command = Object.assign(CommandComponent, { Copy: CommandCopy });

export { Command };
