import * as React from "react";
import type { IconProps } from "../types";
const Typescript = React.forwardRef<SVGSVGElement, Omit<IconProps, "color">>(({
  size = '1rem',
  ...props
}, ref) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} width={size} height={size} {...props}><path fill="#3178C6" d="M18.8 1.2H5.2a4 4 0 0 0-4 4v13.6a4 4 0 0 0 4 4h13.6a4 4 0 0 0 4-4V5.2a4 4 0 0 0-4-4" /><path fill="#fff" fillRule="evenodd" d="M13.538 17.049v2.2a4.1 4.1 0 0 0 1.182.413q.681.138 1.437.138.735 0 1.399-.151.663-.151 1.162-.499.5-.347.79-.908.292-.56.292-1.386a3 3 0 0 0-.167-1.049q-.165-.45-.48-.8a3.6 3.6 0 0 0-.752-.63 8 8 0 0 0-.99-.526q-.403-.18-.723-.348a3.6 3.6 0 0 1-.544-.344 1.5 1.5 0 0 1-.346-.371.82.82 0 0 1-.121-.444q0-.226.109-.409a1 1 0 0 1 .307-.313q.198-.13.486-.203.29-.072.64-.072.257 0 .542.041a4 4 0 0 1 1.133.344q.272.13.503.303V9.978a4.7 4.7 0 0 0-1.022-.285 8 8 0 0 0-1.27-.093q-.73 0-1.383.168a3.4 3.4 0 0 0-1.15.527q-.495.357-.784.911-.288.554-.288 1.324 0 .984.528 1.678t1.604 1.176q.423.186.787.365.366.18.631.371.265.193.42.42a.9.9 0 0 1 .153.516.84.84 0 0 1-.387.711q-.195.135-.487.21-.29.076-.682.076a3.7 3.7 0 0 1-1.319-.251 3.9 3.9 0 0 1-1.21-.753m-3.443-5.423h2.628V9.82H5.4v1.806h2.614v8.042h2.081z" clipRule="evenodd" /></svg>;
});
Typescript.displayName = "Typescript";
export default Typescript;