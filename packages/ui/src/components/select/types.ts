import type {
  InputSharedProps,
  InputStylesNames,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../input';
import type { SelectItemsStylesNames } from './select-items/select-items';
import type { SelectPopoverStylesNames } from './select-popover/select-popover';

export interface SelectItem {
  value: string;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  group?: string;
  [key: string]: any;
}

export type BaseSelectStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | SelectItemsStylesNames
  | SelectPopoverStylesNames;

export type BaseSelectProps = InputWrapperBaseProps &
  InputSharedProps &
  Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'size' | 'defaultValue'>;
