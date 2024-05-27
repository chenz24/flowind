import * as React from 'react';
import { cva, VariantProps } from 'cva';

import { clx } from '@/utils/clx';

const statusBadgeVariants = cva({
  base: 'flex items-center justify-center w-5 h-[18px] [&_div]:w-2 [&_div]:h-2 [&_div]:rounded-sm',
  variants: {
    color: {
      green: '[&_div]:bg-tag-green-icon',
      red: '[&_div]:bg-tag-red-icon',
      orange: '[&_div]:bg-tag-orange-icon',
      blue: '[&_div]:bg-tag-blue-icon',
      purple: '[&_div]:bg-tag-purple-icon',
      grey: '[&_div]:bg-tag-neutral-icon',
    },
  },
  defaultVariants: {
    color: 'grey',
  },
});

interface StatusBadgeProps
  extends Omit<React.ComponentPropsWithoutRef<'span'>, 'color'>,
    VariantProps<typeof statusBadgeVariants> {}

/**
 * This component is based on the span element and supports all of its props
 */
const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  (
    {
      children,
      className,
      /**
       * The status's color.
       */
      color = 'grey',
      ...props
    }: StatusBadgeProps,
    ref,
  ) => (
    <span
      ref={ref}
      className={clx(
        'txt-compact-xs-plus bg-bg-subtle text-fg-subtle border-border-base box-border flex w-fit select-none items-center overflow-hidden rounded-md border pl-0 pr-1 leading-none',
        className,
      )}
      {...props}
    >
      <div role="presentation" className={statusBadgeVariants({ color })}>
        <div />
      </div>
      {children}
    </span>
  ),
);
StatusBadge.displayName = 'StatusBadge';

export { StatusBadge };
