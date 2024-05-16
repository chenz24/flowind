import React from 'react';

import { createStyles, FlowindNumberSize, rem } from '@/styles';

export type StackPosition = 'right' | 'center' | 'left' | 'apart';
export type StackDirection = 'row' | 'col';

export interface StackStylesParams {
  direction: StackDirection;
  justify: React.CSSProperties['justifyContent'];
  noWrap: boolean;
  grow: boolean;
  spacing: FlowindNumberSize;
  align: React.CSSProperties['alignItems'];
  count: number;
}

export const DIRECTIONS = {
  row: 'flex-row',
  col: 'flex-col',
};

export const JUSTIFY = {
  'flex-start': 'justify-start',
  center: 'justify-center',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
};

export const GAP = {
  xs: 'gap-2.5',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-5',
  xl: 'gap-6',
};

export const ALIGNMENTS = {
  'flex-start': 'items-start',
  center: 'items-center',
  'flex-end': 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

export default createStyles(
  (theme, { spacing, justify, direction, noWrap, grow, align }: StackStylesParams) => {
    const gapClass = GAP[spacing] || '';
    const gapStyle = spacing && !GAP[spacing] ? { gap: rem(spacing) } : {};

    return {
      classes: {
        root: `box-border flex ${DIRECTIONS[direction || 'row']} ${ALIGNMENTS[align || 'center']} ${
          noWrap ? 'flex-nowrap' : 'flex-wrap'
        }
    ${JUSTIFY[justify] || ''} ${gapClass} [&>*]:box-border ${grow ? '[&>*]:grow' : '[&>*]:grow-0'}`,
      },
      styles: {
        root: gapStyle,
      },
    };
  },
);
