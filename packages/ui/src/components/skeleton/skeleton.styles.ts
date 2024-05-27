import { createStyles, FlowindSize, rem } from '@/styles';

export interface SkeletonStylesParams {
  height: number | string;
  width: number | string;
  circle: boolean;
  radius: FlowindSize;
  animate: boolean;
}

export default createStyles(
  (theme, { height, width, radius, circle, animate }: SkeletonStylesParams) => ({
    classes: {
      root: `relative translate-z-0 ${theme.radius[radius] || ''}`,
      visible: `overflow-hidden before:absolute before:z-10 before:inset-0 before:content-"" before:bg-white
      dark:before:bg-gray-500 after:absolute after:inset-0 after:bg-gray-200 after:z-20 
      ${animate ? 'after:animate-pulse' : ''} dark:after:bg-gray-700`,
    },
    styles: {
      root: {
        height: rem(height),
        width: circle ? rem(height) : rem(width),
        borderRadius: circle ? rem(height) : undefined,
      },
    },
  }),
);
