import React from 'react';

import type { FlowindColor } from '@/styles';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number | string;
  color: FlowindColor;
}
