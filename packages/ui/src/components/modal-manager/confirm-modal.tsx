import React from 'react';

import { Button, type ButtonProps } from '../button';
import { Stack, StackProps } from '../stack';
import { ConfirmLabels } from './context';
import { useModals } from './use-modals/use-modals';

export interface ConfirmModalProps {
  id?: string;
  footerLeftSection?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
  confirmProps?: ButtonProps & React.ComponentPropsWithoutRef<'button'>;
  groupProps?: StackProps;
  hasConfirmButton?: boolean;
  hasCancelButton?: boolean;
  labels?: ConfirmLabels;
}

export function ConfirmModal({
  id,
  hasConfirmButton = true,
  hasCancelButton = true,
  cancelProps,
  confirmProps,
  labels = { cancel: '', confirm: '' },
  closeOnConfirm = true,
  closeOnCancel = true,
  groupProps,
  onCancel,
  onConfirm,
  footerLeftSection,
}: ConfirmModalProps) {
  const { cancel: cancelLabel, confirm: confirmLabel } = labels;
  const ctx = useModals();

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof cancelProps?.onClick === 'function' && cancelProps?.onClick(event);
    typeof onCancel === 'function' && onCancel();
    closeOnCancel && ctx.closeModal(id);
  };

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    typeof confirmProps?.onClick === 'function' && confirmProps?.onClick(event);
    typeof onConfirm === 'function' && onConfirm();
    closeOnConfirm && ctx.closeModal(id);
  };

  return (
    <>
      {footerLeftSection}

      <Stack justify="flex-end" {...groupProps}>
        {hasCancelButton && (
          <Button variant="default" {...cancelProps} onClick={handleCancel}>
            {cancelProps?.children || cancelLabel}
          </Button>
        )}

        {hasConfirmButton && (
          <Button {...confirmProps} onClick={handleConfirm}>
            {confirmProps?.children || confirmLabel}
          </Button>
        )}
      </Stack>
    </>
  );
}
