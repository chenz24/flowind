import { createStyles } from '@/styles';

export interface MediaObjectStylesParams {}

export default createStyles(() => ({
  classes: {
    root: 'flex flex-row justify-center items-center gap-x-2.5',
    image: '',
    main: '',
    title: 'font-medium text-sm text-fg-base',
    description: 'txt-sm text-fg-subtle',
  },
  styles: {
    root: {},
    image: {},
    main: {},
    title: {},
    description: {},
  },
}));
