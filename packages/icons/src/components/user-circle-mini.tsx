import * as React from "react";
import type { IconProps } from "../types";
const UserCircleMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M7 17.412a5 5 0 0 1 10 0 11.96 11.96 0 0 1-5 1.088c-1.784 0-3.477-.39-5-1.088" /></svg>;
});
UserCircleMini.displayName = "UserCircleMini";
export default UserCircleMini;