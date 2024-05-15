import * as React from "react";
import type { IconProps } from "../types";
const ClockSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M2.1 12c0-5.468 4.432-9.9 9.9-9.9s9.9 4.432 9.9 9.9-4.432 9.9-9.9 9.9-9.9-4.432-9.9-9.9M12 6.25a.75.75 0 0 1 .75.75v4.82l2.628 1.532a.75.75 0 1 1-.756 1.296l-3-1.75a.75.75 0 0 1-.372-.648V7a.75.75 0 0 1 .75-.75" clipRule="evenodd" /></svg>;
});
ClockSolid.displayName = "ClockSolid";
export default ClockSolid;