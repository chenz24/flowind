import { Selectors } from '@/styles';
import useStyles from './popover-dropdown/popover-dropdown.styles';

export type { PopoverStylesParams } from './popover-dropdown/popover-dropdown.styles';

export type PopoverStylesNames = Selectors<typeof useStyles>;

export type PopoverWidth = 'target' | React.CSSProperties['width'] | null;

export interface PopoverMiddlewares {
  shift: boolean;
  flip: boolean;
  inline?: boolean;
  size?: boolean;
}
