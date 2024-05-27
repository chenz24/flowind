import { createStyles, FlowindTheme } from '@/styles';
import { TabsStylesParams } from '../tabs.types';

interface TabStylesParams extends TabsStylesParams {
  withIcon: boolean;
  withRightSection: boolean;
}

const radiusMap = {
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
};

const getRadius = ({ orientation, color, radius, inverted, placement }: TabStylesParams) => {
  const radiusValue = radiusMap[radius];

  return orientation === 'vertical'
    ? placement === 'left'
      ? `${radiusValue} 0 0 ${radiusValue}`
      : ` 0 ${radiusValue} ${radiusValue} 0`
    : inverted
      ? `0 0 ${radiusValue} ${radiusValue}`
      : `${radiusValue} ${radiusValue} 0 0`;
};

const getVariantClasses = (
  theme: FlowindTheme,
  { orientation, color, radius, inverted, placement }: TabStylesParams,
  variant: string,
) => {
  const vertical = orientation === 'vertical';

  if (variant === 'default') {
    const border = vertical
      ? placement === 'left'
        ? 'border-r-2 -mr-px'
        : 'border-l-2 -ml-px'
      : inverted
        ? 'border-t-2 -mt-px'
        : 'border-b-2 -mb-px';

    return `border-transparent hover:text-fg-base ${border} hover:border-border-strong data-[active=true]:text-fg-base 
    data-[active=true]:border-border-loud transition-all disabled:hover:text-fg-subtle disabled:hover:border-transparent`;
  }

  if (variant === 'outline') {
    const border = vertical
      ? placement === 'left'
        ? 'border-r-0'
        : 'border-l-0'
      : inverted
        ? 'border-t-0'
        : 'border-b-0';
    const borderClasses = `border border-solid border-transparent ${border}`;

    return `${borderClasses} data-[active=true]:border-border-base data-[active=true]:before:absolute data-[active=true]:before:bg-bg-base
     ${vertical ? 'data-[active=true]:before:bottom-0 data-[active=true]:before:top-0' : inverted ? 'data-[active=true]:before:-top-px' : 'data-[active=true]:before:-bottom-px'} 
     ${vertical ? 'data-[active=true]:before:w-px' : 'data-[active=true]:before:h-px'}
     ${vertical ? (placement === 'left' ? 'data-[active=true]:before:-right-px' : 'data-[active=true]:before:-left-px') : 'data-[active=true]:before:right-0 data-[active=true]:before:left-0'}`;
  }

  return `transition-fg text-fg-subtle inline-flex items-center justify-center rounded-full border border-transparent 
  bg-transparent px-2.5 py-1 outline-none hover:text-fg-base focus-visible:border-border-interactive 
  focus-visible:!shadow-borders-focus focus-visible:bg-bg-base data-[active=true]:text-fg-base 
  data-[active=true]:bg-bg-base data-[active=true]:shadow-elevation-card-rest`;
};

export default createStyles((theme, params: TabStylesParams, { variant }) => {
  const borderRadius = variant !== 'pills' ? getRadius(params) : '';

  return {
    classes: {
      tabLabel: '',
      tabIcon: 'flex justify-center items-center [&:not(:only-child)]:mr-1.5',
      tabRightSection: 'flex justify-center items-center [&:not(:only-child)]:ml-1.5',
      tab: `relative z-0 whitespace-nowrap flex items-center text-fg-subtle text-sm leading-none py-2.5 px-4
       ${params.withIcon ? 'pl-2.5' : ''} ${params.withRightSection ? 'pr-2.5' : ''} 
       ${params.orientation === 'horizontal' ? 'justify-center' : ''}
       ${getVariantClasses(theme, params, variant)} disabled:opacity-50 disabled:cursor-not-allowed focus:z-[1]`,
    },
    styles: {
      tabLabel: {},
      tabIcon: {},
      tabRightSection: {},
      tab: {
        borderRadius,
      },
    },
  };
});
