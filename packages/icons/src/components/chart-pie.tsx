import * as React from "react";
import type { IconProps } from "../types";
const ChartPie = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5z" /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3z" /></svg>;
});
ChartPie.displayName = "ChartPie";
export default ChartPie;