import React, { forwardRef } from 'react';

import {
  DefaultProps,
  FlowindColor,
  FlowindSize,
  Selectors,
  useComponentDefaultProps,
} from '@/styles';
import { Box } from '../../box';
import { Text } from '../../text';
import useStyles from './timeline-item.styles';

export type TimelineItemStylesNames = Selectors<typeof useStyles>;

export interface TimelineItemProps
  extends DefaultProps<TimelineItemStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  variant?: string;

  /** Item title, rendered next to bullet */
  title?: React.ReactNode;

  /** React node that should be rendered inside bullet – icon, image, avatar, etc. */
  bullet?: React.ReactNode;

  /** Bullet width, height and border-radius, controlled by Timeline component */
  bulletSize?: number;

  /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
  radius?: FlowindSize;

  /** React node that will be rendered after title */
  children?: React.ReactNode;

  /** Should this item be highlighted, controlled by Timeline component */
  active?: boolean;

  /** Should line of this item be highlighted, controlled by Timeline component */
  lineActive?: boolean;

  isLast?: boolean;

  /** Highlight color for active item */
  color?: FlowindColor;

  /** Line and bullet position relative to item content, controlled by Timeline component */
  align?: 'right' | 'left';

  /** Line border style */
  lineVariant?: 'solid' | 'dashed' | 'dotted';

  /** Line border width, controlled by Timeline component */
  lineWidth?: number;
}

const defaultProps: Partial<TimelineItemProps> = {
  bulletSize: 20,
  radius: 'xl',
  lineWidth: 4,
  lineVariant: 'solid',
};

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>((props, ref) => {
  const {
    className,
    bullet,
    title,
    bulletSize,
    radius,
    lineWidth,
    active,
    lineActive,
    classNames,
    styles,
    children,
    color,
    align,
    lineVariant,
    unstyled,
    variant,
    isLast,
    ...others
  } = useComponentDefaultProps('TimelineItem', defaultProps, props);

  const withChild = !!bullet;

  const { classes, styls, cx } = useStyles(
    { bulletSize, color, radius, align, lineVariant, lineWidth, active, lineActive, withChild },
    { name: 'Timeline', classNames, styles, unstyled, variant },
  );

  return (
    <Box
      className={cx(classes.item, className)}
      data-line-active={lineActive || undefined}
      data-active={active || undefined}
      ref={ref}
      {...others}
    >
      {!isLast && <div className={classes.itemLine} style={styls.itemLine} />}
      <div
        className={classes.itemBullet}
        style={styls.itemBullet}
        data-with-child={withChild || undefined}
        data-active={active || undefined}
      >
        {bullet}
      </div>

      <div className={classes.itemBody}>
        {title && <Text className={classes.itemTitle}>{title}</Text>}
        <div className={classes.itemContent}>{children}</div>
      </div>
    </Box>
  );
});

TimelineItem.displayName = 'TimelineItem';
