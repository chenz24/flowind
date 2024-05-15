import * as React from "react";
import type { IconProps } from "../types";
const GatsbyEx = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M22.8 12c0 5.965-4.835 10.8-10.8 10.8S1.2 17.965 1.2 12 6.035 1.2 12 1.2 22.8 6.035 22.8 12m-19.286.154c0 2.083.849 4.243 2.469 5.863s3.78 2.392 5.94 2.469zm.232-2.005L13.85 20.254c3.78-.848 6.634-4.243 6.634-8.254h-5.4v1.543h3.703c-.54 2.314-2.237 4.243-4.474 5.014L5.443 9.686C6.446 6.986 8.99 5.057 12 5.057c2.314 0 4.397 1.157 5.708 2.932l1.158-1.003C17.323 4.903 14.854 3.514 12 3.514c-4.012 0-7.406 2.855-8.254 6.635" clipRule="evenodd" /></svg>;
});
GatsbyEx.displayName = "GatsbyEx";
export default GatsbyEx;