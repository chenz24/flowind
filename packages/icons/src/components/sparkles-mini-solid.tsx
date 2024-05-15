import * as React from "react";
import type { IconProps } from "../types";
const SparklesMiniSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M10 7a.5.5 0 0 1 .48.363l.542 1.897a2.5 2.5 0 0 0 1.717 1.718l1.898.542a.5.5 0 0 1 0 .961l-1.898.542a2.5 2.5 0 0 0-1.717 1.718l-.542 1.897a.5.5 0 0 1-.961 0l-.542-1.898a2.5 2.5 0 0 0-1.718-1.717l-1.897-.542a.5.5 0 0 1 0-.961l1.897-.542A2.5 2.5 0 0 0 8.977 9.26l.542-1.897A.5.5 0 0 1 9.999 7m6-2a.5.5 0 0 1 .485.38l.172.69a1.75 1.75 0 0 0 1.273 1.273l.69.172a.5.5 0 0 1 0 .97l-.69.173a1.75 1.75 0 0 0-1.273 1.273l-.172.69a.5.5 0 0 1-.971 0l-.172-.69a1.75 1.75 0 0 0-1.273-1.273l-.691-.172a.5.5 0 0 1 0-.97l.69-.173a1.75 1.75 0 0 0 1.274-1.273l.172-.69a.5.5 0 0 1 .485-.38m-1 9a.5.5 0 0 1 .474.342l.263.79a1 1 0 0 0 .632.631l.788.263a.5.5 0 0 1 0 .948l-.788.264a1 1 0 0 0-.632.632l-.264.788a.5.5 0 0 1-.948 0l-.263-.788a1 1 0 0 0-.632-.632l-.789-.264a.5.5 0 0 1 0-.948l.789-.263a1 1 0 0 0 .632-.632l.263-.789a.5.5 0 0 1 .474-.341" clipRule="evenodd" /></svg>;
});
SparklesMiniSolid.displayName = "SparklesMiniSolid";
export default SparklesMiniSolid;