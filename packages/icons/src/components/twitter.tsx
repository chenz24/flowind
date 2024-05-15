import * as React from "react";
import type { IconProps } from "../types";
const Twitter = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#1DA1F2" d="M22.31 5.199q-.51.225-1.044.38a4.6 4.6 0 0 0 .94-1.653.348.348 0 0 0-.51-.406 8.2 8.2 0 0 1-2.43.96 4.66 4.66 0 0 0-3.245-1.322 4.642 4.642 0 0 0-4.6 5.236A11.87 11.87 0 0 1 3.275 4.07a.348.348 0 0 0-.571.045 4.64 4.64 0 0 0-.628 2.331c0 1.118.399 2.178 1.103 3.006a4 4 0 0 1-.62-.277.348.348 0 0 0-.518.296v.062c0 1.668.897 3.17 2.27 3.988a4 4 0 0 1-.353-.051.348.348 0 0 0-.397.448 4.64 4.64 0 0 0 3.396 3.108 8.2 8.2 0 0 1-4.385 1.252 8 8 0 0 1-.982-.058.349.349 0 0 0-.229.64 12.5 12.5 0 0 0 6.762 1.981c4.721 0 7.674-2.226 9.32-4.093 2.053-2.33 3.23-5.411 3.23-8.457q0-.191-.005-.384a9 9 0 0 0 2.074-2.197.349.349 0 0 0-.43-.512" /></svg>;
});
Twitter.displayName = "Twitter";
export default Twitter;