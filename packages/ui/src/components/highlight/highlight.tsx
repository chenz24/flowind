import React, { CSSProperties, forwardRef } from 'react';

import { FlowindColor, useComponentDefaultProps } from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import { Mark } from '../mark/mark';
import { Text, TextProps } from '../text/text';
import { highlighter } from './highlighter/highlighter';

export interface HighlightProps extends TextProps {
  /** Substring or an array of substrings to highlight in children */
  highlight: string | string[];

  /** Color from theme that is used for highlighting */
  highlightColor?: FlowindColor;

  /** Styles applied to highlighted part */
  highlightStyles?: CSSProperties;

  /** Full string part of which will be highlighted */
  children: string;
}

const defaultProps: Partial<HighlightProps> = {
  highlightColor: 'yellow',
};

export const _Highlight = forwardRef<HTMLDivElement, HighlightProps>((props, ref) => {
  const { children, highlight, highlightColor, highlightStyles, ...others } =
    useComponentDefaultProps('Highlight', defaultProps, props);
  const highlightChunks = highlighter(children, highlight);

  return (
    <Text ref={ref} {...others}>
      {highlightChunks.map(({ chunk, highlighted }, i) =>
        highlighted ? (
          <Mark key={i} color={highlightColor} style={highlightStyles} data-highlight={chunk}>
            {chunk}
          </Mark>
        ) : (
          <span key={i}>{chunk}</span>
        ),
      )}
    </Text>
  );
});

_Highlight.displayName = 'Highlight';

export const Highlight = createPolymorphicComponent<'div', HighlightProps>(_Highlight);
