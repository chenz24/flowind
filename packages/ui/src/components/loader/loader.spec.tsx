import React from 'react';
import { render } from '@testing-library/react';

import { DEFAULT_THEME } from '@flowind/styles';
import { itSupportsSystemProps } from '@flowind/tests';
import { Loader, LoaderProps } from './loader';

const defaultProps: LoaderProps = {};

describe('@flowind/core/Loader', () => {
  itSupportsSystemProps({
    component: Loader,
    props: defaultProps,
    displayName: '@flowind/core/Loader',
    providerName: 'Loader',
  });

  it('sets svg width based on size prop', () => {
    const { container } = render(<Loader size="5rem" variant="bars" />);
    expect(container.querySelector('svg').style.getPropertyValue('width')).toBe('5rem');
  });

  it('sets svg fill based on color prop', () => {
    const { container } = render(<Loader color="yellow" variant="bars" />);
    expect(container.querySelector('svg')).toHaveAttribute('fill', DEFAULT_THEME.colors.yellow[6]);
  });
});
