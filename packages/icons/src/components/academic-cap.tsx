import * as React from "react";
import type { IconProps } from "../types";
const AcademicCap = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60 60 0 0 0-.491 6.347A48.6 48.6 0 0 1 12 20.904a48.6 48.6 0 0 1 8.232-4.41 61 61 0 0 0-.491-6.347m0 0a51 51 0 0 1 2.658-.814A60 60 0 0 0 12 3.493a60 60 0 0 0-10.399 5.84A50.6 50.6 0 0 1 12 13.49a51 51 0 0 1 7.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 0v-3.675A55 55 0 0 1 12 8.443m-7.007 11.55A5.98 5.98 0 0 0 6.75 15.75v-1.5" /></svg>;
});
AcademicCap.displayName = "AcademicCap";
export default AcademicCap;