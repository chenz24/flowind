import * as React from "react";
import type { IconProps } from "../types";
const ComputerDesktopSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M2.4 5.1a2.7 2.7 0 0 1 2.7-2.7h13.8a2.7 2.7 0 0 1 2.7 2.7v10.2a2.7 2.7 0 0 1-2.7 2.7h-3.726a4.2 4.2 0 0 0 1.32 2.012.9.9 0 0 1-.582 1.588H8.088a.9.9 0 0 1-.58-1.588A4.2 4.2 0 0 0 8.825 18H5.1a2.7 2.7 0 0 1-2.7-2.7zm1.8 0a.9.9 0 0 1 .9-.9h13.8a.9.9 0 0 1 .9.9v9a.9.9 0 0 1-.9.9H5.1a.9.9 0 0 1-.9-.9z" clipRule="evenodd" /></svg>;
});
ComputerDesktopSolid.displayName = "ComputerDesktopSolid";
export default ComputerDesktopSolid;