import { createStyles } from '@/styles';
import { TabsStylesParams } from '../tabs.types';

export default createStyles((theme, { orientation }: TabsStylesParams) => ({
  classes: {
    panel: `${orientation === 'vertical' ? 'flex-1' : undefined}`,
  },
  styles: {
    panel: {},
  },
}));
