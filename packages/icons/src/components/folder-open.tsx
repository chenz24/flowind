import * as React from "react";
import type { IconProps } from "../types";
const FolderOpen = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.194 9.896a2 2 0 0 1 .326-.025h14.96q.166 0 .325.025m-15.61 0A2.13 2.13 0 0 0 2.412 12.3l.81 5.676a2.13 2.13 0 0 0 2.108 1.828h13.338a2.13 2.13 0 0 0 2.107-1.828l.811-5.676a2.13 2.13 0 0 0-1.782-2.405m-15.61 0V6.324a2.13 2.13 0 0 1 2.128-2.129h3.67c.376 0 .737.15 1.003.416l2.007 2.006a1.42 1.42 0 0 0 1.003.416h3.67a2.13 2.13 0 0 1 2.129 2.129v.734" /></svg>;
});
FolderOpen.displayName = "FolderOpen";
export default FolderOpen;