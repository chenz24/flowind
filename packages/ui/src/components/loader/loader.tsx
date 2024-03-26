import React from 'react';

import {
  DefaultProps,
  FlowindColor,
  FlowindNumberSize,
  FlowindTheme,
  getSize,
  rem,
  useComponentDefaultProps,
  useFlowindTheme,
} from '@/styles';
import { Box } from '../box';
import { Bars } from './loaders/bars';
import { Dots } from './loaders/dots';
import { Oval } from './loaders/oval';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

const sizes = {
  xs: rem(15),
  sm: rem(16),
  md: rem(30),
  lg: rem(40),
  xl: rem(50),
};

export interface LoaderProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'svg'>, 'display' | 'opacity'> {
  /** Defines width of loader */
  size?: FlowindNumberSize;

  /** Loader color from theme */
  color?: string;

  /** Loader appearance */
  variant?: FlowindTheme['loader'];
}

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
  color: '#3b82f6',
};

export function Loader(props: LoaderProps) {
  const { size, color, variant, ...others } = useComponentDefaultProps(
    'Loader',
    defaultProps,
    props,
  );

  const theme = useFlowindTheme();
  const defaultLoader = variant in LOADERS ? variant : theme.loader;
  const _size = getSize({ size, sizes });

  return (
    <Box
      role="presentation"
      component={LOADERS[defaultLoader] || LOADERS.bars}
      size={getSize({ size, sizes })}
      width={_size}
      height={_size}
      color={color as FlowindColor}
      {...others}
    />
  );
}

Loader.displayName = 'Loader';
