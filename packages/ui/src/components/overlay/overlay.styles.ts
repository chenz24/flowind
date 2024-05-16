import { createStyles, FlowindSize, rem, rgba } from '@/styles';

export interface OverlayStylesParams {
  color: string;
  opacity: number;
  blur: number | string;
  radius: FlowindSize;
  gradient: string;
  fixed: boolean;
  zIndex: any;
}

export default createStyles(
  (theme, { color, opacity, blur, radius, gradient, fixed, zIndex }: OverlayStylesParams) => ({
    classes: {
      root: `${fixed ? 'fixed' : 'absolute'} inset-0 ${
        theme.radius[radius] || ''
      } data-[center=true]:flex data-[center=true]:iterm-center data-[center=true]:justify-center`,
    },
    styles: {
      root: {
        zIndex,
        backgroundColor: gradient ? undefined : rgba(color, opacity),
        backgroundImage: gradient,
        backdropFilter: blur ? `blur(${rem(blur)})` : undefined,
      },
    },
  }),
);
