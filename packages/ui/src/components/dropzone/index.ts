import { Dropzone as _Dropzone } from './dropzone';
import { DropzoneFullScreen } from './dropzone-fullscreen';

_Dropzone.FullScreen = DropzoneFullScreen;
export const Dropzone = _Dropzone;

export type { DropzoneStylesNames, DropzoneProps } from './dropzone';
export type { DropzoneFullScreenProps, DropzoneFullScreenStylesName } from './dropzone-fullscreen';
export type {
  DropzoneAcceptProps,
  DropzoneRejectProps,
  DropzoneIdleProps,
} from './dropzone-status';
export * from './mime-types';
export type { FileWithPath, FileRejection } from 'react-dropzone';
