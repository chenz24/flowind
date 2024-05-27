import * as React from "react";
import type { IconProps } from "../types";
const Eye = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /><path fill={color} fillRule="evenodd" d="M.797 12.708a1.98 1.98 0 0 1 0-1.423A12.005 12.005 0 0 1 12 3.6c5.108 0 9.472 3.192 11.203 7.692.177.457.175.965 0 1.423A12.005 12.005 0 0 1 12 20.4c-5.108 0-9.472-3.192-11.203-7.692M16.8 12a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0" clipRule="evenodd" /></svg>;
});
Eye.displayName = "Eye";
export default Eye;