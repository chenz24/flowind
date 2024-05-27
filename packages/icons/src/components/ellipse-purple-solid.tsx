import * as React from "react";
import type { IconProps } from "../types";
const EllipsePurpleSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><g filter="url(#a)"><rect width={10} height={10} x={7} y={7} fill="#fff" rx={5} /><circle cx={12} cy={12} r={3} fill="#7C3AED" /></g><defs><filter id="a" width={14} height={14} x={5} y={6} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feMorphology in="SourceAlpha" operator="dilate" radius={1} result="effect1_dropShadow_3645_3437" /><feOffset /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix values="0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0 0.0431373 0 0 0 0.08 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3645_3437" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy={1} /><feGaussianBlur stdDeviation={1} /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix values="0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0 0.0431373 0 0 0 0.12 0" /><feBlend in2="effect1_dropShadow_3645_3437" result="effect2_dropShadow_3645_3437" /><feBlend in="SourceGraphic" in2="effect2_dropShadow_3645_3437" result="shape" /></filter></defs></svg>;
});
EllipsePurpleSolid.displayName = "EllipsePurpleSolid";
export default EllipsePurpleSolid;