import { createStyles, FlowindColor } from '@/styles';

export interface MarkStylesParams {
  color: FlowindColor;
}

export default createStyles((theme, { color }: MarkStylesParams) => ({
  // root: {
  //   backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 2),
  //   color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
  // },
  classes: {
    root: theme.fn.variantColors({ color, variant: 'light' }).background,
  },
  styles: {
    root: {},
  },
}));
