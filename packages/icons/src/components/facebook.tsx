import * as React from "react";
import type { IconProps } from "../types";
const Facebook = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="url(#a)" fillRule="evenodd" d="M1.2 12c0 5.346 3.888 9.774 9.018 10.692l.064-.052-.01-.002v-7.614h-2.7V12h2.7V9.624c0-2.7 1.728-4.212 4.212-4.212.756 0 1.62.108 2.376.216v2.754h-1.404c-1.296 0-1.62.648-1.62 1.512V12h2.862l-.486 3.024h-2.376v7.614l-.099.017.045.037C18.912 21.774 22.8 17.346 22.8 12c0-5.94-4.86-10.8-10.8-10.8S1.2 6.06 1.2 12" clipRule="evenodd" /><defs><linearGradient id="a" x1={12.001} x2={12.001} y1={22.049} y2={1.196} gradientUnits="userSpaceOnUse"><stop stopColor="#0062E0" /><stop offset={1} stopColor="#19AFFF" /></linearGradient></defs></svg>;
});
Facebook.displayName = "Facebook";
export default Facebook;