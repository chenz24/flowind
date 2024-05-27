import * as React from "react";
import type { IconProps } from "../types";
const Javascript = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#F7DF1E" d="M18.8 1.2H5.2a4 4 0 0 0-4 4v13.6a4 4 0 0 0 4 4h13.6a4 4 0 0 0 4-4V5.2a4 4 0 0 0-4-4" /><path fill="#000" d="M14.325 16.738c.44.717 1.012 1.244 2.025 1.244.85 0 1.394-.424 1.394-1.01 0-.703-.558-.952-1.494-1.36l-.514-.22c-1.481-.63-2.466-1.418-2.466-3.086 0-1.536 1.174-2.706 3.007-2.706 1.306 0 2.244.453 2.92 1.64L17.6 12.264c-.352-.63-.732-.878-1.322-.878-.601 0-.982.381-.982.878 0 .615.381.864 1.262 1.244l.514.22c1.744.746 2.729 1.507 2.729 3.217 0 1.845-1.452 2.855-3.402 2.855-1.907 0-3.14-.907-3.742-2.095zm-7.254.178c.323.57.616 1.053 1.322 1.053.674 0 1.1-.263 1.1-1.287V9.717h2.053v6.993c0 2.12-1.246 3.086-3.066 3.086-1.644 0-2.596-.849-3.08-1.87z" /></svg>;
});
Javascript.displayName = "Javascript";
export default Javascript;