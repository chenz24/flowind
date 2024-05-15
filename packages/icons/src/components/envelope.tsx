import * as React from "react";
import type { IconProps } from "../types";
const Envelope = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.075 7.114v9.773a2.094 2.094 0 0 1-2.094 2.094H5.019a2.094 2.094 0 0 1-2.094-2.094V7.114m18.15 0a2.094 2.094 0 0 0-2.094-2.095H5.019a2.094 2.094 0 0 0-2.094 2.095m18.15 0v.226a2.1 2.1 0 0 1-.996 1.783l-6.98 4.296a2.09 2.09 0 0 1-2.197 0L3.92 9.124a2.1 2.1 0 0 1-.996-1.783v-.227" /></svg>;
});
Envelope.displayName = "Envelope";
export default Envelope;