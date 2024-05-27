import React from 'react';

import { FlowindSize } from '@/styles';
import { CloseButton } from '../../close-button';
import { ChevronIcon } from './chevron-icon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonProps?: Omit<React.ComponentPropsWithoutRef<'button'>, 'type' | 'color'>;
  onClear?: () => void;
  size: FlowindSize;
  error?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
}

export function SelectRightSection({
  shouldClear,
  clearButtonProps,
  onClear,
  size,
  error,
}: SelectRightSectionProps) {
  return shouldClear ? (
    <CloseButton
      {...clearButtonProps}
      variant="subtle"
      onClick={onClear}
      size="xs"
      onMouseDown={(event) => event.preventDefault()}
    />
  ) : (
    <ChevronIcon error={error} size={size} />
  );
}

SelectRightSection.displayName = 'SelectRightSection';
