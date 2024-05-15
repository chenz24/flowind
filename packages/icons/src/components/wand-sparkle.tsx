import * as React from "react";
import type { IconProps } from "../types";
const WandSparkle = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><g clipPath="url(#a)"><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.929 4.071 4.057 16.943c-.521.52-.521 1.365 0 1.886l1.114 1.114c.52.52 1.365.52 1.886 0L19.929 7.071c.52-.52.52-1.365 0-1.886l-1.115-1.114a1.333 1.333 0 0 0-1.885 0M13.85 7.15l3 3" /><path fill={color} d="m9.657 4.656-1.261-.42-.421-1.263c-.136-.408-.812-.408-.948 0l-.422 1.263-1.261.42a.5.5 0 0 0 0 .95l1.261.42.422 1.262a.499.499 0 0 0 .946 0l.422-1.263 1.261-.42a.5.5 0 0 0 .001-.95M22.21 15.987l-1.683-.562-.562-1.684c-.182-.544-1.082-.544-1.265 0l-.561 1.684-1.684.562a.667.667 0 0 0 0 1.264l1.684.56.561 1.685a.668.668 0 0 0 1.267 0l.561-1.684 1.684-.561a.667.667 0 0 0-.001-1.264M12.333 3.333a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
});
WandSparkle.displayName = "WandSparkle";
export default WandSparkle;