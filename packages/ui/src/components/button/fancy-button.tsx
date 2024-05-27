import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'cva';

import { Spinner } from '@flowind/icons';
import { clx } from '@/utils/clx';

const buttonVariants = cva({
  base: clx(
    'transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none',
    'disabled:bg-bg-disabled disabled:border-border-base disabled:text-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden',
    "after:transition-fg after:absolute after:inset-0 after:content-['']",
  ),
  variants: {
    variant: {
      primary: clx(
        'shadow-buttons-inverted text-fg-on-inverted bg-button-inverted after:button-inverted-gradient',
        'hover:bg-button-inverted-hover hover:after:button-inverted-hover-gradient',
        'active:bg-button-inverted-pressed active:after:button-inverted-pressed-gradient',
        'focus-visible:!shadow-buttons-inverted-focus',
      ),
      secondary: clx(
        'shadow-buttons-neutral text-fg-base bg-button-neutral after:button-neutral-gradient',
        'hover:bg-button-neutral-hover hover:after:button-neutral-hover-gradient',
        'active:bg-button-neutral-pressed active:after:button-neutral-pressed-gradient',
        'focus-visible:shadow-buttons-neutral-focus',
      ),
      // transparent: clx(
      //   'after:hidden',
      //   'text-fg-base bg-button-transparent',
      //   'hover:bg-button-transparent-hover',
      //   'active:bg-button-transparent-pressed',
      //   'focus-visible:shadow-buttons-neutral-focus focus-visible:bg-bg-base',
      //   'disabled:!bg-transparent disabled:!shadow-none',
      // ),
      danger: clx(
        'shadow-buttons-colored shadow-buttons-danger text-fg-on-color bg-button-danger after:button-danger-gradient',
        'hover:bg-button-danger-hover hover:after:button-danger-hover-gradient',
        'active:bg-button-danger-pressed active:after:button-danger-pressed-gradient',
        'focus-visible:shadow-buttons-danger-focus',
      ),
      warning: clx(
        'shadow-buttons-colored shadow-buttons-warning text-fg-on-color bg-button-warning after:button-warning-gradient',
        'hover:bg-button-warning-hover hover:after:button-warning-hover-gradient',
        'active:bg-button-warning-pressed active:after:button-warning-pressed-gradient',
        'focus-visible:shadow-buttons-warning-focus',
      ),
      success: clx(
        'shadow-buttons-colored shadow-buttons-success text-fg-on-color bg-button-success after:button-success-gradient',
        'hover:bg-button-success-hover hover:after:button-success-hover-gradient',
        'active:bg-button-success-pressed active:after:button-success-pressed-gradient',
        'focus-visible:shadow-buttons-success-focus',
      ),
      info: clx(
        'shadow-buttons-colored shadow-buttons-blue text-fg-on-color bg-button-blue after:button-blue-gradient',
        'hover:bg-button-blue-hover hover:after:button-blue-hover-gradient',
        'active:bg-button-blue-pressed active:after:button-blue-pressed-gradient',
        'focus-visible:shadow-buttons-blue-focus',
      ),
    },
    size: {
      none: '',
      xs: 'txt-compact-xs-plus gap-x-1 px-1.5 py-0.5',
      sm: 'txt-compact-sm-plus gap-x-1 px-2 py-1',
      md: 'txt-compact-sm-plus gap-x-1.5 px-3 py-1.5',
      lg: 'txt-compact-md-plus gap-x-1.5 px-4 py-2.5',
      xl: 'txt-compact-lg-plus gap-x-1.5 px-5 py-3.5',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  asChild?: boolean;
}

/**
 * This component is based on the `button` element and supports all of its props
 */
const FancyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      /**
       * The button's style.
       */
      variant = 'primary',
      /**
       * The button's size.
       */
      size = 'md',
      className,
      /**
       * Whether to remove the wrapper `button` element and use the
       * passed child element instead.
       */
      asChild = false,
      children,
      /**
       * Whether to show a loading spinner.
       */
      isLoading = false,
      disabled,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    // const theme = useFlowindTheme();

    // const colorTypeMap = {
    //   primary: theme.primaryColor,
    //   secondary: theme.secondaryColor,
    //   danger: 'red',
    //   success: 'emerald',
    //   warning: 'yellow',
    //   info: 'cyan',
    // };

    /**
     * In the case of a button where asChild is true, and isLoading is true, we ensure that
     * only on element is passed as a child to the Slot component. This is because the Slot
     * component only accepts a single child.
     */
    const renderInner = () => {
      if (isLoading) {
        return (
          <span className="pointer-events-none">
            <div
              className={clx(
                'bg-bg-disabled absolute inset-0 flex items-center justify-center rounded-md',
              )}
            >
              <Spinner className="animate-spin" />
            </div>
            {children}
          </span>
        );
      }

      return children;
    };

    return (
      <Component
        ref={ref}
        {...props}
        className={clx(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
      >
        {renderInner()}
      </Component>
    );
  },
);
FancyButton.displayName = 'FancyButton';

export { FancyButton, buttonVariants };
