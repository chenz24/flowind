import { createStyles, cva, FlowindColor, FlowindSize, FlowindTheme, rem } from '@/styles';

interface TimelineItemStyles {
  bulletSize: number;
  color: FlowindColor;
  radius: FlowindSize;
  align: 'right' | 'left';
  lineVariant: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
  active: boolean;
  lineActive: boolean;
  withChild: boolean;
}

const itemBullet = (color: FlowindColor, theme: FlowindTheme) => {
  const { background } = theme.fn.variantColors({ color, variant: 'filled' });
  const borderColor = theme.fn.variantColors({ color, variant: 'outline' }).border;
  return cva({
    base: 'absolute top-0 flex justify-center items-center text-fg-on-color border-border-base border-solid bg-bg-base',
    variants: {
      active: {
        true: `bg-bg-base ${borderColor}`,
        false: '',
      },
      withChild: {
        true: 'border text-fg-base bg-bg-subtle-pressed',
        false: '',
      },
    },
    compoundVariants: [
      {
        active: true,
        withChild: true,
        className: `text-fg-on-color ${background}`,
      },
    ],
  });
};

export default createStyles(
  (
    theme,
    {
      bulletSize,
      color,
      radius,
      align,
      lineVariant,
      lineWidth,
      active,
      withChild,
      lineActive,
    }: TimelineItemStyles,
  ) => {
    const _bulletSize = rem(bulletSize);
    const _lineWidth = rem(lineWidth);
    const itemBulletClasses = itemBullet(color, theme);
    const textAlign = align === 'left' ? 'text-left' : 'text-right';
    const borderColor = theme.fn.variantColors({ color, variant: 'outline' }).border;

    return {
      classes: {
        itemBody: '',
        itemContent: '',
        itemBullet: `absolute top-0 flex justify-center items-center text-fg-on-color ${theme.radius[radius]} border-border-base
        border-solid bg-bg-base ${itemBulletClasses({ active, withChild })}`,
        item: `relative text-fg-base [&:not(:first-of-type)]:mt-5 ${textAlign} ${align === 'left' ? 'pl-6' : 'pr-6'}`,
        itemLine: `absolute block top-0 -bottom-6 ${lineActive ? borderColor : 'border-border-base'} border-0`,
        itemTitle: `font-medium leading-none ${textAlign} mb-1`,
      },
      styles: {
        itemBullet: {
          width: _bulletSize,
          height: _bulletSize,
          left: align === 'left' ? `calc(-${_bulletSize} / 2 - ${_lineWidth} / 2)` : 'auto',
          right: align === 'right' ? `calc(-${_bulletSize} / 2 - ${_lineWidth} / 2)` : 'auto',
          borderWidth: _lineWidth,
        },
        item: {},
        itemLine: {
          left: align === 'left' ? `calc(${_lineWidth} * -1)` : 'auto',
          right: align === 'right' ? `calc(${_lineWidth} * -1)` : 'auto',
          borderLeftWidth: _lineWidth,
          borderLeftStyle: lineVariant,
        },
      },
    };
  },
);
