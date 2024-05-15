import * as React from "react";
import type { IconProps } from "../types";
const Stopwatch = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.3 2.7h5.4M12 2.7v3M12 20.7a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15M9.242 10.442 12 13.2M18.3 4.5l2.4 2.4" /></svg>;
});
Stopwatch.displayName = "Stopwatch";
export default Stopwatch;