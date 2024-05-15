import * as React from "react";
import type { IconProps } from "../types";
const BellAlertSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.7 9.7 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.2 8.2 0 0 1 5.85 3.5m13.417-1a.75.75 0 1 0-1.118 1 8.2 8.2 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.7 9.7 0 0 0 19.267 2.5" /><path fill={color} fillRule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.22 8.22 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.6 24.6 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.22 8.22 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25M9.75 18q0-.05.002-.1c1.496.135 3 .135 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0" clipRule="evenodd" /></svg>;
});
BellAlertSolid.displayName = "BellAlertSolid";
export default BellAlertSolid;