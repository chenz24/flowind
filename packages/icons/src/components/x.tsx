import * as React from "react";
import type { IconProps } from "../types";
const X = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#000" fillRule="evenodd" d="M3 3.563h5.906l4.201 5.861 5.08-5.861h2.25l-6.311 7.282L21 20.438h-5.906l-4.201-5.862-5.08 5.861h-2.25l6.311-7.282zM15.96 18.75 6.285 5.25H8.04l9.675 13.5z" clipRule="evenodd" /></svg>;
});
X.displayName = "X";
export default X;