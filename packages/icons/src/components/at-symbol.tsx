import * as React from "react";
import type { IconProps } from "../types";
const AtSymbol = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeWidth={1.5} d="M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25m0 3.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" /></svg>;
});
AtSymbol.displayName = "AtSymbol";
export default AtSymbol;