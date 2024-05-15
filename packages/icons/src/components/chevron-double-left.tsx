import * as React from "react";
import type { IconProps } from "../types";
const ChevronDoubleLeft = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m18.75 19.5-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" /></svg>;
});
ChevronDoubleLeft.displayName = "ChevronDoubleLeft";
export default ChevronDoubleLeft;