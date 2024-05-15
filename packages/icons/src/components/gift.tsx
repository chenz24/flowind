import * as React from "react";
import type { IconProps } from "../types";
const Gift = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.178 11.64v7.92c0 .382-.15.748-.417 1.018s-.628.422-1.005.422H5.244c-.377 0-.739-.152-1.005-.422a1.45 1.45 0 0 1-.417-1.018v-7.92m7.822-6.12c0-.498-.146-.986-.42-1.4a2.5 2.5 0 0 0-1.116-.928 2.46 2.46 0 0 0-2.712.546 2.55 2.55 0 0 0-.54 2.746c.188.46.507.854.917 1.131.409.277.89.425 1.382.425h2.49m0-2.52v2.52m0-2.52c0-.498.145-.986.419-1.4a2.5 2.5 0 0 1 1.117-.928 2.46 2.46 0 0 1 2.712.546 2.55 2.55 0 0 1 .54 2.746c-.189.46-.508.854-.917 1.131s-.89.425-1.383.425h-2.489m0 0V21m-8.177-9.36h17.066c.589 0 1.067-.484 1.067-1.08V9.12c0-.596-.478-1.08-1.067-1.08H3.467c-.59 0-1.067.484-1.067 1.08v1.44c0 .596.478 1.08 1.067 1.08" /></svg>;
});
Gift.displayName = "Gift";
export default Gift;