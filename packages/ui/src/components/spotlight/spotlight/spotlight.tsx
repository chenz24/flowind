'use client';

import React, { useState } from 'react';

import { useDidUpdate } from '@flowind/hooks';
import { MagnifyingGlass } from '@flowind/icons';
import {
  DefaultProps,
  FlowindColor,
  getDefaultZIndex,
  Selectors,
  useComponentDefaultProps,
} from '@/styles';
import { getGroupedOptions } from '@/utils/group-options/group-options';
import { Modal, type ModalProps, type ModalStylesNames } from '../../modal';
import { ScrollArea, ScrollAreaAutosizeProps } from '../../scroll-area';
import { TextInput, type TextInputProps } from '../../text-input';
import { ActionsList, ActionsListStylesNames } from '../action-list/action-list';
import { DefaultAction, DefaultActionProps } from '../default-action/default-action';
import { DefaultFooter } from '../default-footer/default-footer';
import type { SpotlightAction } from '../types';
import { filterActions } from './filter-actions/filter-actions';
import useStyles from './spotlight.styles';

function NotionFoundMessage() {
  return (
    <div className="min-h-12 flex justify-center items-center text-fg-subtle">Nothing found...</div>
  );
}

function SpotlightScrollArea(props: ScrollAreaAutosizeProps) {
  return (
    <ScrollArea.Autosize {...props} style={{ maxHeight: 'calc(100vh - 18rem)', ...props.style }} />
  );
}

export type SpotlightStylesNames =
  | Selectors<typeof useStyles>
  | Exclude<ModalStylesNames, 'close' | 'header' | 'title'>
  | ActionsListStylesNames;

export interface InnerSpotlightProps
  extends Omit<
      ModalProps,
      'styles' | 'classNames' | 'title' | 'withCloseButton' | 'opened' | 'onClose'
    >,
    DefaultProps<SpotlightStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Search input placeholder */
  searchPlaceholder?: string;

  /** Search input icon */
  searchIcon?: React.ReactNode;

  /** Function used to determine how actions will be filtered based on user input */
  filter?: (query: string, actions: SpotlightAction[]) => SpotlightAction[];

  /** Message displayed when actions were not found */
  nothingFoundMessage?: React.ReactNode;

  /** Number of actions displayed at a time */
  limit?: number;

  /** Should spotlight be closed when action is triggered */
  closeOnActionTrigger?: boolean;

  /** Component that is used to render actions */
  actionComponent?: React.FC<DefaultActionProps>;

  /** Component that is used to wrap actions list */
  actionsWrapperComponent?:
    | React.FC<{ children: React.ReactNode; footer?: React.ReactNode }>
    | string;

  /** Should user query be highlighted in actions title */
  highlightQuery?: boolean;

  /** The highlight color */
  highlightColor?: FlowindColor;

  /** Props spread to search input */
  searchInputProps?: TextInputProps;

  /** Component used as scrollable container for actions list, defaults to ScrollArea.Autosize */
  scrollAreaComponent?: React.FC<{ children: React.ReactNode }>;

  // footer?: React.ReactNode;
}

interface SpotlightProps extends InnerSpotlightProps {
  actions: SpotlightAction[];
  onClose: () => void;
  opened: boolean;
  query: string;
  onQueryChange: (query: string) => void;
}

const defaultProps: Partial<SpotlightProps> = {
  closeOnActionTrigger: true,
  highlightQuery: false,
  width: 600,
  yOffset: 120,
  filter: filterActions,
  limit: 10,
  actionComponent: DefaultAction,
  scrollAreaComponent: SpotlightScrollArea,
  actionsWrapperComponent: 'div',
  zIndex: getDefaultZIndex('max'),
  overlayProps: { opacity: 0.2, blur: 7 },
  searchIcon: <MagnifyingGlass className="text-fg-subtle" />,
  nothingFoundMessage: <NotionFoundMessage />,
};

export function Spotlight(props: SpotlightProps) {
  const {
    query,
    onQueryChange,
    actions,
    onClose,
    opened,
    classNames,
    styles,
    closeOnActionTrigger,
    highlightQuery,
    highlightColor,
    className,
    searchPlaceholder,
    searchIcon,
    filter,
    nothingFoundMessage,
    limit,
    actionComponent,
    actionsWrapperComponent: ActionsWrapper,
    scrollAreaComponent: ScrollAreaComponent,
    searchInputProps,
    variant,
    radius,
    footer,
    ...others
  } = useComponentDefaultProps('Spotlight', defaultProps, props);

  const [hovered, setHovered] = useState(-1);
  const [IMEOpen, setIMEOpen] = useState(false);
  const { classes, cx } = useStyles(null, { name: 'Spotlight', classNames, styles, variant });

  const resetHovered = () => setHovered(-1);
  const handleClose = () => {
    resetHovered();
    onClose();
  };

  const filteredActions = filter(query, actions).slice(0, limit);
  const groupedWithLabels = getGroupedOptions(filteredActions).items;
  const groupedActions = groupedWithLabels
    .map((item) => (item.type === 'item' ? item.item : undefined))
    .filter((item) => item);

  useDidUpdate(() => {
    if (groupedActions.length - 1 < hovered) {
      setHovered(groupedActions.length - 1);
    }
  }, [groupedActions.length]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (IMEOpen) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        setHovered((current) => (current < groupedActions.length - 1 ? current + 1 : 0));
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();
        setHovered((current) => (current > 0 ? current - 1 : groupedActions.length - 1));
        break;
      }

      case 'Enter': {
        event.preventDefault();
        const action = groupedActions[hovered];
        action?.onTrigger?.(action);
        if ((action?.closeOnTrigger ?? closeOnActionTrigger) && action?.onTrigger) {
          handleClose();
        }
        break;
      }

      case 'Escape': {
        event.preventDefault();
        handleClose();
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.currentTarget.value);
    if (hovered === -1) {
      setHovered(0);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      padding={0}
      radius={radius}
      scrollAreaComponent={Modal.NativeScrollArea}
      className={className}
      classNames={{
        ...classNames,
        content: cx(classes.content, classNames?.content),
        footer: cx(classes.footer, classNames?.footer),
      }}
      styles={styles}
      withCloseButton={false}
      footer={footer || <DefaultFooter />}
      {...others}
    >
      <TextInput
        {...searchInputProps}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onCompositionStart={() => setIMEOpen(true)}
        onCompositionEnd={() => setIMEOpen(false)}
        classNames={{
          input: classes.searchInput,
          wrapper: classes.inputWrapper,
          root: classes.inputRoot,
        }}
        placeholder={searchPlaceholder}
        prefix={searchIcon}
      />
      <ActionsWrapper>
        <ScrollAreaComponent>
          <ActionsList
            highlightQuery={highlightQuery}
            highlightColor={highlightColor}
            actions={groupedWithLabels}
            actionComponent={actionComponent}
            hovered={hovered}
            query={query}
            nothingFoundMessage={nothingFoundMessage}
            onActionTrigger={(action) => {
              action.onTrigger(action);
              (action.closeOnTrigger ?? closeOnActionTrigger) && handleClose();
            }}
            styles={styles}
            classNames={classNames}
            radius={radius}
            variant={variant}
          />
        </ScrollAreaComponent>
      </ActionsWrapper>
    </Modal>
  );
}

Spotlight.displayName = 'Spotlight';
