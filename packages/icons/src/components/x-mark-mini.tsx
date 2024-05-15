import * as React from "react";
import type { IconProps } from "../types";
const XMarkMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7.2 16.8 9.6-9.6m-9.6 0 9.6 9.6" /></svg>;
});
XMarkMini.displayName = "XMarkMini";
export default XMarkMini;