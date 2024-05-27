import * as React from "react";
import type { IconProps } from "../types";
const ShoppingCart = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.4 3.09h1.372c.505 0 .946.339 1.076.826l.38 1.423m0 0A59.5 59.5 0 0 1 21.6 7.16a59 59 0 0 1-2.895 7.068H7.598m-2.37-8.89 2.37 8.89m0 0a2.97 2.97 0 0 0-2.97 2.97h15.594m-14.11 2.97a.743.743 0 1 1-1.484 0 .743.743 0 0 1 1.485 0m12.625 0a.742.742 0 1 1-1.485 0 .742.742 0 0 1 1.485 0" /></svg>;
});
ShoppingCart.displayName = "ShoppingCart";
export default ShoppingCart;