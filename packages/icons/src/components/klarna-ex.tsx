import * as React from "react";
import type { IconProps } from "../types";
const KlarnaEx = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M22.8 12c0 5.965-4.835 10.8-10.8 10.8S1.2 17.965 1.2 12 6.035 1.2 12 1.2 22.8 6.035 22.8 12M9.449 7.364H7.453v8.681H9.45zm5 0h-1.967a4.99 4.99 0 0 1-2.015 4.024l-.769.571 2.99 4.076h2.455l-2.752-3.729a6.88 6.88 0 0 0 2.058-4.942m1.277 6.409a1.314 1.314 0 1 1 1.458 2.186 1.314 1.314 0 0 1-1.459-2.186" clipRule="evenodd" /></svg>;
});
KlarnaEx.displayName = "KlarnaEx";
export default KlarnaEx;