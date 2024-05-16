import React from 'react';

import { DefaultProps, FlowindColor, FlowindSize, Selectors } from '@/styles';
import { Box } from '../../box';
import { getPosition } from '../utils/get-position/get-position';
import { isMarkFilled } from './is-mark-filled';
import useStyles from './marks.styles';

export type MarksStylesNames = Selectors<typeof useStyles>;

export interface MarksProps extends DefaultProps<MarksStylesNames> {
  marks: { value: number; label?: React.ReactNode }[];
  size: FlowindSize;
  thumbSize?: number;
  color: FlowindColor;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  offset?: number;
  disabled: boolean;
  inverted?: boolean;
  variant: string;
}

export function Marks({
  marks,
  color,
  size,
  thumbSize,
  min,
  max,
  value,
  classNames,
  styles,
  offset,
  onChange,
  disabled,
  unstyled,
  inverted,
  variant,
}: MarksProps) {
  const { classes, styls, cx } = useStyles(
    { color, disabled, thumbSize },
    { name: 'Slider', classNames, styles, unstyled, variant, size },
  );

  const items = marks.map((mark, index) => (
    <Box
      className={classes.markWrapper}
      style={{ left: `${getPosition({ value: mark.value, min, max })}%`, ...styls.markWrapper }}
      key={index}
    >
      <div
        className={cx(classes.mark, {
          [classes.markFilled]: isMarkFilled({ mark, value, offset, inverted }),
        })}
        style={styls.mark}
      />
      {mark.label && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={classes.markLabel}
          style={styls.markLabel}
          onMouseDown={(event) => {
            event.stopPropagation();
            !disabled && onChange(mark.value);
          }}
          onTouchStart={(event) => {
            event.stopPropagation();
            !disabled && onChange(mark.value);
          }}
        >
          {mark.label}
        </div>
      )}
    </Box>
  ));

  return (
    <div className={classes.marksContainer} style={styls.marksContainer}>
      {items}
    </div>
  );
}

Marks.displayName = 'SliderMarks';
