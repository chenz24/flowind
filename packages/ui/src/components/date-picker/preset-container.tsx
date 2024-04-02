import React from 'react';

import { DateRange } from '@/types';
import { clx } from '@/utils/clx';

interface Preset {
  /**
   * The preset's label.
   */
  label: string;
}

export interface DatePreset extends Preset {
  /**
   * The preset's selected date.
   */
  date: Date;
}
export interface DateRangePreset extends Preset {
  /**
   * The preset's selected date range.
   */
  dateRange: DateRange;
}

type PresetContainerProps<TPreset extends Preset, TValue> = {
  presets: TPreset[] | TPreset[];
  onSelect: (value: TValue) => void;
  currentValue?: TValue;
};

export const PresetContainer = <TPreset extends Preset, TValue>({
  /**
   * Selectable preset configurations.
   */
  presets,
  /**
   * A function that handles the event when a preset is selected.
   */
  onSelect,
  /**
   * The currently selected preset.
   */
  currentValue,
}: PresetContainerProps<TPreset, TValue>) => {
  const isDateRangePresets = (preset: any): preset is DateRangePreset => 'dateRange' in preset;

  const isDatePresets = (preset: any): preset is DatePreset => 'date' in preset;

  const handleClick = (preset: TPreset) => {
    if (isDateRangePresets(preset)) {
      onSelect(preset.dateRange as TValue);
    } else if (isDatePresets(preset)) {
      onSelect(preset.date as TValue);
    }
  };

  const compareDates = (date1: Date, date2: Date) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  const compareRanges = (range1: DateRange, range2: DateRange) => {
    const from1 = range1.from;
    const from2 = range2.from;

    let equalFrom = false;

    if (from1 && from2) {
      const sameFrom = compareDates(from1, from2);

      if (sameFrom) {
        equalFrom = true;
      }
    }

    const to1 = range1.to;
    const to2 = range2.to;

    let equalTo = false;

    if (to1 && to2) {
      const sameTo = compareDates(to1, to2);

      if (sameTo) {
        equalTo = true;
      }
    }

    return equalFrom && equalTo;
  };

  const matchesCurrent = (preset: TPreset) => {
    if (isDateRangePresets(preset)) {
      const value = currentValue as DateRange | undefined;

      return value && compareRanges(value, preset.dateRange);
    }
    if (isDatePresets(preset)) {
      const value = currentValue as Date | undefined;

      return value && compareDates(value, preset.date);
    }

    return false;
  };

  return (
    <ul className="flex flex-col items-start">
      {presets.map((preset, index) => (
        <li key={index} className="w-full">
          <button
            className={clx(
              'txt-compact-small-plus w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-md p-2 text-left',
              'text-ui-fg-subtle hover:bg-ui-bg-base-hover outline-none transition-all',
              'focus-visible:bg-ui-bg-base-hover',
              {
                '!bg-ui-bg-base-pressed': matchesCurrent(preset),
              },
            )}
            onClick={() => handleClick(preset)}
            aria-label={`Select ${preset.label}`}
          >
            {preset.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

PresetContainer.displayName = 'DatePicker.PresetContainer';
