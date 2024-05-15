import * as React from "react";
import type { IconProps } from "../types";
const Resize = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m18.754 14.437-4.313 4.313M18.75 9.75l-9 9" /></svg>;
});
Resize.displayName = "Resize";
export default Resize;