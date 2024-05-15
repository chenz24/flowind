import * as React from "react";
import type { IconProps } from "../types";
const EllipsisVertical = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeWidth={1.5} d="M12 4.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Zm0 6.6a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Zm.742 6.908a1.05 1.05 0 1 1-1.485 1.484 1.05 1.05 0 0 1 1.486-1.484Z" /></svg>;
});
EllipsisVertical.displayName = "EllipsisVertical";
export default EllipsisVertical;