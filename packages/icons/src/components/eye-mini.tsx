import * as React from "react";
import type { IconProps } from "../types";
const EyeMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.029 12.258a.8.8 0 0 1 0-.512 8.402 8.402 0 0 1 15.942-.004.8.8 0 0 1 0 .512 8.404 8.404 0 0 1-15.942.004" /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.4 12a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0" /></svg>;
});
EyeMini.displayName = "EyeMini";
export default EyeMini;