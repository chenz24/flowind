import * as React from "react";
import type { IconProps } from "../types";
const Snooze = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.2 9.473h5.477l-4.983 6.008H20M7 15.36h4.59l-4.106 4.949h4.37-4.37M4 3.441h6.627l-6.132 7.392h6.476" /></svg>;
});
Snooze.displayName = "Snooze";
export default Snooze;