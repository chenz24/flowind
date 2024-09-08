import * as React from "react";
import type { IconProps } from "../types";
const User = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.49 6.415a3.49 3.49 0 1 1-6.981 0 3.49 3.49 0 0 1 6.981 0M5.02 19.556a6.98 6.98 0 0 1 13.96 0A16.7 16.7 0 0 1 12 21.075c-2.49 0-4.855-.544-6.98-1.519" /></svg>;
});
User.displayName = "User";
export default User;