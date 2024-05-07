import { createStyles } from '@/styles';

const sizes = {
  xs: 'txt-compact-xs-plus',
  sm: 'txt-compact-sm-plus',
  md: 'txt-compact-md-plus',
  lg: 'txt-compact-lg-plus',
  xl: 'txt-compact-xl-plus',
};

export default createStyles((theme, _params, { size }) => {
  const _size = size in sizes ? sizes[size] : sizes.xs;
  return {
    classes: {
      root: `${_size} bg-tag-neutral-bg text-tag-neutral-text border-tag-neutral-border inline-flex 
      h-5 w-fit min-w-[20px] items-center justify-center rounded-md border px-1`,
    },
    styles: {
      root: {},
    },
  };
});
