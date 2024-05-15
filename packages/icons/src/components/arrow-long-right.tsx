import * as React from "react";
import type { IconProps } from "../types";
const ArrowLongRight = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>;
});
ArrowLongRight.displayName = "ArrowLongRight";
export default ArrowLongRight;