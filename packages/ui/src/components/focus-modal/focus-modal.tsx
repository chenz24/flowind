'use client';

import * as React from 'react';
import * as FocusModalPrimitives from '@radix-ui/react-dialog';

import { XMark } from '@flowind/icons';
import { IconButton } from '@/components/icon-button';
import { Kbd } from '@/components/kbd';
import { clx } from '@/utils/clx';

/**
 * @prop defaultOpen - Whether the modal is opened by default.
 * @prop open - Whether the modal is opened.
 * @prop onOpenChange - A function to handle when the modal is opened or closed.
 */
interface FocusModalRootProps
  extends React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Root> {}

/**
 * This component is based on the [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) primitives.
 */
const FocusModalRoot = (props: FocusModalRootProps) => <FocusModalPrimitives.Root {...props} />;
FocusModalRoot.displayName = 'FocusModal';

const FocusModalTrigger = React.forwardRef<
  React.ElementRef<typeof FocusModalPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Trigger>
>((props, ref) => <FocusModalPrimitives.Trigger type={undefined} ref={ref} {...props} />);
FocusModalTrigger.displayName = 'FocusModal.Trigger';

const FocusModalClose = FocusModalPrimitives.Close;
FocusModalClose.displayName = 'FocusModal.Close';

const FocusModalPortal = ({
  // @ts-expect-error
  className,
  ...props
}: FocusModalPrimitives.DialogPortalProps) => (
  // @ts-expect-error
  <FocusModalPrimitives.DialogPortal className={clx(className)} {...props} />
);
FocusModalPortal.displayName = 'FocusModal.Portal';

const FocusModalOverlay = React.forwardRef<
  React.ElementRef<typeof FocusModalPrimitives.Overlay>,
  React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Overlay>
>(({ className, ...props }, ref) => (
  <FocusModalPrimitives.Overlay
    ref={ref}
    className={clx(
      'bg-bg-overlay fixed inset-0',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
));
FocusModalOverlay.displayName = 'FocusModal.Overlay';

const FocusModalContent = React.forwardRef<
  React.ElementRef<typeof FocusModalPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof FocusModalPrimitives.Content>
>(({ className, ...props }, ref) => (
  <FocusModalPortal>
    <FocusModalOverlay />
    <FocusModalPrimitives.Content
      ref={ref}
      className={clx(
        'bg-bg-base shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border focus-visible:outline-none',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-in-from-bottom-2  duration-200',
        className,
      )}
      {...props}
    />
  </FocusModalPortal>
));
FocusModalContent.displayName = 'FocusModal.Content';

/**
 * This component is based on the `div` element and supports all of its props
 */
const FocusModalHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clx(
        'border-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-x-2">
        <FocusModalPrimitives.Close type={undefined} asChild>
          <IconButton size="sm" htmlType="button" variant="subtle">
            <XMark />
          </IconButton>
        </FocusModalPrimitives.Close>
        <Kbd>esc</Kbd>
      </div>
      {children}
    </div>
  ),
);
FocusModalHeader.displayName = 'FocusModal.Header';

/**
 * This component is based on the `div` element and supports all of its props
 */
const FocusModalBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clx('flex-1', className)} {...props} />
  ),
);
FocusModalBody.displayName = 'FocusModal.Body';

const FocusModal = Object.assign(FocusModalRoot, {
  Trigger: FocusModalTrigger,
  Content: FocusModalContent,
  Header: FocusModalHeader,
  Body: FocusModalBody,
  Close: FocusModalClose,
});

export { FocusModal };
