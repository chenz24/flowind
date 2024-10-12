import { createStyles } from '@/styles';

export default createStyles(() => ({
  classes: {
    inner: 'pointer-events-none select-none',
    root: `relative bg-bg-component hover:bg-bg-component-hover border border-dashed border-border-strong p-8 rounded-lg 
    cursor-pointer select-none transition data-[accept=true]:bg-tag-green-bg data-[reject=true]:bg-tag-red-bg`,
  },
  styles: {},
}));
