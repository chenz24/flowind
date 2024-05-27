import * as React from "react";
import type { IconProps } from "../types";
const ChevronUpDown = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7.2 15.3 4.5 4.5 4.5-4.5m-9-7.2 4.5-4.5 4.5 4.5" /></svg>;
});
ChevronUpDown.displayName = "ChevronUpDown";
export default ChevronUpDown;