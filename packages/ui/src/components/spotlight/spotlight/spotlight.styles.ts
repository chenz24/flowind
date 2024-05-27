import { createStyles } from '@/styles';

export default createStyles(() => ({
  classes: {
    content: 'relative overflow-hidden',
    searchInput: 'outline-0 outline-transparent',
    inputWrapper: 'shadow-none focus-within:shadow-none bg-bg-base hover:bg-bg-base',
    inputRoot: 'pt-1.5 pb-2 border-b border-border-base',
    footer: 'min-h-px py-1.5 px-3',
  },
}));
