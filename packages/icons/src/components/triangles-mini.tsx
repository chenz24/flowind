import * as React from "react";
import type { IconProps } from "../types";
const TrianglesMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M9.41 10.25c-.163 0-.323-.037-.464-.108a.85.85 0 0 1-.334-.293.7.7 0 0 1-.112-.397.7.7 0 0 1 .142-.39l2.59-3.454c.082-.11.195-.2.33-.263a1.04 1.04 0 0 1 .876 0 .9.9 0 0 1 .33.263l2.59 3.455a.7.7 0 0 1 .141.39.7.7 0 0 1-.111.396.85.85 0 0 1-.335.293c-.14.07-.3.108-.464.108zM14.59 13.75c.163 0 .323.037.463.108.14.07.256.172.335.293a.7.7 0 0 1 .111.397.7.7 0 0 1-.141.39l-2.59 3.454a.9.9 0 0 1-.33.263 1.04 1.04 0 0 1-.876 0 .9.9 0 0 1-.33-.263l-2.59-3.455a.7.7 0 0 1-.142-.39.7.7 0 0 1 .112-.396.85.85 0 0 1 .335-.293c.14-.07.3-.108.463-.108z" /></svg>;
});
TrianglesMini.displayName = "TrianglesMini";
export default TrianglesMini;