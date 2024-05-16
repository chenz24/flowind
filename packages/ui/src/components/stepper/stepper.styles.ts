import { createStyles, FlowindNumberSize } from '@/styles';

export interface StepperStylesParams {
  contentPadding: FlowindNumberSize;
  iconSize?: number;
  orientation: 'vertical' | 'horizontal';
  iconPosition: 'right' | 'left';
  breakpoint: FlowindNumberSize;
}

export default createStyles((theme, { orientation }: StepperStylesParams) => {
  console.log('asdf');
  return {
    classes: {
      root: '',
      steps: `flex w-full flex-wrap justify-between ${orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col'}`,
      separator: 'transition-all flex-1 h-0.5 mx-2 bg-border-base',
      separatorActive: '!bg-bg-interactive',
      content: 'pt-3',
    },
    styles: {
      root: {},
      steps: {},
      content: {},
    },
  };
});
