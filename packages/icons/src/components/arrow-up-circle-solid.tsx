import * as React from "react";
import type { IconProps } from "../types";
const ArrowUpCircleSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2m-.9-5.7a.9.9 0 1 0 1.8 0v-5.508l2.34 2.52a.9.9 0 1 0 1.32-1.224l-3.9-4.2a.9.9 0 0 0-1.32 0l-3.9 4.2a.9.9 0 1 0 1.32 1.224l2.34-2.52z" clipRule="evenodd" /></svg>;
});
ArrowUpCircleSolid.displayName = "ArrowUpCircleSolid";
export default ArrowUpCircleSolid;