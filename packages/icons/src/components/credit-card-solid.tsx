import * as React from "react";
import type { IconProps } from "../types";
const CreditCardSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M4.771 4.048A2.89 2.89 0 0 0 1.88 6.939v.723h20.24V6.94a2.89 2.89 0 0 0-2.891-2.891z" /><path fill={color} fillRule="evenodd" d="M22.12 9.832H1.88v7.229a2.89 2.89 0 0 0 2.891 2.892H19.23a2.89 2.89 0 0 0 2.892-2.892zM4.772 13.446a.723.723 0 0 1 .723-.722h5.783a.723.723 0 1 1 0 1.445H5.494a.723.723 0 0 1-.723-.723m.723 2.17a.723.723 0 0 0 0 1.445h2.892a.723.723 0 0 0 0-1.446z" clipRule="evenodd" /></svg>;
});
CreditCardSolid.displayName = "CreditCardSolid";
export default CreditCardSolid;