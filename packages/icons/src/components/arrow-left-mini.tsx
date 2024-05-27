import * as React from "react";
import type { IconProps } from "../types";
const ArrowLeftMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.4 6.6 6 12m0 0 5.4 5.4M6 12h12" /></svg>;
});
ArrowLeftMini.displayName = "ArrowLeftMini";
export default ArrowLeftMini;