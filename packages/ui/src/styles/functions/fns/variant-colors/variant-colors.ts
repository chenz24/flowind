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
    success: 'green',
    warning: 'yellow',
    info: 'cyan',
  };

  return ({ variant, color }: VariantInput): VariantOutput => {
    const variantColor = colorTypeMap[color as StatusType] || color;

    switch (variant) {
      case 'light': {
        const classes = lightClasses[variantColor];
        return {
          border: 'border border-solid border-transparent',
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
          border: 'border border-solid border-transparent',
          background: classes.background,
          color: classes.color,
          hover: classes.hoverBackground,
          stroke: classes.stroke,
        };
      }

      default: {
        return {
          border: 'border border-solid border-gray-200 dark:border-gray-700',
          background: 'bg-white dark:bg-zinc-800',
          color: 'text-gray-800 dark:text-white',
          hover: 'hover:bg-gray-50 dark:hover:bg-gray-800',
        };
      }
    }
  };
}
