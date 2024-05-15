import * as React from "react";
import type { IconProps } from "../types";
const FlagMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m5.863 14 .76-8.363a.48.48 0 0 1 .478-.437h11.036a.48.48 0 0 1 .478.523l-.712 7.84a.48.48 0 0 1-.479.437zm0 0-.48 4.8M9.063 8l5.6 3.2" /></svg>;
});
FlagMini.displayName = "FlagMini";
export default FlagMini;