import { createContext, useContext } from 'react';

import { FlowindSize } from '@/styles';

interface SwitchGroupContextValue {
  value: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size: FlowindSize;
}

const SwitchGroupContext = createContext<SwitchGroupContextValue>(null);
export const SwitchGroupProvider = SwitchGroupContext.Provider;
export const useSwitchGroupContext = () => useContext(SwitchGroupContext);
