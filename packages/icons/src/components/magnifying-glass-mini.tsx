import * as React from "react";
import type { IconProps } from "../types";
const MagnifyingGlassMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19.2 19.2-4.157-4.157m0 0a6 6 0 1 0-8.485-8.485 6 6 0 0 0 8.485 8.485" /></svg>;
});
MagnifyingGlassMini.displayName = "MagnifyingGlassMini";
export default MagnifyingGlassMini;