import * as React from "react";
import type { IconProps } from "../types";
const PaperClip = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m20.5 11.438-8.037 8.026a5.254 5.254 0 0 1-7.425 0 5.24 5.24 0 0 1 0-7.414l8.037-8.026a3.503 3.503 0 0 1 5.976 2.471c0 .927-.37 1.816-1.026 2.472L9.98 16.993a1.751 1.751 0 0 1-2.987-1.236c0-.463.184-.908.512-1.236l7.425-7.406" /></svg>;
});
PaperClip.displayName = "PaperClip";
export default PaperClip;