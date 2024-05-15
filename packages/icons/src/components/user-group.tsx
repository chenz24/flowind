import * as React from "react";
import type { IconProps } from "../types";
const UserGroup = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.059 15.521a3 3 0 0 1 4.682 2.72c-1.2.42-2.474.582-3.741.479a5.995 5.995 0 0 0-6-5.97 6 6 0 0 0-5.058 2.772m11.057 3.197.001.031q0 .337-.037.666A11.95 11.95 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6 6 0 0 1 6 18.719m0 0a9 9 0 0 1-3.739-.477 3 3 0 0 1 4.681-2.72M6 18.719a5.97 5.97 0 0 1 .942-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0m6 3a2.249 2.249 0 1 1-4.498 0 2.249 2.249 0 0 1 4.498 0m-13.5 0a2.25 2.25 0 1 1-4.499 0 2.25 2.25 0 0 1 4.499 0" /></svg>;
});
UserGroup.displayName = "UserGroup";
export default UserGroup;