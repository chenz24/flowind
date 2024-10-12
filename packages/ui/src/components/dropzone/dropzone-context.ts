import { createSafeContext } from '@/utils/create-safe-context/create-safe-context';

export interface DropzoneContextValue {
  idle: boolean;
  accept: boolean;
  reject: boolean;
}

export const [DropzoneProvider, useDropzoneContext] = createSafeContext<DropzoneContextValue>(
  'Dropzone component was not found in tree',
);
