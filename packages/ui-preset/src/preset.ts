import type { Config } from 'tailwindcss';

import plugin from './plugin';

const preset = {
  content: [],
  plugins: [
    plugin,
    // eslint-disable-next-line global-require
    require('tailwindcss-animate'),
    // @ts-ignore
    // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('search-cancel', '&::-webkit-search-cancel-button');
    }),
  ] as Config['plugins'],
} satisfies Config;

export { preset };
