import * as React from "react";
import type { IconProps } from "../types";
const ToolsSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} fillRule="evenodd" d="M11.997 7.276a4.724 4.724 0 0 1 6.097-4.522.674.674 0 0 1 .282 1.123l-2.988 2.987a2.02 2.02 0 0 0 1.747 1.745l2.986-2.987a.675.675 0 0 1 1.123.282 4.724 4.724 0 0 1-4.924 6.08c-.917-.078-1.683.09-2.078.57L7.807 20.37a2.968 2.968 0 1 1-4.18-4.178l7.816-6.436c.48-.396.648-1.161.57-2.078a5 5 0 0 1-.016-.402M4.903 18.413a.675.675 0 0 1 .675-.675h.007a.675.675 0 0 1 .675.675v.007a.675.675 0 0 1-.675.675h-.007a.675.675 0 0 1-.675-.675z" clipRule="evenodd" /><path fill={color} d="m10.266 8.977-1.981-1.98v-1.41a.68.68 0 0 0-.328-.578L4.582 2.984a.675.675 0 0 0-.824.102l-.675.675a.675.675 0 0 0-.102.824L5.006 7.96a.68.68 0 0 0 .579.328h1.407l1.856 1.855z" /><path fill={color} fillRule="evenodd" d="m12.497 16.797 3.765 3.763a3.035 3.035 0 0 0 4.954-.985 3.04 3.04 0 0 0-.659-3.31l-2.975-2.975a6 6 0 0 1-1.377.04c-.354-.031-.614-.006-.78.037a.5.5 0 0 0-.15.057zm3.073-1.224a.675.675 0 0 1 .954 0l1.687 1.688a.676.676 0 0 1-.472 1.169.68.68 0 0 1-.482-.215l-1.687-1.687a.675.675 0 0 1 0-.954z" clipRule="evenodd" /></svg>;
});
ToolsSolid.displayName = "ToolsSolid";
export default ToolsSolid;