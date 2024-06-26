import * as React from "react";
import type { IconProps } from "../types";
const SquareOrangeSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><g filter="url(#a)"><rect width={8} height={8} x={8} y={8} fill="#D97706" rx={2} /></g><defs><filter id="a" width={8} height={8} x={8} y={8} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feMorphology in="SourceAlpha" radius={1} result="effect1_innerShadow_6166_954" /><feOffset /><feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" /><feBlend in2="shape" result="effect1_innerShadow_6166_954" /></filter></defs></svg>;
});
SquareOrangeSolid.displayName = "SquareOrangeSolid";
export default SquareOrangeSolid;