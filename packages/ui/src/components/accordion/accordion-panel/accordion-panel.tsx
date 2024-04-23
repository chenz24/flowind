'use client';

import React from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { Collapse } from '../../collapse';
import { useAccordionItemContext } from '../accordion-item.context';
import { useAccordionContext } from '../accordion.context';
import useStyles from './accordion-panel.styles';

export type AccordionPanelStylesNames = Selectors<typeof useStyles>;

export interface AccordionPanelProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onTransitionEnd'> {
  /** Panel content */
  children?: React.ReactNode;
}

const defaultProps: Partial<AccordionPanelProps> = {};

export function AccordionPanel(props: AccordionPanelProps) {
  const { children, className, ...others } = useComponentDefaultProps(
    'AccordionPanel',
    defaultProps,
    props,
  );

  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();
  const { classNames, styles, unstyled } = useAccordionContext();
  const { classes, cx } = useStyles(
    { radius: ctx.radius },
    { name: 'Accordion', classNames, styles, unstyled, variant: ctx.variant },
  );

  return (
    <Collapse
      {...others}
      className={cx(classes.panel, className)}
      in={ctx.isItemActive(value)}
      transitionDuration={ctx.transitionDuration}
      role="region"
      id={ctx.getRegionId(value)}
      aria-labelledby={ctx.getControlId(value)}
    >
      <div className={classes.content}>{children}</div>
    </Collapse>
  );
}

AccordionPanel.displayName = '@mantine/core/AccordionPanel';
