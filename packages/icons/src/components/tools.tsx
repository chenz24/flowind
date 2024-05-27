import * as React from "react";
import type { IconProps } from "../types";
const Tools = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m11.43 15.118 5.738 5.739a2.61 2.61 0 0 0 3.692-3.691l-5.785-5.786m-3.645 3.738 2.457-2.983c.311-.378.728-.616 1.189-.754.541-.161 1.144-.185 1.715-.137a4.43 4.43 0 0 0 4.416-6.237l-3.225 3.225a2.96 2.96 0 0 1-2.214-2.214l3.224-3.225a4.43 4.43 0 0 0-6.237 4.416c.09 1.059-.07 2.228-.89 2.904l-.1.083m-.335 4.922-4.583 5.565a2.509 2.509 0 1 1-3.53-3.53l6.73-5.542-4.042-4.043H4.618L2.403 3.877 3.879 2.4l3.692 2.215v1.387l4.193 4.193-1.717 1.415m8.229 6.663-2.584-2.584M4.979 19.011h.008v.008h-.008z" /></svg>;
});
Tools.displayName = "Tools";
export default Tools;