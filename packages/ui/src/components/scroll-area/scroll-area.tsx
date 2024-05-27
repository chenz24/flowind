'use client';

import React, { forwardRef, useState } from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';

import {
  clx,
  DefaultProps,
  FlowindSize,
  Selectors,
  useComponentDefaultProps,
  useFlowindTheme,
} from '@/styles';
import { ForwardRefWithStaticComponents } from '@/utils/forwardRef-with-static-components';
import { Box } from '../box';
import useStyles, { ScrollAreaStylesParams } from './scroll-area.styles';

export type ScrollAreaStylesNames = Selectors<typeof useStyles>;

export interface ScrollAreaProps
  extends DefaultProps<ScrollAreaStylesNames, ScrollAreaStylesParams>,
    React.ComponentPropsWithRef<'div'> {
  variant?: string;

  /** Scrollbar size */
  scrollbarSize?: FlowindSize;

  /** Scrollbars type */
  type?: 'auto' | 'always' | 'scroll' | 'hover' | 'never';

  /** Scroll hide delay in ms, for scroll and hover types only */
  scrollHideDelay?: number;

  width?: React.CSSProperties['width'];

  height?: React.CSSProperties['height'];

  maxWidth?: React.CSSProperties['maxWidth'];

  maxHeight?: React.CSSProperties['maxHeight'];

  /** Reading direction of the scroll area */
  dir?: 'ltr' | 'rtl';

  /** Should scrollbars be offset with padding */
  offsetScrollbars?: boolean;

  /** Get viewport ref */
  viewportRef?: React.ForwardedRef<HTMLDivElement>;

  /** Props added to the viewport element */
  viewportProps?: React.ComponentPropsWithRef<'div'>;

  /** Subscribe to scroll position changes */
  onScrollPositionChange?: (position: { x: number; y: number }) => void;
}

const defaultProps: Partial<ScrollAreaProps> = {
  scrollbarSize: 'sm',
  scrollHideDelay: 1000,
  type: 'hover',
  offsetScrollbars: false,
};

export const _ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>((props, ref) => {
  const {
    children,
    className,
    classNames,
    width,
    height,
    maxWidth,
    maxHeight,
    styles,
    style,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    ...others
  } = useComponentDefaultProps('ScrollArea', defaultProps, props);

  const [scrollbarHovered, setScrollbarHovered] = useState(false);
  const theme = useFlowindTheme();
  const { classes, styls, cx } = useStyles(
    {
      scrollbarSize,
      offsetScrollbars,
      scrollbarHovered,
      hidden: type === 'never',
      width,
      height,
      maxWidth,
      maxHeight,
    },
    { name: 'ScrollArea', classNames, styles, unstyled, variant },
  );

  return (
    <RadixScrollArea.Root
      type={type === 'never' ? 'always' : type}
      scrollHideDelay={scrollHideDelay}
      dir={dir || theme.dir}
      ref={ref}
      asChild
    >
      <Box className={cx(classes.root, className)} style={{ ...styls.root, ...style }} {...others}>
        <RadixScrollArea.Viewport
          {...viewportProps}
          className={classes.viewport}
          ref={viewportRef}
          onScroll={
            typeof onScrollPositionChange === 'function'
              ? ({ currentTarget }) =>
                  onScrollPositionChange({
                    x: currentTarget.scrollLeft,
                    y: currentTarget.scrollTop,
                  })
              : undefined
          }
        >
          {children}
        </RadixScrollArea.Viewport>
        <RadixScrollArea.Scrollbar
          orientation="horizontal"
          className={cx(classes.scrollbar, classes.horizontalBar)}
          forceMount
          onMouseEnter={() => setScrollbarHovered(true)}
          onMouseLeave={() => setScrollbarHovered(false)}
        >
          <RadixScrollArea.Thumb className={classes.thumb} />
        </RadixScrollArea.Scrollbar>
        <RadixScrollArea.Scrollbar
          orientation="vertical"
          className={cx(classes.scrollbar, classes.verticalBar)}
          forceMount
          onMouseEnter={() => setScrollbarHovered(true)}
          onMouseLeave={() => setScrollbarHovered(false)}
        >
          <RadixScrollArea.Thumb className={classes.thumb} />
        </RadixScrollArea.Scrollbar>
        <RadixScrollArea.Corner className={classes.corner} />
      </Box>
    </RadixScrollArea.Root>
  );
}) as any;

export interface ScrollAreaAutosizeProps extends ScrollAreaProps {}

const ScrollAreaAutosize = forwardRef<HTMLDivElement, ScrollAreaAutosizeProps>((props, ref) => {
  const {
    children,
    classNames,
    styles,
    width,
    height,
    maxWidth,
    maxHeight,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    style,
    variant,
    viewportProps,
    className,
    ...others
  } = useComponentDefaultProps<ScrollAreaAutosizeProps>('ScrollAreaAutosize', defaultProps, props);

  return (
    <Box
      {...others}
      ref={ref}
      className={clx(className, 'flex')}
      style={{ width, height, maxWidth, maxHeight, ...style }}
    >
      <Box className="flex flex-col flex-1">
        <_ScrollArea
          classNames={classNames}
          styles={styles}
          scrollHideDelay={scrollHideDelay}
          scrollbarSize={scrollbarSize}
          type={type}
          dir={dir}
          offsetScrollbars={offsetScrollbars}
          viewportRef={viewportRef}
          onScrollPositionChange={onScrollPositionChange}
          unstyled={unstyled}
          variant={variant}
          viewportProps={viewportProps}
        >
          {children}
        </_ScrollArea>
      </Box>
    </Box>
  );
});

ScrollAreaAutosize.displayName = 'ScrollAreaAutosize';
_ScrollArea.displayName = 'ScrollArea';
_ScrollArea.Autosize = ScrollAreaAutosize;

export const ScrollArea: ForwardRefWithStaticComponents<
  ScrollAreaProps,
  {
    Autosize: typeof ScrollAreaAutosize;
  }
> = _ScrollArea;
