import * as React from "react";
import type { IconProps } from "../types";
const ArrowRightMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12h12m0 0-5.4-5.4M18 12l-5.4 5.4" /></svg>;
});
ArrowRightMini.displayName = "ArrowRightMini";
export default ArrowRightMini;