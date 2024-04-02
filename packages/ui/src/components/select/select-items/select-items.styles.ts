import { createStyles } from '@/styles';

const paddings = {
  xs: 'py-1 px-1.5 text-xs',
  sm: 'py-1.5 px-2 text-sm',
  md: 'py-1.5 px-2.5 text-base',
  lg: 'py-1.5 px-3 text-lg',
  xl: 'py-2 px-3 text-xl',
};

export default createStyles((theme, _params, { size }) => ({
  classes: {
    item: `box-border text-left w-full cursor-pointer text-slate-900 dark:text-slate-200 hover:bg-slate-100
    dark:hover:bg-zinc-700 rounded ${paddings[size]} data-[selected=true]:bg-slate-100
    dark:data-[selected=true]:bg-zinc-700 aria-[selected=true]:bg-slate-100 dark:aria-[selected=true]:bg-zinc-700`,
    nothingFound: 'box-border text-center w-full py-0.5 text-slate-700 dark:text-slate-400',
    separator: 'box-border text-left w-full py-2',
    separatorLabel: 'text-slate-500 dark:text-slate-400',
  },
  styles: {
    item: {},
    nothingFound: {},
    separator: {},
    separatorLabel: {},
  },
}));
