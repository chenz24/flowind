import * as React from "react";
import type { IconProps } from "../types";
const CubeSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M12.415 1.96a.86.86 0 0 0-.83 0l-8.16 4.502L12 11.193l8.576-4.73zm8.76 6.137-8.315 4.587v9.462l7.87-4.342a.86.86 0 0 0 .445-.753zM11.14 22.147v-9.463L2.825 8.097v8.954a.86.86 0 0 0 .445.753z" clipRule="evenodd" /></svg>;
});
CubeSolid.displayName = "CubeSolid";
export default CubeSolid;