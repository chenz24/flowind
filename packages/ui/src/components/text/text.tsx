import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'cva';

import { clx } from '@/utils/clx';

const textVariants = cva({
  variants: {
    size: {
      none: '',
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
    weight: {
      regular: 'font-normal',
      plus: 'font-medium',
    },
    family: {
      sans: 'font-sans',
      mono: 'font-mono',
    },
    leading: {
      normal: '',
      compact: '',
    },
  },
  // defaultVariants: {
  //   family: 'sans',
  //   size: 'base',
  //   weight: 'regular',
  //   leading: 'normal',
  // },
  compoundVariants: [
    {
      size: 'xs',
      leading: 'normal',
      className: 'text-xs',
    },
    {
      size: 'xs',
      leading: 'compact',
      className: 'text-xs',
    },
    {
      size: 'sm',
      leading: 'normal',
      className: 'text-sm',
    },
    {
      size: 'sm',
      leading: 'compact',
      className: 'text-sm',
    },
    {
      size: 'md',
      leading: 'normal',
      className: 'text-base',
    },
    {
      size: 'md',
      leading: 'compact',
      className: 'text-base',
    },
    {
      size: 'lg',
      leading: 'normal',
      className: 'text-lg',
    },
    {
      size: 'lg',
      leading: 'compact',
      className: 'text-lg',
    },
    {
      size: 'xl',
      leading: 'normal',
      className: 'text-xl',
    },
    {
      size: 'xl',
      leading: 'compact',
      className: 'text-xl',
    },
  ],
});

export interface TextProps
  extends React.ComponentPropsWithoutRef<'p'>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  as?: 'p' | 'span' | 'div';
}

/**
 * This component is based on the `p` element and supports all of its props
 */
const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      /**
       * Whether to remove the wrapper `button` element and use the
       * passed child element instead.
       */
      asChild = false,
      /**
       * The wrapper element to use when `asChild` is disabled.
       */
      as = 'p',
      /**
       * The text's size.
       */
      size = 'sm',
      /**
       * The text's font weight.
       */
      weight = 'regular',
      /**
       * The text's font family.
       */
      family = 'sans',
      /**
       * The text's line height.
       */
      leading = 'normal',
      children,
      ...props
    }: TextProps,
    ref,
  ) => {
    const Component = asChild ? Slot : as;

    return (
      <Component
        ref={ref}
        className={clx(textVariants({ size, weight, family, leading }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Text.displayName = 'Text';

export { Text };
