import { ClassNames, FlowindSize, Styles } from '@/styles';
import { createSafeContext } from '@/utils/create-safe-context/create-safe-context';
import { ArrowPosition, FloatingPosition } from '../floating';
import { PortalProps } from '../portal';
import { TransitionOverride } from '../transition';
import { POPOVER_ERRORS } from './popover.errors';
import { PopoverStylesNames, PopoverStylesParams, PopoverWidth } from './popover.types';

interface PopoverContext {
  x: number;
  y: number;
  arrowX: number | undefined;
  arrowY: number | undefined;
  arrowRef: React.RefObject<HTMLDivElement>;
  opened: boolean;
  transitionProps?: TransitionOverride;
  reference: (node: HTMLElement) => void;
  floating: (node: HTMLElement) => void;
  width?: PopoverWidth;
  withArrow: boolean | undefined;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  trapFocus: boolean | undefined;
  placement: FloatingPosition;
  withinPortal: boolean;
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;
  closeOnEscape: boolean;
  zIndex: React.CSSProperties['zIndex'];
  radius?: FlowindSize | undefined;
  shadow?: FlowindSize | undefined;
  onClose?: () => void;
  getDropdownId: () => string;
  getTargetId: () => string;
  controlled: boolean;
  onToggle: () => void;
  withRoles: boolean;
  targetProps: Record<string, any>;
  disabled: boolean;
  returnFocus: boolean;
  classNames: ClassNames<PopoverStylesNames>;
  styles: Styles<PopoverStylesNames, PopoverStylesParams>;
  unstyled: boolean;
  __staticSelector: string;
  variant: string;
  keepMounted: boolean;
}

export const [PopoverContextProvider, usePopoverContext] = createSafeContext<PopoverContext>(
  POPOVER_ERRORS.context,
);
