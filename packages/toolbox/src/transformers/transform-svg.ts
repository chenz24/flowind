import { transform } from '@svgr/core';
import jsx from '@svgr/plugin-jsx';
// import prettier from '@svgr/plugin-prettier';
import svgo from '@svgr/plugin-svgo';

import { defaultTemplate, fixedTemplate } from '@/templates';

type TransformArgs = {
  code: string;
  componentName: string;
  fixed?: boolean;
};

export async function transformSvg({ code, componentName, fixed = false }: TransformArgs) {
  return transform(
    code,
    {
      typescript: true,
      dimensions: false,
      replaceAttrValues: !fixed
        ? {
            '#09090B': '{color}',
          }
        : undefined,
      svgProps: {
        ref: '{ref}',
        width: '{size}',
        height: '{size}',
      },
      expandProps: 'end',
      plugins: [svgo, jsx],
      jsxRuntime: 'classic',
      prettierConfig: {
        semi: false,
        parser: 'typescript',
      },
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeTitle: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
      template: fixed ? fixedTemplate : defaultTemplate,
    },
    {
      componentName,
    },
  );
}
