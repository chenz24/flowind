import React, { forwardRef, useState } from 'react';

import { DefaultProps, FlowindColor, FlowindNumberSize, Selectors } from '@/styles';
import { Box } from '../../box';
import { FlowindTransition, Transition } from '../../transition';
import useStyles from './thumb.styles';

export type ThumbStylesNames = Selectors<typeof useStyles>;

export interface ThumbProps extends DefaultProps<ThumbStylesNames> {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  color: FlowindColor;
  size: FlowindNumberSize;
  label: React.ReactNode;
  onKeyDownCapture?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onMouseDown?: (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => void;
  labelTransition?: FlowindTransition;
  labelTransitionDuration?: number;
  labelTransitionTimingFunction?: string;
  labelAlwaysOn: boolean;
  thumbLabel: string;
  onFocus?: () => void;
  onBlur?: () => void;
  showLabelOnHover?: boolean;
  isHovered?: boolean;
  children?: React.ReactNode;
  disabled: boolean;
  thumbSize: number;
  variant: string;
}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  (
    {
      max,
      min,
      value,
      position,
      label,
      dragging,
      onMouseDown,
      onKeyDownCapture,
      color,
      classNames,
      styles,
      size,
      labelTransition,
      labelTransitionDuration,
      labelTransitionTimingFunction,
      labelAlwaysOn,
      thumbLabel,
      onFocus,
      onBlur,
      showLabelOnHover,
      isHovered,
      children = null,
      disabled,
      unstyled,
      thumbSize,
      variant,
    }: ThumbProps,
    ref,
  ) => {
    const { classes, styls, cx, theme } = useStyles(
      { color, disabled, thumbSize, size },
      { name: 'Slider', classNames, styles, unstyled, variant },
    );
    const [focused, setFocused] = useState(false);

    const isVisible = labelAlwaysOn || dragging || focused || (showLabelOnHover && isHovered);

    const draggingStyles = dragging ? styls.dragging : {};

    return (
      <Box<'div'>
        tabIndex={0}
        role="slider"
        aria-label={thumbLabel}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        ref={ref}
        className={cx(classes.thumb, { [classes.dragging]: dragging })}
        onFocus={() => {
          setFocused(true);
          typeof onFocus === 'function' && onFocus();
        }}
        onBlur={() => {
          setFocused(false);
          typeof onBlur === 'function' && onBlur();
        }}
        onTouchStart={onMouseDown}
        onMouseDown={onMouseDown}
        onKeyDownCapture={onKeyDownCapture}
        onClick={(event) => event.stopPropagation()}
        style={{
          [theme.dir === 'rtl' ? 'right' : 'left']: `${position}%`,
          ...styls.thumb,
          ...draggingStyles,
        }}
      >
        {children}
        <Transition
          mounted={label != null && isVisible}
          duration={labelTransitionDuration}
          transition={labelTransition}
          timingFunction={labelTransitionTimingFunction || theme.transitionTimingFunction}
        >
          {(transitionStyles) => (
            <div style={transitionStyles} className={classes.label}>
              {label}
            </div>
          )}
        </Transition>
      </Box>
    );
  },
);

Thumb.displayName = 'SliderThumb';
