import * as React from "react";
import type { IconProps } from "../types";
const EnvelopeSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M1.95 8.813v8.212a2.87 2.87 0 0 0 2.871 2.872H19.18a2.87 2.87 0 0 0 2.871-2.872V8.813l-8.545 5.257a2.87 2.87 0 0 1-3.01 0z" /><path fill={color} d="M22.05 7.126v-.151a2.87 2.87 0 0 0-2.871-2.871H4.82a2.87 2.87 0 0 0-2.871 2.87v.152l9.298 5.722a1.44 1.44 0 0 0 1.504 0z" /></svg>;
});
EnvelopeSolid.displayName = "EnvelopeSolid";
export default EnvelopeSolid;