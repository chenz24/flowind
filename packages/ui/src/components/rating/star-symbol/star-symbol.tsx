'use client';

import React from 'react';

import { FlowindColor, FlowindSize } from '@/styles';
import { StarIcon } from './star-icon';
import useStyles from './star-symbol.styles';

export interface StarSymbolProps {
  size: FlowindSize;
  color: FlowindColor;
  type: 'empty' | 'full';
}

export function StarSymbol({ size, type, color }: StarSymbolProps) {
  const { classes } = useStyles({ type, color }, { name: 'Rating', size });
  return <StarIcon className={classes.icon} />;
}

StarSymbol.displayName = 'StarSymbol';
