import React, { forwardRef, useEffect } from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { Box } from '../../box';
import { useTabsContext } from '../tabs.context';
import useStyles from './tabs-panel.styles';

export type TabsPanelStylesNames = Selectors<typeof useStyles>;

export interface TabsPanelProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Panel content */
  children: React.ReactNode;

  /** Value of associated control */
  value: string;
}

const defaultProps: Partial<TabsPanelProps> = {};

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>((props, ref) => {
  const { value, children, className, ...others } = useComponentDefaultProps(
    'TabsPanel',
    defaultProps,
    props,
  );

  const ctx = useTabsContext();
  const { classes, cx } = useStyles(
    {
      orientation: ctx.orientation,
      color: ctx.color,
      radius: ctx.radius,
      inverted: ctx.inverted,
      placement: ctx.placement,
    },
    {
      name: 'Tabs',
      unstyled: ctx.unstyled,
      classNames: ctx.classNames,
      styles: ctx.styles,
      variant: ctx.variant,
    },
  );

  const panelId = ctx.getPanelId(value);
  const active = ctx.value === value;
  const content = ctx.keepMounted ? children : active ? children : null;

  /** Set panel as mounted for id referencing */
  useEffect(() => {
    ctx.setMountedPanelIds((prev) => [...prev, panelId]);
    return ctx.setMountedPanelIds((prev) => prev.filter((id) => id !== panelId));
  }, [panelId]);

  return (
    <Box
      {...others}
      ref={ref}
      style={{ display: !active ? 'none' : undefined }}
      className={cx(classes.panel, className)}
      role="tabpanel"
      id={panelId}
      aria-labelledby={ctx.getTabId(value)}
    >
      {content}
    </Box>
  );
});

TabsPanel.displayName = 'TabsPanel';
