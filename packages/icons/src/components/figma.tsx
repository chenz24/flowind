import * as React from "react";
import type { IconProps } from "../types";
const Figma = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#1ABCFE" d="M12 12a2.97 2.97 0 1 1 5.939 0A2.97 2.97 0 0 1 12 12" /><path fill="#0ACF83" d="M6.061 17.939a2.97 2.97 0 0 1 2.97-2.97H12v2.97a2.97 2.97 0 0 1-5.94 0" /><path fill="#FF7262" d="M12 3.092V9.03h2.97a2.97 2.97 0 1 0 0-5.938z" /><path fill="#F24E1E" d="M6.061 6.061a2.97 2.97 0 0 0 2.97 2.97H12V3.09H9.03a2.97 2.97 0 0 0-2.97 2.97" /><path fill="#A259FF" d="M6.061 12a2.97 2.97 0 0 0 2.97 2.97H12V9.03H9.03A2.97 2.97 0 0 0 6.06 12" /></svg>;
});
Figma.displayName = "Figma";
export default Figma;