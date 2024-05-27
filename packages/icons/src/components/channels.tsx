import * as React from "react";
import type { IconProps } from "../types";
const Channels = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.638 5.025a2.025 2.025 0 1 0 4.05 0 2.025 2.025 0 0 0-4.05 0m0 0h-2.251a1.8 1.8 0 0 0-1.8 1.8v10.35a1.8 1.8 0 0 0 1.8 1.8h2.25M7.538 12a2.025 2.025 0 1 1-4.05 0 2.025 2.025 0 0 1 4.05 0m0 0h8.1m0 6.975a2.025 2.025 0 1 0 4.05 0 2.025 2.025 0 0 0-4.05 0M19.688 12a2.025 2.025 0 1 1-4.05 0 2.025 2.025 0 0 1 4.05 0" /></svg>;
});
Channels.displayName = "Channels";
export default Channels;