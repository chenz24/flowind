import { createStyles, FlowindSize } from '@/styles';

interface ModalBaseHeaderStylesParams {
  padding: FlowindSize;
}

export default createStyles((theme, { padding }: ModalBaseHeaderStylesParams) => ({
  classes: {
    header:
      'flex justify-between items-center min-h-12 bg-bg-base sticky top-0 z-[1000] py-2 px-4 border-border-base gap-x-4 border-b',
  },
  styles: {
    header: {},
  },
}));
