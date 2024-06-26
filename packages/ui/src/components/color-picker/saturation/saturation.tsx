'use client';

import React, { useEffect, useRef, useState } from 'react';

import { clampUseMovePosition, useMove, UseMovePosition } from '@flowind/hooks';
import { DefaultProps, FlowindSize, Selectors } from '@/styles';
import { convertHsvaTo } from '../converters';
import { Thumb, ThumbStylesNames } from '../thumb/thumb';
import { HsvaColor } from '../types';
import useStyles from './saturation.styles';

export type SaturationStylesNames =
  | Exclude<Selectors<typeof useStyles>, 'saturationOverlay' | 'saturationThumb'>
  | ThumbStylesNames;

interface SaturationProps extends DefaultProps<SaturationStylesNames> {
  variant?: string;
  value: HsvaColor;
  onChange: (color: Partial<HsvaColor>) => void;
  onChangeEnd: (color: Partial<HsvaColor>) => void;
  saturationLabel?: string;
  size: FlowindSize;
  color: string;
  focusable?: boolean;
  __staticSelector?: string;
}

export function Saturation({
  value,
  onChange,
  onChangeEnd,
  focusable = true,
  __staticSelector = 'saturation',
  size,
  color,
  saturationLabel,
  classNames,
  styles,
  unstyled,
  variant,
}: SaturationProps) {
  const { classes, styls } = useStyles(null, {
    classNames,
    styles,
    name: __staticSelector,
    unstyled,
    variant,
    size,
  });

  const [position, setPosition] = useState({ x: value.s / 100, y: 1 - value.v / 100 });
  const positionRef = useRef(position);

  const { ref } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    },
    {
      onScrubEnd: () => {
        const { x, y } = positionRef.current;
        onChangeEnd({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
      },
    },
  );

  useEffect(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
    onChangeEnd({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowUp': {
        handleArrow(event, { y: position.y - 0.05, x: position.x });
        break;
      }

      case 'ArrowDown': {
        handleArrow(event, { y: position.y + 0.05, x: position.x });
        break;
      }

      case 'ArrowRight': {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }

      case 'ArrowLeft': {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };

  return (
    <div
      className={classes.saturation}
      style={styls.saturation}
      ref={ref}
      role="slider"
      aria-label={saturationLabel}
      aria-valuenow={position.x}
      aria-valuetext={convertHsvaTo('rgba', value)}
      tabIndex={focusable ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      <div
        className={classes.saturationOverlay}
        style={{ backgroundColor: `hsl(${value.h}, 100%, 50%)`, ...styls.saturationOverlay }}
      />

      <div
        className={classes.saturationOverlay}
        style={{
          backgroundImage: 'linear-gradient(90deg, #fff, transparent)',
          ...styls.saturationOverlay,
        }}
      />

      <div
        className={classes.saturationOverlay}
        style={{
          backgroundImage: 'linear-gradient(0deg, #000, transparent)',
          ...styls.saturationOverlay,
        }}
      />

      <Thumb
        __staticSelector={__staticSelector}
        classNames={classNames}
        styles={styles}
        position={position}
        className={classes.saturationThumb}
        style={{ backgroundColor: color, ...styls.saturationThumb }}
        size={size}
      />
    </div>
  );
}

Saturation.displayName = 'Saturation';
