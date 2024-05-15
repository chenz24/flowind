import * as React from "react";
import type { IconProps } from "../types";
const MinusMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 12H6.75" /></svg>;
});
MinusMini.displayName = "MinusMini";
export default MinusMini;