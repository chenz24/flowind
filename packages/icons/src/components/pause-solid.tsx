import * as React from "react";
import type { IconProps } from "../types";
const PauseSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><rect width={4.2} height={16.5} x={5.7} y={3.75} fill={color} rx={1} /><rect width={4.2} height={16.5} x={14.1} y={3.75} fill={color} rx={1} /></svg>;
});
PauseSolid.displayName = "PauseSolid";
export default PauseSolid;