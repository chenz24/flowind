import * as React from "react";
import type { IconProps } from "../types";
const Key = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.491 5.713a2.793 2.793 0 0 1 2.793 2.793m2.793 0a5.587 5.587 0 0 1-6.544 5.504c-.524-.09-1.079.025-1.455.4l-2.474 2.475H8.509v2.095H6.414v2.095H2.923v-2.624c0-.555.22-1.089.613-1.48l6.05-6.052c.377-.376.491-.93.401-1.455a5.587 5.587 0 1 1 11.09-.958" /></svg>;
});
Key.displayName = "Key";
export default Key;