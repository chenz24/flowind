import * as React from "react";
import type { IconProps } from "../types";
const ClockChangedSolidMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M4.8 12a7.2 7.2 0 1 1 14.4 0 7.2 7.2 0 0 1-14.4 0m6.742-.344a.75.75 0 0 1 .65-.131l3.6.95a.75.75 0 1 1-.383 1.45l-2.659-.701V16.2a.75.75 0 0 1-1.5 0v-3.95a.75.75 0 0 1 .292-.594" clipRule="evenodd" /></svg>;
});
ClockChangedSolidMini.displayName = "ClockChangedSolidMini";
export default ClockChangedSolidMini;