import * as React from "react";
import type { IconProps } from "../types";
const InboxSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M12 2.4a.9.9 0 0 1 .9.9v6.708l2.34-2.52a.9.9 0 0 1 1.32 1.224l-3.9 4.2a.9.9 0 0 1-1.32 0l-3.9-4.2a.9.9 0 1 1 1.32-1.224l2.34 2.52V3.3a.9.9 0 0 1 .9-.9" /><path fill={color} d="M6.328 5.4a1.5 1.5 0 0 0-1.446 1.102l-1.828 6.624q-.01.036-.018.074H7.2a1.2 1.2 0 0 1 1.073.664l.537 1.072a1.2 1.2 0 0 0 1.073.664h4.126a1.2 1.2 0 0 0 1.032-.588l.727-1.224A1.2 1.2 0 0 1 16.8 13.2h4.164l-.018-.074-1.828-6.624A1.5 1.5 0 0 0 17.672 5.4H16.5a.9.9 0 0 1 0-1.8h1.172a3.3 3.3 0 0 1 3.182 2.423l1.827 6.624q.12.432.119.878V18a2.4 2.4 0 0 1-2.4 2.4H3.6A2.4 2.4 0 0 1 1.2 18v-4.476c0-.295.04-.59.119-.876l1.827-6.625A3.3 3.3 0 0 1 6.328 3.6H7.5a.9.9 0 1 1 0 1.8z" /></svg>;
});
InboxSolid.displayName = "InboxSolid";
export default InboxSolid;