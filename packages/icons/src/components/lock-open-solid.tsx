import * as React from "react";
import type { IconProps } from "../types";
const LockOpenSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><g fill={color} clipPath="url(#a)"><path d="M9.667 12a1 1 0 0 1-1-1V6.667a3.34 3.34 0 0 0-3.334-3.334A3.34 3.34 0 0 0 2 6.667v1.666a1 1 0 0 1-2 0V6.667a5.34 5.34 0 0 1 5.333-5.334 5.34 5.34 0 0 1 5.334 5.334V11a1 1 0 0 1-1 1" /><path d="M17.667 10h-10A3.67 3.67 0 0 0 4 13.667V19a3.67 3.67 0 0 0 3.667 3.667h10A3.67 3.67 0 0 0 21.333 19v-5.333A3.67 3.67 0 0 0 17.667 10m-4 7a1 1 0 0 1-2 0v-1.333a1 1 0 0 1 2 0z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
});
LockOpenSolid.displayName = "LockOpenSolid";
export default LockOpenSolid;