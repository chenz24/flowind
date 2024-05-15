import * as React from "react";
import type { IconProps } from "../types";
const Slack = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#E01E5A" d="M5.717 14.895c0 1.25-1.01 2.259-2.26 2.259s-2.259-1.01-2.259-2.26 1.01-2.258 2.26-2.258h2.259zm1.13 0c0-1.25 1.009-2.26 2.258-2.26s2.26 1.01 2.26 2.26v5.648c0 1.25-1.01 2.259-2.26 2.259s-2.259-1.01-2.259-2.26z" /><path fill="#36C5F0" d="M9.11 5.709a2.253 2.253 0 0 1-2.256-2.255 2.253 2.253 0 0 1 2.255-2.256 2.253 2.253 0 0 1 2.256 2.256v2.255zm0 1.145a2.253 2.253 0 0 1 2.255 2.255 2.253 2.253 0 0 1-2.256 2.256H3.454a2.253 2.253 0 0 1-2.256-2.256 2.253 2.253 0 0 1 2.256-2.255z" /><path fill="#2EB67D" d="M18.284 9.11a2.255 2.255 0 0 1 2.259-2.256 2.255 2.255 0 1 1 0 4.51h-2.26zm-1.13 0a2.255 2.255 0 0 1-2.26 2.255 2.255 2.255 0 0 1-2.258-2.256V3.454a2.255 2.255 0 0 1 2.259-2.256c1.25 0 2.259 1.008 2.259 2.256z" /><path fill="#ECB22E" d="M14.89 18.284a2.255 2.255 0 0 1 2.256 2.259 2.255 2.255 0 1 1-4.51 0v-2.26zm0-1.13a2.255 2.255 0 0 1-2.254-2.26c0-1.249 1.008-2.258 2.255-2.258h5.656a2.255 2.255 0 0 1 2.255 2.259c0 1.25-1.008 2.259-2.255 2.259z" /></svg>;
});
Slack.displayName = "Slack";
export default Slack;