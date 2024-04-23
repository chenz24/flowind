import { createStyles } from '@/styles';
import { AccordionChevronPosition, AccordionStylesParams } from '../types';

export interface AccordionControlStylesParams extends AccordionStylesParams {
  chevronPosition: AccordionChevronPosition;
}

export default createStyles(
  (theme, { chevronPosition }: AccordionControlStylesParams, { variant }) => ({
    classes: {
      control: `w-full text-fg-base flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline 
      ${chevronPosition === 'right' ? 'flex-row-reverse' : 'flex-row'} 
      disabled:opacity-45 disabled:cursor-not-allowed disabled:no-underline`,
      chevron: 'h-4 w-4 shrink-0 transition-transform duration-200 data-[rotate=true]:rotate-180',
      label: 'txt-compact-md',
      icon: 'flex items-center justify-center',
      itemTitle: 'flex',
    },
    styles: {
      item: {},
    },
  }),
);
