import { createStyles } from '@/styles';

const sizes = {
  xs: 'w-6',
  sm: 'w-8',
  md: 'w-9',
  lg: 'w-10',
  xl: 'w-11',
};

export default createStyles((_theme, _params, { size }) => ({
  classes: {
    root: '',
    input: `p-0 text-center selection:bg-transparent ${sizes[size]}`,
  },
}));
