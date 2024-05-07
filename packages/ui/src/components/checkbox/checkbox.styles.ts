import { createStyles, FlowindSize } from '@/styles';

const sizes = {
  xs: 'size-3.5',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-7',
};

export interface CheckboxStylesParams {
  radius: FlowindSize;
  labelPosition: 'left' | 'right';
  error: boolean;
  indeterminate: boolean;
}

export default createStyles(
  (theme, { radius, labelPosition, indeterminate }: CheckboxStylesParams, { size }) => {
    const _size = sizes[size] || sizes.sm;

    return {
      classes: {
        icon: `absolute z-[1] m-auto pointer-events-none w-3/5 transition inset-0 peer-disabled:opacity-80 ${
          indeterminate
            ? 'opacity-100 text-inherit'
            : 'opacity-0 text-white translate-y-1/3 scale-50'
        } peer-checked:opacity-100 peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:text-white`,
        inner: `relative ${labelPosition === 'left' ? 'order-2' : 'order-1'} ${_size}`,
        input: `peer block appearance-none p-0 m-0 border border-solid border-neutral-300 dark:border-gray-600
        bg-slate-50 dark:bg-zinc-800 shadow-sm focus-visible:shadow-borders-interactive-with-focus outline-none 
        ${_size} ${theme.radius[radius]} checked:bg-blue-500 checked:border-blue-500 disabled:cursor-not-allowed
        disabled:opacity-60`,
      },
      styles: {
        icon: {},
        inner: {},
        input: {},
      },
    };
  },
);
