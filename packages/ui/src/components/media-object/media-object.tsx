import React, { forwardRef } from 'react';

import { DefaultProps, Selectors, useComponentDefaultProps } from '@/styles';
import { createPolymorphicComponent } from '@/utils/create-polymorphic-component';
import useStyles, { MediaObjectStylesParams } from './media-object.styles';

export type MediaObjectStylesNames = Selectors<typeof useStyles>;

export interface MediaObjectProps
  extends DefaultProps<MediaObjectStylesNames, MediaObjectStylesParams> {
  /**
   * title.
   */
  title?: React.ReactNode;
  /**
   * description.
   */
  description?: React.ReactNode;
  /**
   * image.
   */
  image?: React.ReactNode;
}

const defaultProps: Partial<MediaObjectProps> = {};

const _MediaObject = forwardRef<HTMLDivElement, MediaObjectProps>((props, ref) => {
  const { className, classNames, style, image, title, description, ...others } =
    useComponentDefaultProps('mediaObject', defaultProps, props);

  const { classes, styls, cx } = useStyles({}, { classNames, name: 'MediaObject' });

  return (
    <div
      className={cx(classes.root, className)}
      style={{ ...styls.root, ...style }}
      ref={ref}
      {...others}
    >
      {image && (
        <div className={classes.image} style={styls.image}>
          {image}
        </div>
      )}
      <div className={classes.main} style={styls.main}>
        <h4 className={classes.title} style={styls.title}>
          {title}
        </h4>
        {description && (
          <p className={classes.description} style={styls.description}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
});

export const MediaObject = createPolymorphicComponent<'div', MediaObjectProps>(_MediaObject);
