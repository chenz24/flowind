import { createContext, useContext } from 'react';

import { FlowindSize } from '@/styles';

interface CheckboxGroupContextValue {
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size: FlowindSize;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue>(null);
export const CheckboxGroupProvider = CheckboxGroupContext.Provider;
export const useCheckboxGroupContext = () => useContext(CheckboxGroupContext);
