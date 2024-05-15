import * as React from "react";
import type { IconProps } from "../types";
const BuildingStorefront = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349a3 3 0 0 0 .621-4.72l-1.19-1.189a1.5 1.5 0 0 0-1.06-.44H5.378a1.5 1.5 0 0 0-1.06.44L3.129 4.628a3.004 3.004 0 0 0 .621 4.72m0 11.651V9.35a3 3 0 0 0 3.75-.615A3 3 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3 3 0 0 0 3.75.614m-13.5 8.651h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .415.336.749.75.749" /></svg>;
});
BuildingStorefront.displayName = "BuildingStorefront";
export default BuildingStorefront;