import * as React from "react";
import type { IconProps } from "../types";
const LightBulbSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M12 2.175a7.205 7.205 0 0 0-3.611 13.44c.599.348.974.88.99 1.418a.655.655 0 0 0 .504.616q.461.11.938.17a.47.47 0 0 0 .524-.474v-4.071q-.415-.045-.818-.15a.657.657 0 0 1-.17-1.198.65.65 0 0 1 .496-.07 4.6 4.6 0 0 0 2.294 0 .655.655 0 1 1 .326 1.268q-.404.105-.818.15v4.07a.47.47 0 0 0 .524.476q.476-.062.938-.17a.654.654 0 0 0 .504-.617c.017-.537.391-1.07.99-1.418A7.204 7.204 0 0 0 12 2.175" /><path fill={color} fillRule="evenodd" d="M9.391 18.9a.655.655 0 0 1 .766-.522 9.9 9.9 0 0 0 3.686 0 .655.655 0 1 1 .244 1.286c-1.379.262-2.795.262-4.174 0a.655.655 0 0 1-.522-.765m.648 2.134a.654.654 0 0 1 .72-.584 12 12 0 0 0 2.483 0 .655.655 0 1 1 .136 1.303c-.916.096-1.84.096-2.756 0a.656.656 0 0 1-.583-.72" clipRule="evenodd" /></svg>;
});
LightBulbSolid.displayName = "LightBulbSolid";
export default LightBulbSolid;