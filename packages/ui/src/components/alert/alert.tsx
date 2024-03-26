import React, { forwardRef } from 'react';

import { useId } from '@flowind/hooks';
import {
  CheckCircleSolid,
  ExclamationCircleSolid,
  InformationCircleSolid,
  XCircleSolid,
} from '@flowind/icons';
import {
  DefaultProps,
  FlowindColor,
  FlowindSize,
  Selectors,
  StatusType,
  useComponentDefaultProps,
} from '@/styles';
import { Box } from '../box';
import { CloseButton } from '../close-button';
import useStyles, { type AlertStylesParams, type AlertVariant } from './alert.styles';

export type AlertStylesNames = Selectors<typeof useStyles>;

export interface AlertProps
  extends DefaultProps<AlertStylesNames, AlertStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Alert title */
  title?: React.ReactNode;

  type?: StatusType;

  /** Controls Alert background, color and border styles, "light" by default */
  variant?: AlertVariant;

  /** Alert message */
  children: React.ReactNode;

  /** Key of theme.colors */
  color?: FlowindColor;

  /** Icon displayed next to the title */
  icon?: React.ReactNode;

  /** Determines whether close button should be displayed, false by default */
  dismissible?: boolean;

  /** Called when close button is clicked */
  onClose?: () => void;

  /** Close button aria-label */
  closeButtonLabel?: string;

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: FlowindSize;
}

const defaultProps: Partial<AlertProps> = {
  variant: 'light',
  radius: 'sm',
  type: 'primary',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props: AlertProps, ref) => {
  const {
    id,
    className,
    title,
    type,
    variant,
    children,
    color,
    classNames,
    icon,
    styles,
    onClose,
    radius,
    dismissible,
    closeButtonLabel,
    unstyled,
    ...others
  } = useComponentDefaultProps('Alert', defaultProps, props);

  const Icon =
    icon ||
    {
      info: InformationCircleSolid,
      danger: XCircleSolid,
      success: CheckCircleSolid,
      warning: ExclamationCircleSolid,
    }[type];

  const { classes, styls, cx } = useStyles(
    { color, radius, type },
    { classNames, styles, unstyled, variant, name: 'Alert' },
  );

  const rootId = useId(id);
  const titleId = title && `${rootId}-title`;
  const bodyId = `${rootId}-body`;

  return (
    <Box
      id={rootId}
      role="alert"
      aria-labelledby={titleId}
      aria-describedby={bodyId}
      className={cx(classes.root, className)}
      ref={ref}
      {...others}
    >
      <div className={classes.wrapper} style={styls.wrapper}>
        {Icon && (
          <div className={classes.icon} style={styls.icon}>
            <Icon />
          </div>
        )}

        <div className={classes.body} style={styls.body}>
          {title && (
            <div
              className={classes.title}
              style={styls.title}
              data-with-close-button={dismissible || undefined}
            >
              <span id={titleId} className={classes.label} style={styls.label}>
                {title}
              </span>
            </div>
          )}

          <div id={bodyId} className={classes.message} style={styls.message}>
            {children}
          </div>
        </div>

        {dismissible && (
          <CloseButton
            className={classes.closeButton}
            style={styls.closeButton}
            onClick={onClose}
            iconSize={16}
            type={type}
            aria-label={closeButtonLabel}
          />
        )}
      </div>
    </Box>
  );
});

Alert.displayName = 'Alert';
