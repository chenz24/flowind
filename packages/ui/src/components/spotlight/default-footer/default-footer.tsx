import React, { forwardRef } from 'react';

import { DefaultProps, Selectors } from '@/styles';
import { Kbd } from '../../kbd';
import useStyles from './default-footer.styles';

export type DefaultFooterStylesNames = Selectors<typeof useStyles>;
export interface DefaultWrapperProps
  extends DefaultProps<DefaultFooterStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {}

export const DefaultFooter = forwardRef<HTMLDivElement, DefaultWrapperProps>((props, ref) => {
  const { children, className, classNames, style, styles } = props;

  const { classes, cx } = useStyles(null, { name: 'DefaultWrapper', classNames, styles });

  return (
    <div ref={ref} className={cx(classes.footerRoot, className)}>
      <div>
        <Kbd className="mr-0.5">esc</Kbd>关闭
      </div>
      <div>
        <Kbd className="mr-0.5">↑</Kbd>
        <Kbd className="mr-0.5">↓</Kbd>导航
        <Kbd className="ml-4 mr-0.5">↵</Kbd>进入
      </div>
    </div>
  );
});

DefaultFooter.displayName = 'DefaultWrapper';
