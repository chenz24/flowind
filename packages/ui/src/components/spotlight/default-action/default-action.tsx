import React from 'react';

import { DefaultProps, FlowindColor, FlowindSize, Selectors } from '@/styles';
import { Highlight } from '../../highlight';
import { Stack } from '../../stack';
import { UnstyledButton } from '../../unstyled-button';
import type { SpotlightAction } from '../types';
import useStyles from './default-action.styles';

export type DefaultActionStylesNames = Selectors<typeof useStyles>;

export interface DefaultActionProps
  extends DefaultProps<DefaultActionStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  action: SpotlightAction;
  hovered: boolean;
  onTrigger: () => void;
  highlightQuery: boolean;
  highlightColor: FlowindColor;
  query: string;
  radius: FlowindSize;
}

export function DefaultAction({
  action,
  styles,
  classNames,
  hovered,
  onTrigger,
  highlightQuery,
  highlightColor,
  query,
  radius,
  ...others
}: DefaultActionProps) {
  const { classes } = useStyles({ radius }, { styles, classNames, name: 'Spotlight' });

  return (
    <UnstyledButton
      className={classes.action}
      data-hovered={hovered || undefined}
      tabIndex={-1}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onTrigger}
      {...others}
    >
      <Stack noWrap>
        {action.icon && (
          <div className={classes.actionIcon} data-hovered={hovered || undefined}>
            {action.icon}
          </div>
        )}

        <div className={classes.actionBody}>
          <Highlight
            highlightColor={highlightColor}
            className={classes.actionHighlight}
            highlight={highlightQuery ? query : null}
          >
            {action.title}
          </Highlight>

          {action.description && (
            <div className={classes.actionDescription} data-hovered={hovered || undefined}>
              {action.description}
            </div>
          )}
        </div>
      </Stack>
    </UnstyledButton>
  );
}

DefaultAction.displayName = 'DefaultAction';
