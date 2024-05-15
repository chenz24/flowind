import * as React from "react";
import type { IconProps } from "../types";
const Moon = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.7 9.7 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.75 9.75 0 0 0 3 11.25a9.75 9.75 0 0 0 15.159 8.113 9.75 9.75 0 0 0 3.593-4.361" /></svg>;
});
Moon.displayName = "Moon";
export default Moon;