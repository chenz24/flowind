import { createStyles, FlowindSize } from '@/styles';

interface DefaultLabelStyles {
  radius: FlowindSize;
  disabled: boolean;
  readOnly: boolean;
}

export const sizes = {
  xs: 'h-4',
  sm: 'h-[22px]',
  md: 'h-[26px]',
  lg: 'h-[30px]',
  xl: 'h-9',
};

const fontSizes = {
  xs: 'text-[10px]',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg',
};

const removeSizes = {
  xs: 'px-0.5',
  sm: 'px-1',
  md: 'px-1.5',
  lg: 'px-2',
  xl: 'px-2.5',
};

export default createStyles(
  (theme, { disabled, radius, readOnly }: DefaultLabelStyles, { size, variant }) => ({
    classes: {
      defaultValue: `flex items-center user-select-none bg-gray-100 dark:bg-zinc-800 text-gray-600 
      dark:text-gray-400 ${removeSizes[size]} ${sizes[size]} ${fontSizes[size]} ${theme.radius[radius]} 
      ${disabled ? 'cursor-not-allowed' : 'cursor-default'} ${disabled || readOnly ? '' : 'pr-0'}`,
      defaultValueRemove: 'text-zinc-600 dark:text-stone-300 ml-1',
      defaultValueLabel: 'block overflow-hidden text-ellipsis whitespace-nowrap',
    },
  }),
);
