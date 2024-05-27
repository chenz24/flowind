export { useSpotlight } from './spotlight.context';
export { SpotlightProvider } from './spotlight-provider';
export {
  openSpotlight,
  closeSpotlight,
  toggleSpotlight,
  triggerSpotlightAction,
  registerSpotlightActions,
  removeSpotlightActions,
  spotlight,
} from './events';

export type { SpotlightAction } from './types';
export type { SpotlightProviderProps } from './spotlight-provider';
export type { DefaultActionProps as SpotlightActionProps } from './default-action/default-action';
export type { SpotlightStylesNames } from './spotlight/spotlight';
