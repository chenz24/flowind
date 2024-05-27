import * as React from "react";
import type { IconProps } from "../types";
const SquaresPlusSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M2.4 5.1a2.7 2.7 0 0 1 2.7-2.7h3a2.7 2.7 0 0 1 2.7 2.7v3a2.7 2.7 0 0 1-2.7 2.7h-3a2.7 2.7 0 0 1-2.7-2.7zm0 10.8a2.7 2.7 0 0 1 2.7-2.7h3a2.7 2.7 0 0 1 2.7 2.7v3a2.7 2.7 0 0 1-2.7 2.7h-3a2.7 2.7 0 0 1-2.7-2.7zM13.2 5.1a2.7 2.7 0 0 1 2.7-2.7h3a2.7 2.7 0 0 1 2.7 2.7v3a2.7 2.7 0 0 1-2.7 2.7h-3a2.7 2.7 0 0 1-2.7-2.7zm5.1 9a.9.9 0 1 0-1.8 0v2.4h-2.4a.9.9 0 1 0 0 1.8h2.4v2.4a.9.9 0 1 0 1.8 0v-2.4h2.4a.9.9 0 1 0 0-1.8h-2.4z" /></svg>;
});
SquaresPlusSolid.displayName = "SquaresPlusSolid";
export default SquaresPlusSolid;