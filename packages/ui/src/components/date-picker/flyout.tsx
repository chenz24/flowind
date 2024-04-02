import React from 'react';
import * as Primitives from '@radix-ui/react-popover';

import { clx } from '@/utils/clx';

export const Flyout = React.forwardRef<
  React.ElementRef<typeof Primitives.Content>,
  React.ComponentProps<typeof Primitives.Content>
>(({ className, children, ...props }, ref) => (
  <Primitives.Portal>
    <Primitives.Content
      ref={ref}
      sideOffset={8}
      align="center"
      className={clx(
        'txt-compact-small shadow-elevation-flyout bg-ui-bg-base w-fit rounded-lg',
        'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    >
      {children}
    </Primitives.Content>
  </Primitives.Portal>
));

Flyout.displayName = 'DatePicker.Flyout';
