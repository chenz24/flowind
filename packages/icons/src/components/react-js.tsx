import * as React from "react";
import type { IconProps } from "../types";
const ReactJs = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#61DAFB" d="M18.8 1.2H5.2a4 4 0 0 0-4 4v13.6a4 4 0 0 0 4 4h13.6a4 4 0 0 0 4-4V5.2a4 4 0 0 0-4-4" /><path stroke="#000" d="M12.014 15.283c4.77 0 8.637-1.476 8.637-3.298 0-1.82-3.867-3.297-8.637-3.297s-8.636 1.476-8.636 3.297 3.866 3.298 8.636 3.298Z" /><path stroke="#000" d="M9.158 13.634c2.385 4.131 5.597 6.741 7.174 5.83s.922-4.997-1.462-9.127-5.597-6.742-7.174-5.831c-1.578.91-.923 4.997 1.462 9.128Z" /><path stroke="#000" d="M9.158 10.337c-2.385 4.13-3.04 8.217-1.462 9.128 1.577.91 4.789-1.7 7.174-5.83 2.385-4.132 3.04-8.218 1.462-9.13-1.577-.91-4.789 1.7-7.174 5.831Z" /><path fill="#000" d="M12 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9" /></svg>;
});
ReactJs.displayName = "ReactJs";
export default ReactJs;