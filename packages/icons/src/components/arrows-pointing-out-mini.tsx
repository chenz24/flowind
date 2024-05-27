import * as React from "react";
import type { IconProps } from "../types";
const ArrowsPointingOutMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.4 18.6V15m0 3.6H9m-3.6 0 4.2-4.2m9-9H15m3.6 0V9m0-3.6-4.2 4.2" /></svg>;
});
ArrowsPointingOutMini.displayName = "ArrowsPointingOutMini";
export default ArrowsPointingOutMini;