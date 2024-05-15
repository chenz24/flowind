import * as React from "react";
import type { IconProps } from "../types";
const ArrowDown = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg>;
});
ArrowDown.displayName = "ArrowDown";
export default ArrowDown;