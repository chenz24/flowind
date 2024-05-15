import * as React from "react";
import type { IconProps } from "../types";
const InformationCircleSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0m-8.4-4.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0m-2.4 3.6a.9.9 0 1 0 0 1.8h.303a.3.3 0 0 1 .293.365l-.55 2.479A2.1 2.1 0 0 0 12.895 18h.304a.9.9 0 1 0 0-1.8h-.304a.3.3 0 0 1-.293-.365l.551-2.479a2.1 2.1 0 0 0-2.05-2.556z" clipRule="evenodd" /></svg>;
});
InformationCircleSolid.displayName = "InformationCircleSolid";
export default InformationCircleSolid;