import { createStyles } from '@/styles';

export interface TimelineStylesParams {
  variant?: string;
}

export default createStyles((_theme, { variant }: TimelineStylesParams = {}) => ({
  classes: {
    root: '',
  },
  styles: {
    root: {},
  },
}));
