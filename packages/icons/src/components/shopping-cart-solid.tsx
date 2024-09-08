import * as React from "react";
import type { IconProps } from "../types";
const ShoppingCartSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M2.495 2.442a.735.735 0 0 0 0 1.47h1.359c.167 0 .312.112.355.273l2.507 9.403a3.68 3.68 0 0 0-2.75 3.559c0 .406.329.735.735.735h15.44a.735.735 0 0 0 0-1.47H5.561a2.21 2.21 0 0 1 2.08-1.47H18.64a.74.74 0 0 0 .661-.414 59 59 0 0 0 2.902-7.086.736.736 0 0 0-.515-.946 59.7 59.7 0 0 0-15.83-1.84l-.227-.85a1.84 1.84 0 0 0-1.776-1.364zm1.47 17.646a1.47 1.47 0 1 1 2.942 0 1.47 1.47 0 0 1-2.941 0m12.5 0a1.47 1.47 0 1 1 2.942 0 1.47 1.47 0 0 1-2.942 0" /></svg>;
});
ShoppingCartSolid.displayName = "ShoppingCartSolid";
export default ShoppingCartSolid;