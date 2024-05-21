import { createStyles } from '@/styles';

export interface MediaObjectStylesParams {}

export default createStyles(() => {
  console.log('styles');
  return {
    classes: {
      root: 'flex flex-row justify-center items-center gap-x-2.5',
      image: '',
      main: '',
      title: 'font-medium text-sm text-fg-base',
      description: 'txt-xs text-fg-subtle',
    },
    styles: {
      root: {},
      image: {},
      main: {},
      title: {},
      description: {},
    },
  };
});
