'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { Box } from '../../box';
import { AccordionItemContextProvider } from '../accordion-item.context';
import { useAccordionContext } from '../accordion.context';
import useStyles from './accordion-item.styles';

export type AccordionItemStylesNames = Selectors<typeof useStyles>;

export interface AccordionItemProps
  extends DefaultProps<AccordionItemStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Value that is used to manage accordion state */
  value: string;
}

const defaultProps: Partial<DefaultProps> = {};

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const { children, className, value, ...others } = useComponentDefaultProps(
    'AccordionItem',
    defaultProps,
    props,
  );

  const ctx = useAccordionContext();
  const { classes, cx } = useStyles(
    { radius: ctx.radius },
    {
      name: 'Accordion',
      classNames: ctx.classNames,
      styles: ctx.styles,
      unstyled: ctx.unstyled,
      variant: ctx.variant,
    },
  );

  return (
    <AccordionItemContextProvider value={{ value }}>
      <Box
        ref={ref}
        className={cx(classes.item, className)}
        data-active={ctx.isItemActive(value) || undefined}
        {...others}
      >
        {children}
      </Box>
    </AccordionItemContextProvider>
  );
});

AccordionItem.displayName = 'AccordionItem';
