import * as React from "react";
import type { IconProps } from "../types";
const TriangleRightMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M9.5 9.41c0-.163.037-.323.108-.464a.85.85 0 0 1 .293-.334.7.7 0 0 1 .397-.112.7.7 0 0 1 .39.142l3.454 2.59c.11.082.2.195.263.33a1.04 1.04 0 0 1 0 .876.9.9 0 0 1-.263.33l-3.455 2.59a.7.7 0 0 1-.39.141.7.7 0 0 1-.396-.111.85.85 0 0 1-.293-.335c-.07-.14-.108-.3-.108-.464z" /></svg>;
});
TriangleRightMini.displayName = "TriangleRightMini";
export default TriangleRightMini;