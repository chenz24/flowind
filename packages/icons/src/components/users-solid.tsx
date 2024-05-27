import * as React from "react";
import type { IconProps } from "../types";
const UsersSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M4.821 6.616a3.948 3.948 0 1 1 7.897 0 3.948 3.948 0 0 1-7.897 0m9.332 2.154a3.231 3.231 0 1 1 6.462 0 3.231 3.231 0 0 1-6.462 0M1.95 18.82a6.82 6.82 0 0 1 13.64 0v.002l-.002.114a.72.72 0 0 1-.347.603 12.5 12.5 0 0 1-6.471 1.793c-2.366 0-4.581-.655-6.47-1.793a.72.72 0 0 1-.349-.603zm15.075.002-.001.138a2.15 2.15 0 0 1-.223.92c1.67.102 3.34-.231 4.843-.968a.72.72 0 0 0 .402-.615 4.665 4.665 0 0 0-6.659-4.413 8.2 8.2 0 0 1 1.637 4.936z" /></svg>;
});
UsersSolid.displayName = "UsersSolid";
export default UsersSolid;