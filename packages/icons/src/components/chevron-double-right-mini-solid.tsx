import * as React from "react";
import type { IconProps } from "../types";
const ChevronDoubleRightMiniSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M12.252 17.724a.9.9 0 0 1 .024-1.272L17.002 12l-4.726-4.452a.901.901 0 1 1 1.248-1.296l5.4 5.1a.9.9 0 0 1 0 1.296l-5.4 5.1a.9.9 0 0 1-1.272-.024" clipRule="evenodd" /><path fill={color} fillRule="evenodd" d="M5.052 17.724a.9.9 0 0 1 .024-1.272L9.802 12 5.076 7.548a.9.9 0 1 1 1.248-1.296l5.4 5.1a.9.9 0 0 1 0 1.296l-5.4 5.1a.9.9 0 0 1-1.272-.024" clipRule="evenodd" /></svg>;
});
ChevronDoubleRightMiniSolid.displayName = "ChevronDoubleRightMiniSolid";
export default ChevronDoubleRightMiniSolid;