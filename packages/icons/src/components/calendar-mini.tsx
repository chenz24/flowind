import * as React from "react";
import type { IconProps } from "../types";
const CalendarMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.8 4.8v1.8m8.4-1.8v1.8M4.8 17.4v-9a1.8 1.8 0 0 1 1.8-1.8h10.8a1.8 1.8 0 0 1 1.8 1.8v9m-14.4 0a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8m-14.4 0v-6a1.8 1.8 0 0 1 1.8-1.8h10.8a1.8 1.8 0 0 1 1.8 1.8v6" /><path stroke={color} strokeWidth={0.75} d="M9.525 13.041a.525.525 0 1 1-1.05 0 .525.525 0 0 1 1.05 0ZM9.525 15.833a.525.525 0 1 1-1.05 0 .525.525 0 0 1 1.05 0ZM15.525 13.041a.525.525 0 1 1-1.05 0 .525.525 0 0 1 1.05 0ZM12.525 13.041a.525.525 0 1 1-1.05 0 .525.525 0 0 1 1.05 0ZM12.525 15.833a.525.525 0 1 1-1.05 0 .525.525 0 0 1 1.05 0Z" /></svg>;
});
CalendarMini.displayName = "CalendarMini";
export default CalendarMini;