import { itRendersChildren, itSupportsSystemProps } from '@flowind/tests';
import { ButtonGroup, ButtonGroupProps } from './button-group';

const defaultProps: ButtonGroupProps = {};

describe('@flowind/core/ButtonGroup', () => {
  itRendersChildren(ButtonGroup, defaultProps);
  itSupportsSystemProps({
    component: ButtonGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@flowind/core/ButtonGroup',
    providerName: 'ButtonGroup',
  });
});
