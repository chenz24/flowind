import * as React from "react";
import type { IconProps } from "../types";
const DocumentText = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.215v-2.584c0-.882-.356-1.727-.988-2.35a3.4 3.4 0 0 0-2.387-.973h-1.5c-.298 0-.585-.117-.796-.325A1.1 1.1 0 0 1 13.5 7.2V5.723c0-.881-.356-1.726-.989-2.35a3.4 3.4 0 0 0-2.386-.973H8.25m0 12.554h7.5m-7.5 2.954H12M10.5 2.4H5.625c-.621 0-1.125.496-1.125 1.108v16.984c0 .612.504 1.108 1.125 1.108h12.75c.621 0 1.125-.496 1.125-1.108v-9.23c0-2.35-.948-4.605-2.636-6.266A9.07 9.07 0 0 0 10.5 2.4" /></svg>;
});
DocumentText.displayName = "DocumentText";
export default DocumentText;