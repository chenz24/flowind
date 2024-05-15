import * as React from "react";
import type { IconProps } from "../types";
const Hashtag = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" /></svg>;
});
Hashtag.displayName = "Hashtag";
export default Hashtag;