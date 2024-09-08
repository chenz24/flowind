import * as React from "react";
import type { IconProps } from "../types";
const CheckCircleMiniSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m3.757-8.404a.75.75 0 1 0-1.248-.832l-3.252 4.879-1.86-1.86a.75.75 0 1 0-1.06 1.06l2.506 2.507a.75.75 0 0 0 1.154-.114z" clipRule="evenodd" /></svg>;
});
CheckCircleMiniSolid.displayName = "CheckCircleMiniSolid";
export default CheckCircleMiniSolid;