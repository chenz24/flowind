import * as React from "react";
import type { IconProps } from "../types";
const ServerStackSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.5 4.5 0 0 0 19.5 6h-15q-.365.001-.715.056z" /><path fill={color} fillRule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 0 1 0 6h-15a3 3 0 0 1-3-3m15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M4.5 15a3 3 0 0 0 0 6h15a3 3 0 0 0 0-6zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0" clipRule="evenodd" /></svg>;
});
ServerStackSolid.displayName = "ServerStackSolid";
export default ServerStackSolid;