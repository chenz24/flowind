import * as React from "react";
import type { IconProps } from "../types";
const CircleMiniFilledSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><circle cx={12} cy={12} r={5.25} stroke={color} strokeWidth={1.5} /><circle cx={12} cy={12} r={3} fill={color} /></svg>;
});
CircleMiniFilledSolid.displayName = "CircleMiniFilledSolid";
export default CircleMiniFilledSolid;