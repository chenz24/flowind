import { createStyles } from '@/styles';

const fontSizes = {
  xs: 'text-xs leading-[14px]',
  sm: 'text-sm leading-4',
  md: 'text-base leading-5',
  lg: 'text-lg leading-6',
  xl: 'text-xl leading-7',
};

export interface InlineInputStylesParams {
  labelPosition: 'left' | 'right';
}

export default createStyles((theme, { labelPosition }: InlineInputStylesParams, { size }) => {
  const padding = labelPosition === 'left' ? 'pr-2' : 'pl-2';
  return {
    classes: {
      root: '',
      body: 'flex',
      labelWrapper: `inline-flex flex-col ${labelPosition === 'left' ? 'order-1' : 'order-2'} ${
        fontSizes[size]
      }`,
      description: `${padding}`,
      error: `${padding}`,
      label: `${padding} text-slate-900 dark:text-slate-300 data-[disabled=true]:opacity-60`,
    },
  };
});
