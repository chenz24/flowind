'use client';

import React, { forwardRef } from 'react';

import { useUncontrolled } from '@flowind/hooks';
import { useComponentDefaultProps } from '@/styles';
import { IconButton } from '../icon-button';
import { TextInput, TextInputProps } from '../text-input';
import { PasswordToggleIcon } from './password-toggle-icon';

export interface PasswordInputProps
  extends Omit<TextInputProps, 'rightSection' | 'rightSectionWidth' | 'rightSectionProps'> {
  /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
  toggleTabIndex?: -1 | 0;

  /** Provide your own visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean; size: number | string }>;

  /** aria-label for visibility toggle button */
  visibilityToggleLabel?: string;

  /** Determines whether input content should be visible (controlled) */
  visible?: boolean;

  /** Determines whether input content should be visible (uncontrolled) */
  defaultVisible?: boolean;

  /** Called when visibility changes */
  onVisibilityChange?: (visible: boolean) => void;
}

const defaultProps: Partial<PasswordInputProps> = {
  toggleTabIndex: -1,
  visibilityToggleIcon: PasswordToggleIcon,
  __staticSelector: 'PasswordInput',
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const {
    toggleTabIndex,
    visibilityToggleIcon: VisibilityToggleIcon,
    visibilityToggleLabel,
    visible,
    defaultVisible,
    onVisibilityChange,
    size,
    disabled,
    // __staticSelector,
    ...others
  } = useComponentDefaultProps('PasswordInput', defaultProps, props);

  const [_visible, setVisibility] = useUncontrolled({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: false,
    onChange: onVisibilityChange,
  });

  const toggleVisibility = () => setVisibility(!_visible);

  const rightSection = (
    <IconButton<'button'>
      variant="subtle"
      size={size}
      type="secondary"
      disabled={disabled}
      tabIndex={toggleTabIndex}
      aria-hidden={!visibilityToggleLabel}
      aria-label={visibilityToggleLabel}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleVisibility();
      }}
      onKeyDown={(event) => {
        if (event.key === ' ') {
          event.preventDefault();
          toggleVisibility();
        }
      }}
    >
      <VisibilityToggleIcon reveal={_visible} size={16} />
    </IconButton>
  );

  return (
    <TextInput
      {...others}
      disabled={disabled}
      size={size}
      ref={ref}
      type={_visible ? 'text' : 'password'}
      suffix={rightSection}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';
