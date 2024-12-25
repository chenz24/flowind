import React from 'react';

import { ClassNames, DefaultProps, rem, Selectors, Styles } from '@/styles';
import { Box } from '../../box';
import { Popover } from '../../popover';
import { PortalProps } from '../../portal';
import { SelectScrollArea } from '../select-scroll-area/select-scroll-area';
import useStyles from './select-popover.styles';

export type SelectPopoverStylesNames = Selectors<typeof useStyles>;

interface SelectPopoverDropdownProps extends DefaultProps<SelectPopoverStylesNames> {
  children: React.ReactNode;
  id: string;
  component?: any;
  maxHeight?: number | string;
  direction?: React.CSSProperties['flexDirection'];
  innerRef?: React.MutableRefObject<HTMLDivElement>;
  __staticSelector?: string;
}

function SelectPopoverDropdown({
  children,
  component = 'div',
  maxHeight = 220,
  direction = 'column',
  id,
  innerRef,
  __staticSelector,
  styles,
  classNames,
  unstyled,
  ...others
}: SelectPopoverDropdownProps) {
  const { classes } = useStyles(null, { name: __staticSelector, styles, classNames, unstyled });

  return (
    <Popover.Content
      style={{ padding: 0, width: 'var(--radix-popover-trigger-width)', zIndex: 999 }}
      onMouseDown={(event) => event.preventDefault()}
      onOpenAutoFocus={(event) => event.preventDefault()}
      {...others}
    >
      <div style={{ maxHeight: rem(maxHeight), display: 'flex' }}>
        <Box<'div'>
          component={(component || 'div') as any}
          id={`${id}-items`}
          aria-labelledby={`${id}-label`}
          role="listbox"
          onMouseDown={(event) => event.preventDefault()}
          style={{ flex: 1, overflowY: component !== SelectScrollArea ? 'auto' : undefined }}
          data-combobox-popover
          tabIndex={-1}
          ref={innerRef}
        >
          <div className={classes.itemsWrapper} style={{ flexDirection: direction }}>
            {children}
          </div>
        </Box>
      </div>
    </Popover.Content>
  );
}

interface SelectPopoverProps {
  opened: boolean;
  withinPortal?: boolean;
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;
  children: React.ReactNode;
  __staticSelector?: string;
  onDirectionChange?: (direction: React.CSSProperties['flexDirection']) => void;
  switchDirectionOnFlip?: boolean;
  zIndex?: React.CSSProperties['zIndex'];
  dropdownPosition?: 'bottom' | 'top' | 'left' | 'right';
  positionDependencies?: any[];
  classNames?: ClassNames<SelectPopoverStylesNames>;
  styles?: Styles<SelectPopoverStylesNames>;
  unstyled?: boolean;
  readOnly?: boolean;
  variant: string;
}

export function SelectPopover({
  opened,
  children,
  __staticSelector,
  readOnly,
}: SelectPopoverProps) {
  return <Popover open={opened && !readOnly}>{children}</Popover>;
}

SelectPopover.Target = Popover.Trigger;
SelectPopover.Dropdown = SelectPopoverDropdown;
