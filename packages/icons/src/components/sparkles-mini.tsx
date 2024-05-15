import * as React from "react";
import type { IconProps } from "../types";
const SparklesMini = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.542 14.603 10 16.5l-.542-1.897a3 3 0 0 0-2.06-2.06L5.5 12l1.897-.542a3 3 0 0 0 2.06-2.06L10 7.5l.542 1.897a3 3 0 0 0 2.06 2.06L14.5 12l-1.897.542a3 3 0 0 0-2.06 2.06zm5.63-4.793L16 10.5l-.173-.69a2.25 2.25 0 0 0-1.636-1.637L13.5 8l.69-.173a2.25 2.25 0 0 0 1.637-1.637L16 5.5l.173.69a2.25 2.25 0 0 0 1.637 1.637L18.5 8l-.69.173a2.25 2.25 0 0 0-1.637 1.637m-.91 7.901L15 18.5l-.263-.789a1.5 1.5 0 0 0-.948-.948L13 16.5l.789-.263a1.5 1.5 0 0 0 .948-.948L15 14.5l.263.789a1.5 1.5 0 0 0 .948.948L17 16.5l-.789.263a1.5 1.5 0 0 0-.948.948" /></svg>;
});
SparklesMini.displayName = "SparklesMini";
export default SparklesMini;