import * as React from "react";
import type { IconProps } from "../types";
const Buildings = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.417 19.85v-9.29a.93.93 0 0 0-.93-.93h-3.715M3.691 19.85V4.986a.93.93 0 0 1 .93-.93h10.22a.93.93 0 0 1 .93.93v14.866M7.176 7.983h5.11m-5.11 3.97h5.11m9.06 7.898H2.763m9.523 0h-5.11v-4h5.11z" /></svg>;
});
Buildings.displayName = "Buildings";
export default Buildings;