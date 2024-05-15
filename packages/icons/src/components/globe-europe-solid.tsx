import * as React from "react";
import type { IconProps } from "../types";
const GlobeEuropeSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0m-1.804.245A7.799 7.799 0 1 1 9.54 4.596L8.312 6.744a1.744 1.744 0 0 0 2.292 2.424l.21-.104a.6.6 0 0 1 .27-.064h.174a.6.6 0 0 1 .537.869l-.034.066a.48.48 0 0 1-.428.265h-.603a2.71 2.71 0 0 0-2.256 1.207l-.052.08a2.52 2.52 0 0 0 1.302 3.787.7.7 0 0 1 .476.656v1.26a1.41 1.41 0 0 0 2.512.88l1.933-2.416c.23-.288.355-.643.355-1.01 0-.38.154-.75.424-1.02a1.635 1.635 0 0 0 .207-2.06l-.557-.835a.443.443 0 0 1 .633-.599l.411.309c.38.284.886.33 1.31.117a.7.7 0 0 1 .812.132z" clipRule="evenodd" /></svg>;
});
GlobeEuropeSolid.displayName = "GlobeEuropeSolid";
export default GlobeEuropeSolid;