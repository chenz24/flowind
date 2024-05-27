'use client';

import React, { forwardRef } from 'react';

import { rem, useComponentDefaultProps, useFlowindTheme } from '@/styles';
import { BaseColorSliderProps, ColorSlider } from '../color-slider/color-slider';
import { round } from '../converters/parsers';

export interface AlphaSliderProps extends BaseColorSliderProps {
  color: string;
}

const defaultProps: Partial<AlphaSliderProps> = {};

export const AlphaSlider = forwardRef<HTMLDivElement, AlphaSliderProps>((props, ref) => {
  const { value, onChange, onChangeEnd, color, __staticSelector, ...others } =
    useComponentDefaultProps('AlphaSlider', defaultProps, props);
  const theme = useFlowindTheme();
  const _color = theme.colorScheme === 'dark' ? '#373A40' : '#dee2e6';

  return (
    <ColorSlider
      {...others}
      ref={ref}
      value={value}
      onChange={(val) => onChange(round(val, 2))}
      onChangeEnd={(val) => onChangeEnd(round(val, 2))}
      maxValue={1}
      round={false}
      __staticSelector={__staticSelector || 'AlphaSlider'}
      overlays={[
        {
          backgroundImage: `linear-gradient(45deg, ${_color} 25%, transparent 25%), linear-gradient(-45deg, ${_color} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${_color} 75%), linear-gradient(-45deg, ${
            theme.colorScheme === 'dark' ? '#1A1B1E' : '#fff'
          } 75%, ${_color} 75%)`,
          backgroundSize: `${rem(8)} ${rem(8)}`,
          backgroundPosition: `0 0, 0 ${rem(4)}, ${rem(4)} -${rem(4)}, -${rem(4)} 0`,
        },
        {
          backgroundImage: `linear-gradient(90deg, transparent, ${color})`,
        },
        {
          boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(1)} inset, rgb(0, 0, 0, .15) 0 0 ${rem(
            4,
          )} inset`,
        },
      ]}
    />
  );
});

AlphaSlider.displayName = 'AlphaSlider';
