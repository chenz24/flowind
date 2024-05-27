import React from 'react';

import { DefaultProps, FlowindColor, FlowindSize, Selectors } from '@/styles';
import type {
  DefaultActionProps,
  DefaultActionStylesNames,
} from '../default-action/default-action';
import type { SpotlightAction } from '../types';
import useStyles from './action-list.styles';

export type ActionsListStylesNames = Selectors<typeof useStyles> | DefaultActionStylesNames;
type GetGroupOptionsItem<T extends any[]> = { type: 'item'; item: T[number]; index: number };
type GetGroupOptionsLabel = { type: 'label'; label: string };

export interface ActionsListProps
  extends DefaultProps<ActionsListStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  actions: (GetGroupOptionsItem<SpotlightAction[]> | GetGroupOptionsLabel)[];
  actionComponent?: React.FC<DefaultActionProps>;
  hovered: number;
  query: string;
  nothingFoundMessage?: React.ReactNode;
  onActionTrigger: (action: SpotlightAction) => void;
  highlightQuery: boolean;
  highlightColor: FlowindColor;
  radius: FlowindSize;
  variant: string;
}

export function ActionsList({
  actions,
  styles,
  classNames,
  actionComponent: Action,
  hovered,
  onActionTrigger,
  query,
  nothingFoundMessage,
  highlightQuery,
  highlightColor,
  radius,
  variant,
  ...others
}: ActionsListProps) {
  const { classes } = useStyles(null, { name: 'Spotlight', classNames, styles, variant });

  const items = actions.map((item) => {
    if (item.type === 'item') {
      return (
        <Action
          query={query}
          key={item.item.id}
          action={item.item}
          hovered={item.index === hovered}
          classNames={classNames}
          styles={styles}
          radius={radius}
          onTrigger={() => onActionTrigger(item.item)}
          highlightQuery={highlightQuery}
          highlightColor={highlightColor}
        />
      );
    }

    return (
      <div className={classes.actionsGroup} color="dimmed" key={item.label}>
        {item.label}
      </div>
    );
  });

  const shouldRenderActions =
    items.length > 0 || (!!nothingFoundMessage && query.trim().length > 0);

  return (
    <>
      {shouldRenderActions && (
        <div className={classes.actions} {...others}>
          {items.length > 0 ? (
            items
          ) : (
            <div className={classes.nothingFound}>{nothingFoundMessage}</div>
          )}
        </div>
      )}
    </>
  );
}

ActionsList.displayName = 'ActionsList';
