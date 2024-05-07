import { createContext, useContext } from 'react';

import { FlowindSize } from '@/styles';

interface RadioGroupContextValue {
  size: FlowindSize;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const RadioGroupContext = createContext<RadioGroupContextValue>(null);
export const RadioGroupProvider = RadioGroupContext.Provider;
export const useRadioGroupContext = () => useContext(RadioGroupContext);
