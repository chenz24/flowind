const lightClasses: object = {
  slate: {
    background: 'bg-slate-100/80 dark:bg-slate-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-slate-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-slate-900/60',
    color: 'text-slate-500 dark:text-slate-200',
  },
  gray: {
    background: 'bg-gray-100/80 dark:bg-gray-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-gray-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-gray-900/60',
    color: 'text-gray-500 dark:text-gray-200',
  },
  zinc: {
    background: 'bg-zinc-100/80 dark:bg-zinc-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-zinc-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-zinc-900/60',
    color: 'text-zinc-500 dark:text-zinc-200',
  },
  neutral: {
    background: 'bg-neutral-100/80 dark:bg-neutral-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-neutral-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-neutral-900/60',
    color: 'text-neutral-500 dark:text-neutral-200',
  },
  stone: {
    background: 'bg-stone-100/80 dark:bg-stone-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-stone-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-stone-900/60',
    color: 'text-stone-500 dark:text-stone-200',
  },
  red: {
    background: 'bg-red-100/80 dark:bg-red-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-red-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-red-900/60',
    color: 'text-red-500 dark:text-red-200',
  },
  orange: {
    background: 'bg-orange-100/80 dark:bg-orange-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-orange-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-orange-900/60',
    color: 'text-orange-500 dark:text-orange-200',
  },
  amber: {
    background: 'bg-amber-100/80 dark:bg-amber-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-amber-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-amber-900/60',
    color: 'text-amber-500 dark:text-amber-200',
  },
  yellow: {
    background: 'bg-yellow-100/80 dark:bg-yellow-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-yellow-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-yellow-900/60',
    color: 'text-yellow-600 dark:text-yellow-500',
  },
  lime: {
    background: 'bg-lime-100/80 dark:bg-lime-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-lime-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-lime-900/60',
    color: 'text-lime-500 dark:text-lime-200',
  },
  green: {
    background: 'bg-green-100/80 dark:bg-green-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-green-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-green-900/60',
    color: 'text-green-500 dark:text-green-200',
  },
  emerald: {
    background: 'bg-emerald-100/80 dark:bg-emerald-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-emerald-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-emerald-900/60',
    color: 'text-emerald-500 dark:text-emerald-200',
  },
  teal: {
    background: 'bg-teal-100/80 dark:bg-teal-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-teal-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-teal-900/60',
    color: 'text-teal-500 dark:text-teal-200',
  },
  cyan: {
    background: 'bg-cyan-100/80 dark:bg-cyan-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-cyan-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-cyan-900/60',
    color: 'text-cyan-500 dark:text-cyan-200',
  },
  sky: {
    background: 'bg-sky-100/80 dark:bg-sky-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-sky-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-sky-900/60',
    color: 'text-sky-500 dark:text-sky-200',
  },
  blue: {
    background: 'bg-blue-100/80 dark:bg-blue-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-blue-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-blue-900/60',
    color: 'text-blue-500 dark:text-blue-200',
  },
  indigo: {
    background: 'bg-indigo-100/80 dark:bg-indigo-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-indigo-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-indigo-900/60',
    color: 'text-indigo-500 dark:text-indigo-200',
  },
  violet: {
    background: 'bg-violet-100/80 dark:bg-violet-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-violet-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-violet-900/60',
    color: 'text-violet-500 dark:text-violet-200',
  },
  purple: {
    background: 'bg-purple-100/80 dark:bg-purple-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-purple-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-purple-900/60',
    color: 'text-purple-500 dark:text-purple-200',
  },
  fuchsia: {
    background: 'bg-fuchsia-100/80 dark:bg-fuchsia-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-fuchsia-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-fuchsia-900/60',
    color: 'text-fuchsia-500 dark:text-fuchsia-200',
  },
  pink: {
    background: 'bg-pink-100/80 dark:bg-pink-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-pink-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-pink-900/60',
    color: 'text-pink-500 dark:text-pink-200',
  },
  rose: {
    background: 'bg-rose-100/80 dark:bg-rose-950',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-rose-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-rose-900/60',
    color: 'text-rose-500 dark:text-rose-200',
  },
};

export default lightClasses;
