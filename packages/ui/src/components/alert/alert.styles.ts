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

const useStyles = createStyles(
  (
    theme: FlowindTheme,
    { radius, color, type }: AlertStylesParams,
    { variant }: AlertStylesOptions,
  ) => {
    const variantColor = color || type;
    const colors = theme.fn.variantColors({ color: variantColor, variant });

    return {
      classes: {
        root: `relative overflow-hidden py-3 px-3.5 ${theme.radius[radius]} ${colors.color} ${colors.background} ${colors.border}`,
        wrapper: 'flex',
        body: 'flex-1',
        title:
          'flex items-center justify-between box-border m-0 mb-1 font-medium text-sm leading-relaxed',
        label: 'block overflow-hidden text-ellipsis',
        message: 'overflow-hidden text-ellipsis text-sm leading-normal',
        icon: 'w-5 h-5 flex items-center justify-start mr-3',
        closeButton: colors.color,
      },
      styles: {},
    };
  },
);

export default useStyles;
