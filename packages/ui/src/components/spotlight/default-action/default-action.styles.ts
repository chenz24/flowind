import { createStyles, FlowindSize } from '@/styles';

export interface DefaultActionStylesParams {
  radius: FlowindSize;
}

export default createStyles((theme, { radius }: DefaultActionStylesParams) => ({
  classes: {
    action: `relative block w-full ${theme.radius[radius]} py-2.5 px-3 hover:bg-bg-component-hover 
      data-[hovered=true]:bg-bg-component-hover`,
    actionDescription: 'txt-xs text-fg-muted',
    actionIcon: 'flex justify-center items-center',
    actionBody: 'text-left text-fg-subtle',
    actionHighlight: '',
  },
  styles: {},
}));
