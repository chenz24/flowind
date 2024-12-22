'use client';

import * as React from 'react';
import * as Primitives from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'cva';

import { clx } from '@/utils/clx';

const avatarVariants = cva({
  base: 'border-border-strong flex shrink-0 items-center justify-center overflow-hidden border',
  variants: {
    variant: {
      squared: '',
      rounded: 'rounded-full',
    },
    size: {
      '2xs': 'h-5 w-5',
      xs: 'h-6 w-6',
      sm: 'h-7 w-7',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
      xl: 'h-12 w-12',
    },
  },
  compoundVariants: [
    {
      variant: 'squared',
      size: '2xs',
      className: 'rounded-md',
    },
    {
      variant: 'squared',
      size: 'xs',
      className: 'rounded-md',
    },
    {
      variant: 'squared',
      size: 'sm',
      className: 'rounded-md',
    },
    {
      variant: 'squared',
      size: 'md',
      className: 'rounded-md',
    },
    {
      variant: 'squared',
      size: 'lg',
      className: 'rounded-lg',
    },
    {
      variant: 'squared',
      size: 'xl',
      className: 'rounded-xl',
    },
  ],
  defaultVariants: {
    variant: 'rounded',
    size: 'md',
  },
});

const innerVariants = cva({
  base: 'aspect-square object-cover object-center',
  variants: {
    variant: {
      squared: '',
      rounded: 'rounded-full',
    },
    size: {
      '2xs': 'txt-compact-xs h-4 w-4',
      xs: 'txt-compact-xs h-5 w-5',
      sm: 'txt-compact-sm h-6 w-6',
      md: 'txt-compact-sm h-7 w-7',
      lg: 'txt-compact-md h-9 w-9',
      xl: 'txt-compact-lg h-11 w-11',
    },
  },
  compoundVariants: [
    {
      variant: 'squared',
      size: '2xs',
      className: 'rounded-sm',
    },
    {
      variant: 'squared',
      size: 'xs',
      className: 'rounded-sm',
    },
    {
      variant: 'squared',
      size: 'sm',
      className: 'rounded-[4px]',
    },
    {
      variant: 'squared',
      size: 'md',
      className: 'rounded-[4px]',
    },
    {
      variant: 'squared',
      size: 'lg',
      className: 'rounded-md',
    },
    {
      variant: 'squared',
      size: 'xl',
      className: 'rounded-[10px]',
    },
  ],
  defaultVariants: {
    variant: 'rounded',
    size: 'md',
  },
});

interface AvatarProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof Primitives.Root>,
      'asChild' | 'children' | 'size'
    >,
    VariantProps<typeof avatarVariants> {
  src?: string;
  fallback: string;
}

/**
 * This component is based on the [Radix UI Avatar](https://www.radix-ui.com/primitives/docs/components/avatar) primitive.
 */
const Avatar = React.forwardRef<React.ElementRef<typeof Primitives.Root>, AvatarProps>(
  (
    {
      /**
       * The URL of the image used in the Avatar.
       */
      src,
      /**
       * Text to show in the avatar if the URL provided in `src` can't be opened.
       */
      fallback,
      /**
       * The style of the avatar.
       */
      variant = 'rounded',
      /**
       * The size of the avatar's border radius.
       */
      size = 'md',
      className,
      ...props
    }: AvatarProps,
    ref,
  ) => (
    <Primitives.Root
      ref={ref}
      {...props}
      className={clx('rounded-x', avatarVariants({ variant, size }), className)}
    >
      {src && <Primitives.Image src={src} className={innerVariants({ variant, size })} />}
      <Primitives.Fallback
        className={clx(
          innerVariants({ variant, size }),
          'bg-bg-component text-fg-subtle pointer-events-none flex select-none items-center justify-center',
        )}
      >
        {fallback}
      </Primitives.Fallback>
    </Primitives.Root>
  ),
);
Avatar.displayName = 'Avatar';

export { Avatar };
