import * as React from "react";
import type { IconProps } from "../types";
const ArrowUpMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 10.8 6-6m0 0 6 6m-6-6v14.4" /></svg>;
});
ArrowUpMini.displayName = "ArrowUpMini";
export default ArrowUpMini;