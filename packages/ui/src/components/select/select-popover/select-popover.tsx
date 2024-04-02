import React from 'react';

import { ClassNames, DefaultProps, FlowindSize, rem, Selectors, Styles } from '@/styles';
import { Box } from '../../box';
import { Popover } from '../../popover';
import { PortalProps } from '../../portal';
import { TransitionOverride } from '../../transition';
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
    <Popover.Dropdown
      style={{ padding: 0 }}
      onMouseDown={(event) => event.preventDefault()}
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
    </Popover.Dropdown>
  );
}

interface SelectPopoverProps {
  opened: boolean;
  transitionProps: TransitionOverride;
  shadow?: FlowindSize;
  withinPortal?: boolean;
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;
  children: React.ReactNode;
  __staticSelector?: string;
  onDirectionChange?: (direction: React.CSSProperties['flexDirection']) => void;
  switchDirectionOnFlip?: boolean;
  zIndex?: React.CSSProperties['zIndex'];
  dropdownPosition?: 'bottom' | 'top' | 'flip';
  positionDependencies?: any[];
  classNames?: ClassNames<SelectPopoverStylesNames>;
  styles?: Styles<SelectPopoverStylesNames>;
  unstyled?: boolean;
  readOnly?: boolean;
  variant: string;
}

export function SelectPopover({
  opened,
  transitionProps = { transition: 'fade', duration: 0 },
  shadow,
  withinPortal,
  portalProps,
  children,
  __staticSelector,
  onDirectionChange,
  switchDirectionOnFlip,
  zIndex,
  dropdownPosition,
  positionDependencies = [],
  classNames,
  styles,
  unstyled,
  readOnly,
  variant,
}: SelectPopoverProps) {
  return (
    <Popover
      unstyled={unstyled}
      classNames={classNames}
      styles={styles}
      width="target"
      withRoles={false}
      opened={opened}
      middlewares={{ flip: dropdownPosition === 'flip', shift: false }}
      position={dropdownPosition === 'flip' ? 'bottom' : dropdownPosition}
      positionDependencies={positionDependencies}
      zIndex={zIndex}
      __staticSelector={__staticSelector}
      withinPortal={withinPortal}
      portalProps={portalProps}
      transitionProps={transitionProps}
      shadow={shadow}
      disabled={readOnly}
      onPositionChange={(nextPosition) =>
        switchDirectionOnFlip &&
        onDirectionChange?.(nextPosition === 'top' ? 'column-reverse' : 'column')
      }
      variant={variant}
    >
      {children}
    </Popover>
  );
}

SelectPopover.Target = Popover.Target;
SelectPopover.Dropdown = SelectPopoverDropdown;
