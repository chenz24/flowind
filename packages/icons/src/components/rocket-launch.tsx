import * as React from "react";
import type { IconProps } from "../types";
const RocketLaunch = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.341 14.206a5.584 5.584 0 0 1-5.435 6.869v-4.468m5.435-2.401a13.94 13.94 0 0 0 5.734-11.281 13.94 13.94 0 0 0-11.28 5.734m5.547 5.547a13.9 13.9 0 0 1-5.436 2.401M9.795 8.66a5.585 5.585 0 0 0-6.87 5.435h4.468M9.795 8.66a13.9 13.9 0 0 0-2.401 5.435m2.512 2.513q-.144.03-.29.056a14 14 0 0 1-2.278-2.278q.026-.146.056-.29m-2.085 2.224a4.18 4.18 0 0 0-1.636 4.008 4.18 4.18 0 0 0 4.008-1.637m8.507-9.482a1.396 1.396 0 1 1-2.791 0 1.396 1.396 0 0 1 2.791 0" /></svg>;
});
RocketLaunch.displayName = "RocketLaunch";
export default RocketLaunch;