import * as React from "react";
import type { IconProps } from "../types";
const MoonSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M9.3 2.608a.71.71 0 0 1 .154.777A8.5 8.5 0 0 0 8.8 6.668a8.533 8.533 0 0 0 8.532 8.533 8.5 8.5 0 0 0 3.284-.655.711.711 0 0 1 .93.93A9.958 9.958 0 0 1 2.4 11.645a9.96 9.96 0 0 1 6.125-9.192.71.71 0 0 1 .775.154" clipRule="evenodd" /></svg>;
});
MoonSolid.displayName = "MoonSolid";
export default MoonSolid;