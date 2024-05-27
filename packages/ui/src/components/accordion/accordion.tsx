'use client';

import React from 'react';

import { ChevronDownMini } from '@flowind/icons';
import { clx, DefaultProps, useComponentDefaultProps } from '@/styles';
import { Box } from '../box';
import {
  AccordionControl,
  AccordionControlStylesNames,
} from './accordion-control/accordion-control';
import { AccordionItem, AccordionItemStylesNames } from './accordion-item/accordion-item';
import { AccordionPanel, AccordionPanelStylesNames } from './accordion-panel/accordion-panel';
import { AccordionProvider, AccordionProviderProps } from './accordion-provider';
import { AccordionStylesParams } from './types';

export type AccordionStylesNames =
  | AccordionItemStylesNames
  | AccordionPanelStylesNames
  | AccordionControlStylesNames;

export interface AccordionProps<Multiple extends boolean = false>
  extends AccordionProviderProps<Multiple>,
    DefaultProps<AccordionStylesNames, AccordionStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof AccordionProviderProps<Multiple>> {}

const defaultProps: Partial<AccordionProps> = {
  multiple: false,
  disableChevronRotation: false,
  transitionDuration: 200,
  chevronPosition: 'right',
  variant: 'default',
  chevronSize: 24,
  chevron: <ChevronDownMini />,
};

export function Accordion<Multiple extends boolean = false>(props: AccordionProps<Multiple>) {
  const {
    id,
    loop,
    children,
    multiple,
    value,
    defaultValue,
    onChange,
    transitionDuration,
    disableChevronRotation,
    chevronPosition,
    chevronSize,
    order,
    chevron,
    classNames,
    styles,
    unstyled,
    variant,
    radius,
    className,
    ...others
  } = useComponentDefaultProps<AccordionProps<Multiple>>(
    'Accordion',
    defaultProps as AccordionProps<Multiple>,
    props,
  );

  return (
    <AccordionProvider
      id={id}
      multiple={multiple}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      loop={loop}
      transitionDuration={transitionDuration}
      disableChevronRotation={disableChevronRotation}
      chevronPosition={chevronPosition}
      chevronSize={chevronSize}
      order={order}
      chevron={chevron}
      variant={variant}
      radius={radius}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
    >
      <Box
        className={clx(
          {
            'space-y-4': variant === 'separated',
            'rounded border border-base': variant === 'contained',
          },
          className,
        )}
        {...others}
        data-accordion
      >
        {children}
      </Box>
    </AccordionProvider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;
Accordion.displayName = 'Accordion';
