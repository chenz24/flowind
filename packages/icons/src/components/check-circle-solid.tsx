import * as React from "react";
import type { IconProps } from "../types";
const CheckCircleSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2m4.628-11.77a.9.9 0 1 0-1.457-1.06l-4.18 5.749-2.255-2.256a.902.902 0 0 0-1.48.285.9.9 0 0 0 .208.988l3 3a.9.9 0 0 0 1.364-.107z" clipRule="evenodd" /></svg>;
});
CheckCircleSolid.displayName = "CheckCircleSolid";
export default CheckCircleSolid;