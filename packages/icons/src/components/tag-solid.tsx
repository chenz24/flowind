import * as React from "react";
import type { IconProps } from "../types";
const TagSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M5.738 2.4A3.34 3.34 0 0 0 2.4 5.738v3.845c0 .885.352 1.733.977 2.36l8.68 8.679a3.34 3.34 0 0 0 4.722 0l3.843-3.843a3.34 3.34 0 0 0 0-4.722l-8.68-8.68A3.34 3.34 0 0 0 9.584 2.4zm.668 5.341a1.335 1.335 0 1 0 0-2.67 1.335 1.335 0 0 0 0 2.67" clipRule="evenodd" /></svg>;
});
TagSolid.displayName = "TagSolid";
export default TagSolid;