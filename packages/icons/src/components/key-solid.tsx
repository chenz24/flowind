import * as React from "react";
import type { IconProps } from "../types";
const KeySolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.749 6.749 0 0 0 20.717 3.69 6.75 6.75 0 0 0 15.75 1.5m0 3a.75.75 0 1 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 1 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75" clipRule="evenodd" /></svg>;
});
KeySolid.displayName = "KeySolid";
export default KeySolid;