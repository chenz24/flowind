import * as React from "react";
import type { IconProps } from "../types";
const AcademicCapSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M11.615 2.316a.86.86 0 0 1 .77 0 47 47 0 0 1 9.4 6.219.861.861 0 0 1-.292 1.473 36 36 0 0 0-9.011 4.391.86.86 0 0 1-.963 0 36 36 0 0 0-2.385-1.475v-1.35c0-.28.133-.53.346-.678a41 41 0 0 1 3.79-2.331.86.86 0 0 0-.82-1.513A42 42 0 0 0 8.5 9.483a2.54 2.54 0 0 0-1.086 2.09v.436a36 36 0 0 0-4.907-2.002.86.86 0 0 1-.291-1.473 47 47 0 0 1 9.399-6.219zm-4.2 11.626a34 34 0 0 0-2.816-1.328 47 47 0 0 0-.447 3.57.86.86 0 0 0 .48.849q.909.44 1.782.94-.359.558-.847 1.048a.86.86 0 1 0 1.215 1.215 8 8 0 0 0 1.101-1.368c1.247.81 2.433 1.71 3.548 2.692a.86.86 0 0 0 1.138 0 30.4 30.4 0 0 1 6.798-4.529.86.86 0 0 0 .482-.847 47 47 0 0 0-.447-3.57 34.3 34.3 0 0 0-5.96 3.211 2.58 2.58 0 0 1-2.883 0q-.704-.473-1.433-.913a8 8 0 0 1-1.243 3.956q-.721-.469-1.469-.895a6.3 6.3 0 0 0 1-3.411z" clipRule="evenodd" /></svg>;
});
AcademicCapSolid.displayName = "AcademicCapSolid";
export default AcademicCapSolid;