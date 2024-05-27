import { createStyles } from '@/styles';

export interface MultiSelectStylesParams {
  invalid: boolean;
}

const inputSizes = {
  xs: 'min-h-[22px]',
  sm: 'min-h-[30px]',
  md: 'min-h-[34px]',
  lg: 'min-h-[38px]',
  xl: 'min-h-[42px]',
};

export default createStyles((theme, { invalid }: MultiSelectStylesParams, { size }) => ({
  classes: {
    wrapper: 'relative',
    values: `flex items-center flex-wrap ml-[-0.125rem] ${inputSizes[size]}`,
    value: 'mx-1 my-0.5',
    searchInput: `flex-1 min-w-14 bg-transparent border-0 outline-none text-sm p-0 ml-1 
    appearance-none disabled:cursor-not-allowed disabled:pointer-events-none`,
    searchInputEmpty: 'w-full',
    searchInputInputHidden: 'w-0 m-0 min-w-0 overflow-hidden flex-[0]',
    searchInputPointer: 'cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none',
    input: 'cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none',
  },
}));
