import * as React from "react";
import type { IconProps } from "../types";
const Stripe = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#6772E5" fillRule="evenodd" d="M10.553 7.866c0-.873.727-1.211 1.901-1.211 1.944.042 3.85.535 5.57 1.441V2.824a14.8 14.8 0 0 0-5.57-1.023c-4.526 0-7.562 2.37-7.562 6.33 0 6.194 8.506 5.188 8.506 7.857 0 1.045-.893 1.368-2.149 1.368-1.852 0-4.244-.766-6.12-1.786v5.341a15.5 15.5 0 0 0 6.12 1.29c4.653 0 7.86-2.3 7.86-6.327 0-6.684-8.556-5.49-8.556-8.007" clipRule="evenodd" /></svg>;
});
Stripe.displayName = "Stripe";
export default Stripe;