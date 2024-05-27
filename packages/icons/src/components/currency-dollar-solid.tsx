import * as React from "react";
import type { IconProps } from "../types";
const CurrencyDollarSolid = React.forwardRef<SVGSVGElement, IconProps>(({
  color = "currentColor",
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill={color} d="M12.9 12.982v3.136a3.8 3.8 0 0 0 1.366-.518c.578-.378.734-.778.734-1.05s-.156-.672-.734-1.05a3.8 3.8 0 0 0-1.366-.518m-2.904-2.638q.096.1.22.197c.25.192.553.34.884.435V7.924a3 3 0 0 0-.42.156 2.4 2.4 0 0 0-.463.28c-.453.35-.617.752-.617 1.09 0 .22.07.468.242.71q.067.093.154.184" /><path fill={color} fillRule="evenodd" d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0M12 4.8a.9.9 0 0 1 .9.9v.38c.72.12 1.4.414 1.984.855.51.396.892.888 1.11 1.44a.9.9 0 0 1-1.674.66c-.115-.27-.3-.503-.537-.676a2.6 2.6 0 0 0-.883-.435v3.236c.838.112 1.66.384 2.35.835.945.617 1.549 1.524 1.549 2.556s-.605 1.94-1.548 2.556c-.691.453-1.513.724-2.352.835v.36a.9.9 0 0 1-1.8 0v-.36c-.837-.111-1.659-.382-2.35-.835-.578-.378-1.028-.86-1.293-1.425a.9.9 0 1 1 1.63-.764c.096.208.294.452.648.683.376.246.848.424 1.366.519v-3.298a4.54 4.54 0 0 1-1.984-.856C8.28 11.32 7.8 10.417 7.8 9.45c0-.966.48-1.87 1.316-2.515a4.54 4.54 0 0 1 1.984-.856V5.7a.9.9 0 0 1 .9-.9" clipRule="evenodd" /></svg>;
});
CurrencyDollarSolid.displayName = "CurrencyDollarSolid";
export default CurrencyDollarSolid;