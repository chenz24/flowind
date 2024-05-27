import * as React from "react";
import type { IconProps } from "../types";
const CashSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M1.2 4.8a1.2 1.2 0 0 1 1.2-1.2h19.2a1.2 1.2 0 0 1 1.2 1.2v9.6a1.2 1.2 0 0 1-1.2 1.2H2.4a1.2 1.2 0 0 1-1.2-1.2zm14.4 4.8a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0M4.8 10.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4m15.6-1.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0M2.1 17.4a.9.9 0 1 0 0 1.8c5.3 0 10.432.724 15.299 2.076 1.333.37 2.701-.614 2.701-2.035v-.94a.9.9 0 1 0-1.8 0v.94a.325.325 0 0 1-.42.3A58.9 58.9 0 0 0 2.1 17.4" clipRule="evenodd" /></svg>;
});
CashSolid.displayName = "CashSolid";
export default CashSolid;