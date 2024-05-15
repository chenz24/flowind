import * as React from "react";
import type { IconProps } from "../types";
const QuestionMark = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.44 7.515c1.17-1.025 3.07-1.025 4.242 0s1.172 2.687 0 3.712c-.203.179-.43.326-.67.442-.745.36-1.45.999-1.45 1.827v.75m-.002 3h.008v.008h-.008z" /></svg>;
});
QuestionMark.displayName = "QuestionMark";
export default QuestionMark;