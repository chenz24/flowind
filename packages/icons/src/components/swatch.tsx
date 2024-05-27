import * as React from "react";
import type { IconProps } from "../types";
const Swatch = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.098 19.902a3.75 3.75 0 0 0 2.652 1.099m-2.652-1.099a3.75 3.75 0 0 0 2.652 1.099m-2.652-1.099A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21.001a3.75 3.75 0 0 0 2.652-1.099M6.75 21.001c.995 0 1.949-.396 2.652-1.099M6.75 21.001 19.875 21c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072m-6.401 6.402 6.401-6.402m-6.401 6.402A3.75 3.75 0 0 0 10.5 17.25V8.197m5.303 5.303 2.879-2.88c.44-.438.44-1.15 0-1.59L14.97 5.317a1.124 1.124 0 0 0-1.59 0l-2.88 2.88M6.75 17.25h.008v.008H6.75z" /></svg>;
});
Swatch.displayName = "Swatch";
export default Swatch;