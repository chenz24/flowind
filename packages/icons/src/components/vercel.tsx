import * as React from "react";
import type { IconProps } from "../types";
const Vercel = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#000" d="M11.12 3.023A9.2 9.2 0 0 0 6.355 4.98C5.9 5.346 5.157 6.11 4.83 6.546a9.2 9.2 0 0 0-1.752 4.2 11 11 0 0 0-.053 2.023c.148 1.525.634 2.933 1.425 4.133 1.457 2.214 3.684 3.633 6.301 4.02.517.077 1.506.102 2.023.052 1.523-.147 2.93-.633 4.13-1.425 2.213-1.457 3.63-3.685 4.018-6.304.077-.518.102-1.507.052-2.024-.179-1.845-.837-3.478-1.962-4.876-.366-.454-1.13-1.196-1.566-1.524a9.2 9.2 0 0 0-4.197-1.753c-.426-.063-1.713-.091-2.129-.045m3.198 8.264a848 848 0 0 1 2.22 3.897c0 .007-2.001.014-4.45.014s-4.45-.007-4.45-.017c0-.028 4.443-7.8 4.454-7.787.003.004 1.01 1.757 2.226 3.893" /></svg>;
});
Vercel.displayName = "Vercel";
export default Vercel;