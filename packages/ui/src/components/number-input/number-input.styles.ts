import { createStyles, FlowindSize } from '@/styles';

export interface NumberInputStylesParams {
  radius: FlowindSize;
}

export const CONTROL_SIZES = {
  xs: 'w-4',
  sm: 'w-5',
  md: 'w-6',
  lg: 'w-[30px]',
  xl: 'w-8',
};

export default createStyles((theme, { radius }: NumberInputStylesParams, { size }) => {
  console.log('asdf');
  return {
    classes: {
      rightSection: 'flex flex-col overflow-hidden',
      control: `relative m-0 p-0 flex items-center justify-center box-border border-b border-l border-t-0 border-r-0 
      bg-transparent ${CONTROL_SIZES[size]} text-gray-800 dark:text-gray-100
      [&:not(:disabled)]:hover:bg-gray-100 [&:not(:disabled)]:dark:hover:bg-gray-700`,
      controlUp: '',
      controlDown: 'border-b-0',
      addonAfter: 'px-0',
    },
    styles: {},
  };
});
