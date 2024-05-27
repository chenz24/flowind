import * as React from "react";
import type { IconProps } from "../types";
const ArrowUturnLeft = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.2 14.8 3.601 9.2m0 0 5.6-5.599m-5.6 5.6H14.8a5.599 5.599 0 1 1 0 11.198H12" /></svg>;
});
ArrowUturnLeft.displayName = "ArrowUturnLeft";
export default ArrowUturnLeft;