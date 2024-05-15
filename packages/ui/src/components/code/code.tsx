import * as React from 'react';

import { clx } from '@/utils/clx';

/**
 * This component is based on the `code` element and supports all of its props
 */
const Code = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<'code'>>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={clx(
        'border-tag-neutral-border bg-tag-neutral-bg text-tag-neutral-text txt-compact-sm inline-flex rounded-md border px-[6px] font-mono',
        className,
      )}
      {...props}
    />
  ),
);

Code.displayName = 'Code';

export { Code };
