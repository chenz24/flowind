import { createStyles, FlowindTheme } from '@/styles';
import { TabsPosition, TabsStylesParams } from '../tabs.types';

export interface TabsListStylesParams extends TabsStylesParams {
  grow: boolean;
  position: TabsPosition;
}

const getVariantClasses = (
  { orientation, inverted, placement }: TabsListStylesParams,
  theme: FlowindTheme,
  variant: string,
) => {
  const vertical = orientation === 'vertical';

  if (variant === 'default') {
    const borderSide = vertical
      ? placement === 'left'
        ? 'border-r'
        : 'border-l'
      : inverted
        ? 'border-t'
        : 'border-b';
    return `${borderSide} border-solid border-border-base`;
  }

  if (variant === 'outline') {
    const borderSide = vertical
      ? placement === 'left'
        ? 'border-r'
        : 'border-l'
      : inverted
        ? 'border-t'
        : 'border-b';
    return `${borderSide} border-solid border-base`;
  }

  if (variant === 'pills') {
    return 'gap-2';
  }

  return '';
};

const positionClasses = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
  apart: 'justify-between',
};

export default createStyles((theme, params: TabsListStylesParams, { variant }) => {
  const vertical = params.orientation === 'vertical';

  return {
    classes: {
      tabsList: `flex flex-wrap ${positionClasses[params.position]} ${vertical ? 'flex-col' : 'flex-row'} 
      ${params.grow ? '&>[role="tab"]:flex-1' : ''} ${getVariantClasses(params, theme, variant)}`,
    },
    styles: {},
  };
});
