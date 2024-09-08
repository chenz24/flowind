import * as React from "react";
import type { IconProps } from "../types";
const ChevronDoubleLeftMiniSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M18.948 17.724a.9.9 0 0 1-1.272.024l-5.4-5.1a.9.9 0 0 1 0-1.296l5.4-5.1a.899.899 0 1 1 1.248 1.296L14.198 12l4.726 4.452a.9.9 0 0 1 .024 1.272m-7.2 0a.9.9 0 0 1-1.272.024l-5.4-5.1a.9.9 0 0 1 0-1.296l5.4-5.1a.899.899 0 1 1 1.248 1.296L6.998 12l4.726 4.452a.9.9 0 0 1 .024 1.272" clipRule="evenodd" /></svg>;
});
ChevronDoubleLeftMiniSolid.displayName = "ChevronDoubleLeftMiniSolid";
export default ChevronDoubleLeftMiniSolid;