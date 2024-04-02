import { createStyles } from '@/styles';

export default createStyles(() => ({
  classes: {
    input: '[&:not(:disabled)]:cursor-pointer [&:not(:disabled)]:selection:bg-transparent',
  },
}));
