import * as React from "react";
import type { IconProps } from "../types";
const BackwardSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M9.195 17.69c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.187 2.805-1.628V7.94c0-1.44-1.555-2.342-2.805-1.628L12 10.28V7.94c0-1.44-1.555-2.343-2.805-1.63l-7.108 4.063c-1.26.72-1.26 2.535 0 3.255z" /></svg>;
});
BackwardSolid.displayName = "BackwardSolid";
export default BackwardSolid;