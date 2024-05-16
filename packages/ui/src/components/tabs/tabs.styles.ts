import { createStyles } from '@/styles';
import { TabsStylesParams } from './tabs.types';

export default createStyles((_theme, { orientation, placement }: TabsStylesParams) => ({
  classes: {
    root: `${orientation === 'vertical' ? 'flex' : undefined} ${placement === 'right' ? 'flex-row-reverse' : 'flex-row'}`,
  },
  styles: {
    root: {},
  },
}));
