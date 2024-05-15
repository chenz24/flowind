import { createStyles, FlowindColor, FlowindSize, FlowindTheme, StatusType } from '@/styles';

export type AlertVariant = 'filled' | 'outline' | 'light' | 'lighter' | 'default';

export interface AlertStylesParams {
  color: FlowindColor;
  radius: FlowindSize;
  type: StatusType;
}

interface AlertStylesOptions {
  variant: AlertVariant;
}

interface GetColors {
  theme: FlowindTheme;
  type: StatusType;
  color: FlowindColor;
  variant: AlertVariant;
}

const getColors = ({ variant, type, color, theme }: GetColors) => {
  const variantColor = color || type;
  const colors = theme.fn.variantColors({ color: variantColor, variant });

  if (variant === 'light' || variant === 'lighter') {
    const iconClasses = theme.fn.variantColors({ color: variantColor, variant: 'light' }).color;
    return {
      label: 'text-fg-base',
      message: 'text-fg-subtle',
      border: 'border-none',
      background: colors.background,
      icon: iconClasses,
      close: 'text-fg-muted',
    };
  }

  if (variant === 'default') {
    const iconClasses = theme.fn.variantColors({ color: variantColor, variant: 'light' }).color;
    return {
      label: colors.color,
      message: 'text-fg-subtle',
      border: colors.border,
      background: colors.background,
      icon: iconClasses,
      close: 'text-fg-muted',
    };
  }

  return {
    label: colors.color,
    message: colors.color,
    border: colors.border,
    background: colors.background,
    icon: colors.color,
    close: variant === 'filled' ? 'text-fg-on-color' : 'text-fg-muted',
  };
};

const useStyles = createStyles(
  (
    theme: FlowindTheme,
    { radius, color, type }: AlertStylesParams,
    { variant }: AlertStylesOptions,
  ) => {
    const colors = getColors({ variant, color, type, theme });
    return {
      classes: {
        root: `relative overflow-hidden py-3 px-3.5 ${theme.radius[radius]} ${colors.background} ${colors.border}`,
        wrapper: 'flex',
        body: 'flex-1',
        title: 'flex items-center justify-between box-border m-0 mb-1 font-medium text-sm',
        label: `block overflow-hidden text-ellipsis ${colors.label}`,
        message: `overflow-hidden text-ellipsis text-sm leading-normal ${colors.message}`,
        icon: `w-5 h-5 flex items-center justify-center mr-3 ${colors.icon}`,
        closeButton: colors.close,
      },
      styles: {
        root: {},
        wrapper: {},
        body: {},
        title: {},
        label: {},
        message: {},
        icon: {},
        closeButton: {},
      },
    };
  },
);

export default useStyles;
