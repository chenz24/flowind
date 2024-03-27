const lightClasses: object = {
  slate: {
    background: 'bg-slate-50 dark:bg-slate-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-slate-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-slate-900/60',
    color: 'text-slate-900 dark:text-slate-400',
    border: 'border-slate-500/30 dark:border-slate-400/30',
  },
  gray: {
    background: 'bg-gray-50 dark:bg-gray-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-gray-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-gray-900/60',
    color: 'text-gray-900 dark:text-gray-400',
    border: 'border-gray-500/30 dark:border-gray-400/30',
  },
  zinc: {
    background: 'bg-zinc-50 dark:bg-zinc-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-zinc-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-zinc-900/60',
    color: 'text-zinc-900 dark:text-zinc-400',
    border: 'border-zinc-500/30 dark:border-zinc-400/30',
  },
  neutral: {
    background: 'bg-neutral-50 dark:bg-neutral-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-neutral-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-neutral-900/60',
    color: 'text-neutral-900 dark:text-neutral-400',
    border: 'border-neutral-500/30 dark:border-neutral-400/30',
  },
  stone: {
    background: 'bg-stone-50 dark:bg-stone-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-stone-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-stone-900/60',
    color: 'text-stone-900 dark:text-stone-400',
    border: 'border-stone-500/30 dark:border-stone-400/30',
  },
  red: {
    background: 'bg-red-50 dark:bg-red-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-red-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-red-900/60',
    color: 'text-red-900 dark:text-red-400',
    border: 'border-red-500/30 dark:border-red-400/30',
  },
  orange: {
    background: 'bg-orange-50 dark:bg-orange-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-orange-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-orange-900/60',
    color: 'text-orange-900 dark:text-orange-400',
    border: 'border-orange-500/30 dark:border-orange-400/30',
  },
  amber: {
    background: 'bg-amber-50 dark:bg-amber-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-amber-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-amber-900/60',
    color: 'text-amber-900 dark:text-amber-400',
    border: 'border-amber-500/30 dark:border-amber-400/30',
  },
  yellow: {
    background: 'bg-yellow-50 dark:bg-yellow-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-yellow-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-yellow-900/60',
    color: 'text-yellow-900 dark:text-yellow-400',
    border: 'border-yellow-500/30 dark:border-yellow-400/30',
  },
  lime: {
    background: 'bg-lime-50 dark:bg-lime-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-lime-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-lime-900/60',
    color: 'text-lime-900 dark:text-lime-400',
    border: 'border-lime-500/30 dark:border-lime-400/30',
  },
  green: {
    background: 'bg-green-50 dark:bg-green-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-green-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-green-900/60',
    color: 'text-green-900 dark:text-green-400',
    border: 'border-green-500/30 dark:border-green-400/30',
  },
  emerald: {
    background: 'bg-emerald-50 dark:bg-emerald-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-emerald-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-emerald-900/60',
    color: 'text-emerald-900 dark:text-emerald-400',
    border: 'border-emerald-500/30 dark:border-emerald-400/30',
  },
  teal: {
    background: 'bg-teal-50 dark:bg-teal-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-teal-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-teal-900/60',
    color: 'text-teal-900 dark:text-teal-400',
    border: 'border-teal-500/30 dark:border-teal-400/30',
  },
  cyan: {
    background: 'bg-cyan-50 dark:bg-cyan-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-cyan-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-cyan-900/60',
    color: 'text-cyan-900 dark:text-cyan-400',
    border: 'border-cyan-500/30 dark:border-cyan-400/30',
  },
  sky: {
    background: 'bg-sky-50 dark:bg-sky-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-sky-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-sky-900/60',
    color: 'text-sky-900 dark:text-sky-400',
    border: 'border-sky-500/30 dark:border-sky-400/30',
  },
  blue: {
    background: 'bg-blue-50 dark:bg-blue-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-blue-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-blue-900/60',
    color: 'text-blue-900 dark:text-blue-400',
    border: 'border-blue-500/30 dark:blue-400/30',
  },
  indigo: {
    background: 'bg-indigo-50 dark:bg-indigo-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-indigo-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-indigo-900/60',
    color: 'text-indigo-900 dark:text-indigo-400',
    border: 'border-indigo-500/30 dark:border-indigo-400/30',
  },
  violet: {
    background: 'bg-violet-50 dark:bg-violet-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-violet-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-violet-900/60',
    color: 'text-violet-900 dark:text-violet-400',
    border: 'border-violet-500/30 dark:border-violet-400/30',
  },
  purple: {
    background: 'bg-purple-50 dark:bg-purple-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-purple-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-purple-900/60',
    color: 'text-purple-900 dark:text-purple-400',
    border: 'border-purple-500/30 dark:border-purple-400/30',
  },
  fuchsia: {
    background: 'bg-fuchsia-50 dark:bg-fuchsia-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-fuchsia-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-fuchsia-900/60',
    color: 'text-fuchsia-900 dark:text-fuchsia-400',
    border: 'border-fuchsia-500/30 dark:border-fuchsia-400/30',
  },
  pink: {
    background: 'bg-pink-50 dark:bg-pink-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-pink-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-pink-900/60',
    color: 'text-pink-900 dark:text-pink-400',
    border: 'border-pink-500/30 dark:border-pink-400/30',
  },
  rose: {
    background: 'bg-rose-50 dark:bg-rose-400/10',
    hoverBackground:
      '[&:not(:disabled,[data-loading=true])]:hover:bg-rose-100 dark:[&:not(:disabled,[data-loading=true])]:hover:bg-rose-900/60',
    color: 'text-rose-900 dark:text-rose-400',
    border: 'border-rose-500/30 dark:border-rose-400/30',
  },
};

export default lightClasses;
