import { createStyles } from '@/styles';

export default createStyles(() => ({
  classes: {
    input: 'h-0 w-0 overflow-hidden whitespace-nowrap opacity-0 absolute',
    label: `block box-border m-px top-0 left-0 cursor-pointer absolute z-0
    data-[read-only=true]:cursor-default last-of-type:relative last-of-type:z-0`,
    symbolBody: 'grid place-content-center place-items-center',
  },
  //
  //   '&:focus': {
  //     [`& + .${getStylesRef('label')}`]: {
  //       outline:
  //         theme.focusRing === 'always' || theme.focusRing === 'auto'
  //           ? `${rem(1)} solid ${
  //               theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]
  //             }`
  //           : undefined,
  //     },
  //
  //     '&:focus:not(:focus-visible)': {
  //       [`& + .${getStylesRef('label')}`]: {
  //         outline: theme.focusRing === 'auto' || theme.focusRing === 'never' ? 'none' : undefined,
  //       },
  //     },
  //   },
  // },
}));
