import { ClassNames, FlowindSize, Styles } from '@/styles';
import { createSafeContext } from '@/utils/create-safe-context/create-safe-context';
import type { AccordionStylesNames } from './accordion';
import { ACCORDION_ERRORS } from './accordion.errors';
import { AccordionChevronPosition, AccordionHeadingOrder, AccordionVariant } from './types';

interface AccordionContext {
  loop: boolean;
  transitionDuration: number;
  disableChevronRotation: boolean;
  chevronPosition: AccordionChevronPosition;
  chevronSize: number | string;
  order: AccordionHeadingOrder;
  chevron: React.ReactNode;
  variant: AccordionVariant;
  radius: FlowindSize;
  onChange: (value: string) => void;
  isItemActive: (value: string) => boolean;
  getControlId: (value: string) => string;
  getRegionId: (value: string) => string;
  classNames: ClassNames<AccordionStylesNames>;
  styles: Styles<AccordionStylesNames>;
  unstyled: boolean;
}

export const [AccordionContextProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  ACCORDION_ERRORS.context,
);
