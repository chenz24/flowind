import * as React from "react";
import type { IconProps } from "../types";
const DotsSix = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8M9 6.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8M9 18.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8M15 12.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8M15 6.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8M15 18.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8" /></svg>;
});
DotsSix.displayName = "DotsSix";
export default DotsSix;