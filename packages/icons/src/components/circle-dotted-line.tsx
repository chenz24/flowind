import * as React from "react";
import type { IconProps } from "../types";
const CircleDottedLine = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 3.523a8.87 8.87 0 0 0-6 0M3.156 10.358a8.98 8.98 0 0 1 3.001-5.195M6.157 18.838a8.98 8.98 0 0 1-3-5.196M9 20.477c1.94.697 4.06.697 6 0M20.843 10.358a8.98 8.98 0 0 0-3-5.195M17.843 18.838a8.98 8.98 0 0 0 3-5.196" /></svg>;
});
CircleDottedLine.displayName = "CircleDottedLine";
export default CircleDottedLine;