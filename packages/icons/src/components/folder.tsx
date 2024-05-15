import * as React from "react";
import type { IconProps } from "../types";
const Folder = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.99 12.693V12a2.08 2.08 0 0 1 2.08-2.08h13.86A2.08 2.08 0 0 1 21.01 12v.693m-8.03-5.95-1.96-1.96a1.39 1.39 0 0 0-.98-.406H5.07a2.08 2.08 0 0 0-2.08 2.079v11.088a2.08 2.08 0 0 0 2.08 2.08h13.86a2.08 2.08 0 0 0 2.08-2.08V9.228a2.08 2.08 0 0 0-2.08-2.08h-4.97c-.368 0-.72-.146-.98-.406" /></svg>;
});
Folder.displayName = "Folder";
export default Folder;