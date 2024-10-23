import { ClassNames, FlowindSize, Styles } from '@/styles';
import { createSafeContext } from '@/utils/create-safe-context/create-safe-context';
import { TransitionOverride } from '../transition';
import type { ModalBaseStylesNames } from './modal-base';

interface ModalBaseContext {
  __staticSelector: string;
  opened: boolean;
  onClose: () => void;
  closeOnClickOutside: boolean;
  transitionProps: TransitionOverride;
  zIndex: number;
  padding: FlowindSize;
  id: string;
  getTitleId: () => string;
  getBodyId: () => string;
  titleMounted: boolean;
  bodyMounted: boolean;
  setTitleMounted: (mounted: boolean) => void;
  setBodyMounted: (mounted: boolean) => void;
  trapFocus: boolean;
  closeOnEscape: boolean;
  shadow: FlowindSize;
  stylesApi: {
    name: string;
    size?: FlowindSize;
    variant: string;
    classNames: ClassNames<ModalBaseStylesNames>;
    styles: Styles<ModalBaseStylesNames>;
    unstyled: boolean;
  };
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContext>(
  'ModalBase component was not found in tree',
);
