import * as React from "react";
import type { IconProps } from "../types";
const RocketLaunchSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M5.853 15.384a.855.855 0 0 1-.152 1.198 2.84 2.84 0 0 0-1.06 2.777 2.84 2.84 0 0 0 2.777-1.06.854.854 0 1 1 1.351 1.046 4.55 4.55 0 0 1-5.107 1.518.86.86 0 0 1-.525-.525 4.55 4.55 0 0 1 1.518-5.108.855.855 0 0 1 1.198.153z" clipRule="evenodd" /><path fill={color} fillRule="evenodd" d="M7.16 14.279a15 15 0 0 0 2.561 2.562v4.56c0 .472.383.855.855.855a5.698 5.698 0 0 0 5.466-7.31 14.8 14.8 0 0 0 6.21-12.361.855.855 0 0 0-.837-.838 14.8 14.8 0 0 0-12.363 6.21 5.698 5.698 0 0 0-7.308 5.467.857.857 0 0 0 .856.855zm8.259-3.419a2.28 2.28 0 1 0 0-4.558 2.28 2.28 0 0 0 0 4.558" clipRule="evenodd" /></svg>;
});
RocketLaunchSolid.displayName = "RocketLaunchSolid";
export default RocketLaunchSolid;