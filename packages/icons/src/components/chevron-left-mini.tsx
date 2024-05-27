import * as React from "react";
import type { IconProps } from "../types";
const ChevronLeftMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.4 16.8 9.6 12l4.8-4.8" /></svg>;
});
ChevronLeftMini.displayName = "ChevronLeftMini";
export default ChevronLeftMini;