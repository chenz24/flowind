import * as React from "react";
import type { IconProps } from "../types";
const DocumentTextSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M5.898 1.95c-.991 0-1.794.804-1.794 1.795v16.51c0 .99.804 1.795 1.794 1.795h12.204c.99 0 1.794-.804 1.794-1.795v-7.537a3.59 3.59 0 0 0-3.589-3.59h-1.794a1.795 1.795 0 0 1-1.795-1.794V5.539a3.59 3.59 0 0 0-3.59-3.589zM7.693 14.87a.72.72 0 0 1 .718-.718h7.178a.718.718 0 0 1 0 1.436H8.411a.72.72 0 0 1-.718-.718m.718 2.154a.718.718 0 1 0 0 1.436H12a.718.718 0 0 0 0-1.436z" clipRule="evenodd" /><path fill={color} d="M12.93 2.253a5 5 0 0 1 1.224 3.287v1.794c0 .198.16.36.358.36h1.795a5 5 0 0 1 3.287 1.223 9.35 9.35 0 0 0-6.665-6.664" /></svg>;
});
DocumentTextSolid.displayName = "DocumentTextSolid";
export default DocumentTextSolid;