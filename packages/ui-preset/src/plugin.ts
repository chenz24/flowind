import plugin from 'tailwindcss/plugin';

import { FONT_FAMILY_MONO, FONT_FAMILY_SANS } from './constants';
import { theme } from './theme/extension/theme';
import { colors } from './theme/tokens/colors';
import { components } from './theme/tokens/components';
import { effects } from './theme/tokens/effects';
import { typography } from './theme/tokens/typography';

export default plugin(
  ({ addBase, addComponents, config }) => {
    const [darkMode, className = '.dark'] = ([] as string[]).concat(config('darkMode', 'media'));

    addBase({
      '*': {
        borderColor: 'var(--border-base)',
      },
    });

    addComponents(typography);

    addBase({
      ':root': { ...colors.light, ...effects.light },
      ...components.light,
    });

    if (darkMode === 'class') {
      addBase({
        [className]: { ...colors.dark, ...effects.dark },
      });
    } else {
      addBase({
        '@media (prefers-color-scheme: dark)': {
          ':root': { ...colors.dark, ...effects.dark },
          ...components.dark,
        },
      });
    }
  },
  {
    theme: {
      extend: {
        ...theme.extend,
        fontFamily: {
          sans: FONT_FAMILY_SANS,
          mono: FONT_FAMILY_MONO,
        },
        transitionProperty: {
          fg: 'color, background-color, border-color, box-shadow, opacity',
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0px' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0px' },
          },
          'stripes-animation': {
            from: { backgroundPosition: '0 0' },
            to: { backgroundPosition: '40px 0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'stripes-animation': 'stripes-animation 1000ms linear infinite',
        },
        backgroundImage: {
          'progress-striped':
            'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
        },
      },
    },
  },
);
