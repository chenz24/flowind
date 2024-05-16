'use client';

import React, { forwardRef } from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { ForwardRefWithStaticComponents } from '@/utils/forwardRef-with-static-components';
import { Box } from '../box';
import { Tab, TabStylesNames } from './tab/tab';
import { TabsList, TabsListStylesNames } from './tabs-list/tabs-list';
import { TabsPanel, TabsPanelStylesNames } from './tabs-panel/tabs-panel';
import { TabsProvider, TabsProviderProps } from './tabs-provider';
import useStyles from './tabs.styles';
import { TabsStylesParams } from './tabs.types';

export type TabsStylesNames =
  | Selectors<typeof useStyles>
  | TabsListStylesNames
  | TabsPanelStylesNames
  | TabStylesNames;

export interface TabsProps
  extends TabsProviderProps,
    DefaultProps<TabsStylesNames, TabsStylesParams>,
    Omit<React.ComponentPropsWithRef<'div'>, keyof TabsProviderProps> {}

type TabsComponent = ForwardRefWithStaticComponents<
  TabsProps,
  {
    List: typeof TabsList;
    Tab: typeof Tab;
    Panel: typeof TabsPanel;
  }
>;

const defaultProps: Partial<TabsProps> = {
  orientation: 'horizontal',
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: 'default',
  placement: 'left',
  radius: 'sm',
};

export const Tabs: TabsComponent = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    defaultValue,
    value,
    orientation,
    loop,
    activateTabWithKeyboard,
    allowTabDeactivation,
    children,
    id,
    onTabChange,
    variant,
    color,
    className,
    unstyled,
    classNames,
    styles,
    radius,
    inverted,
    keepMounted,
    placement,
    ...others
  } = useComponentDefaultProps('Tabs', defaultProps, props);

  const { classes, cx } = useStyles(
    { orientation, color, radius, inverted, placement },
    { unstyled, name: 'Tabs', classNames, styles, variant },
  );

  return (
    <TabsProvider
      activateTabWithKeyboard={activateTabWithKeyboard}
      defaultValue={defaultValue}
      orientation={orientation}
      onTabChange={onTabChange}
      value={value}
      id={id}
      loop={loop}
      allowTabDeactivation={allowTabDeactivation}
      color={color}
      variant={variant}
      radius={radius}
      inverted={inverted}
      keepMounted={keepMounted}
      placement={placement}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
    >
      <Box {...others} className={cx(classes.root, className)} id={id} ref={ref}>
        {children}
      </Box>
    </TabsProvider>
  );
}) as any;

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;

Tabs.displayName = 'Tabs';
