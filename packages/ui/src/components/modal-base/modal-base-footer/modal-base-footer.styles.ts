import { createStyles, FlowindSize } from '@/styles';

interface ModalBaseHeaderStylesParams {
  padding: FlowindSize;
}

export default createStyles((theme, { padding }: ModalBaseHeaderStylesParams) => ({
  classes: {
    footer:
      'flex justify-between items-center min-h-12 bg-bg-base sticky bottom-0 z-[1000] py-3 px-4 border-border-base gap-x-4 border-t',
  },
  styles: {
    footer: {},
  },
}));
