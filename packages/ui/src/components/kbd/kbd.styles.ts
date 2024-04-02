import { createStyles } from '@/styles';

const sizes = {
  xs: 'px-1 py-0.5 text-[0.625rem]',
  sm: 'px-[0.3125rem] py-[0.1875rem] text-xs',
  md: 'px-[0.4375rem] py-1 text-sm',
  lg: 'px-[0.5625rem] py-[0.3125rem] text-base',
  xl: 'px-3.5 py-2 text-xl',
};

export default createStyles((theme, _params, { size }) => {
  const _size = size in sizes ? sizes[size] : sizes.sm;
  return {
    classes: {
      root: `font-code ${_size} font-medium rounded bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-slate-400
      border border-solid border-b-2 border-gray-200 dark:border-zinc-700 w-fit`,
    },
    styles: {
      root: {},
    },
  };
});
