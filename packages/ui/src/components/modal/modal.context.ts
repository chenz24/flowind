import { FlowindSize } from '@/styles';
import { createSafeContext } from '@/utils/create-safe-context/create-safe-context';

export type ScrollAreaComponent = React.FC<any>;

interface ModalContext {
  yOffset: string | number;
  radius: FlowindSize;
  scrollAreaComponent: ScrollAreaComponent;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  'Modal component was not found in tree',
);
