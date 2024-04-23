import { createStyles } from '@/styles';
import { AccordionStylesParams } from '../types';

const getVariantClasses = (variant) => {
  if (variant === 'contained') {
    return 'border-b px-4 border-base';
  }
  if (variant === 'separated') {
    return 'rounded px-4 border border-base';
  }

  return 'border-b border-base';
};
export default createStyles((theme, params: AccordionStylesParams, { variant }) => ({
  classes: {
    item: `${getVariantClasses(variant)} ${variant !== 'default' ? 'data-[active=true]:bg-bg-component' : ''}`,
  },
  styles: {
    item: {},
  },
}));
