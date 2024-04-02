import { createStyles, FlowindColor } from '@/styles';

export interface StarSymbolStylesParams {
  type: 'empty' | 'full';
  color: FlowindColor;
}

const sizes = {
  xs: 'size-3.5',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-7',
  xl: 'size-8',
};

export default createStyles((theme, { type }: StarSymbolStylesParams, { size }) => {
  const strokeColor =
    type === 'empty' ? 'stroke-zinc-200 dark:stroke-zinc-600' : 'stroke-yellow-500';
  const fillColor = type === 'empty' ? 'fill-zinc-200 dark:fill-zinc-600' : 'fill-yellow-500';

  return {
    classes: {
      icon: `${sizes[size]} stroke-slate-50 dark:stroke-zinc-800 ${strokeColor} ${fillColor}`,
    },
  };
});
