import React from 'react';

import {
  DefaultProps,
  FlowindColor,
  FlowindNumberSize,
  FlowindSize,
  getSize,
  rem,
  Selectors,
} from '@/styles';
import { Box } from '../../box';
import { Marks, MarksStylesNames } from '../marks/marks';
import { sizes } from '../slider-root/slider-root.styles';
import useStyles from './track.styles';

export type TrackStylesNames = Selectors<typeof useStyles> | MarksStylesNames;

export interface TrackProps extends DefaultProps<TrackStylesNames> {
  filled: number;
  offset?: number;
  marksOffset?: number;
  marks: { value: number; label?: React.ReactNode }[];
  size: FlowindNumberSize;
  thumbSize?: number;
  radius: FlowindSize;
  color: FlowindColor;
  min: number;
  max: number;
  value: number;
  children: React.ReactNode;
  onChange: (value: number) => void;
  disabled: boolean;
  inverted?: boolean;
  variant: string;
  containerProps?: React.PropsWithRef<React.ComponentProps<'div'>>;
}

export function Track({
  filled,
  size,
  thumbSize,
  color,
  classNames,
  styles,
  radius,
  children,
  offset,
  disabled,
  marksOffset,
  unstyled,
  inverted,
  variant,
  containerProps,
  ...others
}: TrackProps) {
  const { classes, styls } = useStyles(
    { color, radius, disabled, inverted, thumbSize },
    { name: 'Slider', classNames, styles, unstyled, variant, size },
  );

  return (
    <>
      <div className={classes.trackContainer} style={styls.trackContainer} {...containerProps}>
        <div className={classes.track} style={styls.track}>
          <div className={classes.trackLine} style={styls.trackLine} />
          <Box
            className={classes.bar}
            style={{
              left: `calc(${offset}% - ${
                thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes })
              })`,
              width: `calc(${filled}% + 2 * ${
                thumbSize ? rem(thumbSize / 2) : getSize({ size, sizes })
              })`,
              ...styls.bar,
            }}
          />

          {children}
        </div>
      </div>

      <Marks
        {...others}
        size={size}
        thumbSize={thumbSize}
        color={color}
        offset={marksOffset}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
        unstyled={unstyled}
        inverted={inverted}
        variant={variant}
      />
    </>
  );
}

Track.displayName = 'SliderTrack';
