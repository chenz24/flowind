import * as React from "react";
import type { IconProps } from "../types";
const Text = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.086 14.826h7.793M6.99 5.788 2.24 16.804M11.726 16.804 6.99 5.788M21.761 10.141v6.646M20.782 11.103a3.341 3.341 0 1 1-4.725 4.725 3.341 3.341 0 0 1 4.725-4.725" /></svg>;
});
Text.displayName = "Text";
export default Text;