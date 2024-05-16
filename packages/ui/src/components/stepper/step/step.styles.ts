import { createStyles, FlowindSize, rem } from '@/styles';

export interface StepStylesParams {
  allowStepClick: boolean;
  iconPosition: 'right' | 'left';
  orientation: 'vertical' | 'horizontal';
  iconSize: number;
  radius: FlowindSize;
}

export default createStyles(
  (theme, { orientation, allowStepClick, iconPosition, iconSize, radius }: StepStylesParams) => {
    const _iconSize = iconSize ? rem(iconSize) : '2.25rem';
    const verticalOrientationStyles = 'justify-start overflow-hidden mt-2 first-of-type:mt-0';
    const textAlign = iconPosition === 'left' ? 'text-left' : 'text-right';

    return {
      classes: {
        stepLoader: '',
        step: `flex ${iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'} ${allowStepClick ? 'cursor-pointer' : ''} 
      ${orientation === 'vertical' ? verticalOrientationStyles : 'items-center'}`,
        stepWrapper: 'relative',
        verticalSeparator: 'absolute w-0.5 bg-border-base',
        verticalSeparatorActive: '!bg-bg-interactive',
        stepIcon: `relative flex items-center justify-center ${theme.radius[radius]} bg-bg-subtle text-sm text-fg-subtle 
        border-2 border-border-base transition-all data-[progress=true]:border-border-interactive 
        data-[completed=true]:border-border-interactive data-[completed=true]:bg-bg-interactive data-[completed=true]:text-fg-on-color`,
        stepCompletedIcon: 'absolute inset-0 flex justify-center items-center text-fg-on-color',
        stepBody: `flex flex-col ${iconPosition === 'left' ? 'ml-3' : 'mr-3'}`,
        stepLabel: `leading-none font-medium text-sm text-fg-base ${textAlign}`,
        stepDescription: `leading-none my-1.5 text-sm text-fg-muted ${textAlign}`,
      },
      styles: {
        stepIcon: {
          width: _iconSize,
          height: _iconSize,
          minHeight: _iconSize,
        },
        verticalSeparator: {
          top: `calc(${_iconSize} + 8px)`,
          bottom: `calc(${_iconSize} + 8px)`,
          left: `calc(${_iconSize} / 2)`,
        },
      },
    };
  },
);
