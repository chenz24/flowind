import React from 'react';

import { DefaultProps, Selectors } from '@/styles';
import { ColorSwatch } from '../../color-swatch';
import useStyles from './swatches.styles';

export type SwatchesStylesNames = Selectors<typeof useStyles>;

export interface SwatchesProps
  extends DefaultProps<SwatchesStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  // size?: string | number;
  variant?: string;
  data: string[];
  swatchesPerRow?: number;
  focusable?: boolean;
  onChangeEnd?: (color: string) => void;
  __staticSelector?: string;
  setValue: (value: string) => void;
}

export function Swatches({
  data,
  swatchesPerRow = 10,
  focusable = true,
  classNames,
  styles,
  __staticSelector = 'color-picker',
  unstyled,
  setValue,
  onChangeEnd,
  variant,
  ...others
}: SwatchesProps) {
  const { classes, styls } = useStyles(
    { swatchesPerRow },
    { classNames, styles, name: __staticSelector, unstyled, variant },
  );

  const colors = data.map((color, index) => (
    <ColorSwatch
      className={classes.swatch}
      component="button"
      type="button"
      color={color}
      key={index}
      radius="sm"
      onClick={() => {
        setValue(color);
        onChangeEnd?.(color);
      }}
      style={{ cursor: 'pointer', ...styls.swatch }}
      aria-label={color}
      tabIndex={focusable ? 0 : -1}
    />
  ));

  return (
    <div className={classes.swatches} style={{ ...styls.swatches, ...others.style }} {...others}>
      {colors}
    </div>
  );
}

Swatches.displayName = 'Swatches';
