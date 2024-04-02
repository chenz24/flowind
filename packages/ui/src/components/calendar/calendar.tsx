'use client';

import * as React from 'react';
import {
  DayPicker,
  useDayRender,
  type DayPickerRangeProps,
  type DayPickerSingleProps,
  type DayProps,
} from 'react-day-picker';

import { TriangleLeftMini, TriangleRightMini } from '@flowind/icons';
import { clx, cva } from '@/styles';

// import { iconButtonVariants } from '../icon-button';

type OmitKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type KeysToOmit = 'showWeekNumber' | 'captionLayout' | 'mode';

type SingleProps = OmitKeys<DayPickerSingleProps, KeysToOmit>;
type RangeProps = OmitKeys<DayPickerRangeProps, KeysToOmit>;

/**
 * @interface
 */
type CalendarProps =
  | ({
      mode: 'single';
    } & SingleProps)
  | ({
      mode?: undefined;
    } & SingleProps)
  | ({
      mode: 'range';
    } & RangeProps);

const iconButtonVariants = cva({
  base: clx(
    'transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none',
    'disabled:bg-ui-bg-disabled disabled:shadow-buttons-neutral disabled:text-ui-fg-disabled disabled:after:hidden',
  ),
  variants: {
    variant: {
      primary: clx(
        'shadow-buttons-neutral text-ui-fg-subtle bg-ui-button-neutral after:button-neutral-gradient',
        'hover:bg-ui-button-neutral-hover hover:after:button-neutral-hover-gradient',
        'active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient',
        'focus-visible:shadow-buttons-neutral-focus',
        "after:absolute after:inset-0 after:content-['']",
      ),
      transparent: clx(
        'text-ui-fg-subtle bg-ui-button-transparent',
        'hover:bg-ui-button-transparent-hover',
        'active:bg-ui-button-transparent-pressed',
        'focus-visible:shadow-buttons-neutral-focus focus-visible:bg-ui-bg-base',
        'disabled:!bg-transparent disabled:!shadow-none',
      ),
    },
    size: {
      '2xsmall': 'h-5 w-5',
      xsmall: 'h-6 w-6 p-1',
      small: 'h-7 w-7 p-1',
      base: 'h-8 w-8 p-1.5',
      large: 'h-10 w-10 p-2.5',
      xlarge: 'h-12 w-12 p-3.5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'base',
  },
});
/**
 * This component is based on the [react-date-picker](https://www.npmjs.com/package/react-date-picker) package.
 *
 * @excludeExternal
 */
const Calendar = ({
  /**
   * @ignore
   */
  className,
  /**
   * @ignore
   */
  classNames,
  /**
   * The calendar's mode.
   */
  mode = 'single',
  /**
   * Whether to show days of previous and next months.
   *
   * @keep
   */
  showOutsideDays = true,
  /**
   * The locale to use for formatting dates. To change the locale pass a date-fns locale object.
   *
   * @keep
   */
  locale,
  ...props
}: CalendarProps) => (
  <DayPicker
    mode={mode}
    showOutsideDays={showOutsideDays}
    className={clx(className)}
    classNames={{
      months: 'flex flex-col sm:flex-row',
      month: 'space-y-2 p-3',
      caption: 'flex justify-center relative items-center h-8',
      caption_label:
        'txt-compact-small-plus absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-ui-fg-base',
      nav: 'space-x-1 flex items-center bg-ui-bg-base-pressed rounded-md w-full h-full justify-between p-0.5',
      nav_button: clx(iconButtonVariants({ variant: 'transparent', size: 'small' })),
      nav_button_previous: '!absolute left-0.5',
      nav_button_next: '!absolute right-0.5',
      table: 'w-full border-collapse space-y-1',
      head_row: 'flex w-full gap-x-2',
      head_cell: clx(
        'txt-compact-small-plus text-ui-fg-muted m-0 box-border flex h-8 w-8 items-center justify-center p-0',
      ),
      row: 'flex w-full mt-2 gap-x-2',
      cell: 'txt-compact-small-plus relative rounded-md p-0 text-center focus-within:relative',
      day: 'txt-compact-small-plus text-ui-fg-base bg-ui-bg-base hover:bg-ui-bg-base-hover focus-visible:shadow-borders-interactive-with-focus h-8 w-8 rounded-md p-0 text-center outline-none transition-all',
      day_selected:
        'bg-ui-bg-interactive text-ui-fg-on-color hover:bg-ui-bg-interactive focus-visible:bg-ui-bg-interactive',
      day_outside: 'text-ui-fg-disabled aria-selected:text-ui-fg-on-color',
      day_disabled: 'text-ui-fg-disabled',
      day_range_middle: 'aria-selected:!bg-ui-bg-highlight aria-selected:!text-ui-fg-interactive',
      day_hidden: 'invisible',
      ...classNames,
    }}
    locale={locale}
    components={{
      IconLeft: () => <TriangleLeftMini />,
      IconRight: () => <TriangleRightMini />,
      Day,
    }}
    {...(props as SingleProps & RangeProps)}
  />
);
Calendar.displayName = 'Calendar';

const Day = ({ date, displayMonth }: DayProps) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { activeModifiers, buttonProps, divProps, isButton, isHidden } = useDayRender(
    date,
    displayMonth,
    ref,
  );

  const { selected, today, disabled, range_middle } = activeModifiers;

  React.useEffect(() => {
    if (selected) {
      ref.current?.focus();
    }
  }, [selected]);

  if (isHidden) {
    return <></>;
  }

  if (!isButton) {
    return (
      <div {...divProps} className={clx('flex items-center justify-center', divProps.className)} />
    );
  }

  const { children: buttonChildren, className: buttonClassName, ...buttonPropsRest } = buttonProps;

  return (
    <button
      ref={ref}
      {...buttonPropsRest}
      type="button"
      className={clx('relative', buttonClassName)}
    >
      {buttonChildren}
      {today && (
        <span
          className={clx('absolute right-[5px] top-[5px] h-1 w-1 rounded-full', {
            'bg-ui-fg-interactive': !selected,
            'bg-ui-fg-on-color': selected,
            '!bg-ui-fg-interactive': selected && range_middle,
            'bg-ui-fg-disabled': disabled,
          })}
        />
      )}
    </button>
  );
};

export { Calendar };
