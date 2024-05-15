import * as React from "react";
import type { IconProps } from "../types";
const Sanity = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#F03E2F" d="M8.545 8.483a4.3 4.3 0 0 1-.624-.51c-.685-.683-1.035-1.55-1.035-2.676v-.432C8.024 3.697 9.779 3 11.87 3c4.045 0 6.386 2.1 6.963 5.055h-3.67c-.404-1.165-1.417-2.073-3.263-2.073-1.817 0-3.102.957-3.355 2.5M6.512 5.296c0 2.427 1.526 3.872 4.58 4.633l3.236.737c2.891.653 4.65 2.273 4.65 4.913a4.96 4.96 0 0 1-1.077 3.18c0-2.634-1.387-4.058-4.732-4.913l-3.177-.71c-2.545-.57-4.508-1.902-4.508-4.77a4.93 4.93 0 0 1 1.028-3.07m9.373 10.067c-.22 1.676-1.57 2.621-3.524 2.621-1.735 0-3.036-.71-3.527-2.242H5.02C5.638 19.08 8.418 21 12.39 21c2.121 0 3.958-.652 5.137-1.83v-.412c0-1.245-.324-2.157-1.006-2.862a4 4 0 0 0-.635-.532z" /></svg>;
});
Sanity.displayName = "Sanity";
export default Sanity;