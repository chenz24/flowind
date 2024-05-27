import { createStyles, FlowindNumberSize, FlowindSize, getSize } from '@/styles';

export interface ContainerStylesParams {
  radius: FlowindSize;
  shadow: FlowindSize;
  padding: 'none' | FlowindNumberSize;
}

const spacings = {
  xs: '0.625rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
};

export default createStyles((theme, { radius, shadow, padding }: ContainerStylesParams) => {
  const paddingValue =
    padding === 'none' ? {} : { padding: getSize({ size: padding, sizes: spacings }) };
  return {
    classes: {
      root: `outline-0 block no-underline box-border bg-white dark:bg-zinc-800
    ${theme.radius[radius]} ${theme.shadows[shadow] || ''} 
    data-[with-border=true]:border data-[with-border=true]:border-solid
    data-[with-border=true]:border-zinc-200 dark:data-[with-border=true]:border-gray-700
    `,
    },
    styles: {
      root: {
        ...paddingValue,
      },
    },
  };
});
