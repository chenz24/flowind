import { createStyles } from '@/styles';

const paddings = {
  xs: 'py-1 px-1.5 txt-compact-xs',
  sm: 'py-1.5 px-2 txt-compact-sm',
  md: 'py-1.5 px-2.5 txt-compact-md',
  lg: 'py-1.5 px-3 txt-compact-lg',
  xl: 'py-2 px-3 txt-compact-xl',
};

export default createStyles((theme, _params, { size }) => ({
  classes: {
    item: `box-border text-left w-full cursor-pointer bg-bg-base text-fg-base hover:bg-bg-base-hover 
    rounded ${paddings[size]} data-[selected=true]:bg-slate-100
    dark:data-[selected=true]:bg-zinc-700 aria-[selected=true]:bg-bg-base-hover`,
    nothingFound: 'box-border text-center w-full py-0.5 text-fg-base',
    separator: 'box-border text-left w-full py-2',
    separatorLabel: 'txt-compact-xs-plus text-fg-subtle',
  },
  styles: {
    item: {},
    nothingFound: {},
    separator: {},
    separatorLabel: {},
  },
}));
