import * as React from "react";
import type { IconProps } from "../types";
const Cash = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.4 17.96a59.1 59.1 0 0 1 15.554 2.07c.716.194 1.43-.337 1.43-1.08v-.99M3.878 3.93v.738a.74.74 0 0 1-.739.739H2.4m0 0v-.37c0-.61.496-1.107 1.108-1.107h16.615M2.4 5.407v8.861M20.123 3.93v.738c0 .408.33.739.738.739h.739M20.123 3.93h.37c.61 0 1.107.496 1.107 1.108v9.6c0 .611-.496 1.107-1.108 1.107h-.369M2.4 14.268v.37a1.11 1.11 0 0 0 1.108 1.107h.369M2.4 14.268h.738a.74.74 0 0 1 .739.739v.738m16.246 0v-.738a.74.74 0 0 1 .738-.739h.739m-1.477 1.477H3.877m11.077-5.907a2.954 2.954 0 1 1-5.908 0 2.954 2.954 0 0 1 5.908 0m2.954 0h.008v.008h-.008zm-11.816 0H6.1v.008h-.008z" /></svg>;
});
Cash.displayName = "Cash";
export default Cash;