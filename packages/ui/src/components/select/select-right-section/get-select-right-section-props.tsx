import React from 'react';

import { FlowindTheme } from '@/styles';
import { SelectRightSection, SelectRightSectionProps } from './select-right-section';

interface GetRightSectionProps extends SelectRightSectionProps {
  suffix?: React.ReactNode;
  suffixWidth?: string | number;
  styles: Record<string, any>;
  theme: FlowindTheme;
  readOnly: boolean;
}

export function getSelectRightSectionProps({
  styles,
  suffix,
  suffixWidth,
  theme,
  ...props
}: GetRightSectionProps) {
  if (suffix) {
    return { suffix, suffixWidth, styles };
  }

  const _styles = typeof styles === 'function' ? styles(theme) : styles;

  return {
    suffix: !props.readOnly && !(props.disabled && props.shouldClear) && (
      <SelectRightSection {...props} />
    ),
    styles: {
      ..._styles,
      suffixWidth: {
        ..._styles?.suffixWidth,
        pointerEvents: props.shouldClear ? undefined : 'none',
      },
    },
  };
}
