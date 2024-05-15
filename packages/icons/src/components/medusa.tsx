import * as React from "react";
import type { IconProps } from "../types";
const Medusa = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#09090B" d="m19.494 4.706-4.891-2.814a5.16 5.16 0 0 0-5.162 0L4.527 4.706a5.2 5.2 0 0 0-2.57 4.457v5.65a5.17 5.17 0 0 0 2.57 4.458l4.891 2.837c1.6.923 3.562.923 5.162 0l4.891-2.837a5.12 5.12 0 0 0 2.57-4.457v-5.65c.045-1.824-.947-3.535-2.547-4.458M12.01 17.02A5.03 5.03 0 0 1 6.984 12a5.03 5.03 0 0 1 5.027-5.02c2.772 0 5.048 2.251 5.048 5.02s-2.254 5.02-5.049 5.02" /></svg>;
});
Medusa.displayName = "Medusa";
export default Medusa;