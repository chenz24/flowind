import * as React from "react";
import type { IconProps } from "../types";
const LockClosedSolidMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M15.467 12a.8.8 0 0 1-.8-.8V7.733A2.67 2.67 0 0 0 12 5.067a2.67 2.67 0 0 0-2.667 2.666V11.2a.8.8 0 0 1-1.6 0V7.733A4.27 4.27 0 0 1 12 3.467a4.27 4.27 0 0 1 4.267 4.266V11.2a.8.8 0 0 1-.8.8" /><path fill={color} d="M16 10.4H8a2.936 2.936 0 0 0-2.933 2.933V17.6A2.936 2.936 0 0 0 8 20.533h8a2.936 2.936 0 0 0 2.933-2.933v-4.267A2.936 2.936 0 0 0 16 10.4M12.8 16a.8.8 0 0 1-1.6 0v-1.067a.8.8 0 0 1 1.6 0z" /></svg>;
});
LockClosedSolidMini.displayName = "LockClosedSolidMini";
export default LockClosedSolidMini;