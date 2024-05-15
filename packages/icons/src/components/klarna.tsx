import * as React from "react";
import type { IconProps } from "../types";
const Klarna = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#FFB3C7" d="M12 22.8c5.965 0 10.8-4.835 10.8-10.8S17.965 1.2 12 1.2 1.2 6.035 1.2 12 6.035 22.8 12 22.8" /><path fill="#000" d="M14.45 7.364h-1.968a4.99 4.99 0 0 1-2.015 4.024l-.769.571 2.991 4.076h2.454l-2.752-3.729a6.88 6.88 0 0 0 2.058-4.942M9.449 7.364H7.453v8.681H9.45z" /><path fill="#000" d="M16.456 13.552a1.314 1.314 0 1 0-.002 2.628 1.314 1.314 0 0 0 .002-2.628" /></svg>;
});
Klarna.displayName = "Klarna";
export default Klarna;