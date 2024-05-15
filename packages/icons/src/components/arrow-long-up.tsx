import * as React from "react";
import type { IconProps } from "../types";
const ArrowLongUp = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" /></svg>;
});
ArrowLongUp.displayName = "ArrowLongUp";
export default ArrowLongUp;