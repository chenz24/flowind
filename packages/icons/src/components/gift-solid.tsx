import * as React from "react";
import type { IconProps } from "../types";
const GiftSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M16.8 7.2A3 3 0 1 0 12 3.6a3 3 0 0 0-4.8 3.6H3.9a1.5 1.5 0 0 0-1.5 1.5v.6a1.5 1.5 0 0 0 1.5 1.5h7.2V7.2h1.8v3.6h7.2a1.5 1.5 0 0 0 1.5-1.5v-.6a1.5 1.5 0 0 0-1.5-1.5zm-1.2-1.8a1.2 1.2 0 0 1-1.2 1.2h-1.2V5.4a1.2 1.2 0 0 1 2.4 0m-7.2 0a1.2 1.2 0 0 0 1.2 1.2h1.2V5.4a1.2 1.2 0 1 0-2.4 0" clipRule="evenodd" /><path fill={color} d="M11.1 12.6H3.6v5.7a3.3 3.3 0 0 0 3.3 3.3h4.2zm1.8 9v-9h7.5v5.7a3.3 3.3 0 0 1-3.3 3.3z" /></svg>;
});
GiftSolid.displayName = "GiftSolid";
export default GiftSolid;