import * as React from "react";
import type { IconProps } from "../types";
const Tailwind = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><mask id="a" width={22} height={14} x={1} y={5} maskUnits="userSpaceOnUse" style={{
      maskType: "luminance"
    }}><path fill="#fff" d="M1.2 5.52h21.6v12.96H1.2z" /></mask><g mask="url(#a)"><path fill="#38BDF8" fillRule="evenodd" d="M12 5.52q-4.32 0-5.4 4.32 1.62-2.16 3.78-1.62c.822.205 1.409.802 2.059 1.461C13.498 10.756 14.723 12 17.4 12q4.32 0 5.4-4.32-1.62 2.16-3.78 1.62c-.822-.205-1.409-.802-2.059-1.461C15.902 6.764 14.677 5.52 12 5.52M6.6 12q-4.32 0-5.4 4.32 1.62-2.16 3.78-1.62c.822.206 1.409.802 2.059 1.461C8.098 17.236 9.323 18.48 12 18.48q4.32 0 5.4-4.32-1.62 2.16-3.78 1.62c-.822-.205-1.409-.802-2.059-1.461C10.502 13.244 9.277 12 6.6 12" clipRule="evenodd" /></g></svg>;
});
Tailwind.displayName = "Tailwind";
export default Tailwind;