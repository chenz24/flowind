import * as React from "react";
import type { IconProps } from "../types";
const Mastercard = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#FF5A00" d="M14.914 6.694H9.07v10.612h5.845z" /><path fill="#EB001B" d="M9.458 12A6.8 6.8 0 0 1 12 6.694 6.6 6.6 0 0 0 7.88 5.25C4.187 5.25 1.2 8.269 1.2 12s2.987 6.75 6.68 6.75A6.6 6.6 0 0 0 12 17.306 6.76 6.76 0 0 1 9.458 12" /><path fill="#F79E1B" d="M22.8 12c0 3.731-2.988 6.75-6.68 6.75A6.6 6.6 0 0 1 12 17.306 6.74 6.74 0 0 0 14.542 12 6.8 6.8 0 0 0 12 6.694a6.6 6.6 0 0 1 4.118-1.444c3.695 0 6.682 3.039 6.682 6.75" /></svg>;
});
Mastercard.displayName = "Mastercard";
export default Mastercard;