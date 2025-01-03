'use client';

import React, { forwardRef, useRef, useState } from 'react';

import { useDidUpdate, useMergedRef, useUncontrolled } from '@flowind/hooks';
import { DefaultProps, getDefaultZIndex } from '@/styles';
import { groupOptions } from '@/utils/group-options/group-options';
import { Input, InputSharedProps, InputWrapperBaseProps, useInputProps } from '../input';
import { SelectStylesNames } from '../select';
import { DefaultItem } from '../select/default-Item/default-Item';
import { SelectSharedProps } from '../select/select';
import { SelectItems } from '../select/select-items/select-items';
import { SelectPopover } from '../select/select-popover/select-popover';
import { SelectScrollArea } from '../select/select-scroll-area/select-scroll-area';
import useStyles from './autocomplete.styles';
import { filterData } from './filter-data/filter-data';

export type AutocompleteStylesNames = SelectStylesNames;

export interface AutocompleteItem {
  value: string;
  [key: string]: any;
}

export interface AutocompleteProps
  extends DefaultProps<AutocompleteStylesNames>,
    InputSharedProps,
    InputWrapperBaseProps,
    SelectSharedProps<AutocompleteItem, string>,
    Omit<
      React.ComponentPropsWithoutRef<'input'>,
      'size' | 'onChange' | 'value' | 'defaultValue' | 'prefix'
    > {
  /** Maximum dropdown height */
  maxDropdownHeight?: number | string;

  /** Change dropdown component, can be used to add native scrollbars */
  dropdownComponent?: any;

  /** Called when item from dropdown was selected */
  onItemSubmit?: (item: AutocompleteItem) => void;

  /** Hovers the first result when input changes */
  hoverOnSearchChange?: boolean;
}

export function defaultFilter(value: string, item: AutocompleteItem) {
  return item.value.toLowerCase().trim().includes(value.toLowerCase().trim());
}

const defaultProps: Partial<AutocompleteProps> = {
  required: false,
  size: 'md',
  limit: 5,
  itemComponent: DefaultItem,
  initiallyOpened: false,
  filter: defaultFilter,
  zIndex: getDefaultZIndex('popover'),
  dropdownPosition: 'bottom',
  maxDropdownHeight: 'auto',
};

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>((props, ref) => {
  const {
    inputProps,
    wrapperProps,
    // shadow,
    data,
    limit,
    value,
    defaultValue,
    onChange,
    unstyled,
    itemComponent,
    onItemSubmit,
    onKeyDown,
    onFocus,
    onBlur,
    onClick,
    initiallyOpened,
    classNames,
    styles,
    filter,
    nothingFound,
    onDropdownClose,
    onDropdownOpen,
    zIndex,
    dropdownPosition,
    maxDropdownHeight,
    dropdownComponent,
    readOnly,
    hoverOnSearchChange,
    ...others
  } = useInputProps('Autocomplete', defaultProps, props);
  const { classes } = useStyles(null, { classNames, styles, name: 'Autocomplete', unstyled });
  const [dropdownOpened, _setDropdownOpened] = useState(initiallyOpened);
  const [hovered, setHovered] = useState(-1);
  // const [direction, setDirection] = useState<React.CSSProperties['flexDirection']>('column');
  const inputRef = useRef<HTMLInputElement>(null);
  const [IMEOpen, setIMEOpen] = useState(false);
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  });

  const setDropdownOpened = (opened: boolean) => {
    _setDropdownOpened(opened);
    const handler = opened ? onDropdownOpen : onDropdownClose;
    typeof handler === 'function' && handler();
  };

  useDidUpdate(() => {
    if (hoverOnSearchChange && _value) {
      setHovered(0);
    } else {
      setHovered(-1);
    }
  }, [_value, hoverOnSearchChange]);

  const handleItemClick = (item: AutocompleteItem) => {
    handleChange(item.value);
    typeof onItemSubmit === 'function' && onItemSubmit(item);
    setDropdownOpened(false);
  };

  const formattedData = data.map((item) => (typeof item === 'string' ? { value: item } : item));
  const filteredData = groupOptions({
    data: filterData({ data: formattedData, value: _value, limit, filter }),
  });

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (IMEOpen) {
      return;
    }

    typeof onKeyDown === 'function' && onKeyDown(event);

    // const isColumn = direction === 'column';

    const isColumn = true;

    const handleNext = () => {
      setHovered((current) => (current < filteredData.length - 1 ? current + 1 : current));
    };

    const handlePrevious = () => {
      setHovered((current) => (current > 0 ? current - 1 : current));
    };

    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();
        isColumn ? handlePrevious() : handleNext();
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        isColumn ? handleNext() : handlePrevious();
        break;
      }

      case 'Enter': {
        if (filteredData[hovered] && dropdownOpened) {
          event.preventDefault();
          handleChange(filteredData[hovered].value);
          typeof onItemSubmit === 'function' && onItemSubmit(filteredData[hovered]);
          setDropdownOpened(false);
        }
        break;
      }

      case 'Escape': {
        if (dropdownOpened) {
          event.preventDefault();
          setDropdownOpened(false);
        }
      }
    }
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onFocus === 'function' && onFocus(event);
    setDropdownOpened(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    typeof onBlur === 'function' && onBlur(event);
    setDropdownOpened(false);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    typeof onClick === 'function' && onClick(event);
    setDropdownOpened(true);
  };

  const shouldRenderDropdown =
    dropdownOpened && (filteredData.length > 0 || (filteredData.length === 0 && !!nothingFound));

  return (
    <Input.Wrapper {...wrapperProps} __staticSelector="Autocomplete">
      <SelectPopover
        opened={shouldRenderDropdown}
        __staticSelector="Autocomplete"
        zIndex={zIndex}
        dropdownPosition={dropdownPosition}
        readOnly={readOnly}
      >
        <SelectPopover.Target asChild>
          <div
            className={classes.wrapper}
            aria-controls={inputProps.id}
            onMouseLeave={() => setHovered(-1)}
            tabIndex={-1}
          >
            <Input<'input'>
              type="search"
              autoComplete="off"
              {...inputProps}
              {...others}
              readOnly={readOnly}
              data-flowind-stop-propagation={dropdownOpened}
              ref={useMergedRef(ref, inputRef)}
              onKeyDown={handleInputKeydown}
              classNames={{ ...classNames, input: 'search-cancel:appearance-none' }}
              styles={styles}
              __staticSelector="Autocomplete"
              value={_value}
              onChange={(event) => {
                handleChange(event.currentTarget.value);
                setDropdownOpened(true);
              }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onClick={handleInputClick}
              onCompositionStart={() => setIMEOpen(true)}
              onCompositionEnd={() => setIMEOpen(false)}
              role="combobox"
              aria-haspopup="listbox"
              aria-owns={shouldRenderDropdown ? `${inputProps.id}-items` : null}
              aria-expanded={shouldRenderDropdown}
              aria-autocomplete="list"
              aria-controls={shouldRenderDropdown ? `${inputProps.id}-items` : null}
              aria-activedescendant={hovered >= 0 ? `${inputProps.id}-${hovered}` : null}
            />
          </div>
        </SelectPopover.Target>

        <SelectPopover.Dropdown
          component={dropdownComponent || SelectScrollArea}
          maxHeight={maxDropdownHeight}
          id={inputProps.id}
          __staticSelector="Autocomplete"
          classNames={classNames}
          styles={styles}
        >
          <SelectItems
            data={filteredData}
            hovered={hovered}
            classNames={classNames}
            styles={styles}
            uuid={inputProps.id}
            __staticSelector="Autocomplete"
            onItemHover={setHovered}
            onItemSelect={handleItemClick}
            itemComponent={itemComponent}
            size={inputProps.size}
            nothingFound={nothingFound}
            variant={inputProps.variant}
          />
        </SelectPopover.Dropdown>
      </SelectPopover>
    </Input.Wrapper>
  );
});

Autocomplete.displayName = 'Autocomplete';
