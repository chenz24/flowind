import * as React from "react";
import type { IconProps } from "../types";
const ReplaySolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M19.363 7.37c0-1.04-1.08-1.7-1.963-1.199l-8.15 4.63c-.916.52-.916 1.878 0 2.397l8.15 4.63c.883.502 1.963-.157 1.963-1.198z" clipRule="evenodd" /><rect width={2.4} height={12} x={4.637} y={6} fill={color} rx={1} /></svg>;
});
ReplaySolid.displayName = "ReplaySolid";
export default ReplaySolid;