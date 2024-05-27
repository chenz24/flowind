import * as React from "react";
import type { IconProps } from "../types";
const Loader = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M12 7.2a.9.9 0 0 1-.9-.9v-3a.9.9 0 0 1 1.8 0v3a.9.9 0 0 1-.9.9" /><path fill={color} d="M16.03 8.869a.9.9 0 0 1-.636-1.537l2.122-2.122a.9.9 0 1 1 1.274 1.273l-2.122 2.122a.9.9 0 0 1-.637.264" opacity={0.88} /><path fill={color} d="M20.7 12.9h-3a.9.9 0 0 1 0-1.8h3a.9.9 0 0 1 0 1.8" opacity={0.75} /><path fill={color} d="M18.151 19.051a.9.9 0 0 1-.636-.264l-2.121-2.121a.9.9 0 1 1 1.273-1.274l2.121 2.122a.9.9 0 0 1-.637 1.537" opacity={0.63} /><path fill={color} d="M12 21.6a.9.9 0 0 1-.9-.9v-3a.9.9 0 0 1 1.8 0v3a.9.9 0 0 1-.9.9" opacity={0.5} /><path fill={color} d="M5.849 19.051a.9.9 0 0 1-.636-1.537l2.121-2.122a.9.9 0 1 1 1.274 1.274l-2.122 2.121a.9.9 0 0 1-.637.264" opacity={0.38} /><path fill={color} d="M6.3 12.9h-3a.9.9 0 0 1 0-1.8h3a.9.9 0 0 1 0 1.8" opacity={0.25} /><path fill={color} d="M7.97 8.869a.9.9 0 0 1-.637-.264L5.212 6.483A.9.9 0 1 1 6.485 5.21l2.121 2.122a.9.9 0 0 1-.636 1.537" opacity={0.13} /></svg>;
});
Loader.displayName = "Loader";
export default Loader;