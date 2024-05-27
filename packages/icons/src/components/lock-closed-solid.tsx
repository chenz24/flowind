import * as React from "react";
import type { IconProps } from "../types";
const LockClosedSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M16.333 12a1 1 0 0 1-1-1V6.667A3.34 3.34 0 0 0 12 3.333a3.34 3.34 0 0 0-3.333 3.334V11a1 1 0 0 1-2 0V6.667A5.34 5.34 0 0 1 12 1.333a5.34 5.34 0 0 1 5.333 5.334V11a1 1 0 0 1-1 1" /><path fill={color} d="M17 10H7a3.67 3.67 0 0 0-3.667 3.667V19A3.67 3.67 0 0 0 7 22.667h10A3.67 3.67 0 0 0 20.667 19v-5.333A3.67 3.67 0 0 0 17 10m-4 7a1 1 0 0 1-2 0v-1.333a1 1 0 0 1 2 0z" /></svg>;
});
LockClosedSolid.displayName = "LockClosedSolid";
export default LockClosedSolid;