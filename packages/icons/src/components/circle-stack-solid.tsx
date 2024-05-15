import * as React from "react";
import type { IconProps } from "../types";
const CircleStackSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875" /><path fill={color} d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.3 8.3 0 0 0 1.897-1.384q.024.182.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875q0-.186.025-.368a8.3 8.3 0 0 0 1.897 1.384c1.887 1.023 4.393 1.61 7.078 1.61" /><path fill={color} d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.3 8.3 0 0 0 1.897-1.384q.024.182.025.368c0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875q0-.186.025-.368a8.3 8.3 0 0 0 1.897 1.384c1.887 1.023 4.393 1.61 7.078 1.61" /><path fill={color} d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.3 8.3 0 0 0 1.897-1.384q.024.182.025.368c0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875q0-.186.025-.368a8.3 8.3 0 0 0 1.897 1.384c1.887 1.023 4.393 1.61 7.078 1.61" /></svg>;
});
CircleStackSolid.displayName = "CircleStackSolid";
export default CircleStackSolid;