import { FlowindColor, FlowindSize, Variants } from '@/styles';

export type TabsValue = string | null;
export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsVariant = Variants<'default' | 'outline' | 'pills'>;
export type TabsPosition = 'left' | 'center' | 'right' | 'apart';
export type TabsPlacement = 'right' | 'left';

export interface TabsStylesParams {
  placement: TabsPlacement;
  orientation: TabsOrientation;
  color?: FlowindColor;
  radius?: FlowindSize;
  inverted: boolean;
}
