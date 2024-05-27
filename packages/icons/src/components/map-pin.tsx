import * as React from "react";
import type { IconProps } from "../types";
const MapPin = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.125a3 3 0 1 1-6 0 3 3 0 0 1 6 0" /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.125c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 0 1 15 0" /></svg>;
});
MapPin.displayName = "MapPin";
export default MapPin;