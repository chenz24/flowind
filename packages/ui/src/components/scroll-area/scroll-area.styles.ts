import { createStyles } from '@/styles';

export interface ScrollAreaStylesParams {
  scrollbarSize: number | string;
  offsetScrollbars: boolean;
  scrollbarHovered: boolean;
  hidden: boolean;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  maxWidth?: React.CSSProperties['maxWidth'];
  maxHeight?: React.CSSProperties['maxHeight'];
}

const sizes = {
  xs: {
    paddingRight: 'pr-1.5',
    paddingBottom: 'pb-1.5',
    width: 'w-1.5',
    height: 'h-1.5',
    scrollbarPadding: 'p-px',
  },
  sm: {
    paddingRight: 'pr-2.5',
    paddingBottom: 'pb-2.5',
    width: 'w-2.5',
    height: 'h-2.5',
    scrollbarPadding: 'p-0.5',
  },
  md: {
    paddingRight: 'pr-3',
    paddingBottom: 'pb-3',
    width: 'w-3',
    height: 'h-3',
    scrollbarPadding: 'p-0.5',
  },
  lg: {
    paddingRight: 'pr-4',
    paddingBottom: 'pb-4',
    width: 'w-4',
    height: 'h-4',
    scrollbarPadding: 'p-0.5',
  },
  xl: {
    paddingRight: 'pr-5',
    paddingBottom: 'pb-5',
    width: 'w-5',
    height: 'h-5',
    scrollbarPadding: 'p-0.5',
  },
};

export default createStyles(
  (
    theme,
    {
      scrollbarSize,
      offsetScrollbars,
      scrollbarHovered,
      hidden,
      width,
      height,
      maxWidth,
      maxHeight,
    }: ScrollAreaStylesParams,
  ) => {
    const _sizes = sizes[scrollbarSize in sizes ? scrollbarSize : 'md'];
    return {
      classes: {
        root: 'overflow-hidden',
        viewport: `w-full h-full ${offsetScrollbars ? _sizes.paddingRight : ''}
        ${offsetScrollbars ? _sizes.paddingBottom : ''}`,
        scrollbar: `select-none box-border touch-none transition ${hidden ? 'hidden' : 'flex'}
        ${_sizes.scrollbarPadding} data-[state=hidden]:hidden data-[state=hidden]:opacity-0
        hover:bg-gray-100 dark:hover:bg-zinc-800`,
        verticalBar: _sizes.width,
        horizontalBar: `flex-col ${_sizes.height}`,
        thumb: `flex-1 relative overflow-hidden transition-colors rounded-full bg-black/40 dark:bg-white/40 ${
          hidden ? 'hidden' : ''
        } before:content-'' before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full
        before:min-w-11 before:min-h-11 before:-translate-x-1/2 before:-translate-y-1/2`,
        corner: `transition-opacity bg-gray-100 dark:bg-zinc-800 ${hidden ? 'hidden' : ''} ${
          scrollbarHovered ? 'opacity-100' : 'opacity-0'
        }`,
      },
      styles: {
        root: { width, height, maxWidth, maxHeight },
        viewport: {},
        scrollbar: {},
        thumb: {},
        corner: {},
      },
    };
  },
);
