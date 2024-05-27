import * as React from "react";
import type { IconProps } from "../types";
const Gatsby = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#639" d="M12 22.8c5.965 0 10.8-4.835 10.8-10.8S17.965 1.2 12 1.2 1.2 6.035 1.2 12 6.035 22.8 12 22.8" /><path fill="#fff" d="M5.983 18.017c-1.62-1.62-2.469-3.78-2.469-5.863l8.409 8.332c-2.16-.077-4.32-.849-5.94-2.469m7.868 2.237L3.746 10.15C4.594 6.369 7.988 3.514 12 3.514c2.854 0 5.323 1.389 6.866 3.472l-1.158 1.003C16.397 6.214 14.314 5.057 12 5.057c-3.009 0-5.554 1.929-6.557 4.629l8.871 8.871c2.237-.771 3.934-2.7 4.474-5.014h-3.702V12h5.4c0 4.011-2.855 7.406-6.635 8.254" /></svg>;
});
Gatsby.displayName = "Gatsby";
export default Gatsby;