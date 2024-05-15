import * as React from "react";
import type { IconProps } from "../types";
const Beaker = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.59L5 14.5M9.75 3.104q-.377.034-.75.082m.75-.082c1.497-.14 3.003-.14 4.5 0M5 14.5l.77-.193A9.07 9.07 0 0 1 12 15a9.07 9.07 0 0 0 6.23.693l1.57-.393M5 14.5l-2.202 2.203c-1.233 1.23-.651 3.317 1.067 3.61A48 48 0 0 0 12 21a48.3 48.3 0 0 0 8.135-.687c1.717-.293 2.299-2.38 1.067-3.611L19.8 15.3M14.25 3.104v5.714c0 .597.237 1.17.659 1.59L19.8 15.3M14.25 3.104q.377.034.75.082" /></svg>;
});
Beaker.displayName = "Beaker";
export default Beaker;