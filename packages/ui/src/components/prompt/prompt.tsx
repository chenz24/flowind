'use client';

import * as React from 'react';
import * as Primitives from '@radix-ui/react-alert-dialog';

import { Button } from '@/components/button';
import { Heading } from '@/components/heading';
import { clx } from '@/utils/clx';

const Root = Primitives.AlertDialog;
Root.displayName = 'Prompt.Root';

const { Trigger } = Primitives;
Trigger.displayName = 'Prompt.Trigger';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Portal = ({ className, ...props }: Primitives.AlertDialogPortalProps) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Primitives.AlertDialogPortal className={clx(className)} {...props} />
);
Portal.displayName = 'Prompt.Portal';

const Overlay = React.forwardRef<
  React.ElementRef<typeof Primitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof Primitives.Overlay>
>(({ className, ...props }, ref) => (
  <Primitives.Overlay
    ref={ref}
    className={clx(
      'bg-ui-bg-overlay fixed inset-0',
      // "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", // Re-enable when Admin UI has been cleaned up
      className,
    )}
    {...props}
  />
));
Overlay.displayName = 'Prompt.Overlay';

const Title = React.forwardRef<
  React.ElementRef<typeof Primitives.Title>,
  Omit<React.ComponentPropsWithoutRef<typeof Primitives.Title>, 'asChild'>
>(({ className, children, ...props }, ref) => (
  <Primitives.Title ref={ref} className={clx(className)} {...props} asChild>
    <Heading level="h2" className="text-ui-fg-base">
      {children}
    </Heading>
  </Primitives.Title>
));
Title.displayName = 'Prompt.Title';

const Content = React.forwardRef<
  React.ElementRef<typeof Primitives.Content>,
  React.ComponentPropsWithoutRef<typeof Primitives.Content>
>(({ className, ...props }, ref) => (
  <Portal>
    <Overlay />
    <Primitives.Content
      ref={ref}
      className={clx(
        'bg-ui-bg-base shadow-elevation-flyout fixed left-[50%] top-[50%] flex w-full max-w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border focus:outline-none',
        // "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200",  // Re-enable when Admin UI has been cleaned up
        className,
      )}
      {...props}
    />
  </Portal>
));
Content.displayName = 'Prompt.Content';

const Description = React.forwardRef<
  React.ElementRef<typeof Primitives.Description>,
  React.ComponentPropsWithoutRef<typeof Primitives.Description>
>(({ className, ...props }, ref) => (
  <Primitives.Description
    ref={ref}
    className={clx('text-ui-fg-subtle txt-compact-medium', className)}
    {...props}
  />
));
Description.displayName = 'Prompt.Description';

const Action = React.forwardRef<
  React.ElementRef<typeof Primitives.Action>,
  Omit<React.ComponentPropsWithoutRef<typeof Primitives.Action>, 'asChild'>
>(({ className, children, type, ...props }, ref) => (
  <Primitives.Action ref={ref} className={className} {...props} asChild>
    <Button type={type} variant="danger">
      {children}
    </Button>
  </Primitives.Action>
));
Action.displayName = 'Prompt.Action';

const Cancel = React.forwardRef<
  React.ElementRef<typeof Primitives.Cancel>,
  Omit<React.ComponentPropsWithoutRef<typeof Primitives.Cancel>, 'asChild'>
>(({ className, children, ...props }, ref) => (
  <Primitives.Cancel ref={ref} className={clx(className)} {...props} asChild>
    <Button variant="secondary">{children}</Button>
  </Primitives.Cancel>
));
Cancel.displayName = 'Prompt.Cancel';

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clx('flex flex-col gap-y-1 px-6 pt-6', className)} {...props} />
);

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clx('flex items-center justify-end gap-x-2 p-6', className)} {...props} />
);

const Prompt = Object.assign(Root, {
  Trigger,
  Content,
  Title,
  Description,
  Action,
  Cancel,
  Header,
  Footer,
});

export { Prompt };
