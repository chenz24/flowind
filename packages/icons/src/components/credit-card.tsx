import * as React from "react";
import type { IconProps } from "../types";
const CreditCard = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.472 8.336h19.055m-19.055.732h19.055M5.404 13.845h5.8m-5.8 2.553h2.932M4.67 19.33H19.33a2.2 2.2 0 0 0 2.198-2.199V6.87A2.2 2.2 0 0 0 19.33 4.67H4.67A2.2 2.2 0 0 0 2.472 6.87v10.26a2.2 2.2 0 0 0 2.2 2.199" /></svg>;
});
CreditCard.displayName = "CreditCard";
export default CreditCard;