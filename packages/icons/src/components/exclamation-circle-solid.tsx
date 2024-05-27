import * as React from "react";
import type { IconProps } from "../types";
const ExclamationCircleSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0M12 6a.9.9 0 0 1 .9.9v5.4a.9.9 0 1 1-1.8 0V6.9A.9.9 0 0 1 12 6m0 12a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4" clipRule="evenodd" /></svg>;
});
ExclamationCircleSolid.displayName = "ExclamationCircleSolid";
export default ExclamationCircleSolid;