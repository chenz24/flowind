import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
} from '@flowind/tests';
import { DefaultItem, SelectItemProps } from './default-Item';

const defaultProps: SelectItemProps = {
  label: 'test',
};

describe('@flowind/core/Autocomplete/DefaultItem', () => {
  itSupportsClassName(DefaultItem, defaultProps);
  itSupportsOthers(DefaultItem, defaultProps);
  itSupportsStyle(DefaultItem, defaultProps);
  itSupportsRef(DefaultItem, defaultProps, HTMLDivElement);

  it('renders given label', () => {
    render(<DefaultItem {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('renders value as children if label was not provided', () => {
    render(<DefaultItem {...defaultProps} value="test-value" label={null} />);
    expect(screen.getByText('test-value')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(DefaultItem.displayName).toStrictEqual('@flowind/core/DefaultItem');
  });
});
