import { createStyles, FlowindSize, rem } from '@/styles';

export interface ColorSwatchStylesParams {
  radius: FlowindSize;
  size?: number | string;
}

export const alphaOverlayBackground = `
    linear-gradient(45deg, rgb(222, 226, 230) 25%, transparent 25%),
    linear-gradient(-45deg, rgb(222, 226, 230) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgb(222, 226, 230) 75%),
    linear-gradient(-45deg, rgb(255, 255, 255) 75%, rgb(222, 226, 230) 75%)
  `;

export const alphaOverlayBackgroundPosition = '0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0';

export default createStyles((theme, { radius, size }: ColorSwatchStylesParams) => ({
  classes: {
    root: `relative overflow-hidden p-0 border-0 appearance-none ${theme.radius[radius]}`,
    overlay: `absolute top-0 right-0 bottom-0 left-0 ${theme.radius[radius]}`,
    children: 'inline-flex justify-center items-center',
    shadowOverlay:
      'shadow-[rgba(0,0,0,.1)_0_0_0_0.0625rem_inset,rgba(0,0,0,0.15)_0px_0px_0.25rem_inset] z-10',
    alphaOverlay: 'bg-[length:0.5rem_0.5rem]',
  },
  styles: {
    root: {
      width: rem(size),
      height: rem(size),
    },
    alphaOverlay: {
      backgroundImage: alphaOverlayBackground,
      backgroundPosition: alphaOverlayBackgroundPosition,
    },
  },
}));
