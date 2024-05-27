import * as React from "react";
import type { IconProps } from "../types";
const Google = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#4280EF" d="M22.586 12.258c0-.73-.07-1.483-.188-2.189h-10.19v4.166h5.837a4.9 4.9 0 0 1-2.165 3.27l3.482 2.707c2.048-1.906 3.224-4.683 3.224-7.954" /><path fill="#34A353" d="M12.209 22.802c2.918 0 5.365-.965 7.154-2.612l-3.483-2.683c-.965.66-2.212 1.036-3.671 1.036-2.824 0-5.2-1.906-6.071-4.448L2.56 16.848a10.79 10.79 0 0 0 9.648 5.954" /><path fill="#F6B704" d="M6.138 14.07a6.56 6.56 0 0 1 0-4.141L2.56 7.152a10.82 10.82 0 0 0 0 9.696z" /><path fill="#E54335" d="M12.209 5.481a5.9 5.9 0 0 1 4.142 1.624l3.082-3.106a10.4 10.4 0 0 0-7.224-2.8 10.79 10.79 0 0 0-9.648 5.953l3.577 2.777c.87-2.565 3.247-4.448 6.071-4.448" /></svg>;
});
Google.displayName = "Google";
export default Google;