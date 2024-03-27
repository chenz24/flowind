import React, { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { useId } from '@flowind/hooks';
import { DefaultProps, FlowindSize, useComponentDefaultProps } from '@/styles';
import { Input, InputSharedProps, InputWrapperBaseProps } from '../input';
import { TextInputStylesNames } from '../text-input/text-input';
import useStyles from './textarea.styles';

export interface TextareaProps
  extends DefaultProps<TextInputStylesNames>,
    InputWrapperBaseProps,
    InputSharedProps,
    Omit<React.ComponentPropsWithoutRef<'textarea'>, 'prefix'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** If true textarea will grow with content until maxRows are reached  */
  autosize?: boolean;

  /** Defines maxRows in autosize variant, not applicable to regular variant */
  maxRows?: number;

  /** Defined minRows in autosize variant and rows in regular variant */
  minRows?: number;

  /** Props passed to root element */
  wrapperProps?: Record<string, any>;

  /** Input size */
  size?: FlowindSize;

  /** Static selectors base */
  __staticSelector?: string;
}

const defaultProps: Partial<TextareaProps> = {
  autosize: false,
  size: 'sm',
  __staticSelector: 'Textarea',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    autosize,
    maxRows,
    minRows,
    label,
    error,
    description,
    id,
    className,
    required,
    style,
    wrapperProps,
    classNames,
    styles,
    size,
    __staticSelector,
    errorProps,
    descriptionProps,
    labelProps,
    inputWrapperOrder,
    inputContainer,
    unstyled,
    withAsterisk,
    variant,
    ...others
  } = useComponentDefaultProps('Textarea', defaultProps, props);

  const uuid = useId(id);
  const { classes, cx } = useStyles({});
  const sharedProps = {
    required,
    ref,
    error,
    id: uuid,
    classNames: { ...classNames, input: cx(classes.input, classNames?.input) },
    styles,
    __staticSelector,
    size,
    multiline: true,
    unstyled,
    variant,
    ...others,
  };

  return (
    <Input.Wrapper
      label={label}
      error={error}
      id={uuid}
      description={description}
      required={required}
      style={style}
      className={className}
      classNames={classNames}
      styles={styles}
      size={size}
      __staticSelector={__staticSelector}
      errorProps={errorProps}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      inputContainer={inputContainer}
      inputWrapperOrder={inputWrapperOrder}
      unstyled={unstyled}
      withAsterisk={withAsterisk}
      variant={variant}
      {...wrapperProps}
    >
      {autosize ? (
        <Input<typeof TextareaAutosize>
          {...sharedProps}
          component={TextareaAutosize}
          maxRows={maxRows}
          minRows={minRows}
        />
      ) : (
        <Input<'textarea'> {...sharedProps} component="textarea" rows={minRows} />
      )}
    </Input.Wrapper>
  );
});

Textarea.displayName = 'Textarea';
