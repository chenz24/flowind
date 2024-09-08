import * as React from "react";
import type { IconProps } from "../types";
const GlobeEurope = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m20.893 13.393-1.135-1.135a2.3 2.3 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.83.83 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .41-.11.81-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.26a2.25 2.25 0 0 1-1.383-2.46l.007-.043a2.3 2.3 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.126 1.126 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18a.94.94 0 0 0-.662.274.931.931 0 0 1-1.458-1.137l1.411-2.353a2.3 2.3 0 0 0 .286-.76m11.928 9.87A9 9 0 1 0 3.11 10.6a9 9 0 0 0 17.783 2.792" /></svg>;
});
GlobeEurope.displayName = "GlobeEurope";
export default GlobeEurope;