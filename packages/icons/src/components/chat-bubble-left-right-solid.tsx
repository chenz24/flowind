import * as React from "react";
import type { IconProps } from "../types";
const ChatBubbleLeftRightSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M4.913 2.658a49.272 49.272 0 0 1 12.674 0c1.922.25 3.291 1.861 3.405 3.727a4.4 4.4 0 0 0-1.032-.211 51 51 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48 48 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.719 3.413-3.98" /><path fill={color} d="M15.75 7.5q-2.065 0-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94q1.865.153 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49 49 0 0 0 15.75 7.5" /></svg>;
});
ChatBubbleLeftRightSolid.displayName = "ChatBubbleLeftRightSolid";
export default ChatBubbleLeftRightSolid;