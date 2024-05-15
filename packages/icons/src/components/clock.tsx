import * as React from "react";
import type { IconProps } from "../types";
const Clock = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5.25L15 14m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0" /></svg>;
});
Clock.displayName = "Clock";
export default Clock;