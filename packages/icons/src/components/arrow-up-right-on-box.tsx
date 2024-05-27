import * as React from "react";
import type { IconProps } from "../types";
const ArrowUpRightOnBox = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.864 6.392H5.691a2.103 2.103 0 0 0-2.103 2.103v9.814a2.103 2.103 0 0 0 2.103 2.103h9.814a2.103 2.103 0 0 0 2.103-2.103v-5.084m-9.204 2.392L20.412 3.588m0 0h-4.907m4.907 0v4.907" /></svg>;
});
ArrowUpRightOnBox.displayName = "ArrowUpRightOnBox";
export default ArrowUpRightOnBox;