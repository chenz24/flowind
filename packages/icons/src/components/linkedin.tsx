import * as React from "react";
import type { IconProps } from "../types";
const Linkedin = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#0077B5" d="M18.3 1.2H5.7a4.5 4.5 0 0 0-4.5 4.5v12.6a4.5 4.5 0 0 0 4.5 4.5h12.6a4.5 4.5 0 0 0 4.5-4.5V5.7a4.5 4.5 0 0 0-4.5-4.5M8.4 18.3H5.7V8.4h2.7zM7.05 7.259c-.87 0-1.575-.711-1.575-1.588 0-.876.706-1.587 1.575-1.587.87 0 1.575.71 1.575 1.587S7.92 7.26 7.05 7.26m12.15 11.04h-2.7v-5.043c0-3.03-3.6-2.801-3.6 0V18.3h-2.7V8.4h2.7v1.588c1.256-2.327 6.3-2.499 6.3 2.229z" /></svg>;
});
Linkedin.displayName = "Linkedin";
export default Linkedin;