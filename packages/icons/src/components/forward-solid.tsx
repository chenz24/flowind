import * as React from "react";
import type { IconProps } from "../types";
const ForwardSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M5.055 6.31c-1.25-.714-2.805.19-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 13.721v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.06c1.26-.72 1.26-2.537 0-3.257L14.805 6.31C13.555 5.596 12 6.5 12 7.938v2.34z" /></svg>;
});
ForwardSolid.displayName = "ForwardSolid";
export default ForwardSolid;