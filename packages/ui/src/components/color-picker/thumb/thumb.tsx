import React from 'react';

import { DefaultProps, FlowindSize, Selectors } from '@/styles';
import useStyles, { THUMB_SIZES } from './thumb.styles';

export type ThumbStylesNames = Selectors<typeof useStyles>;

interface Position {
  x: number;
  y: number;
}

export interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  variant?: string;
  position: Position;
  size: FlowindSize;
  __staticSelector: string;
}

export function Thumb({
  position,
  className,
  styles,
  classNames,
  style,
  size,
  __staticSelector,
  unstyled,
  variant,
}: ThumbProps) {
  const { classes, cx, styls } = useStyles(null, {
    classNames,
    styles,
    name: __staticSelector,
    unstyled,
    size,
    variant,
  });

  return (
    <div
      className={cx(classes.thumb, className)}
      style={{
        ...styls.thumb,
        left: `calc(${position.x * 100}% - ${THUMB_SIZES[size]} / 2)`,
        top: `calc(${position.y * 100}% - ${THUMB_SIZES[size]} / 2)`,
        ...style,
      }}
    />
  );
}

Thumb.displayName = 'Thumb';
