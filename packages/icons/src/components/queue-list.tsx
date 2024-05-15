import * as React from "react";
import type { IconProps } from "../types";
const QueueList = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 1 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75" /></svg>;
});
QueueList.displayName = "QueueList";
export default QueueList;