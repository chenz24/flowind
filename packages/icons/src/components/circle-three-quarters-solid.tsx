import * as React from "react";
import type { IconProps } from "../types";
const CircleThreeQuartersSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><circle cx={12} cy={12} r={7.25} stroke={color} strokeWidth={1.5} /><path fill={color} d="M12 17a5 5 0 0 0 0-10v5H7c0 2.739 2.31 5 5 5" /></svg>;
});
CircleThreeQuartersSolid.displayName = "CircleThreeQuartersSolid";
export default CircleThreeQuartersSolid;