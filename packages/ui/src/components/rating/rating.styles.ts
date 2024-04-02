import { createStyles } from '@/styles';

export default createStyles(() => ({
  classes: {
    root: 'flex w-max has-[:disabled]:pointer-events-none',
    symbolGroup:
      'relative transition-transform duration-100 ease-in-out data-[active=true]:z-1 data-[active=true]:scale-125',
  },
}));
