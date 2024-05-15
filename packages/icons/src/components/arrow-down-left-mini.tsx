import * as React from "react";
import type { IconProps } from "../types";
const ArrowDownLeftMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9.6 10.4-4 4 4 4" /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.4 5.6v5.6a3.2 3.2 0 0 1-3.2 3.2H5.6" /></svg>;
});
ArrowDownLeftMini.displayName = "ArrowDownLeftMini";
export default ArrowDownLeftMini;