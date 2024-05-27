import * as React from "react";
import type { IconProps } from "../types";
const FlyingBox = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.148 7.083h-.983M4.13 4.132H2.166M16.917 19.868H3.15M17.187 4.132l-.97 3.233a.985.985 0 0 1-.942.701h-3.06a.984.984 0 0 1-.942-1.266l.8-2.668M8.065 12.983h2.093" /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.348 15.934H6.934a2.36 2.36 0 0 1-2.26-3.039l2.124-7.081a2.36 2.36 0 0 1 2.26-1.682h10.415a2.36 2.36 0 0 1 2.261 3.04l-2.124 7.08a2.36 2.36 0 0 1-2.262 1.682" /></svg>;
});
FlyingBox.displayName = "FlyingBox";
export default FlyingBox;