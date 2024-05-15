import * as React from "react";
import type { IconProps } from "../types";
const XCircleSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2M9.936 8.664a.9.9 0 0 0-1.272 1.272L10.728 12l-2.064 2.064a.9.9 0 1 0 1.272 1.272L12 13.272l2.064 2.064a.9.9 0 1 0 1.272-1.272L13.272 12l2.064-2.064a.9.9 0 0 0-1.272-1.272L12 10.728z" clipRule="evenodd" /></svg>;
});
XCircleSolid.displayName = "XCircleSolid";
export default XCircleSolid;