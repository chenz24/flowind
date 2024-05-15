import * as React from "react";
import type { IconProps } from "../types";
const ChannelsSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M14.879 4.125a2.926 2.926 0 0 1 5.709.9 2.925 2.925 0 0 1-5.71.9h-1.491a.9.9 0 0 0-.9.9V11.1h2.392a2.926 2.926 0 0 1 5.709.9 2.925 2.925 0 0 1-5.71.9h-2.391v4.275a.9.9 0 0 0 .9.9h1.492a2.926 2.926 0 0 1 5.709.9 2.925 2.925 0 0 1-5.71.9h-1.491a2.7 2.7 0 0 1-2.7-2.7V12.9h-2.39a2.926 2.926 0 0 1-5.71-.9 2.925 2.925 0 0 1 5.71-.9h2.39V6.825a2.7 2.7 0 0 1 2.7-2.7z" clipRule="evenodd" /></svg>;
});
ChannelsSolid.displayName = "ChannelsSolid";
export default ChannelsSolid;