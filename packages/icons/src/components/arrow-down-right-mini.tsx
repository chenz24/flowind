import * as React from "react";
import type { IconProps } from "../types";
const ArrowDownRightMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.4 10.4 4 4m0 0-4 4m4-4H8.8a3.2 3.2 0 0 1-3.2-3.2V5.6" /></svg>;
});
ArrowDownRightMini.displayName = "ArrowDownRightMini";
export default ArrowDownRightMini;