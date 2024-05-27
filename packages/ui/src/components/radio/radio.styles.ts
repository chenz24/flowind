import { createStyles } from '@/styles';

export interface RadioStylesParams {
  labelPosition: 'left' | 'right';
  error: boolean;
}

const sizes = {
  xs: 'size-3.5',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7',
};

const iconSizes = {
  xs: 'size-1',
  sm: 'size-1.5',
  md: 'size-2',
  lg: 'size-2.5',
  xl: 'size-3',
};

export default createStyles((theme, { labelPosition }: RadioStylesParams, { size }) => {
  const _size = sizes[size] || sizes.sm;
  const iconSize = iconSizes[size] || iconSizes.sm;

  return {
    classes: {
      inner: `relative self-start ${labelPosition === 'left' ? 'order-2' : 'order-1'}`,
      icon: `${iconSize} absolute text-white opacity-0 pointer-events-none translate-y-0.5 scale-75 transition-opacity
        top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 peer-checked:scale-100`,
      radio: `${_size} peer relative appearance-none flex justify-center items-center margin-0 border border-solid
          cursor-pointer transition border-neutral-300 dark:border-gray-600 rounded-full bg-slate-50 dark:bg-zinc-800
          checked:bg-blue-500 checked:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60 
          focus-visible:shadow-borders-interactive-with-focus outline-none`,
    },
    styles: {
      inner: {},
      icon: {},
      radio: {},
    },
  };
});
