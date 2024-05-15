import * as React from "react";
import type { IconProps } from "../types";
const PlayMiniSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M6 6.922a1.5 1.5 0 0 1 2.223-1.314l9.232 5.078a1.5 1.5 0 0 1 0 2.628l-9.231 5.078a1.5 1.5 0 0 1-2.223-1.314z" clipRule="evenodd" /></svg>;
});
PlayMiniSolid.displayName = "PlayMiniSolid";
export default PlayMiniSolid;