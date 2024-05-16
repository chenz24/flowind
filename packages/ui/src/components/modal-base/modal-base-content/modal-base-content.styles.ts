import { createStyles } from '@/styles';

interface ModalBaseContentStylesParams {
  zIndex: number;
}

export default createStyles((theme, { zIndex }: ModalBaseContentStylesParams) => ({
  classes: {
    content: 'pointer-events-auto p-0 bg-bg-base shadow-elevation-modal border rounded-md',
    inner: 'fixed inset-y-0 left-0 pointer-events-none w-full max-h-full',
  },
  styles: {
    inner: {
      zIndex,
    },
    content: {},
  },
}));
