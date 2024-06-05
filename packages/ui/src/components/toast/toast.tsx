'use client';

import * as React from 'react';

import {
  CheckCircleSolid,
  ExclamationCircleSolid,
  InformationCircleSolid,
  Spinner,
  XCircleSolid,
} from '@flowind/icons';
import type { ToastAction, ToastVariant } from '@/types';
import { clx } from '@/utils/clx';

interface ToastComponentProps {
  id: string | number;
  variant?: ToastVariant;
  title: string;
  description?: string;
  action?: ToastAction;
  onDismiss?: (id?: string | number) => void;
  dismissLabel?: string;
}

/**
 * This component is based on the [Sonner](https://sonner.emilkowal.ski/toast) toast library.
 */
export const Toast = ({
  /**
   * Optional ID of the toast.
   */
  id,
  /**
   * @ignore
   *
   * @privateRemarks
   * As the Toast component is created using
   * the `toast` utility functions, the variant is inferred
   * from the utility function.
   */
  variant = 'info',
  /**
   * @ignore
   *
   * @privateRemarks
   * The `toast` utility functions accept this as a parameter.
   */
  title,
  /**
   * The toast's text.
   */
  description,
  /**
   * The toast's action buttons.
   */
  action,
  /**
   * @ignore
   *
   * @privateRemarks
   * The `toast` utility functions don't allow
   * passing this prop.
   */
  onDismiss,
  /**
   * The label of the dismiss button, if available.
   */
  dismissLabel = 'Close',
}: ToastComponentProps) => {
  const hasActionables = !!action || onDismiss;
  let icon;

  switch (variant) {
    case 'success':
      icon = <CheckCircleSolid size="20" className="text-tag-green-icon" />;
      break;
    case 'warning':
      icon = <ExclamationCircleSolid size="20" className="text-tag-orange-icon" />;
      break;
    case 'error':
      icon = <XCircleSolid size="20" className="text-tag-red-icon" />;
      break;
    case 'loading':
      icon = <Spinner size="20" className="text-tag-blue-icon animate-spin" />;
      break;
    case 'info':
      icon = <InformationCircleSolid size="20" className="text-fg-base" />;
      break;
    default:
      break;
  }

  return (
    <div className="shadow-elevation-flyout bg-bg-base flex w-fit min-w-[360px] max-w-[440px] overflow-hidden rounded-lg">
      <div
        className={clx('grid flex-1 items-start gap-3 py-3 pl-3', {
          'border-r pr-3': hasActionables,
          'pr-6': !hasActionables,
          'grid-cols-[20px_1fr]': !!icon,
          'grid-cols-1': !icon,
        })}
      >
        {!!icon && (
          <span className="flex size-5 items-center justify-center" aria-hidden>
            {icon}
          </span>
        )}
        <div className="flex flex-col">
          <span className="txt-compact-sm-plus text-fg-base">{title}</span>
          <span className="txt-sm text-fg-subtle text-pretty">{description}</span>
        </div>
      </div>
      {hasActionables && (
        <div
          className={clx('grid grid-cols-1', {
            'grid-rows-2': !!action && onDismiss,
            'grid-rows-1': !action || !onDismiss,
          })}
        >
          {!!action && (
            <button
              type="button"
              className={clx(
                'txt-compact-sm-plus text-fg-base bg-bg-base hover:bg-bg-base-hover active:bg-bg-base-pressed flex items-center justify-center px-4 transition-colors',
                {
                  'border-border-base border-b': onDismiss,
                  'text-fg-error': action.variant === 'destructive',
                },
              )}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          )}
          {onDismiss && (
            <button
              type="button"
              onClick={() => onDismiss(id)}
              className={clx(
                'txt-compact-sm-plus text-fg-subtle bg-bg-base hover:bg-bg-base-hover active:bg-bg-base-pressed flex items-center justify-center px-4 transition-colors',
              )}
            >
              {dismissLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
