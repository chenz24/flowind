import React, { forwardRef } from 'react';

import {
  DefaultProps,
  FlowindColor,
  FlowindNumberSize,
  FlowindSize,
  Selectors,
  useComponentDefaultProps,
} from '@/styles';
import { Box } from '../box';
import { Text } from '../text';
import { Tooltip } from '../tooltip';
import useStyles, { ProgressStylesParams } from './progress.styles';

export type ProgressStylesNames = Selectors<typeof useStyles>;

interface ProgressSection extends React.ComponentPropsWithRef<'div'> {
  value: number;
  color: FlowindColor;
  label?: string;
  tooltip?: React.ReactNode;
}

export interface ProgressProps
  extends DefaultProps<ProgressStylesNames, ProgressStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Percent of filled bar (0-100) */
  value?: number;

  /** Progress color from theme */
  color?: FlowindColor;

  /** Height of progress bar */
  size?: FlowindSize;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;

  /** Adds stripes */
  striped?: boolean;

  /** Whether to animate striped progress bars */
  animate?: boolean;

  /** Text to be placed inside the progress bar */
  label?: string;

  /** Replaces value if present, renders multiple sections instead of single one */
  sections?: ProgressSection[];
}

function getCumulativeSections(
  sections: ProgressSection[],
): (ProgressSection & { accumulated: number })[] {
  return sections.reduce(
    (acc, section) => {
      acc.sections.push({ ...section, accumulated: acc.accumulated });
      acc.accumulated += section.value;
      return acc;
    },
    { accumulated: 0, sections: [] },
  ).sections;
}

const defaultProps: Partial<ProgressProps> = {
  size: 'md',
  radius: 'sm',
  striped: false,
  animate: false,
  label: '',
  color: 'blue',
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    className,
    value,
    color,
    size,
    radius,
    striped,
    animate,
    label,
    'aria-label': ariaLabel,
    style,
    classNames,
    styles,
    sections,
    unstyled,
    variant,
    ...others
  } = useComponentDefaultProps('Progress', defaultProps, props);

  const { classes, styls, cx, theme } = useStyles(
    { color, radius },
    { name: 'Progress', classNames, styles, unstyled, variant, size },
  );

  const segments = Array.isArray(sections)
    ? getCumulativeSections(sections).map(
        (
          {
            tooltip,
            accumulated,
            value: sectionValue,
            label: sectionLabel,
            color: sectionColor,
            ...sectionProps
          },
          index,
        ) => {
          const { background } = theme.fn.variantColors({ variant: 'filled', color: sectionColor });
          const borderRadius =
            index === 0
              ? 'rounded-e-none'
              : index === sections.length - 1
                ? 'rounded-s-none'
                : 'rounded-none';
          return (
            <Tooltip.Floating label={tooltip} disabled={!tooltip} key={index}>
              <Box
                {...sectionProps}
                className={cx(classes.bar, sectionProps.className, background, borderRadius)}
                data-striped={striped || animate || undefined}
                data-animate={animate || undefined}
                style={{
                  width: `${sectionValue}%`,
                  left: `${accumulated}%`,
                }}
              >
                {sectionLabel && <Text className={classes.label}>{sectionLabel}</Text>}
              </Box>
            </Tooltip.Floating>
          );
        },
      )
    : null;

  return (
    <Box
      className={cx(classes.root, className)}
      style={{ ...styls.root, ...style }}
      ref={ref}
      {...others}
    >
      {segments || (
        <div
          role="progressbar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          aria-label={ariaLabel}
          className={classes.bar}
          style={{ width: `${value}%` }}
          data-striped={striped || animate || undefined}
          data-animate={animate || undefined}
        >
          {label ? <Text className={classes.label}>{label}</Text> : ''}
        </div>
      )}
    </Box>
  );
});

Progress.displayName = 'Progress';
