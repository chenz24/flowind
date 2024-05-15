import * as React from "react";
import type { IconProps } from "../types";
const JavascriptEx = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M5.2 1.2h13.6a4 4 0 0 1 4 4v13.6a4 4 0 0 1-4 4H5.2a4 4 0 0 1-4-4V5.2a4 4 0 0 1 4-4m11.15 16.782c-1.013 0-1.585-.527-2.025-1.244l-1.669.967c.603 1.188 1.835 2.095 3.742 2.095 1.95 0 3.402-1.01 3.402-2.855 0-1.71-.985-2.471-2.73-3.218l-.513-.219c-.88-.38-1.262-.63-1.262-1.244 0-.497.38-.878.982-.878.59 0 .97.248 1.322.878l1.599-1.024c-.677-1.187-1.615-1.64-2.92-1.64-1.834 0-3.008 1.17-3.008 2.706 0 1.668.985 2.456 2.466 3.086l.514.22c.936.408 1.494.657 1.494 1.36 0 .586-.543 1.01-1.394 1.01m-7.957-.013c-.706 0-1-.483-1.322-1.053L5.4 17.926c.484 1.021 1.436 1.87 3.08 1.87 1.82 0 3.066-.965 3.066-3.086V9.717H9.493v6.965c0 1.024-.426 1.287-1.1 1.287" clipRule="evenodd" /></svg>;
});
JavascriptEx.displayName = "JavascriptEx";
export default JavascriptEx;