import * as React from "react";
import type { IconProps } from "../types";
const Component = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.15 8.85 9.3 12l-3.15 3.15L3 12zM12 3l3.15 3.15L12 9.3 8.85 6.15zM17.85 8.85 21 12l-3.15 3.15L14.7 12zM12 14.7l3.15 3.15L12 21l-3.15-3.15z" /></svg>;
});
Component.displayName = "Component";
export default Component;