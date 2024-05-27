import * as React from "react";
import type { IconProps } from "../types";
const PencilSquareSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="m6.52 16.7 1.514-3.786a4.8 4.8 0 0 1 1.062-1.61L17.4 3.002a2.546 2.546 0 0 1 3.6 3.6l-8.304 8.302c-.46.46-1.008.822-1.612 1.063L7.3 17.482a.6.6 0 0 1-.78-.78z" /><path fill={color} d="M4.2 6.9a1.5 1.5 0 0 1 1.5-1.5H12a.9.9 0 0 0 0-1.8H5.7a3.3 3.3 0 0 0-3.3 3.3v11.4a3.3 3.3 0 0 0 3.3 3.3h11.4a3.3 3.3 0 0 0 3.3-3.3V12a.9.9 0 1 0-1.8 0v6.3a1.5 1.5 0 0 1-1.5 1.5H5.7a1.5 1.5 0 0 1-1.5-1.5z" /></svg>;
});
PencilSquareSolid.displayName = "PencilSquareSolid";
export default PencilSquareSolid;