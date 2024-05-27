import type { FlowindColor, FlowindThemeBase, StatusType } from '../../../types';
import filledClasses from './styles/filled';
import lightClasses from './styles/light';
import lighterClasses from './styles/lighter';
import outlineClasses from './styles/outline';
import subtleClasses from './styles/subtle';

export interface VariantInput {
  variant: string;
  color?: FlowindColor | StatusType;
}

export interface VariantOutput {
  border: string;
  background: string;
  color: string;
  hover: string;
  stroke?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function variantColors(theme: FlowindThemeBase) {
  const colorTypeMap = {
    primary: theme.primaryColor,
    secondary: theme.secondaryColor,
    danger: 'red',
    success: 'emerald',
    warning: 'yellow',
    info: 'cyan',
  };

  return ({ variant, color }: VariantInput): VariantOutput => {
    const variantColor = colorTypeMap[color as StatusType] || color;

    switch (variant) {
      case 'light': {
        const classes = lightClasses[variantColor];
        return {
          border: 'border-none',
          background: classes.background,
          color: classes.color,
          hover: classes.hoverBackground,
        };
      }

      case 'lighter': {
        const classes = lighterClasses[variantColor];
        return {
          border: `border border-solid ${classes.border}`,
          background: classes.background,
          color: classes.color,
          hover: classes.hoverBackground,
        };
      }

      case 'subtle': {
        const classes = subtleClasses[variantColor];
        return {
          border: '',
          background: '',
          color: classes.color,
          hover: classes.hoverBackground,
        };
      }

      case 'outline': {
        const classes = outlineClasses[variantColor];
        return {
          border: `border border-solid ${classes.border}`,
          background: 'bg-none',
          color: classes.color,
          hover: classes.hoverBackground,
        };
      }

      case 'filled': {
        const classes = filledClasses[variantColor];
        if (!classes) {
          return null;
        }
        return {
          border: 'border-none',
          background: classes.background,
          color: classes.color,
          hover: classes.hoverBackground,
          stroke: classes.stroke,
        };
      }

      default: {
        return {
          border: 'border border-solid border-neutral-200 dark:border-neutral-700',
          background: 'bg-white dark:bg-transparent',
          color: 'text-fg-base',
          hover: 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
        };
      }
    }
  };
}
