import * as React from "react";
import type { IconProps } from "../types";
const EyeSlashMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.584 8.978A8.4 8.4 0 0 0 3.948 12a8.405 8.405 0 0 0 10.343 5.684M7.383 7.382a8.405 8.405 0 0 1 12.67 4.616 8.42 8.42 0 0 1-3.435 4.62M7.383 7.382 4.8 4.8m2.583 2.582 2.92 2.92m6.315 6.316L19.2 19.2m-2.582-2.582-2.92-2.92a2.398 2.398 0 0 0-.779-3.915 2.4 2.4 0 0 0-2.615.52m3.393 3.394-3.393-3.393" /></svg>;
});
EyeSlashMini.displayName = "EyeSlashMini";
export default EyeSlashMini;