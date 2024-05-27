import * as React from "react";
import type { IconProps } from "../types";
const BuildingsMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.69 18.318v-7.433a.743.743 0 0 0-.744-.743h-2.973M5.31 18.318V6.425a.743.743 0 0 1 .743-.743h8.177a.743.743 0 0 1 .743.743v11.893M8.097 8.823h4.088M8.097 12h4.088" /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.097 18.318h4.089v-3.2H8.096zM19.433 18.318H4.567" /></svg>;
});
BuildingsMini.displayName = "BuildingsMini";
export default BuildingsMini;