import { createStyles, rem } from '@/styles';

const sizes = {
  xs: rem(16),
  sm: rem(20),
  md: rem(24),
  lg: rem(30),
  xl: rem(36),
};

const fontSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export interface InlineInputStylesParams {
  labelPosition: 'left' | 'right';
}

export default createStyles((theme, { labelPosition }: InlineInputStylesParams, { size }) => {
  const padding = labelPosition === 'left' ? 'pr-3' : 'pl-3';
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
  // body: {
  //   display: 'flex',
  //
  //   '&:has(input:disabled) label': {
  //     color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  //   },
  // },
  //
  // labelWrapper: {
  //   ...theme.fn.fontStyles(),
  //   display: 'inline-flex',
  //   flexDirection: 'column',
  //   WebkitTapHighlightColor: 'transparent',
  //   fontSize: size in sizes ? getSize({ size, sizes: theme.fontSizes }) : undefined,
  //   lineHeight: size in sizes ? getSize({ size, sizes }) : undefined,
  //   color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  //   cursor: theme.cursorType,
  //   order: labelPosition === 'left' ? 1 : 2,
  // },
  //
  // description: {
  //   marginTop: `calc(${theme.spacing.xs} / 2)`,
  //   [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,
  // },
  //
  // error: {
  //   marginTop: `calc(${theme.spacing.xs} / 2)`,
  //   [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,
  // },
  //
  // label: {
  //   cursor: theme.cursorType,
  //   [labelPosition === 'left' ? 'paddingRight' : 'paddingLeft']: theme.spacing.sm,
  //
  //   '&:disabled, &[data-disabled]': {
  //     color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  //   },
  // },
});
