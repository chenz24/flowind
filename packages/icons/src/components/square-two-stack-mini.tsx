import * as React from "react";
import type { IconProps } from "../types";
const SquareTwoStackMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.931 8.724V6.758a1.965 1.965 0 0 0-1.965-1.965H6.758a1.966 1.966 0 0 0-1.965 1.965v7.208a1.966 1.966 0 0 0 1.965 1.965h1.966m7.207-7.207h1.31a1.966 1.966 0 0 1 1.966 1.966v6.552a1.966 1.966 0 0 1-1.965 1.965H10.69a1.966 1.966 0 0 1-1.966-1.965v-1.31m7.207-7.208H10.69a1.966 1.966 0 0 0-1.966 1.966v5.241" /></svg>;
});
SquareTwoStackMini.displayName = "SquareTwoStackMini";
export default SquareTwoStackMini;