import { ClassNames, FlowindColor, FlowindSize, Styles } from '@/styles';
import { createSafeContext } from '@/utils/create-safe-context/create-safe-context';
import type { TabsStylesNames } from './tabs';
import { TABS_ERRORS } from './tabs.errors';
import {
  TabsOrientation,
  TabsPlacement,
  TabsStylesParams,
  TabsValue,
  TabsVariant,
} from './tabs.types';

interface TabsContext {
  id: string;
  value: TabsValue;
  orientation: TabsOrientation;
  loop: boolean;
  activateTabWithKeyboard: boolean;
  allowTabDeactivation: boolean;
  onTabChange: (value: TabsValue) => void;
  getTabId: (value: string) => string;
  getPanelId: (value: string) => string;
  setMountedPanelIds: (values: string[] | ((oldValue: string[]) => string[])) => void;
  mountedPanelIds: string[];
  variant: TabsVariant;
  color: FlowindColor;
  radius: FlowindSize;
  inverted: boolean;
  keepMounted: boolean;
  placement: TabsPlacement;
  classNames: ClassNames<TabsStylesNames>;
  styles: Styles<TabsStylesNames, TabsStylesParams>;
  unstyled: boolean;
}

export const [TabsContextProvider, useTabsContext] = createSafeContext<TabsContext>(
  TABS_ERRORS.context,
);
