import * as React from "react";
import type { IconProps } from "../types";
const SquareTwoStackSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M2.4 5.1a2.7 2.7 0 0 1 2.7-2.7h7.8a2.7 2.7 0 0 1 2.7 2.7v1.5h-4.5a4.5 4.5 0 0 0-4.5 4.5v4.5H5.1a2.7 2.7 0 0 1-2.7-2.7z" /><path fill={color} d="M11.1 8.4a2.7 2.7 0 0 0-2.7 2.7v7.8a2.7 2.7 0 0 0 2.7 2.7h7.8a2.7 2.7 0 0 0 2.7-2.7v-7.8a2.7 2.7 0 0 0-2.7-2.7z" /></svg>;
});
SquareTwoStackSolid.displayName = "SquareTwoStackSolid";
export default SquareTwoStackSolid;