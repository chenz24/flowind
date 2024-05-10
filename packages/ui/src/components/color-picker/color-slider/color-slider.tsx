import React, { forwardRef, useRef, useState } from 'react';

import {
  clampUseMovePosition,
  useDidUpdate,
  useMergedRef,
  useMove,
  UseMovePosition,
} from '@flowind/hooks';
import { DefaultProps, FlowindSize, rem, Selectors } from '@/styles';
import { Box } from '../../box';
import { Thumb, ThumbStylesNames } from '../thumb/thumb';
import useStyles from './color-slider.styles';

export type ColorSliderStylesNames =
  | Exclude<Selectors<typeof useStyles>, 'sliderThumb'>
  | ThumbStylesNames;

export interface BaseColorSliderProps
  extends DefaultProps<ColorSliderStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  variant?: string;
  value: number;
  onChange: (value: number) => void;
  onChangeEnd: (value: number) => void;
  size?: FlowindSize;
  focusable?: boolean;
  __staticSelector?: string;
}

export interface ColorSliderProps extends BaseColorSliderProps {
  maxValue: number;
  overlays: React.CSSProperties[];
  round: boolean;
  thumbColor?: string;
}

export const ColorSlider = forwardRef<HTMLDivElement, ColorSliderProps>(
  (
    {
      value,
      onChange,
      onChangeEnd,
      maxValue,
      round,
      size = 'md',
      thumbColor = 'transparent',
      __staticSelector = 'ColorSlider',
      focusable = true,
      overlays,
      classNames,
      styles,
      className,
      unstyled,
      variant,
      ...others
    }: ColorSliderProps,
    ref,
  ) => {
    const { classes, cx, styls } = useStyles(null, {
      classNames,
      styles,
      name: __staticSelector,
      unstyled,
      variant,
      size,
    });

    const [position, setPosition] = useState({ y: 0, x: value / maxValue });
    const positionRef = useRef(position);
    const getChangeValue = (val: number) => (round ? Math.round(val * maxValue) : val * maxValue);
    const { ref: sliderRef } = useMove(
      ({ x, y }) => {
        positionRef.current = { x, y };
        onChange(getChangeValue(x));
      },
      {
        onScrubEnd: () => {
          const { x } = positionRef.current;
          onChangeEnd(getChangeValue(x));
        },
      },
    );

    useDidUpdate(() => {
      setPosition({ y: 0, x: value / maxValue });
    }, [value]);

    const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
      event.preventDefault();
      const _position = clampUseMovePosition(pos);
      onChange(getChangeValue(_position.x));
      onChangeEnd(getChangeValue(_position.x));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
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

    const layers = overlays.map((overlay, index) => (
      <div
        className={classes.sliderOverlay}
        style={{ ...overlay, ...styls.sliderOverlay }}
        key={index}
      />
    ));

    return (
      <Box
        {...others}
        ref={useMergedRef(sliderRef, ref)}
        className={cx(classes.slider, className)}
        style={{ ...others.style, ...styls.slider }}
        role="slider"
        aria-valuenow={value}
        aria-valuemax={maxValue}
        aria-valuemin={0}
        tabIndex={focusable ? 0 : -1}
        onKeyDown={handleKeyDown}
      >
        {layers}

        <Thumb
          __staticSelector={__staticSelector}
          classNames={classNames}
          styles={styles}
          position={position}
          style={{ top: rem(1), backgroundColor: thumbColor }}
          className={classes.sliderThumb}
          size={size}
        />
      </Box>
    );
  },
);

ColorSlider.displayName = 'ColorSlider';
