import * as React from "react";
import type { IconProps } from "../types";
const BoltSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M14.44 1.892a.72.72 0 0 1 .305.354c.061.15.072.317.03.474l-1.859 7.094H19.7a.7.7 0 0 1 .384.12.72.72 0 0 1 .258.318.76.76 0 0 1-.13.788l-9.8 10.928a.677.677 0 0 1-.853.14.72.72 0 0 1-.305-.355.76.76 0 0 1-.03-.475l1.86-7.093H4.3a.7.7 0 0 1-.384-.12.7.7 0 0 1-.258-.318.76.76 0 0 1 .13-.788l9.8-10.928a.677.677 0 0 1 .852-.139" clipRule="evenodd" /></svg>;
});
BoltSolid.displayName = "BoltSolid";
export default BoltSolid;