import * as React from "react";
import type { IconProps } from "../types";
const ExclamationCircle = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.995 7.945v4.5m0 3.6h.008v.01h-.008z" /></svg>;
});
ExclamationCircle.displayName = "ExclamationCircle";
export default ExclamationCircle;