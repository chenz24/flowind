import * as React from "react";
import type { IconProps } from "../types";
const ArrowPathMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.219 9.878h3.993l-2.544-2.546a6.6 6.6 0 0 0-11.043 2.96m-.837 7.823v-3.993m0 0h3.994m-3.994 0 2.544 2.546a6.6 6.6 0 0 0 11.043-2.96m.837-7.823v3.992" /></svg>;
});
ArrowPathMini.displayName = "ArrowPathMini";
export default ArrowPathMini;