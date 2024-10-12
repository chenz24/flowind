import React, { cloneElement } from 'react';

import { upperFirst } from '@flowind/hooks';
import { useComponentDefaultProps } from '@/styles';
import { isElement } from '@/utils/is-element/is-element';
import { DropzoneContextValue, useDropzoneContext } from './dropzone-context';

export interface DropzoneStatusProps {
  // eslint-disable-next-line react/no-unused-prop-types
  children: React.ReactNode;
}

function createDropzoneStatus(status: keyof DropzoneContextValue) {
  const Component = (props: DropzoneStatusProps): JSX.Element => {
    const { children, ...others } = useComponentDefaultProps(
      `Dropzone${upperFirst(status)}`,
      {},
      props,
    );

    const ctx = useDropzoneContext();
    const _children = isElement(children) ? children : <span>{children}</span>;

    if (ctx[status]) {
      return cloneElement(_children, others);
    }

    return null;
  };

  Component.displayName = `dropzone-${upperFirst(status)}`;

  return Component;
}

export const DropzoneAccept = createDropzoneStatus('accept');
export const DropzoneReject = createDropzoneStatus('reject');
export const DropzoneIdle = createDropzoneStatus('idle');

export type DropzoneAcceptProps = DropzoneStatusProps;
export type DropzoneRejectProps = DropzoneStatusProps;
export type DropzoneIdleProps = DropzoneStatusProps;
