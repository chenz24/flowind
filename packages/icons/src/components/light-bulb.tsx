import * as React from "react";
import type { IconProps } from "../types";
const LightBulb = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 17.506v-4.818m0 0a5.5 5.5 0 0 0 1.377-.174m-1.376.174c-.465 0-.928-.059-1.377-.174m3.442 6.864a11.1 11.1 0 0 1-4.13 0m3.441 2.187c-.915.095-1.838.095-2.753 0m3.442-4.059v-.176c0-.902.603-1.673 1.384-2.126a6.884 6.884 0 1 0-6.9 0c.78.453 1.385 1.224 1.385 2.126v.176" /></svg>;
});
LightBulb.displayName = "LightBulb";
export default LightBulb;