import * as React from "react";
import type { IconProps } from "../types";
const ArrowUpRightMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.9 17.1 17.1 6.9m0 0h-9m9 0v9" /></svg>;
});
ArrowUpRightMini.displayName = "ArrowUpRightMini";
export default ArrowUpRightMini;