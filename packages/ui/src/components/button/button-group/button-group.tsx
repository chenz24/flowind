/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import cx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { DefaultProps, useComponentDefaultProps } from '@/styles';
import { Box } from '../../box';

export interface ButtonGroupStylesParams {
  orientation: 'vertical' | 'horizontal';
}
export interface ButtonGroupProps
  extends DefaultProps<never, ButtonGroupStylesParams>,
    React.ComponentPropsWithoutRef<'div'> {
  /** <Button /> components */
  children?: React.ReactNode;

  /** Switch between vertical and horizontal orientation */
  orientation?: 'vertical' | 'horizontal';
}

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
};

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const { className, children, orientation, ...others } = useComponentDefaultProps(
    'ButtonGroup',
    defaultProps,
    props,
  );

  const getChildClasses = (index: number) => {
    const isFirst = index === 0;
    const isLast = index === React.Children.count(children) - 1;

    if (orientation === 'horizontal') {
      return cx({
        'rounded-r-none': !isLast,
        'border-r-0': !isLast,
        'rounded-l-none': !isFirst,
      });
    }

    return cx({
      'rounded-b-none': !isLast,
      'border-b-0': !isLast,
      'rounded-t-none': !isFirst,
    });
  };

  const flexDirection = orientation === 'vertical' ? 'flex-col' : 'flex-row';

  return (
    <Box className={cx(flexDirection, 'flex', className)} ref={ref} {...others}>
      {React.Children.map(
        children,
        (child, index) =>
          React.isValidElement(child) &&
          React.cloneElement(child, {
            ...child.props,
            className: twMerge(getChildClasses(index), child.props.className),
          }),
      )}
    </Box>
  );
});

ButtonGroup.displayName = 'ButtonGroup';
