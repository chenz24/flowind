import * as React from "react";
import type { IconProps } from "../types";
const Lifebuoy = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.712 4.33a9 9 0 0 1 2.958 2.958M16.712 4.33l-3.448 4.138m3.448-4.138a9.01 9.01 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.01 9.01 0 0 1 0 9.424m-6.406-8.244c.522.187.996.487 1.388.88.393.392.693.866.88 1.388m-2.268-2.268a3.77 3.77 0 0 0-2.528 0M7.288 4.33l3.448 4.138M7.288 4.33A9 9 0 0 0 4.33 7.288m11.202 3.448c.291.817.291 1.71 0 2.528m4.138 3.448-4.138-3.448m4.138 3.448a9 9 0 0 1-2.958 2.958m-1.18-6.406a3.75 3.75 0 0 1-2.268 2.268m-2.528-7.064a3.754 3.754 0 0 0-2.268 2.268m4.796 4.796 3.448 4.138m-3.448-4.138a3.76 3.76 0 0 1-2.528 0m5.976 4.138a9.01 9.01 0 0 1-9.424 0m0 0 3.448-4.138M7.288 19.67a9 9 0 0 1-2.958-2.958m6.406-1.18a3.7 3.7 0 0 1-1.388-.88 3.7 3.7 0 0 1-.88-1.388m0 0L4.33 16.712m4.138-3.448a3.77 3.77 0 0 1 0-2.528M4.33 16.712a9.01 9.01 0 0 1 0-9.424m0 0 4.138 3.448" /></svg>;
});
Lifebuoy.displayName = "Lifebuoy";
export default Lifebuoy;