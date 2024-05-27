import * as React from "react";
import type { IconProps } from "../types";
const EllipsisHorizontal = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeWidth={1.5} d="M4.35 12a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0Zm6.6 0a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0Zm6.908-.742a1.05 1.05 0 1 1 1.484 1.485 1.05 1.05 0 0 1-1.484-1.485Z" /></svg>;
});
EllipsisHorizontal.displayName = "EllipsisHorizontal";
export default EllipsisHorizontal;