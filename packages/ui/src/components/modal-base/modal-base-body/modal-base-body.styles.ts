import { createStyles, FlowindSize } from '@/styles';

interface ModalBaseBodyStylesParams {
  padding: FlowindSize;
}

export const paddings = {
  xs: 'p-2.5',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
  xl: 'p-6',
};

export default createStyles((theme, { padding }: ModalBaseBodyStylesParams) => ({
  classes: {
    body: `[&:not(:only-child)]:!pt-0 ${paddings[padding]}`,
  },
  styles: {
    body: {},
  },
}));
