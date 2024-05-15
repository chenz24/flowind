import * as React from "react";
import type { IconProps } from "../types";
const ArrowDownLeft = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9.002 10-5 5 5 5" /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.002 4v7a4 4 0 0 1-4 4h-12" /></svg>;
});
ArrowDownLeft.displayName = "ArrowDownLeft";
export default ArrowDownLeft;