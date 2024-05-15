import * as React from "react";
import type { IconProps } from "../types";
const ClockSolidMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M4.8 12a7.2 7.2 0 1 1 14.4 0 7.2 7.2 0 0 1-14.4 0M12 7.05a.75.75 0 0 1 .75.75v3.872l3.041.803a.75.75 0 1 1-.382 1.45l-3.6-.95a.75.75 0 0 1-.559-.725V7.8a.75.75 0 0 1 .75-.75" clipRule="evenodd" /></svg>;
});
ClockSolidMini.displayName = "ClockSolidMini";
export default ClockSolidMini;