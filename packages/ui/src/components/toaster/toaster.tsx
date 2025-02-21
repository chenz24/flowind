'use client';

import * as React from 'react';
import { Toaster as Primitive, ToasterProps as PrimitiveProps } from 'sonner';

interface ToasterProps
  extends Omit<
    PrimitiveProps,
    | 'richColors'
    | 'closeButton'
    | 'icons'
    | 'theme'
    | 'invert'
    | 'loadingIcon'
    | 'cn'
    | 'toastOptions'
  > {}

/**
 * This component is based on the [Toaster component of the Sonner library](https://sonner.emilkowal.ski/toaster).
 */
const ToasterComponent = Primitive as React.ComponentType<PrimitiveProps>;

const Toaster = ({
  /**
   * The position of the created toasts.
   */
  position = 'bottom-right',
  /**
   * The gap between the toast components.
   */
  gap = 12,
  /**
   * The space from the edges of the screen.
   */
  offset = 24,
  /**
   * The time in milliseconds that a toast is shown before it's
   * automatically dismissed.
   *
   * @defaultValue 4000
   */
  duration,
  ...props
}: ToasterProps) => (
  <ToasterComponent
    position={position}
    gap={gap}
    offset={offset}
    toastOptions={{
      duration,
    }}
    {...props}
  />
);

export { Toaster };
