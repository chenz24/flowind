import * as React from "react";
import type { IconProps } from "../types";
const BuildingsSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M16.671 4.985V8.73h2.817a1.83 1.83 0 0 1 1.829 1.83v8.39h.03a.9.9 0 1 1 0 1.8H2.763a.9.9 0 0 1 0-1.8h.029V4.986a1.83 1.83 0 0 1 1.829-1.83h10.22a1.83 1.83 0 0 1 1.83 1.83m-4.384 14.078a.78.78 0 0 1-.78-.78v-1.652h-3.55v1.652a.78.78 0 1 1-1.56 0v-2.432c0-.431.35-.78.78-.78h5.11c.43 0 .78.349.78.78v2.432c0 .431-.35.78-.78.78m-5.11-8.01a.9.9 0 0 0 0 1.8h5.11a.9.9 0 0 0 0-1.8zm11.377 8.008a.9.9 0 0 1-.9-.9v-6.208a.9.9 0 1 1 1.8 0v6.208a.9.9 0 0 1-.9.9M7.177 7.082a.9.9 0 0 0 0 1.8h5.11a.9.9 0 0 0 0-1.8z" clipRule="evenodd" /></svg>;
});
BuildingsSolid.displayName = "BuildingsSolid";
export default BuildingsSolid;