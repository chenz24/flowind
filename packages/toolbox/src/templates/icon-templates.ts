export const defaultTemplate = (
  { jsx, componentName }: { jsx: any; componentName: string },
  { tpl }: { tpl: any },
) => tpl`
  import * as React from "react"

  import type { IconProps } from "../types"

  const ${componentName} = React.forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = '1rem', ...props }, ref) => {
    return (
      ${jsx}
    )
  })
  ${componentName}.displayName = "${componentName}"

  export default ${componentName}
  `;

export const fixedTemplate = (
  { jsx, componentName }: { jsx: any; componentName: string },
  { tpl }: { tpl: any },
) => tpl`
  import * as React from "react"

  import type { IconProps } from "../types"

  const ${componentName} = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({ size = '1rem', ...props }, ref) => {
    return (
      ${jsx}
    )
  })
  ${componentName}.displayName = "${componentName}"

  export default ${componentName}
  `;
